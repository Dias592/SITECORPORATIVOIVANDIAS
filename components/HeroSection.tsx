'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PlaceholderPhoto from './PlaceholderPhoto';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative grid min-h-[90vh] grid-cols-1 overflow-hidden bg-bg pt-32 md:grid-cols-2 md:pt-28">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="relative z-10 flex flex-col justify-center px-6 pb-16 md:px-16"
      >
        <motion.span variants={itemVariants} className="eyebrow w-fit">
          Fotógrafo Corporativo · São Paulo
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-6 font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.05] text-white"
        >
          Fotógrafo Corporativo em São Paulo
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-lg font-body text-base text-text-muted md:text-lg">
          Retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais
          em São Paulo, ABCD Paulista e Grande SP. Direção completa de poses e entrega ágil.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
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
        </motion.div>
      </motion.div>

      <div className="relative min-h-[50vh] md:min-h-0">
        <PlaceholderPhoto
          label="Retrato corporativo executivo São Paulo - Ivan Dias Fotógrafo"
          className="absolute inset-0 aspect-auto"
          src="/images/hero/fotografo-corporativo-sao-paulo-ivan-dias.jpg"
          priority
        />
      </div>
    </section>
  );
}
