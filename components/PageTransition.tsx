'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Fade de entrada a cada troca de página, em CSS (sem framer-motion).
// Na primeira carga não anima, para não atrasar a primeira pintura (LCP).
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const primeira = useRef(true);

  useEffect(() => {
    primeira.current = false;
  }, []);

  return (
    <div key={pathname} className={primeira.current ? undefined : 'anim-page-in'}>
      {children}
    </div>
  );
}
