export default function MemberPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Member Portal</h1>
      <div className="glass-card grid gap-4 p-6 md:grid-cols-3">
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">My Groups</h2>
          <p className="text-sm text-slate-300">View and join discipleship groups.</p>
        </article>
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">Giving History</h2>
          <p className="text-sm text-slate-300">Track contributions and statements.</p>
        </article>
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">Serving Schedule</h2>
          <p className="text-sm text-slate-300">Check ministry roster updates.</p>
        </article>
      </div>
    </section>
  );
}
