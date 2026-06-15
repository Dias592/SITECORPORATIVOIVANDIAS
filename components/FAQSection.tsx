'use client';

import { useState } from 'react';
import SchemaOrg from './SchemaOrg';
import { getFAQPageSchema } from '@/lib/schemas';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title?: string;
  eyebrow?: string;
  faqs: FAQItem[];
  includeSchema?: boolean;
};

export default function FAQSection({
  title = 'Perguntas frequentes',
  eyebrow = 'FAQ',
  faqs,
  includeSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg py-24 md:py-32">
      {includeSchema && <SchemaOrg schema={getFAQPageSchema(faqs)} />}
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-white md:text-5xl">{title}</h2>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-2xl border border-border-dark bg-bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible-ring"
                >
                  <span className="font-heading text-base font-semibold text-cyan md:text-lg">{faq.question}</span>
                  <span className="font-heading text-2xl text-cyan" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 font-body text-sm leading-relaxed text-text-muted">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
