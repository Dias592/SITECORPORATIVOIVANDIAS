const STEPS = [
  { title: 'Briefing', description: 'Alinhamos objetivos, número de pessoas e uso das imagens.' },
  { title: 'Agendamento', description: 'Sessão marcada em estúdio ou na sua empresa, com estúdio móvel.' },
  { title: 'Sessão', description: 'Direção completa de poses, iluminação profissional e conforto.' },
  { title: 'Seleção Online', description: 'Galeria digital para você escolher as fotos preferidas.' },
  { title: 'Entrega', description: 'Fotos tratadas em alta resolução em até 5 dias úteis.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="eyebrow">Como funciona</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
          Do briefing à entrega
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
          {STEPS.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border-dark bg-bg-card p-6">
              <span className="font-heading text-3xl font-extrabold text-cyan">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 font-body text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
