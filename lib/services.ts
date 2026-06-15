export type ServicePackage = {
  name: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  serviceType: string;
  intro: string[];
  typesTitle: string;
  types: { title: string; description: string }[];
  packages?: ServicePackage[];
  process: string[];
  faqs: ServiceFAQ[];
  cardDescription: string;
};

export const services: Service[] = [
  {
    slug: 'retrato-corporativo',
    number: '01',
    title: 'Retrato Corporativo',
    cardDescription:
      'Retratos individuais, de equipes e in-company com direção completa de poses e entrega ágil.',
    metaTitle: 'Retrato Corporativo São Paulo | Ensaio Executivo e de Equipes | Ivan Dias',
    metaDescription:
      'Retratos corporativos em São Paulo: executivos, equipes e fotos profissionais. Estúdio móvel disponível. Direção completa de poses. Entrega em até 5 dias.',
    h1: 'Retrato Corporativo em São Paulo',
    heroSubtitle:
      'Ensaios corporativos para executivos, equipes e empresas em São Paulo, com direção completa de poses e padronização visual para uso institucional.',
    serviceType: 'Retrato Corporativo',
    intro: [
      'O retrato corporativo em São Paulo é hoje um dos investimentos mais estratégicos para profissionais e empresas que querem transmitir autoridade, confiança e profissionalismo em qualquer canal — do site institucional ao perfil do LinkedIn. Um ensaio corporativo bem conduzido vai muito além de "tirar uma foto": ele constrói a imagem que o mercado terá do seu negócio.',
      'Ivan Dias é fotógrafo corporativo em São Paulo com mais de 15 anos de experiência, especializado em retrato executivo, fotos para equipes e ensaios corporativos em estúdio ou diretamente na empresa, com estúdio móvel. Cada sessão é conduzida com direção completa de poses, iluminação profissional e um olhar atento ao que cada marca pessoal e institucional precisa comunicar.',
      'Seja para um retrato executivo individual, fotos de equipes de RH e vendas, ou um banco de imagens completo para a comunicação da empresa, o objetivo é sempre o mesmo: imagens consistentes, modernas e que representem com precisão o nível de profissionalismo da sua marca em São Paulo, ABCD Paulista e Grande SP.',
    ],
    typesTitle: 'Tipos de retrato corporativo',
    types: [
      {
        title: 'Individual',
        description:
          'Retrato executivo individual para uso em LinkedIn, site institucional, press kit e materiais de imprensa. Direção de poses completa, mesmo para quem nunca fez um ensaio profissional.',
      },
      {
        title: 'Equipe',
        description:
          'Padronização visual de fotos para times inteiros — RH, vendas, diretoria — garantindo um banco de imagens coeso para uso institucional e redes sociais.',
      },
      {
        title: 'In-Company',
        description:
          'Sessão realizada dentro da própria empresa, com estúdio móvel montado no local, otimizando o tempo de toda a equipe sem deslocamentos.',
      },
      {
        title: 'Estúdio',
        description:
          'Sessões realizadas em estúdio próprio, com controle total de iluminação e cenário, ideais para retratos premium e campanhas institucionais.',
      },
    ],
    packages: [
      {
        name: 'Essencial',
        description:
          'Sessão individual com direção de poses, fundo neutro e seleção de fotos tratadas em alta resolução para uso digital. Ideal para quem precisa atualizar a foto do LinkedIn e materiais básicos.',
      },
      {
        name: 'Profissional',
        description:
          'Sessão ampliada com variações de cenário e looks, indicada para executivos e profissionais que precisam de um banco de imagens mais completo para site, redes sociais e imprensa.',
      },
      {
        name: 'Premium',
        description:
          'Pacote completo para empresas, com cobertura de equipes, estúdio móvel in-company, direção de poses individual para cada colaborador e entrega organizada por departamento.',
      },
    ],
    process: [
      'Briefing inicial para entender objetivos, número de pessoas e uso das imagens',
      'Agendamento da sessão em estúdio ou na empresa (estúdio móvel)',
      'Sessão com direção completa de poses e iluminação profissional',
      'Seleção online das melhores fotos em galeria digital',
      'Entrega das fotos tratadas em alta resolução em até 5 dias úteis',
    ],
    faqs: [
      {
        question: 'Quanto custa um retrato corporativo em São Paulo?',
        answer:
          'O investimento varia conforme o tipo de sessão, número de pessoas e entregáveis. Solicite um orçamento personalizado pelo WhatsApp e receba uma proposta em até 24h.',
      },
      {
        question: 'Preciso saber posar para o ensaio corporativo?',
        answer:
          'Não. Durante toda a sessão você recebe direção completa: postura, posição das mãos, enquadramento de ombros e expressões faciais, mesmo que nunca tenha feito um ensaio profissional antes.',
      },
      {
        question: 'É possível fazer o retrato corporativo na minha empresa?',
        answer:
          'Sim. O serviço de estúdio móvel permite montar toda a estrutura de iluminação e backdrop diretamente no ambiente da empresa, ideal para equipes grandes.',
      },
      {
        question: 'Quanto tempo demora a entrega das fotos?',
        answer:
          'A galeria completa é entregue em até 5 dias úteis após a sessão, com acesso online para seleção e download em alta resolução.',
      },
      {
        question: 'O serviço inclui nota fiscal?',
        answer:
          'Sim. Todos os serviços para pessoa jurídica são emitidos com nota fiscal, facilitando o pagamento via CNPJ e a prestação de contas interna.',
      },
      {
        question: 'É possível fotografar equipes grandes em um único dia?',
        answer:
          'Sim. Com o estúdio móvel e um cronograma planejado, é possível fotografar equipes inteiras em um único dia, com direção de poses individual para cada colaborador.',
      },
    ],
  },
  {
    slug: 'fotos-linkedin',
    number: '02',
    title: 'Fotos para LinkedIn',
    cardDescription:
      'Sessão rápida e objetiva para uma foto de perfil que transmite autoridade e credibilidade.',
    metaTitle: 'Fotos para LinkedIn São Paulo | Retrato Profissional SP | Ivan Dias',
    metaDescription:
      'Fotos para LinkedIn em São Paulo que transmitem autoridade e credibilidade. Sessão rápida, direção de poses, entrega em 48h. Atendimento em SP e ABCD.',
    h1: 'Fotos para LinkedIn em São Paulo',
    heroSubtitle:
      'A foto do seu perfil profissional é o primeiro contato com recrutadores, clientes e parceiros de negócio. Garanta uma primeira impressão de autoridade.',
    serviceType: 'Fotos para LinkedIn',
    intro: [
      'A foto de perfil do LinkedIn é, na prática, o seu cartão de visitas digital. Antes de qualquer reunião, antes de qualquer proposta, é essa imagem que cria a primeira impressão sobre sua credibilidade profissional. Por isso, cada vez mais executivos, consultores, médicos, advogados e profissionais de todas as áreas em São Paulo estão investindo em fotos para LinkedIn feitas por um fotógrafo corporativo especializado.',
      'Diferente de uma selfie ou de uma foto de festa recortada, o retrato profissional para LinkedIn em SP é pensado para transmitir acessibilidade, segurança e autoridade — qualidades que influenciam diretamente como você é percebido em processos seletivos, parcerias e negociações.',
      'Ivan Dias realiza sessões rápidas e objetivas, com direção de poses simples e foco total no resultado: uma foto de perfil que representa o melhor da sua imagem profissional, entregue em poucos dias e pronta para uso imediato no LinkedIn, currículo e demais redes profissionais.',
    ],
    typesTitle: 'O que está incluso na sessão',
    types: [
      {
        title: 'Sessão individual rápida',
        description:
          'Duração média de 30 a 45 minutos, em estúdio ou em local combinado, com fundo neutro e iluminação otimizada para retrato de perfil.',
      },
      {
        title: 'Direção de poses simples',
        description:
          'Orientação sobre postura, expressão e enquadramento, mesmo para quem nunca fez um ensaio profissional — sem necessidade de "saber posar".',
      },
      {
        title: 'Variações de enquadramento',
        description:
          'Fotos em diferentes enquadramentos (close, busto, meio corpo) para uso no LinkedIn, currículo, site pessoal e redes sociais.',
      },
      {
        title: 'Entrega rápida',
        description:
          'Galeria com as melhores fotos tratadas, entregue em até 48 horas, já otimizadas para upload no LinkedIn.',
      },
    ],
    process: [
      'Agendamento rápido por WhatsApp, com horários flexíveis',
      'Sessão individual com direção de poses leve e objetiva',
      'Seleção das melhores fotos ainda no mesmo dia',
      'Tratamento e entrega da galeria em até 48 horas',
      'Possibilidade de atendimento para equipes inteiras na empresa',
    ],
    faqs: [
      {
        question: 'Quanto tempo dura a sessão de fotos para LinkedIn?',
        answer:
          'Em média 30 a 45 minutos, suficiente para capturar diferentes expressões e enquadramentos para o seu perfil profissional.',
      },
      {
        question: 'O que devo vestir para a foto do LinkedIn?',
        answer:
          'Recomendamos roupas que representem o seu segmento de atuação, em cores sólidas e sem estampas muito chamativas. Durante o agendamento, você recebe orientações específicas para o seu caso.',
      },
      {
        question: 'Quando recebo as fotos?',
        answer:
          'A entrega das fotos tratadas é feita em até 48 horas após a sessão, em galeria online para download em alta resolução.',
      },
      {
        question: 'Preciso me maquiar antes da sessão?',
        answer:
          'Não é obrigatório, mas uma maquiagem leve pode ajudar a uniformizar o tom de pele sob luz de estúdio. Orientações são passadas antes da sessão.',
      },
      {
        question: 'Vocês atendem empresas inteiras para fotos de LinkedIn da equipe?',
        answer:
          'Sim. É possível agendar uma sessão coletiva, com horários individuais para cada colaborador, garantindo padronização visual em todos os perfis.',
      },
      {
        question: 'Qual a diferença entre a sessão de LinkedIn e o retrato corporativo completo?',
        answer:
          'A sessão para LinkedIn é mais rápida e focada em um único enquadramento de perfil. O retrato corporativo completo abrange múltiplos cenários e variações de look, indicado para uso em site, press kit e campanhas institucionais.',
      },
    ],
  },
  {
    slug: 'eventos-corporativos',
    number: '03',
    title: 'Eventos Corporativos',
    cardDescription:
      'Cobertura fotográfica completa de congressos, convenções, feiras e treinamentos empresariais.',
    metaTitle: 'Fotógrafo de Eventos Corporativos SP | Congressos, Feiras e Convenções | Ivan Dias',
    metaDescription:
      'Cobertura fotográfica de eventos corporativos em São Paulo e ABCD: congressos, convenções, workshops, feiras e lançamentos. Equipe e entrega profissional.',
    h1: 'Fotógrafo de Eventos Corporativos em São Paulo',
    heroSubtitle:
      'Cobertura fotográfica profissional para congressos, convenções de vendas, feiras, workshops e lançamentos de produtos em São Paulo e ABCD.',
    serviceType: 'Cobertura de Eventos Corporativos',
    intro: [
      'Eventos corporativos são momentos estratégicos para qualquer empresa: lançamentos de produto, convenções de vendas, congressos, feiras de negócios e treinamentos concentram em poucas horas oportunidades de networking, branding e comunicação que precisam ser registradas com qualidade profissional.',
      'Ivan Dias atua como fotógrafo de eventos corporativos em São Paulo, ABCD Paulista e Grande SP, com experiência em cobrir desde pequenos workshops até grandes congressos e feiras de negócios, sempre com entrega organizada e pronta para uso institucional, assessoria de imprensa e redes sociais.',
      'A cobertura fotográfica de eventos empresariais vai além de registrar palestras: envolve capturar a energia do networking, os detalhes da produção, os momentos de apresentação e a interação entre participantes — formando um banco de imagens completo que a empresa pode usar por meses após o evento.',
    ],
    typesTitle: 'Tipos de evento cobertos',
    types: [
      {
        title: 'Congressos e Convenções',
        description:
          'Cobertura completa de palestras, painéis, credenciamento e momentos de networking, com entrega organizada por sessão.',
      },
      {
        title: 'Convenções de Vendas',
        description:
          'Registro de apresentações, premiações e dinâmicas, garantindo material para comunicação interna e externa da empresa.',
      },
      {
        title: 'Feiras e Lançamentos',
        description:
          'Fotos de estandes, produtos, interações com o público e lançamentos, otimizadas para uso em redes sociais e imprensa.',
      },
      {
        title: 'Workshops e Treinamentos',
        description:
          'Cobertura discreta de atividades, dinâmicas e apresentações, ideal para materiais de comunicação interna e employer branding.',
      },
      {
        title: 'Confraternizações Corporativas',
        description:
          'Registro do clima e da interação entre equipes em eventos de confraternização, fortalecendo a cultura organizacional nas redes.',
      },
      {
        title: 'Eventos de RH',
        description:
          'Cobertura de eventos de integração, treinamentos e ações de RH voltadas para atração e retenção de talentos.',
      },
    ],
    process: [
      'Briefing detalhado sobre o cronograma e os momentos-chave do evento',
      'Planejamento da equipe e dos equipamentos conforme o porte do evento',
      'Cobertura fotográfica completa durante todo o evento',
      'Seleção e tratamento das melhores imagens organizadas por momento',
      'Entrega de galeria online e banco de imagens para uso institucional',
    ],
    faqs: [
      {
        question: 'Quais tipos de evento corporativo vocês cobrem?',
        answer:
          'Congressos, convenções de vendas, feiras de negócios, workshops, lançamentos de produtos, confraternizações corporativas e eventos de RH em São Paulo, ABCD e Grande SP.',
      },
      {
        question: 'Como funciona a entrega das fotos do evento?',
        answer:
          'A entrega é feita em galeria online organizada por momento do evento, com fotos em alta resolução para uso institucional, imprensa e redes sociais.',
      },
      {
        question: 'É possível contratar cobertura para feiras de negócios?',
        answer:
          'Sim. A cobertura de feiras inclui fotos de estandes, produtos, interações com visitantes e lançamentos, otimizadas para divulgação durante e após o evento.',
      },
      {
        question: 'Vocês emitem nota fiscal para eventos corporativos?',
        answer:
          'Sim. Todos os serviços para pessoa jurídica são emitidos com nota fiscal, facilitando a prestação de contas e o pagamento via CNPJ.',
      },
      {
        question: 'É possível contratar a cobertura em cima da hora?',
        answer:
          'Sempre que possível, sim — entre em contato pelo WhatsApp informando data e horário do evento para verificarmos disponibilidade da equipe.',
      },
      {
        question: 'A equipe se adapta a eventos de grande porte com múltiplas salas?',
        answer:
          'Sim. Para eventos com programação simultânea em diferentes espaços, é possível dimensionar a equipe de fotógrafos conforme a necessidade de cobertura.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
