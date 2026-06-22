import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { churchEvents, serviceTimes } from "@/lib/data";

const highlights = [
  "Dark/Light adaptive design",
  "Live service streaming support",
  "Event registration and calendar",
  "Secure giving and prayer requests",
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="glass-card grid gap-6 p-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Welcome to Lulekani COC</p>
          <h1 className="text-4xl font-bold leading-tight">A modern digital church experience for 2026</h1>
          <p className="text-slate-200">
            Worship, connect, give, and grow through our unified church platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/events" className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-black">
              Explore Events
            </Link>
            <Link href="/services" className="rounded-md border border-white/30 px-4 py-2">
              Watch Service
            </Link>
          </div>
        </div>
        <Image
          src="/images/churchLogo.webp"
          alt="Lulekani Church logo"
          width={500}
          height={350}
          className="mx-auto rounded-xl object-cover"
          priority
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="glass-card p-5">
          <h2 className="text-xl font-semibold">Service Times</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceTimes.map((service) => (
              <li key={service.label} className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{service.label}</span>
                <span className="font-medium">{service.value}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card p-5">
          <h2 className="text-xl font-semibold">Platform Highlights</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="glass-card p-5">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {churchEvents.slice(0, 3).map((eventItem) => (
              <li key={eventItem.id}>
                <p className="font-medium">{eventItem.title}</p>
                <p className="text-slate-300">
                  {eventItem.date} • {eventItem.time}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <NewsletterForm />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Church",
            name: "Lulekani Church of Christ",
            url: "https://lulekanicoc.org",
          }),
        }}
      />
    </div>
  );
}
