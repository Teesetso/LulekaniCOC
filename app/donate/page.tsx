"use client";

import { FormEvent, useState } from "react";

export default function DonatePage() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      amount: String(formData.get("amount") ?? "0"),
    };

    const response = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "Thank you for your generosity!" : "Unable to process donation.");
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Give Online</h1>
      <form onSubmit={onSubmit} className="glass-card grid gap-3 p-6 md:max-w-xl">
        <input name="name" required placeholder="Full name" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <input name="email" required type="email" placeholder="Email" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <input name="amount" required type="number" min="1" placeholder="Amount" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
        <button className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-black" type="submit">
          Donate Securely
        </button>
        {status ? <p className="text-sm text-cyan-300">{status}</p> : null}
      </form>
    </section>
  );
}
