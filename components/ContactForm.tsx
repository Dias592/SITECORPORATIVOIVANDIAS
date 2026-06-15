'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

const SERVICE_OPTIONS = [
  'Retrato Corporativo',
  'Fotos para LinkedIn',
  'Eventos Corporativos',
  'Outro',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState('');

  const whatsappHref = (() => {
    const lines = [
      `Olá, meu nome é ${name || '[nome]'}.`,
      company ? `Empresa: ${company}.` : null,
      `Tenho interesse em: ${service}.`,
      message ? `Mensagem: ${message}` : null,
    ].filter(Boolean);

    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join(' '))}`;
  })();

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(whatsappHref, '_blank', 'noopener,noreferrer');
      }}
    >
      <div>
        <label htmlFor="name" className="font-body text-sm font-medium text-white">
          Nome
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border-dark bg-bg-card px-4 py-3 font-body text-sm text-white outline-none focus-visible-ring"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="company" className="font-body text-sm font-medium text-white">
          Empresa
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border-dark bg-bg-card px-4 py-3 font-body text-sm text-white outline-none focus-visible-ring"
          placeholder="Nome da empresa (opcional)"
        />
      </div>

      <div>
        <label htmlFor="service" className="font-body text-sm font-medium text-white">
          Serviço de interesse
        </label>
        <select
          id="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border-dark bg-bg-card px-4 py-3 font-body text-sm text-white outline-none focus-visible-ring"
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-sm font-medium text-white">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border-dark bg-bg-card px-4 py-3 font-body text-sm text-white outline-none focus-visible-ring"
          placeholder="Conte um pouco sobre o que você precisa"
        />
      </div>

      <button type="submit" className="btn-primary mt-2 inline-flex justify-center">
        Enviar pelo WhatsApp ⊕
      </button>
    </form>
  );
}
