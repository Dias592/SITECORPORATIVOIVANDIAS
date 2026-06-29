'use client';

import { useState } from 'react';
import PlaceholderPhoto from './PlaceholderPhoto';

type Item = {
  label: string;
  src: string;
};

type Category = {
  id: string;
  label: string;
  aspectClass: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    id: 'retratos-executivos',
    label: 'Retratos Executivos',
    aspectClass: 'aspect-[3/4]',
    items: [
      {
        label: 'Retrato executivo individual - São Paulo - Ivan Dias',
        src: '/images/retrato-corporativo/retrato-executivo-sao-paulo-ivan-dias-01.webp',
      },
      {
        label: 'Retrato executivo C-level - Faria Lima - Ivan Dias',
        src: '/images/retrato-corporativo/retrato-executivo-sao-paulo-ivan-dias-02.webp',
      },
      {
        label: 'Retrato executivo estúdio - São Paulo - Ivan Dias',
        src: '/images/retrato-corporativo/retrato-executivo-sao-paulo-ivan-dias-03.webp',
      },
      {
        label: 'Fotógrafo corporativo executivo - São Paulo - Ivan Dias',
        src: '/images/hero/fotografo-corporativo-sao-paulo-ivan-dias.webp',
      },
    ],
  },
  {
    id: 'fotos-linkedin',
    label: 'Fotos para LinkedIn',
    aspectClass: 'aspect-[3/4]',
    items: [
      {
        label: 'Foto de perfil LinkedIn - São Paulo - Ivan Dias',
        src: '/images/fotos-linkedin/foto-perfil-linkedin-sao-paulo-ivan-dias-01.webp',
      },
      {
        label: 'Retrato profissional LinkedIn - São Paulo - Ivan Dias',
        src: '/images/fotos-linkedin/foto-perfil-linkedin-sao-paulo-ivan-dias-02.webp',
      },
      {
        label: 'Retrato profissional corporativo - São Paulo - Ivan Dias',
        src: '/images/og-ivan-dias-fotografo.webp',
      },
    ],
  },
  {
    id: 'eventos-corporativos',
    label: 'Eventos Corporativos',
    aspectClass: 'aspect-video',
    items: [
      {
        label: 'Cobertura de evento corporativo - São Paulo - Ivan Dias',
        src: '/images/eventos-corporativos/cobertura-evento-corporativo-sao-paulo-ivan-dias-01.webp',
      },
      {
        label: 'Cobertura de convenção empresarial - São Paulo - Ivan Dias',
        src: '/images/eventos-corporativos/cobertura-evento-corporativo-sao-paulo-ivan-dias-02.webp',
      },
      {
        label: 'Evento de premiação corporativa - São Paulo - Ivan Dias',
        src: '/images/eventos-corporativos/evento-premiacao-corporativo-sao-paulo-ivan-dias-03.webp',
      },
      {
        label: 'Palestra em convenção corporativa - São Paulo - Ivan Dias',
        src: '/images/eventos-corporativos/palestra-corporativa-sao-paulo-ivan-dias-04.webp',
      },
      {
        label: 'Palestra corporativa com plateia - São Paulo - Ivan Dias',
        src: '/images/eventos-corporativos/palestra-corporativa-sao-paulo-ivan-dias-05.webp',
      },
    ],
  },
  {
    id: 'equipes',
    label: 'Equipes Corporativas',
    aspectClass: 'aspect-video',
    items: [
      {
        label: 'Equipe corporativa em linha de produção - São Paulo - Ivan Dias',
        src: '/images/portfolio/equipe-industrial-sao-paulo-ivan-dias-01.webp',
      },
      {
        label: 'Equipe de operações em planta industrial - São Paulo - Ivan Dias',
        src: '/images/portfolio/industria-sao-paulo-ivan-dias-02.webp',
      },
      {
        label: 'Colaborador em ambiente industrial - São Paulo - Ivan Dias',
        src: '/images/portfolio/colaborador-industria-sao-paulo-ivan-dias-03.webp',
      },
      {
        label: 'Fotografia corporativa industrial - São Paulo - Ivan Dias',
        src: '/images/portfolio/galpao-industrial-sao-paulo-ivan-dias-04.webp',
      },
    ],
  },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const category = CATEGORIES.find((item) => item.id === active) ?? CATEGORIES[0];

  return (
    <div>
      <div role="tablist" aria-label="Categorias do portfólio" className="flex flex-wrap gap-3">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            onClick={() => setActive(item.id)}
            className={`rounded-full border px-5 py-2 font-body text-sm font-medium uppercase tracking-wide transition-colors focus-visible-ring ${
              active === item.id
                ? 'border-cyan bg-cyan text-bg'
                : 'border-border-dark text-white/80 hover:border-cyan hover:text-cyan'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {category.items.map((item) => (
          <div key={item.label} className="overflow-hidden rounded-2xl">
            <PlaceholderPhoto label={item.label} src={item.src} natural />
          </div>
        ))}
      </div>
    </div>
  );
}
