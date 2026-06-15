import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('fotografo-eventos-sao-caetano')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/fotografo-eventos-sao-caetano',
});

export default function FotografoEventosSaoCaetanoPage() {
  return <RegionPageContent region={region} />;
}
