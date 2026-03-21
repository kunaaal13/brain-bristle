"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type NewsletterResponse = {
  message?: string;
  error?: string;
};

type NewsletterFormProps = {
  variant?: "light" | "dark";
};

export default function NewsletterForm({
  variant = "dark",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const isDark = variant === "dark";

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
      <label
        className={`mb-3 block text-xs font-semibold uppercase tracking-[0.24em] ${
          isDark ? "text-white/55" : "text-[var(--color-muted)]"
        }`}
      >
        Email address
      </label>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "submitting"}
          className={`w-full rounded-full px-5 py-4 pr-16 text-sm transition duration-200 focus:outline-none disabled:opacity-70 ${
            isDark
              ? "border border-white/14 bg-white/8 text-white placeholder:text-white/40 focus:border-[var(--color-accent-soft)] focus:bg-white/12"
              : "border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:bg-white"
          }`}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className={`absolute bottom-1.5 right-1.5 top-1.5 flex w-12 items-center justify-center rounded-full transition duration-200 disabled:opacity-50 ${
            isDark
              ? "bg-white text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]"
              : "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent)]"
          }`}
          aria-label="Subscribe to newsletter"
        >
          {status === "success" ? <span className="text-green-600 font-bold">✓</span> : <Send size={18} />}
        </button>
      </div>

      {status === "success" && (
        <p className={`mt-3 text-sm ${isDark ? "text-emerald-300" : "text-emerald-700"}`}>{message}</p>
      )}

      {status === "error" && (
        <p className={`mt-3 text-sm ${isDark ? "text-rose-300" : "text-rose-700"}`}>{message}</p>
      )}
    </form>
  );
}
