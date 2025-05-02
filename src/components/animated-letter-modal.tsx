// src/components/animated-letter-modal.tsx
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, Heart, X } from 'lucide-react';

interface AnimatedLetterModalProps {
  triggerButtonText: string;
  title: string;
  letterContent: React.ReactNode;
  celebrantName: string; // Add celebrantName prop
}

export function AnimatedLetterModal({
  triggerButtonText,
  title,
  letterContent,
  celebrantName, // Use celebrantName
}: AnimatedLetterModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted before rendering Dialog
  }, []);

  if (!isMounted) {
    return null; // Don't render Dialog on the server
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-gold to-rose-gold text-primary-foreground hover:opacity-90 transition-opacity duration-300 shadow-md flex items-center gap-2 group"
      >
        <BookOpen className="group-hover:scale-110 transition-transform duration-300" />
        {triggerButtonText}
      </Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[600px] bg-card text-card-foreground p-0 border-none overflow-hidden rounded-lg shadow-xl"
        onOpenAutoFocus={(e) => e.preventDefault()} // Prevent autofocus on first element
      >
        <div className="p-1 bg-gradient-to-br from-gold via-rose-gold to-secondary rounded-lg">
          <div className="bg-card rounded-md p-6 relative">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-semibold flex items-center gap-2 text-primary">
                <Heart className="text-rose-gold" />
                {title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                A special message for {celebrantName}.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[40vh] md:h-[50vh] pr-4">
              <div className="prose prose-invert max-w-none text-foreground leading-relaxed text-base">
                {letterContent}
              </div>
            </ScrollArea>
            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
