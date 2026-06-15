import Link from 'next/link';
import PlaceholderPhoto from './PlaceholderPhoto';

const ITEMS = [
  {
    label: 'Retrato executivo individual - São Paulo - Ivan Dias',
    src: '/images/retrato-corporativo/retrato-executivo-sao-paulo-ivan-dias-01.jpg',
  },
  {
    label: 'Foto de perfil para LinkedIn - São Paulo - Ivan Dias',
    src: '/images/fotos-linkedin/foto-perfil-linkedin-sao-paulo-ivan-dias-01.jpg',
  },
  {
    label: 'Retrato corporativo executivo - São Paulo - Ivan Dias',
    src: '/images/retrato-corporativo/retrato-executivo-sao-paulo-ivan-dias-02.jpg',
  },
  {
    label: 'Sessão de fotos para LinkedIn - São Paulo - Ivan Dias',
    src: '/images/fotos-linkedin/foto-perfil-linkedin-sao-paulo-ivan-dias-02.jpg',
  },
  {
    label: 'Cobertura de evento corporativo - São Paulo - Ivan Dias',
    src: '/images/eventos-corporativos/cobertura-evento-corporativo-sao-paulo-ivan-dias-01.jpg',
  },
  {
    label: 'Palestra em congresso empresarial - São Paulo - Ivan Dias',
    src: '/images/eventos-corporativos/palestra-corporativa-sao-paulo-ivan-dias-04.jpg',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Portfólio</span>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
              Trabalhos recentes
            </h2>
          </div>
          <Link href="/portfolio" className="btn-secondary">
            Ver Portfólio Completo
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl">
              <PlaceholderPhoto label={item.label} src={item.src} natural />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
