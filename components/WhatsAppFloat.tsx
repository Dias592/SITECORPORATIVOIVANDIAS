'use client';

import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/lib/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Ivan Dias Fotógrafo no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-110 focus-visible-ring md:bottom-10 md:right-10"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366]" />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8 fill-white" aria-hidden="true" role="img">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.387.703 4.61 1.917 6.477L4 29l7.73-1.877A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.96 0-3.79-.55-5.35-1.51l-.384-.227-4.587 1.114 1.225-4.469-.25-.398A9.71 9.71 0 0 1 6.25 15c0-5.385 4.379-9.75 9.754-9.75S25.75 9.615 25.75 15s-4.371 9.75-9.746 9.75zm5.36-7.302c-.293-.147-1.74-.858-2.01-.957-.27-.098-.466-.147-.662.147-.196.293-.76.957-.932 1.154-.171.196-.343.22-.636.073-.293-.147-1.236-.456-2.354-1.453-.87-.776-1.458-1.734-1.629-2.027-.171-.293-.018-.452.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.49.098-.196.049-.367-.024-.514-.073-.147-.662-1.595-.907-2.184-.239-.574-.483-.497-.662-.506l-.564-.01a1.083 1.083 0 0 0-.785.367c-.27.293-1.03 1.007-1.03 2.455s1.054 2.846 1.2 3.043c.147.196 2.073 3.165 5.022 4.438.701.303 1.249.484 1.676.62.704.224 1.345.192 1.852.117.565-.085 1.74-.712 1.985-1.4.245-.69.245-1.28.171-1.4-.073-.122-.269-.196-.563-.343z" />
      </svg>
    </a>
  );
}
