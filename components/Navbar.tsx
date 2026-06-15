'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';
import { services } from '@/lib/services';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-border-dark bg-bg/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12"
      >
        <Link
          href="/"
          aria-label="Ivan Dias Fotógrafo Corporativo, página inicial"
          className="font-heading text-xl font-extrabold uppercase tracking-tight text-cyan md:text-2xl"
        >
          Ivan Dias
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="font-body text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-cyan focus-visible-ring"
              aria-expanded={servicesOpen}
            >
              Serviços ▾
            </button>
            {servicesOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full w-64 rounded-xl border border-border-dark bg-bg-card p-2 shadow-xl"
              >
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="block rounded-lg px-4 py-3 font-body text-sm text-white/80 transition-colors hover:bg-accent hover:text-cyan focus-visible-ring"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-cyan focus-visible-ring"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
            className="btn-primary"
          >
            Solicitar Orçamento ⊕
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden focus-visible-ring"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border-dark bg-bg px-6 pb-8 md:hidden"
        >
          <ul className="flex flex-col gap-2 pt-4">
            <li>
              <span className="block py-2 font-body text-xs font-semibold uppercase tracking-widest text-cyan-muted">
                Serviços
              </span>
              <ul className="flex flex-col gap-1 pl-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-body text-base text-white/90 focus-visible-ring"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-body text-lg font-medium text-white/90 focus-visible-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full"
              >
                Solicitar Orçamento ⊕
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
