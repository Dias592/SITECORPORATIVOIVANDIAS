const TESTIMONIALS = [
  {
    quote:
      'A sessão foi muito mais tranquila do que eu imaginava. A direção de poses fez toda a diferença no resultado final das fotos para o LinkedIn.',
    name: 'Marina Souza',
    role: 'Gerente de RH',
    company: 'Empresa de Tecnologia, São Paulo',
  },
  {
    quote:
      'Contratamos o estúdio móvel para fotografar toda a diretoria na nossa sede. Organização impecável e entrega rápida.',
    name: 'Roberto Lima',
    role: 'Diretor Administrativo',
    company: 'Indústria, ABC Paulista',
  },
  {
    quote:
      'A cobertura do nosso congresso ficou excelente. Fotos prontas para usar em redes sociais e na assessoria de imprensa logo após o evento.',
    name: 'Carla Mendes',
    role: 'Coordenadora de Marketing',
    company: 'Associação Empresarial, São Paulo',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="eyebrow">Depoimentos</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
          O que dizem os clientes
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure key={item.name} className="rounded-2xl border border-border-dark bg-bg-card p-8">
              <blockquote className="font-body text-sm leading-relaxed text-white/90">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border-dark pt-4">
                <p className="font-heading text-sm font-bold text-cyan">{item.name}</p>
                <p className="font-body text-xs text-text-muted">
                  {item.role} · {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
