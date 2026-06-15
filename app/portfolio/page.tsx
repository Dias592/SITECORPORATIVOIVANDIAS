import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';
import { generateMeta } from '@/lib/metadata';

export const metadata: Metadata = generateMeta({
  title: 'Portfólio | Retratos Executivos, LinkedIn e Eventos Corporativos',
  description:
    'Portfólio de fotografia corporativa de Ivan Dias: retratos executivos, fotos para LinkedIn, cobertura de eventos corporativos e fotos de equipes em São Paulo.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Portfólio', path: '/portfolio' }]} />

          <div className="mt-8 max-w-2xl">
            <span className="eyebrow">Portfólio</span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
              Fotografia Corporativa em São Paulo
            </h1>
            <p className="mt-6 font-body text-base text-text-muted md:text-lg">
              Retratos executivos, fotos para LinkedIn, cobertura de eventos corporativos e fotos
              de equipes — uma amostra do trabalho realizado para empresas e profissionais em São
              Paulo, ABCD e Grande SP.
            </p>
          </div>

          <div className="mt-16">
            <PortfolioGallery />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
