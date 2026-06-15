import Link from 'next/link';
import { services } from '@/lib/services';

export default function ServicesSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="eyebrow">O que eu faço</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
          Serviços de fotografia corporativa
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border-dark bg-bg-card p-8 transition-colors hover:border-cyan focus-visible-ring"
            >
              <div>
                <span className="font-heading text-sm text-cyan-muted">{service.number}</span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 font-body text-sm text-text-muted">{service.cardDescription}</p>
              </div>
              <span className="mt-6 font-body text-sm font-semibold uppercase tracking-wide text-cyan transition-colors group-hover:text-cyan-light">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
