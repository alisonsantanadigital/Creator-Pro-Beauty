import type { StaticImageData } from 'next/image';
import heroPortraitImg from '@/src/assets/images/hero_isabela_beauty_1794757421755.jpg';
import aboutCloseupImg from '@/src/assets/images/about_skincare_closeup_1794757424270.jpg';
import campaignMakeupImg from '@/src/assets/images/campaign_makeup_nude_1794757423560.jpg';
import campaignSkincareImg from '@/src/assets/images/campaign_skincare_serum_1794757423867.jpg';
import campaignNaturalImg from '@/src/assets/images/campaign_natural_beauty_1794757424113.jpg';
import campaignSelfcareImg from '@/src/assets/images/campaign_selfcare_ritual_1794757424768.jpg';

export type CampaignCategory =
  | 'Todas'
  | 'Maquiagem'
  | 'Skincare'
  | 'Beleza Natural'
  | 'Autocuidado';

export interface PlatformMetric {
  id: string;
  platform: string;
  handle: string;
  followers: string;
  avgReach: string;
  engagementRate: string;
  avgViews: string;
  formatFocus: string;
}

export interface DemographicBar {
  label: string;
  percentage: number;
}

export interface CampaignItem {
  id: string;
  index: string;
  category: Exclude<CampaignCategory, 'Todas'>;
  title: string;
  subtitle: string;
  conceptNote: string;
  visualDirection: string;
  suggestedFormat: string;
  image: StaticImageData;
  imageAlt: string;
}

export interface PartnershipFormat {
  id: string;
  index: string;
  name: string;
  channel: string;
  summary: string;
  deliverables: string[];
  idealFor: string;
}

export const CREATOR_PROFILE = {
  brandTitle: 'CREATOR PRO',
  agencyName: 'PRUMO CREATORS',
  creatorName: 'Isabela Rocha',
  niche: 'Beleza, Maquiagem, Skincare e Autocuidado',
  positioning:
    'Criadora de conteúdo especializada em beleza, maquiagem, cuidados com a pele, tendências e autocuidado.',
  location: 'São Paulo · Brasil',
  demonstrativeNotice:
    'Apresentação comercial demonstrativa desenvolvida pela PRUMO CREATORS. Todos os números, campanhas e canais de contato exibidos nesta página são fictícios e ilustrativos.',
  heroImage: heroPortraitImg,
  heroImageAlt:
    'Retrato editorial de Isabela Rocha com pele iluminada e maquiagem em tons nude e rosé suave sob luz champagne.',
  aboutImage: aboutCloseupImg,
  aboutImageAlt:
    'Close-up editorial de pele hidratada com luminosidade natural e luz suave de estúdio em tons off-white e nude.',
  socialSummary: [
    {
      platform: 'Instagram',
      handle: '@isabelarocha.demo',
      followers: '98.000',
      note: 'Seguidores fictícios',
      url: 'https://instagram.com',
    },
    {
      platform: 'TikTok',
      handle: '@isabelarocha.demo',
      followers: '64.000',
      note: 'Seguidores fictícios',
      url: 'https://tiktok.com',
    },
  ],
};

export const AUDIENCE_INSIGHTS = {
  totalReach: '162.000',
  monthlyImpressions: '1,4M',
  avgEngagement: '4,8%',
  audienceSaveRate: '6,2%',
  platforms: [
    {
      id: 'instagram',
      platform: 'Instagram',
      handle: '@isabelarocha.demo',
      followers: '98.000',
      avgReach: '42.500 por publicação',
      engagementRate: '4,6%',
      avgViews: '58.000 por Reel',
      formatFocus: 'Reels editoriais, sequências de Stories e carrosséis educativos',
    },
    {
      id: 'tiktok',
      platform: 'TikTok',
      handle: '@isabelarocha.demo',
      followers: '64.000',
      avgReach: '36.000 por vídeo',
      engagementRate: '5,1%',
      avgViews: '49.000 por vídeo curto',
      formatFocus: 'Tutoriais rápidos, texturas em close-up e rotina comentada',
    },
  ] as PlatformMetric[],
  genderSplit: [
    { label: 'Público Feminino', percentage: 86 },
    { label: 'Público Masculino', percentage: 12 },
    { label: 'Não informado', percentage: 2 },
  ] as DemographicBar[],
  ageGroups: [
    { label: '18 – 24 anos', percentage: 28 },
    { label: '25 – 34 anos', percentage: 46 },
    { label: '35 – 44 anos', percentage: 19 },
    { label: '45+ anos', percentage: 7 },
  ] as DemographicBar[],
  topLocations: [
    { label: 'São Paulo e Região Metropolitana', percentage: 38 },
    { label: 'Rio de Janeiro', percentage: 18 },
    { label: 'Belo Horizonte & Sul', percentage: 24 },
    { label: 'Outras capitais do Brasil', percentage: 20 },
  ] as DemographicBar[],
  interests: [
    'Skincare baseado em ativos e textura real',
    'Maquiagem de acabamento natural e pele luminosa',
    'Lançamentos de perfumaria e autocuidado sensorial',
    'Rotinas práticas de bem-estar e beleza consciente',
  ],
};

