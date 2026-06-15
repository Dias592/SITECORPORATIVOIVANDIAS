import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RegionalCoverageSection from '@/components/RegionalCoverageSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import { generateMeta } from '@/lib/metadata';
import { getHowToHireSchema } from '@/lib/schemas';

export const metadata: Metadata = generateMeta({
  title: 'Fotógrafo Corporativo São Paulo | Retratos Executivos e Eventos | Ivan Dias',
  description:
    'Fotógrafo corporativo em São Paulo, ABCD e Grande SP. Retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais. Orçamento em 24h.',
  path: '/',
});

const HOME_FAQS = [
  {
    question: 'Quanto custa um retrato corporativo em São Paulo?',
    answer:
      'O investimento em retratos corporativos em São Paulo varia conforme o tipo de sessão, número de pessoas e entregáveis. Para profissionais individuais, as sessões focadas em LinkedIn e uso institucional partem de valores acessíveis, com entrega de fotos tratadas em alta resolução. Para equipes, o valor é calculado por pessoa. Entre em contato para receber uma proposta personalizada em até 24 horas.',
  },
  {
    question: 'O fotógrafo atende no ABCD e Grande São Paulo?',
    answer:
      'Sim. Ivan Dias atende presencialmente em São Paulo (capital), ABCD Paulista (Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema), Guarulhos, Osasco e toda a Grande São Paulo. O estúdio móvel pode ser montado diretamente na empresa do cliente.',
  },
  {
    question: 'Preciso saber posar para ter um bom retrato corporativo?',
    answer:
      'Não. Durante toda a sessão, Ivan Dias oferece direção completa: postura, posição das mãos, enquadramento de ombros e expressões faciais. A sessão é conduzida de forma leve e confortável, mesmo para quem nunca fotografou profissionalmente.',
  },
  {
    question: 'Em quanto tempo recebo as fotos?',
    answer:
      'A entrega da galeria completa é feita em até 5 dias úteis após a sessão, com acesso online para seleção e download. Para eventos corporativos, o prazo é combinado conforme o volume de material. Entrega expressa disponível para demandas urgentes.',
  },
  {
    question: 'É possível fazer as fotos na minha empresa?',
    answer:
      'Sim. O serviço de estúdio móvel permite que toda a estrutura de iluminação e backdrop seja montada diretamente no ambiente da empresa. Ideal para retratos de equipes grandes sem deslocamento dos colaboradores.',
  },
  {
    question: 'O serviço inclui nota fiscal?',
    answer:
      'Sim. Todos os serviços para pessoa jurídica (empresas) são emitidos com nota fiscal, facilitando o pagamento via CNPJ e a prestação de contas interna.',
  },
  {
    question: 'Qual a diferença entre a sessão de retrato e as fotos para LinkedIn?',
    answer:
      'As fotos para LinkedIn são sessões individuais rápidas, com foco em transmitir autoridade e acessibilidade para o perfil profissional. Já o retrato corporativo completo abrange múltiplos cenários, variações de look e é indicado para uso em site, press kit, material de imprensa e campanhas institucionais.',
  },
  {
    question: 'É possível contratar cobertura para feiras e congressos?',
    answer:
      'Sim. A cobertura de eventos corporativos inclui feiras, congressos, convenções de vendas, lançamentos de produtos, workshops e confraternizações empresariais. A entrega inclui galeria organizada com fotos em alta resolução, banco de imagens para uso institucional e redes sociais.',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={getHowToHireSchema()} />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProcessSection />
      <PortfolioPreview />
      <DifferentialsSection />
      <TestimonialsSection />
      <RegionalCoverageSection />
      <FAQSection title="Perguntas frequentes" faqs={HOME_FAQS} />
      <CTASection />
      <Footer />
    </>
  );
}
