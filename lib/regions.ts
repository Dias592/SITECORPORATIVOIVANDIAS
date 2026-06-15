export type Region = {
  slug: string;
  cityName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
};

export const regions: Region[] = [
  {
    slug: 'retrato-corporativo-abc',
    cityName: 'ABCD Paulista',
    h1: 'Retrato Corporativo no ABCD Paulista',
    metaTitle: 'Fotógrafo Corporativo ABC Paulista | Retrato Corporativo | Ivan Dias',
    metaDescription:
      'Fotógrafo corporativo no ABC Paulista: retratos executivos, fotos para LinkedIn e ensaios de equipe em Santo André, São Bernardo, São Caetano e Diadema.',
    relatedServiceSlug: 'retrato-corporativo',
    relatedServiceName: 'Retrato Corporativo',
    paragraphs: [
      'O ABCD Paulista — formado por Santo André, São Bernardo do Campo, São Caetano do Sul e Diadema — é um dos principais polos industriais e empresariais da Grande São Paulo. Concentra desde grandes indústrias automotivas até escritórios de advocacia, clínicas médicas, startups e empresas de serviços que precisam de uma comunicação visual profissional para se posicionar no mercado.',
      'Ivan Dias atende fotografia corporativa no ABC Paulista com a mesma estrutura e qualidade oferecida em São Paulo capital: retrato corporativo individual, fotos para LinkedIn, ensaios de equipe e cobertura de eventos empresariais, com estúdio móvel disponível para sessões realizadas diretamente na empresa.',
      'Para profissionais do ABC que buscam atualizar a foto do LinkedIn ou montar um banco de imagens institucional, a proximidade do fotógrafo corporativo faz diferença: menos deslocamento, agendamento facilitado e atendimento que entende as particularidades das empresas da região — do setor automotivo às indústrias farmacêuticas e de tecnologia.',
      'Para empresas de Santo André, São Bernardo, São Caetano e Diadema que precisam padronizar a imagem de equipes inteiras — RH, vendas, diretoria — o estúdio móvel é a solução ideal: toda a estrutura de iluminação e fundo é montada no local, permitindo fotografar dezenas de colaboradores em um único dia, com direção de poses individual e entrega organizada por departamento.',
      'Empresas do ABC também contam com nota fiscal em todos os serviços para pessoa jurídica, facilitando a aprovação do orçamento pelo financeiro e a prestação de contas interna — um diferencial valorizado por RH e administrativo na contratação de fotógrafo corporativo na região.',
      'Se sua empresa está em Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema ou em qualquer cidade do ABC Paulista, solicite um orçamento personalizado para retrato corporativo, fotos de equipe ou cobertura de eventos. A resposta chega em até 24 horas pelo WhatsApp.',
    ],
    faqs: [
      {
        question: 'O fotógrafo atende presencialmente no ABC Paulista?',
        answer:
          'Sim. Ivan Dias atende Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e demais cidades do ABC, com estúdio móvel disponível para sessões in-company.',
      },
      {
        question: 'É possível fotografar equipes grandes no ABC em um único dia?',
        answer:
          'Sim. Com o estúdio móvel montado na própria empresa, é possível fotografar equipes inteiras em um único dia, com direção de poses individual para cada colaborador.',
      },
      {
        question: 'O serviço no ABC inclui nota fiscal para empresas?',
        answer:
          'Sim. Todos os serviços para pessoa jurídica no ABC Paulista são emitidos com nota fiscal, facilitando o pagamento via CNPJ.',
      },
    ],
  },
  {
    slug: 'retrato-corporativo-santo-andre',
    cityName: 'Santo André',
    h1: 'Retrato Corporativo em Santo André',
    metaTitle: 'Retrato Corporativo Santo André | Fotógrafo Corporativo | Ivan Dias',
    metaDescription:
      'Retrato corporativo em Santo André: ensaios executivos, fotos para LinkedIn e equipes para clínicas, escritórios e indústrias. Estúdio móvel disponível.',
    relatedServiceSlug: 'retrato-corporativo',
    relatedServiceName: 'Retrato Corporativo',
    paragraphs: [
      'Santo André é um dos municípios mais relevantes do ABC Paulista, reunindo um forte parque industrial, clínicas médicas, escritórios de advocacia e um comércio diversificado. Para profissionais e empresas da cidade, ter uma imagem corporativa profissional é cada vez mais um diferencial competitivo — seja para o site institucional, perfis no LinkedIn ou materiais de divulgação.',
      'Ivan Dias realiza retrato corporativo em Santo André para executivos, médicos, advogados e equipes de empresas locais, com a mesma qualidade e direção de poses oferecida em São Paulo capital. As sessões podem ser feitas em estúdio ou diretamente na empresa, com estúdio móvel.',
      'Clínicas médicas da região, por exemplo, costumam precisar de retratos profissionais para cada especialista, padronizados visualmente para uso no site e em materiais impressos. Já escritórios de advocacia buscam retratos executivos que transmitam autoridade e confiança para clientes e parceiros.',
      'Indústrias instaladas em Santo André também utilizam o serviço de retrato corporativo para atualizar fotos de diretoria, gerências e equipes de RH — especialmente em momentos de reposicionamento institucional, novos sites ou campanhas de recrutamento (employer branding).',
      'A direção completa de poses é o principal diferencial para quem nunca fez um ensaio profissional: durante toda a sessão, Ivan Dias orienta postura, expressão e enquadramento, eliminando a insegurança de "não saber posar" — um dos principais motivos que levam profissionais a postergar a atualização da própria foto.',
      'Empresas e profissionais de Santo André podem solicitar orçamento personalizado para retrato corporativo individual, fotos de equipe ou ensaios in-company, com nota fiscal incluída para pessoa jurídica. Resposta em até 24 horas pelo WhatsApp.',
    ],
    faqs: [
      {
        question: 'O fotógrafo atende clínicas e consultórios em Santo André?',
        answer:
          'Sim. É comum a contratação de retrato corporativo para padronizar as fotos de médicos e especialistas de clínicas em Santo André, para uso no site e materiais da clínica.',
      },
      {
        question: 'É possível agendar o ensaio diretamente no escritório em Santo André?',
        answer:
          'Sim, com o estúdio móvel toda a estrutura de iluminação é montada no local, ideal para escritórios de advocacia e empresas que não querem deslocar a equipe.',
      },
      {
        question: 'Quanto tempo leva para receber as fotos em Santo André?',
        answer:
          'A entrega da galeria completa é feita em até 5 dias úteis após a sessão, com acesso online para seleção e download em alta resolução.',
      },
    ],
  },
  {
    slug: 'fotografo-eventos-sao-caetano',
    cityName: 'São Caetano do Sul',
    h1: 'Fotógrafo de Eventos em São Caetano do Sul',
    metaTitle: 'Fotógrafo de Eventos Corporativos São Caetano do Sul | Ivan Dias',
    metaDescription:
      'Fotógrafo de eventos corporativos em São Caetano do Sul: congressos, feiras, lançamentos e workshops com cobertura profissional e entrega organizada.',
    relatedServiceSlug: 'eventos-corporativos',
    relatedServiceName: 'Eventos Corporativos',
    paragraphs: [
      'São Caetano do Sul é conhecida por concentrar empresas de tecnologia, showrooms automotivos e um comércio de alto padrão dentro do ABC Paulista. A cidade também é palco frequente de eventos corporativos — desde lançamentos de produtos e showrooms até workshops e convenções de pequeno e médio porte.',
      'Ivan Dias atua como fotógrafo de eventos corporativos em São Caetano do Sul, oferecendo cobertura fotográfica completa para empresas que precisam registrar lançamentos, feiras setoriais, treinamentos e confraternizações com qualidade profissional e entrega organizada.',
      'Para empresas de tecnologia e showrooms da região, a cobertura fotográfica de eventos é uma ferramenta estratégica de marketing: as imagens produzidas durante o evento alimentam redes sociais, materiais de imprensa e campanhas por semanas após a data, ampliando o retorno sobre o investimento no evento.',
      'A cobertura inclui o registro de momentos-chave — credenciamento, apresentações, interação com o público, detalhes de produção e networking — sempre com discrição, sem interferir na dinâmica do evento, e com entrega de galeria online organizada por momento.',
      'Empresas de São Caetano do Sul que realizam eventos corporativos recorrentes também podem contar com nota fiscal para pessoa jurídica em todos os serviços, facilitando o processo de aprovação interno e a contratação recorrente.',
      'Para cobertura de eventos corporativos em São Caetano do Sul — congressos, feiras, lançamentos, workshops ou confraternizações — solicite um orçamento personalizado pelo WhatsApp com data, horário e local do evento. A resposta é dada em até 24 horas.',
    ],
    faqs: [
      {
        question: 'Quais eventos corporativos vocês cobrem em São Caetano do Sul?',
        answer:
          'Lançamentos de produtos, showrooms, feiras setoriais, workshops, treinamentos e confraternizações corporativas, com entrega de galeria organizada por momento do evento.',
      },
      {
        question: 'É possível contratar a cobertura com pouca antecedência?',
        answer:
          'Sempre que possível, sim. Entre em contato pelo WhatsApp informando data, horário e local para verificarmos a disponibilidade da equipe em São Caetano do Sul.',
      },
      {
        question: 'As fotos do evento podem ser usadas em redes sociais e imprensa?',
        answer:
          'Sim. A entrega inclui fotos em alta resolução, prontas para uso institucional, redes sociais e materiais de assessoria de imprensa.',
      },
    ],
  },
  {
    slug: 'fotos-linkedin-sao-bernardo',
    cityName: 'São Bernardo do Campo',
    h1: 'Fotos para LinkedIn em São Bernardo do Campo',
    metaTitle: 'Fotos para LinkedIn São Bernardo do Campo | Retrato Profissional | Ivan Dias',
    metaDescription:
      'Fotos profissionais para LinkedIn em São Bernardo do Campo: sessão rápida, direção de poses e entrega em 48h para engenheiros, gestores e executivos.',
    relatedServiceSlug: 'fotos-linkedin',
    relatedServiceName: 'Fotos para LinkedIn',
    paragraphs: [
      'São Bernardo do Campo é o coração do setor automotivo e de manufatura do ABC Paulista, reunindo montadoras, fornecedores, indústrias de autopeças e um crescente setor de serviços. Para os profissionais que trabalham nessas empresas, ter uma foto de perfil profissional no LinkedIn deixou de ser opcional — é parte da estratégia de carreira.',
      'Ivan Dias oferece sessões de fotos para LinkedIn em São Bernardo do Campo voltadas especialmente para engenheiros, gestores industriais, analistas e executivos do setor automotivo e de manufatura, com sessões rápidas, objetivas e entrega em até 48 horas.',
      'A foto de perfil é, muitas vezes, o primeiro contato entre um recrutador e um candidato, ou entre um fornecedor e um novo cliente. Em setores tão competitivos quanto o automotivo, uma imagem profissional bem feita pode ser o diferencial entre ser notado ou passar despercebido em uma busca no LinkedIn.',
      'A sessão é pensada para quem tem rotina corrida: em 30 a 45 minutos, com direção de poses simples e sem necessidade de "saber posar", é possível obter diferentes enquadramentos para uso no LinkedIn, currículo e demais redes profissionais.',
      'Empresas de São Bernardo do Campo também podem agendar sessões coletivas para equipes inteiras, padronizando a imagem de todos os colaboradores no LinkedIn — uma prática cada vez mais comum em departamentos de RH e marketing que cuidam do employer branding da empresa.',
      'Profissionais e empresas de São Bernardo do Campo interessados em fotos para LinkedIn podem solicitar orçamento e agendamento pelo WhatsApp, com resposta em até 24 horas.',
    ],
    faqs: [
      {
        question: 'A sessão de fotos para LinkedIn em São Bernardo é rápida?',
        answer:
          'Sim, dura em média 30 a 45 minutos, com direção de poses simples e entrega das fotos tratadas em até 48 horas.',
      },
      {
        question: 'É possível agendar para toda a equipe da empresa em São Bernardo?',
        answer:
          'Sim. É possível organizar uma sessão coletiva com horários individuais para cada colaborador, padronizando a imagem de toda a equipe no LinkedIn.',
      },
      {
        question: 'Profissionais do setor automotivo se beneficiam desse serviço?',
        answer:
          'Sim. Engenheiros, gestores e analistas do setor automotivo de São Bernardo costumam usar a foto de perfil profissional para fortalecer a presença no LinkedIn em processos de recrutamento e networking.',
      },
    ],
  },
  {
    slug: 'fotografia-corporativa-osasco',
    cityName: 'Osasco',
    h1: 'Fotografia Corporativa em Osasco',
    metaTitle: 'Fotografia Corporativa Osasco | Fotógrafo Corporativo | Ivan Dias',
    metaDescription:
      'Fotografia corporativa em Osasco: retratos executivos, fotos para LinkedIn e ensaios de equipe para startups, fintechs e centros logísticos.',
    relatedServiceSlug: 'retrato-corporativo',
    relatedServiceName: 'Retrato Corporativo',
    paragraphs: [
      'Osasco se consolidou como um dos principais polos corporativos da Grande São Paulo, com forte presença de startups de tecnologia, fintechs, centros logísticos e empresas instaladas na região de Alphaville e entorno. Esse perfil de empresas exige uma comunicação visual moderna, alinhada com a velocidade e o posicionamento digital desses negócios.',
      'Ivan Dias oferece fotografia corporativa em Osasco para empresas e profissionais que precisam de retratos executivos, fotos para LinkedIn e bancos de imagens de equipe, com um estilo de fotografia corporativa natural e moderno, alinhado ao perfil de startups e empresas de tecnologia.',
      'Para fintechs e startups, a fotografia corporativa costuma compor o material de apresentação para investidores, site institucional e perfis de fundadores e executivos no LinkedIn — peças fundamentais em rodadas de investimento e parcerias estratégicas.',
      'Empresas de logística e centros de distribuição da região de Osasco e Alphaville também utilizam o serviço para retratos de diretoria, gerências e equipes operacionais, com estúdio móvel disponível para sessões realizadas diretamente nas instalações da empresa.',
      'A direção completa de poses garante que mesmo equipes que nunca passaram por um ensaio profissional tenham resultados consistentes e alinhados — um ponto importante para empresas que estão construindo sua identidade visual institucional do zero, como costuma ser o caso de startups em fase de crescimento.',
      'Empresas e profissionais de Osasco e região podem solicitar orçamento personalizado para fotografia corporativa pelo WhatsApp, com nota fiscal incluída para pessoa jurídica e resposta em até 24 horas.',
    ],
    faqs: [
      {
        question: 'O fotógrafo atende startups e fintechs em Osasco?',
        answer:
          'Sim. É comum o atendimento a startups e fintechs de Osasco para retratos de fundadores, executivos e equipes, com estilo moderno e natural.',
      },
      {
        question: 'É possível fazer a sessão em Alphaville?',
        answer:
          'Sim, o atendimento cobre Osasco e a região de Alphaville, com possibilidade de estúdio móvel diretamente na empresa.',
      },
      {
        question: 'Empresas de logística podem contratar para equipes operacionais?',
        answer:
          'Sim. O estúdio móvel permite fotografar equipes operacionais e administrativas diretamente nas instalações da empresa em Osasco.',
      },
    ],
  },
  {
    slug: 'fotografo-empresas-guarulhos',
    cityName: 'Guarulhos',
    h1: 'Fotógrafo Corporativo em Guarulhos',
    metaTitle: 'Fotógrafo Corporativo Guarulhos | Retratos para Empresas | Ivan Dias',
    metaDescription:
      'Fotógrafo corporativo em Guarulhos: retratos executivos, fotos de equipe e cobertura de eventos para empresas de logística, distribuição e indústria.',
    relatedServiceSlug: 'retrato-corporativo',
    relatedServiceName: 'Retrato Corporativo',
    paragraphs: [
      'Guarulhos é um dos maiores polos logísticos e industriais do país, impulsionado pela proximidade com o Aeroporto Internacional e por uma extensa malha de rodovias que conecta a cidade a todo o estado de São Paulo. Empresas de logística, distribuição, indústria e comércio exterior têm presença forte na região — e, com elas, a necessidade de uma comunicação visual corporativa profissional.',
      'Ivan Dias oferece fotografia corporativa em Guarulhos para empresas que precisam de retratos executivos, fotos de equipe para uso institucional e cobertura de eventos corporativos, com atendimento ágil e estúdio móvel disponível para sessões diretamente nas instalações da empresa.',
      'Para empresas de logística e distribuição próximas às principais rodovias e ao aeroporto, o estúdio móvel é especialmente útil: toda a estrutura de iluminação é montada no local, permitindo fotografar equipes operacionais, gerências e diretoria sem deslocamento até um estúdio.',
      'Indústrias instaladas em Guarulhos também utilizam o serviço para atualizar retratos de diretoria e gerência, especialmente em momentos de expansão, novos sites institucionais ou materiais para parceiros e fornecedores internacionais, que costumam exigir um padrão visual elevado.',
      'Além dos retratos, Ivan Dias também realiza cobertura de eventos corporativos em Guarulhos — congressos, convenções de vendas e feiras relacionadas ao setor logístico e industrial, com entrega de galeria organizada e pronta para uso institucional.',
      'Empresas de Guarulhos interessadas em retrato corporativo, fotos de equipe ou cobertura de eventos podem solicitar orçamento personalizado pelo WhatsApp, com nota fiscal para pessoa jurídica e resposta em até 24 horas.',
    ],
    faqs: [
      {
        question: 'O fotógrafo atende empresas próximas ao Aeroporto de Guarulhos?',
        answer:
          'Sim. O atendimento cobre toda a região de Guarulhos, incluindo empresas próximas ao Aeroporto Internacional e às principais rodovias.',
      },
      {
        question: 'É possível fotografar equipes operacionais em galpões e centros de distribuição?',
        answer:
          'Sim, com o estúdio móvel é possível montar a estrutura de iluminação diretamente em galpões e centros de distribuição para fotografar equipes operacionais.',
      },
      {
        question: 'Vocês cobrem eventos do setor logístico em Guarulhos?',
        answer:
          'Sim. A cobertura de eventos corporativos inclui congressos, convenções e feiras relacionadas aos setores logístico e industrial da região.',
      },
    ],
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((region) => region.slug === slug);
}
