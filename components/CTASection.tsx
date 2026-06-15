import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Solicite seu orçamento personalizado',
  description = 'Envie sua solicitação pelo WhatsApp e receba uma proposta em até 24 horas.',
}: CTASectionProps) {
  return (
    <section className="bg-bg-section py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center md:px-12">
        <h2 className="font-heading text-2xl font-bold uppercase text-white md:text-4xl">{title}</h2>
        <p className="max-w-xl font-body text-base text-text-muted">{description}</p>
        <a
          href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Solicitar Orçamento ⊕
        </a>
      </div>
    </section>
  );
}
