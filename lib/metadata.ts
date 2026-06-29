import type { Metadata } from 'next';
import { SITE } from './site';

type GenerateMetaParams = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function generateMeta({ title, description, path, image }: GenerateMetaParams): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/images/og-ivan-dias-fotografo.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