export const ABOUT_CONTENT = {
  headline: 'Estética editorial aplicada à rotina real de beleza.',
  biography: [
    'Isabela Rocha traduz lançamentos, rotinas de skincare e técnicas de maquiagem em narrativas visuais limpas, sensoriais e informativas. Sua produção valoriza luz natural, close-ups de textura real de pele e explicações objetivas sobre acabamento, sensorial e modo de uso.',
    'Com direção visual inspirada em campanhas internacionais de beleza, cada entrega busca equilibrar rigor estético para a marca e clareza prática para quem acompanha suas recomendações diárias.',
  ],
  specialties: [
    {
      index: '01',
      title: 'Maquiagem de Pele & Acabamento',
      description:
        'Demonstração técnica de texturas acetinadas, cobertura leve, esfumado em tons nude e durabilidade ao longo do dia.',
    },
    {
      index: '02',
      title: 'Skincare & Leitura de Rotinas',
      description:
        'Apresentação visual de séruns, hidratantes e fotoproteção com foco em aplicação, absorção e compatibilidade de camadas.',
    },
    {
      index: '03',
      title: 'Tendências & Curadoria Visual',
      description:
        'Tradução de movimentos internacionais de beleza para a rotina brasileira com linguagem refinada e zero excesso visual.',
    },
    {
      index: '04',
      title: 'Autocuidado & Bem-Estar Sensorial',
      description:
        'Rituais matinais e noturnos que conectam cuidado corporal, massagem facial e pausas conscientes em ambiente acolhedor.',
    },
  ],
  differentials: [
    'Captação em alta definição com foco em textura real de pele sem filtros distorcivos.',
    'Roteiros estruturados para retenção nos primeiros 3 segundos em Reels e TikTok.',
    'Identidade visual coesa em off-white, luz quente e enquadramentos minimalistas.',
    'Comunicação transparente e alinhada às diretrizes editoriais de cada parceiro.',
  ],
};

export const CAMPAIGN_PORTFOLIO: CampaignItem[] = [
  {
    id: 'camp-maquiagem',
    index: '01',
    category: 'Maquiagem',
    title: 'Lumina Nude — Pele Acetinada',
    subtitle: 'Campanha conceitual fictícia de maquiagem editorial',
    conceptNote:
      'Estudo visual dedicado a acabamentos translúcidos, construção de luminosidade suave e harmonização entre tons nude e rosé para uso diurno e noturno.',
    visualDirection:
      'Luz difusa champagne, close-up de pele natural, paleta neutra em calcário e marrom suave.',
    suggestedFormat: 'Reels editorial 45s + Série de 4 Stories demonstrativos',
    image: campaignMakeupImg,
    imageAlt:
      'Fotografia editorial conceitual de maquiagem nude com acabamento acetinado e estojo minimalista sobre pedra natural.',
  },
  {
    id: 'camp-skincare',
    index: '02',
    category: 'Skincare',
    title: 'Essência Botânica — Textura & Brilho',
    subtitle: 'Campanha conceitual fictícia de tratamento facial',
    conceptNote:
      'Narrativa sensorial focada em viscosidade, aplicação em gotas e brilho saudável imediato após rotina de hidratação facial.',
    visualDirection:
      'Still life arquitetônico em travertino bruto, linho nude e sombras naturais da manhã.',
    suggestedFormat: 'TikTok em macro + Carrossel educativo de rotina',
    image: campaignSkincareImg,
    imageAlt:
      'Frasco minimalista de sérum em vidro fosco sobre pedra travertino com luz solar suave e linho em tom nude.',
  },
  {
    id: 'camp-beleza-natural',
    index: '03',
    category: 'Beleza Natural',
    title: 'Pele Real — Luz da Manhã',
    subtitle: 'Campanha conceitual fictícia de beleza natural',
    conceptNote:
      'Celebração da textura autêntica da pele com preparação mínima, sobrancelhas penteadas e hidratação labial em luz natural de janela.',
    visualDirection:
      'Retrato íntimo sem retoques artificiais, fundo off-white e tons quentes de pele.',
    suggestedFormat: 'Ensaio fotográfico vertical + Vídeo “Arrume-se Comigo” minimalista',
    image: campaignNaturalImg,
    imageAlt:
      'Close-up de beleza natural com pele hidratada, sobrancelhas naturais e brilho labial suave sob luz da manhã.',
  },
  {
    id: 'camp-autocuidado',
    index: '04',
    category: 'Autocuidado',
    title: 'Ritual Noturno — Pausa & Sensorial',
    subtitle: 'Campanha conceitual fictícia de autocuidado',
    conceptNote:
      'Sequência calma e tátil dedicada ao desacelerar no fim do dia, combinando massagem facial, hidratação corporal e tecidos naturais.',
    visualDirection:
      'Composição serena com cerâmica fosca, quartzo rosé, seda champagne e madeira natural.',
    suggestedFormat: 'Reels sensorial ASMR leve + Conteúdo licenciado para marca',
    image: campaignSelfcareImg,
    imageAlt:
      'Cena minimalista de autocuidado com pote de creme em cerâmica fosca, gua sha rosé e tecido de seda champagne.',
  },
];

