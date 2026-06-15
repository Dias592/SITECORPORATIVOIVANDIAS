import Link from 'next/link';
import { services } from '@/lib/services';
import { SITE } from '@/lib/site';

const REGIONS = [
  { label: 'São Paulo', href: '/retrato-corporativo' },
  { label: 'ABCD Paulista', href: '/retrato-corporativo-abc' },
  { label: 'Santo André', href: '/retrato-corporativo-santo-andre' },
  { label: 'São Bernardo', href: '/fotos-linkedin-sao-bernardo' },
  { label: 'São Caetano do Sul', href: '/fotografo-eventos-sao-caetano' },
  { label: 'Osasco', href: '/fotografia-corporativa-osasco' },
  { label: 'Guarulhos', href: '/fotografo-empresas-guarulhos' },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan bg-bg pt-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4 md:px-12">
        <div>
          <Link href="/" className="font-heading text-2xl font-extrabold uppercase tracking-tight text-cyan">
            Ivan Dias
          </Link>
          <p className="mt-4 max-w-xs font-body text-sm text-text-muted">
            Fotógrafo corporativo em São Paulo, ABCD Paulista e Grande SP. Retratos
            executivos, fotos para LinkedIn e cobertura de eventos empresariais.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ivan Dias no Instagram"
              className="font-body text-sm text-text-muted transition-colors hover:text-cyan focus-visible-ring"
            >
              Instagram
            </a>
          </div>
        </div>

        <nav aria-label="Serviços">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan-muted">
            Serviços
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="font-body text-sm text-text-muted transition-colors hover:text-white focus-visible-ring"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/portfolio" className="font-body text-sm text-text-muted transition-colors hover:text-white focus-visible-ring">
                Portfólio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="font-body text-sm text-text-muted transition-colors hover:text-white focus-visible-ring">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Regiões atendidas">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan-muted">
            Regiões
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {REGIONS.map((region) => (
              <li key={region.href}>
                <Link
                  href={region.href}
                  className="font-body text-sm text-text-muted transition-colors hover:text-white focus-visible-ring"
                >
                  {region.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan-muted">
            Contato
          </h2>
          <ul className="mt-5 flex flex-col gap-3 font-body text-sm text-text-muted">
            <li>
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white focus-visible-ring">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white focus-visible-ring">
                {SITE.email}
              </a>
            </li>
            <li>São Paulo · SP · Brasil</li>
            <li>
              <Link href="/contato" className="font-semibold text-cyan transition-colors hover:text-cyan-light focus-visible-ring">
                Fale com Ivan Dias →
              </Link>
            </li>
          </ul>
        </address>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border-dark px-6 py-8 md:px-12">
        <p className="font-body text-xs text-text-muted">
          © {new Date().getFullYear()} Ivan Dias Fotógrafo Corporativo · São Paulo
        </p>
        <p className="mt-2 font-body text-xs text-text-muted/70">
          Fotógrafo corporativo SP · Retrato executivo · Fotos LinkedIn SP · Eventos corporativos ·
          ABCD Paulista · Santo André · São Bernardo · Guarulhos · Osasco · Grande São Paulo
        </p>
      </div>
    </footer>
  );
}
