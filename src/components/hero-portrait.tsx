// src/components/hero-portrait.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeroPortraitProps {
  imageUrl: string;
  altText: string;
  size?: number; // Optional size prop (default 150)
}

export function HeroPortrait({ imageUrl, altText, size = 150 }: HeroPortraitProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100); // Small delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'relative mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gold transition-all duration-1000 ease-out',
        'opacity-0 translate-y-4', // Initial state for animation
        isVisible && 'opacity-100 translate-y-0', // Final state for animation
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        priority // Prioritize loading this image
        data-ai-hint="person portrait face"
      />
    </div>
  );
}
