"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
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
          className="w-full px-6 py-4 border-2 border-navy focus:outline-none focus:bg-soft-sage/10 transition-all pr-16 bg-white text-navy font-bold placeholder:text-navy/40"
        />
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="absolute right-2 top-2 bottom-2 w-12 h-12 flex items-center justify-center bg-yellow text-navy hover:bg-navy hover:text-yellow border-2 border-navy transition-colors disabled:opacity-50"
        >
          {status === "success" ? (
            <span className="text-green-600 font-bold">✓</span>
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
      {status === "success" && (
        <p className="text-sm text-green-600 mt-2 text-center">Thanks for subscribing!</p>
      )}
    </form>
  );
}
