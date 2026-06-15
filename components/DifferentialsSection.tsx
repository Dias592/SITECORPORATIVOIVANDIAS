const DIFFERENTIALS = [
  {
    title: 'Estúdio Móvel',
    description: 'Toda a estrutura de iluminação e backdrop montada diretamente na sua empresa.',
  },
  {
    title: 'Direção de Poses',
    description: 'Você não precisa saber posar — direção completa durante toda a sessão.',
  },
  {
    title: 'Entrega Ágil',
    description: 'Galerias entregues em até 5 dias úteis, com opção expressa para urgências.',
  },
  {
    title: 'Atendimento B2B',
    description: 'Briefing, proposta e processo pensados para a rotina de empresas.',
  },
  {
    title: 'Nota Fiscal',
    description: 'Emissão de nota fiscal para pessoa jurídica em todos os serviços.',
  },
  {
    title: 'Cobertura Regional SP',
    description: 'Atendimento em São Paulo, ABCD Paulista, Guarulhos, Osasco e Grande SP.',
  },
];

export default function DifferentialsSection() {
  return (
    <section className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <span className="eyebrow">Por que Ivan Dias?</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase text-white md:text-5xl">
          Diferenciais
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border-dark bg-bg-card p-8">
              <h3 className="font-heading text-lg font-bold text-cyan">{item.title}</h3>
              <p className="mt-3 font-body text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
