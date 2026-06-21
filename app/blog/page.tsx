import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogGrid from '@/components/BlogGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { generateMeta } from '@/lib/metadata';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = generateMeta({
  title: 'Blog | Fotografia Corporativa SP',
  description:
    'Artigos sobre fotografia corporativa, retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais em São Paulo, ABCD e Grande SP.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }]} />

          <div className="mt-8 max-w-2xl">
            <span className="eyebrow">Blog</span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
              Conteúdo sobre Fotografia Corporativa
            </h1>
            <p className="mt-6 font-body text-base text-text-muted md:text-lg">
              Dicas, guias e novidades sobre retratos executivos, fotos para LinkedIn e cobertura
              de eventos corporativos em São Paulo, ABCD e Grande SP.
            </p>
          </div>

          <div className="mt-16">
            <BlogGrid posts={posts} />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
