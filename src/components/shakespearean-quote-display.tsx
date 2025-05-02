// src/components/shakespearean-quote-display.tsx
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { generateShakespeareanQuote, type ShakespeareanQuoteInput } from '@/ai/flows/shakespearean-quote-generator';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

interface ShakespeareanQuoteDisplayProps {
  celebrantName: string;
  className?: string;
}

export function ShakespeareanQuoteDisplay({ celebrantName, className }: ShakespeareanQuoteDisplayProps) {
  const [quote, setQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state update on unmounted component

    async function fetchQuote() {
      setIsLoading(true);
      setError(null);
      try {
        const input: ShakespeareanQuoteInput = { celebrantName };
        const result = await generateShakespeareanQuote(input);
        if (isMounted) {
          setQuote(result.quote);
        }
      } catch (err) {
        console.error('Error generating quote:', err);
        if (isMounted) {
          setError('Alas, the muse falters. Could not conjure a quote.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchQuote();

    return () => {
      isMounted = false; // Cleanup function to set the flag
    };
  }, [celebrantName]);

  if (isLoading) {
    return (
      <div className={className}>
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 mt-1" />
      </div>
    );
  }

  if (error) {
    return (
        <Alert variant="destructive" className={className}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
    );
  }

  if (!quote) {
    return null; // Should not happen if no error, but good practice
  }

  return (
    <blockquote className={className}>
      <p className="text-lg italic text-secondary leading-relaxed mb-2">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="text-sm text-muted-foreground">- The Bard (inspired by {celebrantName})</footer>
    </blockquote>
  );
}