export const PARTNERSHIP_FORMATS: PartnershipFormat[] = [
  {
    id: 'stories',
    index: '01',
    name: 'Combo Stories Imersivos',
    channel: 'Instagram Stories',
    summary:
      'Sequência narrativa de 4 a 6 telas com demonstração prática, textura em câmera próxima, opinião contextualizada e link direcionado.',
    deliverables: [
      'Abertura contextual na rotina real',
      'Aplicação em close-up sem cortes bruscos',
      'CTA com link rastreável da marca',
    ],
    idealFor: 'Lançamentos ágeis, cupons e tráfego direto',
  },
  {
    id: 'reels',
    index: '02',
    name: 'Reels Editorial & Collab',
    channel: 'Instagram Reels',
    summary:
      'Vídeo vertical em alta definição com estética de campanha, ritmo fluido, legenda limpa e possibilidade de publicação em colab.',
    deliverables: [
      'Captação 4K em iluminação controlada',
      'Edição com foco nos primeiros 3 segundos',
      'Adaptação opcional para Stories de apoio',
    ],
    idealFor: 'Construção de desejo, alcance orgânico e posicionamento',
  },
  {
    id: 'tiktok',
    index: '03',
    name: 'TikTok Nativo & Tendências',
    channel: 'TikTok',
    summary:
      'Produção pensada para a linguagem dinâmica da plataforma, unindo demonstração rápida, tutorial objetivo e áudio estratégico.',
    deliverables: [
      'Roteiro nativo orientado à retenção',
      'Demonstração visual de antes e depois',
      'Interação ativa nos comentários iniciais',
    ],
    idealFor: 'Descoberta de produto e conexão com público jovem-adulto',
  },
  {
    id: 'demonstracao',
    index: '04',
    name: 'Demonstração Técnica de Produto',
    channel: 'Instagram + TikTok',
    summary:
      'Review visual aprofundado destacando textura, pigmentação, acabamento na pele, modo de aplicação e combinações de rotina.',
    deliverables: [
      'Macro de textura e swatch em luz natural',
      'Teste de acabamento ao longo do dia',
      'Guia claro de benefícios e uso diário',
    ],
    idealFor: 'Maquiagem de pele, séruns e dermocosméticos',
  },
  {
    id: 'producao-conteudo',
    index: '05',
    name: 'Produção de Conteúdo (UGC Editorial)',
    channel: 'Canais da Marca & Mídia Paga',
    summary:
      'Pacote de vídeos e fotografias produzidos com estética de beleza premium para utilização nos perfis oficiais ou anúncios da marca.',
    deliverables: [
      'Arquivos brutos ou editados em 9:16 e 4:5',
      'Variações de gancho para performance',
      'Licenciamento de uso acordado em contrato',
    ],
    idealFor: 'Campanhas de mídia paga, e-commerce e redes próprias',
  },
  {
    id: 'campanhas-personalizadas',
    index: '06',
    name: 'Campanhas & Parcerias Personalizadas',
    channel: 'Multiplataforma 360°',
    summary:
      'Projetos sob medida para lançamentos sazonais, embaixadorias trimestrais, cobertura de eventos de beleza e ativações exclusivas.',
    deliverables: [
      'Planejamento criativo conjunto com a agência',
      'Cronograma contínuo multiplataforma',
      'Relatório demonstrativo pós-campanha',
    ],
    idealFor: 'Posicionamento contínuo e grandes lançamentos',
  },
];

export const CONTACT_INFO = {
  whatsappDisplay: '+55 (11) 90000-0000 (Demonstrativo)',
  whatsappNumberRaw: '5511900000000',
  emailDisplay: 'comercial.demo@prumocreators.exemplo',
  instagramHandle: '@isabelarocha.demo',
  instagramUrl: 'https://instagram.com',
  agencyCredit: 'Atendimento comercial gerenciado pela PRUMO CREATORS (Ambiente Demonstrativo)',
};
