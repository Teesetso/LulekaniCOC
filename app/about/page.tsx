export default function AboutPage() {
  return (
    <section className="glass-card space-y-4 p-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        Our mission is to make disciples, serve our community, and glorify God through worship and practical love.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">Mission</h2>
          <p className="text-sm text-slate-200">Growing faith and transforming lives through Christ.</p>
        </article>
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">Vision</h2>
          <p className="text-sm text-slate-200">A thriving church impacting every generation.</p>
        </article>
        <article className="rounded-lg border border-white/20 p-4">
          <h2 className="font-semibold">Leadership</h2>
          <p className="text-sm text-slate-200">Pastoral and ministry teams serving with integrity.</p>
        </article>
      </div>
    </section>
  );
}
