import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('retrato-corporativo-santo-andre')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/retrato-corporativo-santo-andre',
});

export default function RetratoCorporativoSantoAndrePage() {
  return <RegionPageContent region={region} />;
}
