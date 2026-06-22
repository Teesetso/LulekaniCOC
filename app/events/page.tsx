import { EventExplorer } from "@/components/event-explorer";
import { churchEvents } from "@/lib/data";

export default function EventsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Events</h1>
      <p className="text-slate-200">Browse, filter, and register for upcoming church events.</p>
      <EventExplorer events={churchEvents} />
      <article className="glass-card p-4">
        <h2 className="text-xl font-semibold">Calendar View</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {churchEvents.map((eventItem) => (
            <div key={eventItem.id} className="rounded-lg border border-white/20 p-3 text-sm">
              <p className="font-medium">{eventItem.date}</p>
              <p>{eventItem.title}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
