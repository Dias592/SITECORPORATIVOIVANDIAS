import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import PlaceholderPhoto from './PlaceholderPhoto';
import SchemaOrg from './SchemaOrg';
import { getLocalBusinessForRegionSchema } from '@/lib/schemas';
import { Region, regions } from '@/lib/regions';

export default function RegionPageContent({ region }: { region: Region }) {
  const otherRegions = regions.filter((r) => r.slug !== region.slug);
  return (
    <>
      <SchemaOrg
        schema={getLocalBusinessForRegionSchema({
          cityName: region.cityName,
          description: region.metaDescription,
          path: `/${region.slug}`,
        })}
      />

      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: region.cityName, path: `/${region.slug}` }]} />

          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">Atendimento Regional</span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
                {region.h1}
              </h1>
              <p className="mt-6 font-body text-base text-text-muted md:text-lg">
                Saiba mais sobre{' '}
                <Link href={`/${region.relatedServiceSlug}`} className="text-cyan hover:underline">
                  {region.relatedServiceName}
                </Link>{' '}
                para empresas e profissionais de {region.cityName}.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <PlaceholderPhoto label={`Fotógrafo corporativo em ${region.cityName} - Ivan Dias`} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          {region.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-6 font-body text-base leading-relaxed text-text-muted md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <FAQSection eyebrow="Dúvidas" title={`Perguntas frequentes - ${region.cityName}`} faqs={region.faqs} />

      <section className="bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <span className="eyebrow">Outras regiões atendidas</span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase text-white md:text-3xl">
            Fotografia corporativa em toda a Grande SP
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {otherRegions.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-xl border border-border-dark bg-bg-card p-5 transition hover:border-cyan"
              >
                <p className="font-heading text-sm font-bold uppercase text-cyan">{r.cityName}</p>
                <p className="mt-1 font-body text-xs text-text-muted">{r.relatedServiceName}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
