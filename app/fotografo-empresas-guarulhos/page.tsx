import type { Metadata } from 'next';
import RegionPageContent from '@/components/RegionPageContent';
import { generateMeta } from '@/lib/metadata';
import { getRegionBySlug } from '@/lib/regions';

const region = getRegionBySlug('fotografo-empresas-guarulhos')!;

export const metadata: Metadata = generateMeta({
  title: region.metaTitle,
  description: region.metaDescription,
  path: '/fotografo-empresas-guarulhos',
});

export default function FotografoEmpresasGuarulhosPage() {
  return <RegionPageContent region={region} />;
}
