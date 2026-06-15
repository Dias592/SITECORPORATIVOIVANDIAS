const STATS = [
  { value: '15+', label: 'Anos de experiência' },
  { value: '500+', label: 'Retratos corporativos' },
  { value: '200+', label: 'Eventos cobertos' },
  { value: 'SP · ABCD · Grande SP', label: 'Área de atendimento' },
];

export default function StatsBar() {
  return (
    <section className="border-y border-border-dark bg-bg-section py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-heading text-2xl font-extrabold text-cyan md:text-3xl">{stat.value}</p>
            <p className="mt-2 font-body text-xs uppercase tracking-wide text-text-muted md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
