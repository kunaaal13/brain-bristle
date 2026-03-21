import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

type SubscribeRequestBody = {
  email?: string;
};

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX ?? apiKey?.split("-")[1];

  if (!apiKey || !audienceId || !serverPrefix) {
    return {
      ok: false as const,
      message:
        "Mailchimp is not configured. Set MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, and MAILCHIMP_SERVER_PREFIX.",
    };
  }

  return {
    ok: true as const,
    apiKey,
    audienceId,
    serverPrefix,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSubscriberHash(email: string) {
  return createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

function getBasicAuthHeader(apiKey: string) {
  const credentials = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return `Basic ${credentials}`;
}

async function addMemberTag({
  apiKey,
  serverPrefix,
  audienceId,
  subscriberHash,
  tag,
}: {
  apiKey: string;
  serverPrefix: string;
  audienceId: string;
  subscriberHash: string;
  tag: string;
}) {
  const tagResponse = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`,
    {
      method: "POST",
      headers: {
        Authorization: getBasicAuthHeader(apiKey),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: [{ name: tag, status: "active" }],
      }),
      cache: "no-store",
    },
  );

  if (!tagResponse.ok) {
    const data = await tagResponse.json().catch(() => null);
    const message =
      data && typeof data.detail === "string" ? data.detail : `Unable to apply Mailchimp tag "${tag}".`;

    throw new Error(message);
  }
}

export async function POST(request: NextRequest) {
  const config = getMailchimpConfig();

  if (!config.ok) {
    return NextResponse.json({ message: config.message }, { status: 500 });
  }

  let body: SubscribeRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ message: "Email is required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  const subscriberHash = getSubscriberHash(email);
  const url = `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members/${subscriberHash}`;

  try {
    const mailchimpResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: getBasicAuthHeader(config.apiKey),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        status: "subscribed",
      }),
      cache: "no-store",
    });

    const data = await mailchimpResponse.json().catch(() => null);

    if (!mailchimpResponse.ok) {
      const message = data && typeof data.detail === "string" ? data.detail : "Unable to subscribe email to Mailchimp.";

      return NextResponse.json({ message }, { status: mailchimpResponse.status });
    }

    await addMemberTag({
      apiKey: config.apiKey,
      serverPrefix: config.serverPrefix,
      audienceId: config.audienceId,
      subscriberHash,
      tag: "News letter",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ message: "Failed to reach Mailchimp." }, { status: 502 });
  }
}
