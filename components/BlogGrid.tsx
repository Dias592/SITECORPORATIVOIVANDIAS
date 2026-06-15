import Link from 'next/link';
import PlaceholderPhoto from './PlaceholderPhoto';
import { BlogPost } from '@/lib/blog';

type BlogGridProps = {
  posts: BlogPost[];
  limit?: number;
};

export default function BlogGrid({ posts, limit }: BlogGridProps) {
  const items = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border-dark bg-bg-card transition-colors hover:border-cyan focus-visible-ring"
        >
          <div className="aspect-[16/10]">
            <PlaceholderPhoto label={post.title} src={post.image} />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="font-body text-xs uppercase tracking-wide text-cyan-muted">
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold text-white group-hover:text-cyan">{post.title}</h3>
            <p className="mt-3 font-body text-sm text-text-muted">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
