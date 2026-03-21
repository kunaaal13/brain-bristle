"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type NewsletterResponse = {
  message?: string;
  error?: string;
};

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = (await response.json().catch(() => null)) as NewsletterResponse | null;

      if (!response.ok) {
        throw new Error(data?.message || data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data?.message || "Thanks for subscribing!");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "submitting"}
          className="w-full px-6 py-4 border-2 border-navy focus:outline-none focus:bg-soft-sage/10 transition-all pr-16 bg-white text-navy font-bold placeholder:text-navy/40 disabled:opacity-70"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="absolute right-2 top-2 bottom-2 w-12 h-12 flex items-center justify-center bg-yellow text-navy hover:bg-navy hover:text-yellow border-2 border-navy transition-colors disabled:opacity-50"
          aria-label="Subscribe to newsletter"
        >
          {status === "success" ? <span className="text-green-600 font-bold">✓</span> : <Send size={18} />}
        </button>
      </div>

      {status === "success" && <p className="text-sm text-green-600 mt-2 text-center">{message}</p>}

      {status === "error" && <p className="text-sm text-red-600 mt-2 text-center">{message}</p>}
    </form>
  );
}
