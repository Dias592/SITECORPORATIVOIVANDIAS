import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import SchemaOrg from '@/components/SchemaOrg';
import { generateMeta } from '@/lib/metadata';
import { getArticleSchema } from '@/lib/schemas';
import { getBlogSlugs, getPostBySlug, getAllPosts } from '@/lib/blog';
import { getServiceBySlug } from '@/lib/services';
import Link from 'next/link';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return generateMeta({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedService = getServiceBySlug(post.relatedServiceSlug);
  const all = getAllPosts();
  const relatedPosts = post.relatedSlugs
    ? post.relatedSlugs.map((s) => getPostBySlug(s)).filter((p): p is NonNullable<typeof p> => !!p)
    : (() => {
        const idx = all.findIndex((p) => p.slug === post.slug);
        return [all[(idx + 1) % all.length], all[(idx + 2) % all.length], all[(idx + 3) % all.length]];
      })();

  return (
    <>
      <SchemaOrg
        schema={getArticleSchema({
          title: post.title,
          description: post.metaDescription,
          slug: post.slug,
          datePublished: post.date,
          image: post.image,
        })}
      />

      <article className="bg-bg pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <Breadcrumbs
            items={[
              { name: 'Início', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8">
            <span className="font-body text-xs uppercase tracking-wide text-cyan-muted">
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <PlaceholderPhoto label={post.title} src={post.image} natural />
          </div>

          <div className="mt-10">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mb-6 font-body text-base leading-relaxed text-text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedService && (
            <div className="mt-10 rounded-2xl border border-border-dark bg-bg-card p-8">
              <h2 className="font-heading text-lg font-bold uppercase text-cyan">Saiba mais</h2>
              <p className="mt-3 font-body text-sm text-text-muted">
                Conheça em detalhes o serviço de{' '}
                <Link href={`/${relatedService.slug}`} className="text-cyan hover:underline">
                  {relatedService.title}
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </article>

      <FAQSection eyebrow="Dúvidas" title="Perguntas frequentes" faqs={post.faqs} />

      <section className="bg-bg-section py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <span className="eyebrow">Continue lendo</span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase text-white md:text-3xl">
            Artigos relacionados
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-xl border border-border-dark bg-bg-card p-5 transition hover:border-cyan"
              >
                <p className="font-body text-xs uppercase tracking-wide text-cyan-muted">
                  {new Date(p.date).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                </p>
                <p className="mt-2 font-heading text-sm font-bold uppercase text-white leading-snug">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
