import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import SchemaOrg from '@/components/SchemaOrg';
import { generateMeta } from '@/lib/metadata';
import { getPersonSchema } from '@/lib/schemas';

export const metadata: Metadata = generateMeta({
  title: 'Sobre Ivan Dias | Fotógrafo Corporativo em São Paulo',
  description:
    'Conheça Ivan Dias, fotógrafo corporativo especializado em retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais em São Paulo e Grande SP.',
  path: '/sobre',
});

const DIFFERENTIALS = [
  {
    title: 'Mais de 15 anos de experiência',
    description:
      'Atuação consolidada em fotografia corporativa, atendendo empresas de diversos portes em São Paulo e região.',
  },
  {
    title: 'Direção de poses para quem não é modelo',
    description:
      'A maioria dos clientes não está acostumada a posar. Por isso, cada sessão é conduzida com instruções claras, leves e objetivas — o resultado é natural e profissional.',
  },
  {
    title: 'Estúdio móvel',
    description:
      'Estrutura completa de iluminação, fundo e equipamentos que pode ser montada diretamente na sede da empresa, reduzindo o deslocamento das equipes.',
  },
  {
    title: 'Atendimento B2B com nota fiscal',
    description:
      'Processos adaptados à rotina corporativa: orçamento formal, contrato, nota fiscal e prazos de entrega definidos.',
  },
];

export default function SobrePage() {
  return (
    <>
      <SchemaOrg schema={getPersonSchema()} />

      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Sobre', path: '/sobre' }]} />

          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">Sobre</span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
                Ivan Dias, Fotógrafo Corporativo
              </h1>
              <p className="mt-6 font-body text-base text-text-muted md:text-lg">
                Especialista em retratos executivos, fotos para LinkedIn e cobertura de eventos
                corporativos, atendendo empresas e profissionais em São Paulo, ABCD e Grande São
                Paulo com um trabalho focado em imagem profissional, agilidade na entrega e
                atendimento dedicado ao ambiente corporativo.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <PlaceholderPhoto
                label="Ivan Dias - fotógrafo corporativo São Paulo"
                src="/images/sobre/ivan-dias-fotografo-corporativo-sao-paulo.jpg"
                natural
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <p className="mb-6 font-body text-base leading-relaxed text-text-muted md:text-lg">
            Ao longo de mais de 15 anos de carreira, Ivan Dias desenvolveu um olhar voltado para
            as necessidades do ambiente corporativo: retratos que transmitem confiança e
            autoridade, registros de eventos que valorizam a marca da empresa e materiais visuais
            que podem ser usados em sites, redes sociais, press kits e campanhas institucionais.
          </p>
          <p className="mb-6 font-body text-base leading-relaxed text-text-muted md:text-lg">
            O trabalho é pensado para empresas e profissionais que precisam de uma imagem
            consistente e de qualidade, mas que não têm tempo — nem necessariamente experiência —
            para sessões de fotos. Por isso, cada sessão é conduzida com direção completa: postura,
            enquadramento, expressão e iluminação são ajustados pelo fotógrafo, garantindo bons
            resultados mesmo para quem nunca posou profissionalmente.
          </p>
          <p className="font-body text-base leading-relaxed text-text-muted md:text-lg">
            Atendimento presencial em São Paulo (capital), ABC Paulista (Santo André, São Bernardo
            do Campo, São Caetano do Sul, Diadema), Guarulhos, Osasco e demais regiões da Grande
            São Paulo, com possibilidade de estúdio móvel diretamente na empresa.
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Por que contratar Ivan Dias
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DIFFERENTIALS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border-dark bg-bg-card p-8">
                <h3 className="font-heading text-lg font-bold text-cyan">{item.title}</h3>
                <p className="mt-3 font-body text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
