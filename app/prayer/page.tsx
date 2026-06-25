"use client";

import { FormEvent, useState } from "react";

export default function PrayerPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestText = String(formData.get("requestText") ?? "");

    const response = await fetch("/api/prayer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestText }),
    });

    setStatus(response.ok ? "Prayer request submitted anonymously." : "Please enter a valid request.");
    event.currentTarget.reset();
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Prayer Request Portal</h1>
      <form onSubmit={onSubmit} className="glass-card grid gap-3 p-6 md:max-w-xl">
        <textarea
          name="requestText"
          required
          minLength={5}
          rows={6}
          placeholder="Share your prayer request anonymously"
          className="rounded-md border border-white/20 bg-transparent px-3 py-2"
        />
        <button className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-black" type="submit">
          Submit Prayer Request
        </button>
        {status ? <p className="text-sm text-cyan-300">{status}</p> : null}
      </form>
    </section>
  );
}
