import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('fotos-linkedin-sao-bernardo')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/fotos-linkedin-sao-bernardo',
});

export default function FotosLinkedinSaoBernardoPage() {
  return <RegionPageContent region={region} />;
}
