import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PageTransition from '@/components/PageTransition';
import SchemaOrg from '@/components/SchemaOrg';
import { getRootGraphSchema } from '@/lib/schemas';
import { SITE } from '@/lib/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Fotógrafo Corporativo São Paulo | Retratos Executivos e Eventos | Ivan Dias',
    template: '%s | Ivan Dias Fotógrafo Corporativo',
  },
  description: SITE.description,
  authors: [{ name: 'Ivan Dias' }],
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: 'Fotógrafo Corporativo São Paulo | Retratos Executivos e Eventos | Ivan Dias',
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/images/og-ivan-dias-fotografo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ivan Dias Fotógrafo Corporativo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotógrafo Corporativo São Paulo | Retratos Executivos e Eventos | Ivan Dias',
    description: SITE.description,
    images: [`${SITE.url}/images/og-ivan-dias-fotografo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SchemaOrg schema={getRootGraphSchema()} />
        <a href="#main-content" className="skip-link font-body text-sm font-semibold">
          Pular para o conteúdo principal
        </a>
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
