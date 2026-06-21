import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import { generateMeta } from '@/lib/metadata';
import { getLocalBusinessSchema } from '@/lib/schemas';
import { SITE } from '@/lib/site';

export const metadata: Metadata = generateMeta({
  title: 'Contato | Fotógrafo Corporativo SP',
  description:
    'Solicite orçamento personalizado para fotografia corporativa em São Paulo, ABCD e Grande SP. Resposta em até 24h por WhatsApp, e-mail ou formulário.',
  path: '/contato',
});

export default function ContatoPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          mainEntity: getLocalBusinessSchema(),
        }}
      />

      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Contato', path: '/contato' }]} />

          <div className="mt-8 max-w-2xl">
            <span className="eyebrow">Contato</span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
              Solicite seu orçamento
            </h1>
            <p className="mt-6 font-body text-base text-text-muted md:text-lg">
              Conte um pouco sobre o que você precisa e receba uma proposta personalizada em até
              24 horas. Atendimento para pessoas físicas e jurídicas, com emissão de nota fiscal.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-border-dark bg-bg-card p-8">
              <ContactForm />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-heading text-lg font-bold uppercase text-cyan">WhatsApp</h2>
                <p className="mt-2 font-body text-sm text-text-muted">{SITE.phoneDisplay}</p>
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold uppercase text-cyan">E-mail</h2>
                <p className="mt-2 font-body text-sm text-text-muted">{SITE.email}</p>
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold uppercase text-cyan">Atendimento</h2>
                <p className="mt-2 font-body text-sm text-text-muted">
                  Segunda a sexta, das 9h às 18h. Sábados, das 9h às 14h.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold uppercase text-cyan">Área de atendimento</h2>
                <p className="mt-2 font-body text-sm text-text-muted">
                  São Paulo (capital), ABC Paulista (Santo André, São Bernardo do Campo, São
                  Caetano do Sul, Diadema), Guarulhos, Osasco e Grande São Paulo. Estúdio móvel
                  disponível na sua empresa.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold uppercase text-cyan">Para empresas</h2>
                <p className="mt-2 font-body text-sm text-text-muted">
                  Todos os serviços para pessoa jurídica são emitidos com nota fiscal, facilitando
                  o pagamento via CNPJ e a prestação de contas interna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
