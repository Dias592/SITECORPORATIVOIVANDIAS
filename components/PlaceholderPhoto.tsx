import Image from 'next/image';

type PlaceholderPhotoProps = {
  label: string;
  className?: string;
  src?: string;
  priority?: boolean;
  /** When true, the image renders at its natural aspect ratio (no crop, no fixed container height). */
  natural?: boolean;
};

export default function PlaceholderPhoto({
  label,
  className = '',
  src,
  priority = false,
  natural = false,
}: PlaceholderPhotoProps) {
  if (src) {
    if (natural) {
      return (
        <Image
          src={src}
          alt={label}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`h-auto w-full ${className}`}
          priority={priority}
        />
      );
    }
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-top"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`placeholder-photo ${className}`} role="img" aria-label={label}>
      <span>📷 {label}</span>
    </div>
  );
}
