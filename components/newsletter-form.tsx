"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setMessage(response.ok ? "Subscribed successfully." : "Subscription failed.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass-card flex flex-col gap-2 p-4">
      <label htmlFor="newsletter-email" className="text-sm font-medium">
        Newsletter Subscription
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          className="flex-1 rounded-md border border-white/20 bg-transparent px-3 py-2"
          placeholder="name@example.com"
        />
        <button className="rounded-md bg-cyan-500 px-4 py-2 font-medium text-black" type="submit">
          Subscribe
        </button>
      </div>
      {message ? <p className="text-xs text-cyan-300">{message}</p> : null}
    </form>
  );
}
