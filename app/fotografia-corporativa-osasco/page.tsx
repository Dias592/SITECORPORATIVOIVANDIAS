import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('fotografia-corporativa-osasco')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/fotografia-corporativa-osasco',
});

export default function FotografiaCorporativaOsascoPage() {
  return <RegionPageContent region={region} />;
}
