import { fetchCmsEntries } from "@/lib/cms";

export default async function AdminPage() {
  const cmsEvents = await fetchCmsEntries("event");

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="glass-card p-4">
          <h2 className="font-semibold">Content Management</h2>
          <p className="text-sm text-slate-300">Connected CMS entries: {cmsEvents.length}</p>
        </article>
        <article className="glass-card p-4">
          <h2 className="font-semibold">Event Management</h2>
          <p className="text-sm text-slate-300">Create and manage registrations.</p>
        </article>
        <article className="glass-card p-4">
          <h2 className="font-semibold">Analytics</h2>
          <p className="text-sm text-slate-300">Track engagement and growth metrics.</p>
        </article>
      </div>
    </section>
  );
}
