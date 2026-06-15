import Link from 'next/link';
import { regions } from '@/lib/regions';

export default function RegionalCoverageSection() {
  return (
    <section className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="eyebrow">Onde atendo</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
          Cobertura em São Paulo, ABCD e Grande SP
        </h2>
        <p className="mt-6 max-w-2xl font-body text-base text-text-muted">
          Atendimento presencial em São Paulo (capital), ABCD Paulista — Santo André, São
          Bernardo do Campo, São Caetano do Sul e Diadema — além de Guarulhos, Osasco e
          demais cidades da Grande São Paulo. O estúdio móvel pode ser montado diretamente
          na sua empresa.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="rounded-2xl border border-border-dark bg-bg-card p-6 transition-colors hover:border-cyan focus-visible-ring"
            >
              <h3 className="font-heading text-base font-bold text-white">{region.cityName}</h3>
              <p className="mt-2 font-body text-sm text-text-muted">{region.relatedServiceName}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
