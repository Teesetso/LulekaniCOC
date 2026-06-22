"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "Message sent." : "Please check your input and try again.");
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={onSubmit} className="glass-card grid gap-3 p-6 md:max-w-xl">
        <input name="name" required placeholder="Your name" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <input name="email" required type="email" placeholder="Email" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <textarea name="message" required minLength={5} rows={5} placeholder="Message" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <button className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-black" type="submit">
          Send Message
        </button>
        {status ? <p className="text-sm text-cyan-300">{status}</p> : null}
      </form>
    </section>
  );
}
