import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import SchemaOrg from '@/components/SchemaOrg';
import { generateMeta } from '@/lib/metadata';
import { getServiceSchema } from '@/lib/schemas';
import { getServiceBySlug } from '@/lib/services';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';

const service = getServiceBySlug('fotos-linkedin')!;

export const metadata: Metadata = generateMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/fotos-linkedin',
});

export default function FotosLinkedinPage() {
  return (
    <>
      <SchemaOrg
        schema={getServiceSchema({
          name: service.title,
          serviceType: service.serviceType,
          description: service.metaDescription,
        })}
      />

      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs
            items={[
              { name: 'Início', path: '/' },
              { name: service.title, path: '/fotos-linkedin' },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">Serviço</span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-6 font-body text-base text-text-muted md:text-lg">{service.heroSubtitle}</p>
              <a href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                Solicitar Orçamento ⊕
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <PlaceholderPhoto label="Foto de perfil profissional para LinkedIn - São Paulo - Ivan Dias" src="/images/fotos-linkedin/foto-perfil-linkedin-sao-paulo-ivan-dias-01.jpg" natural />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          {service.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-6 font-body text-base leading-relaxed text-text-muted md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <span className="eyebrow">O que está incluso</span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-white md:text-4xl">{service.typesTitle}</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.types.map((type) => (
              <div key={type.title} className="rounded-2xl border border-border-dark bg-bg-card p-8">
                <h3 className="font-heading text-lg font-bold text-cyan">{type.title}</h3>
                <p className="mt-3 font-body text-sm text-text-muted">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <span className="eyebrow">Processo</span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-white md:text-4xl">Como funciona</h2>
          <ol className="mt-10 flex flex-col gap-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex items-start gap-4 rounded-2xl border border-border-dark bg-bg-card p-5">
                <span className="font-heading text-xl font-extrabold text-cyan">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-body text-sm text-text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection eyebrow="Dúvidas" title="Perguntas frequentes sobre fotos para LinkedIn" faqs={service.faqs} />
      <CTASection />
      <Footer />
    </>
  );
}
