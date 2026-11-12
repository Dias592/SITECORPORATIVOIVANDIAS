'use client';

import Link from 'next/link';
import PlaceholderPhoto from './PlaceholderPhoto';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';

// Entrada escalonada em CSS (antes framer-motion). O H1 aparece direto:
// ele costuma ser o LCP no celular e não pode começar invisível.

export default function HeroSection() {
  return (
    <section className="relative grid min-h-[90vh] grid-cols-1 overflow-hidden bg-bg pt-32 md:grid-cols-2 md:pt-28">
      <div
        className="relative z-10 flex flex-col justify-center px-6 pb-16 md:px-16"
      >
        <span className="anim-hero eyebrow w-fit">
          Fotógrafo Corporativo · São Paulo
        </span>

        <h1
          className="mt-6 font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.05] text-white"
        >
          Fotógrafo Corporativo em São Paulo
        </h1>

        <p className="anim-hero anim-hero-2 mt-6 max-w-lg font-body text-base text-text-muted md:text-lg">
          Retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais
          em São Paulo, ABCD Paulista e Grande SP. Direção completa de poses e entrega ágil.
        </p>

        <div className="anim-hero anim-hero-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Orçamento ⊕
          </a>
          <Link href="/portfolio" className="btn-secondary">
            Ver Portfólio
          </Link>
        </div>
      </div>

      <div className="relative min-h-[50vh] md:min-h-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/fotografo-corporativo-sao-paulo-ivan-dias-1080w.webp"
          srcSet="/images/hero/fotografo-corporativo-sao-paulo-ivan-dias-640w.webp 640w, /images/hero/fotografo-corporativo-sao-paulo-ivan-dias-1080w.webp 1080w, /images/hero/fotografo-corporativo-sao-paulo-ivan-dias-1920w.webp 1920w"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Retrato corporativo executivo São Paulo - Ivan Dias Fotógrafo"
          width={1920}
          height={2400}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
