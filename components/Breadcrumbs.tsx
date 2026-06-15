import Link from 'next/link';
import SchemaOrg from './SchemaOrg';
import { getBreadcrumbListSchema } from '@/lib/schemas';

type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <SchemaOrg schema={getBreadcrumbListSchema(items)} />
      <nav aria-label="Breadcrumb" className="font-body text-xs uppercase tracking-wide text-text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index === items.length - 1 ? (
                <span className="text-white" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-cyan">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
