import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('retrato-corporativo-abc')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/retrato-corporativo-abc',
});

export default function RetratoCorporativoAbcPage() {
  return <RegionPageContent region={region} />;
}
