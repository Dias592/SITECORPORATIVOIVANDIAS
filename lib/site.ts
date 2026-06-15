export const SITE = {
  name: 'Ivan Dias Fotógrafo Corporativo',
  shortName: 'Ivan Dias',
  url: 'https://ivandiasfoto.com.br',
  locale: 'pt_BR',
  description:
    'Fotógrafo corporativo em São Paulo, ABCD e Grande SP. Retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais.',
  phone: '+55-11-95302-5177',
  phoneDisplay: '(11) 9.5302-5177',
  whatsappNumber: '5511953025177',
  email: 'contato@ivandiasfoto.com.br',
  instagram: 'https://www.instagram.com/ivandiasfotografo/',
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, gostaria de solicitar orçamento para fotografia corporativa.';

export const AREA_SERVED_CITIES = [
  'São Paulo',
  'Santo André',
  'São Bernardo do Campo',
  'São Caetano do Sul',
  'Diadema',
  'Guarulhos',
  'Osasco',
  'Mauá',
  'Mogi das Cruzes',
];
