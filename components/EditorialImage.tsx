'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallbackTitle?: string;
}

export default function EditorialImage({
  src,
  alt,
  className = 'object-cover',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackTitle = 'Editorial Beauty',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EDE3DA] via-[#E8DFD1] to-[#DFC1B8]/40 p-6 text-center"
      >
        <Sparkles className="mb-3 h-6 w-6 text-[#6B534A]" aria-hidden="true" />
        <span className="font-editorial text-xl text-[#3A2821]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
