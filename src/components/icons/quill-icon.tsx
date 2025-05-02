// src/components/icons/quill-icon.tsx
import type React from 'react';

export function QuillIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2 L16 6 L10 12 L6 8 L12 2 Z" />
      <path d="M16 6 L20 10" />
      <path d="M10 12 L2 20" />
      <path d="M6 8 L2 12" />
      <path d="M18 14 C 18 14 16 18 12 22 C 8 18 6 14 6 14" />
    </svg>
  );
}
