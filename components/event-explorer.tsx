"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ChurchEvent, EventCategory } from "@/types/content";

export function EventExplorer({ events }: { events: ChurchEvent[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const [message, setMessage] = useState("");

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery = `${event.title} ${event.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "all" || event.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [events, query, category]);

  async function register(event: FormEvent<HTMLFormElement>, eventId: string) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    const response = await fetch("/api/events/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, eventId }),
    });

    setMessage(response.ok ? "Registration submitted." : "Registration failed.");
    event.currentTarget.reset();
  }

  return (
    <div className="space-y-4">
      <div className="glass-card grid gap-3 p-4 md:grid-cols-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="rounded-md border border-white/20 bg-transparent px-3 py-2"
          placeholder="Search events"
          aria-label="Search events"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as EventCategory | "all")}
          className="rounded-md border border-white/20 bg-[var(--surface)] px-3 py-2"
          aria-label="Filter events by category"
        >
          <option value="all">All categories</option>
          <option value="worship">Worship</option>
          <option value="community">Community</option>
          <option value="youth">Youth</option>
          <option value="prayer">Prayer</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.map((eventItem) => (
          <article key={eventItem.id} className="glass-card space-y-2 p-4">
            <h3 className="text-lg font-semibold">{eventItem.title}</h3>
            <p className="text-sm text-slate-200">{eventItem.description}</p>
            <p className="text-sm">
              {eventItem.date} • {eventItem.time} • {eventItem.location}
            </p>
            <form className="grid gap-2 md:grid-cols-3" onSubmit={(event) => register(event, eventItem.id)}>
              <input name="name" required placeholder="Full name" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
              <input name="email" type="email" required placeholder="Email" className="rounded-md border border-white/20 bg-transparent px-3 py-2" />
              <button className="rounded-md bg-cyan-500 px-4 py-2 font-medium text-black" type="submit">
                Register
              </button>
            </form>
          </article>
        ))}
      </div>
      {message ? <p className="text-sm text-cyan-300">{message}</p> : null}
    </div>
  );
}
