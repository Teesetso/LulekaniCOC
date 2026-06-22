import { serviceTimes } from "@/lib/data";

export default function ServicesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Services & Streaming</h1>
      <div className="glass-card p-6">
        <ul className="space-y-3">
          {serviceTimes.map((service) => (
            <li key={service.label} className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>{service.label}</span>
              <span>{service.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="https://youtube.com/live"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-cyan-500 px-4 py-2 font-semibold text-black"
      >
        Join Live Stream
      </a>
    </section>
  );
}
