// src/app/page.tsx
import { HeroPortrait } from '@/components/hero-portrait';
import { AnimatedLetterModal } from '@/components/animated-letter-modal';
import { ShakespeareanQuoteDisplay } from '@/components/shakespearean-quote-display';
import { Separator } from '@/components/ui/separator';
import { QuillIcon } from '@/components/icons/quill-icon';

// Configuration - Updated
const CELEBRANT_NAME = "Sristi"; // Updated name
const CELEBRANT_IMAGE_URL = "https://picsum.photos/300/300"; // Replace with actual image URL if desired
const LETTER_TITLE = `A Chapter For You, ${CELEBRANT_NAME}`;
const LETTER_TRIGGER_TEXT = "Read My Letter";

// Refined Letter Content for Subtlety
const LetterContent = () => (
  <>
    <p className="mb-4">My Dearest {CELEBRANT_NAME},</p>
    <p className="mb-4">
      On this day, as the pages turn to mark another year of your incredible story,
      I find myself wanting to add a small verse, a heartfelt note in the margins of your life.
      Happy Birthday! 🎉
    </p>
    <p className="mb-4">
      Getting to know you has been like discovering a favorite novel, one filled with unexpected wisdom,
      captivating moments, and a perspective that makes me see things differently. Your presence adds such a
      unique and wonderful dimension to the world.
    </p>
    <p className="mb-4">
      I truly admire your unique perspective on things and how you approach challenges with such grace.
      It's genuinely inspiring to witness.
    </p>
    <p className="mb-4">
      May this new chapter be your most fulfilling one yet, filled with joy, adventure, wonderful discoveries,
      and all the beautiful narratives you deserve. May your story continue to unfold with
      grace and wonder.
    </p>
    <p>With warmest thoughts,</p>
    <p>[Your Name] {/* Or leave this out for more mystery */}</p>
  </>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 animate-fade-in">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold to-rose-gold font-serif">
          Happy Birthday, {CELEBRANT_NAME}!
        </h1>
        <HeroPortrait imageUrl={CELEBRANT_IMAGE_URL} altText={`Portrait of ${CELEBRANT_NAME}`} size={180} />
      </header>

      <Separator className="w-1/2 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent h-[1px]" />

      <section className="w-full max-w-xl space-y-6">
        <div className="flex justify-center items-center gap-2 text-secondary">
            <QuillIcon className="w-5 h-5" />
            <h2 className="text-xl font-semibold">A Verse For You</h2>
        </div>
        <ShakespeareanQuoteDisplay celebrantName={CELEBRANT_NAME} className="p-4 rounded-lg bg-card shadow-sm border border-muted" />
      </section>

      <Separator className="w-1/2 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent h-[1px]" />

      <section>
        <AnimatedLetterModal
          triggerButtonText={LETTER_TRIGGER_TEXT}
          title={LETTER_TITLE}
          letterContent={<LetterContent />}
          celebrantName={CELEBRANT_NAME}
        />
      </section>

      <footer className="mt-12 text-sm text-muted-foreground">
        <p>Crafted with admiration.</p>
      </footer>
    </div>
  );
}
