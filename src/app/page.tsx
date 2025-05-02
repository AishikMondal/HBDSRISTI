// src/app/page.tsx
import { HeroPortrait } from '@/components/hero-portrait';
import { AnimatedLetterModal } from '@/components/animated-letter-modal';
import { ShakespeareanQuoteDisplay } from '@/components/shakespearean-quote-display';
import { Separator } from '@/components/ui/separator';
import { QuillIcon } from '@/components/icons/quill-icon';

// Configuration - Replace with actual data
const CELEBRANT_NAME = "Your Crush's Name"; // IMPORTANT: Replace this!
const CELEBRANT_IMAGE_URL = "https://picsum.photos/300/300"; // Replace with actual image URL
const LETTER_TITLE = `A Chapter For You, ${CELEBRANT_NAME}`;
const LETTER_TRIGGER_TEXT = "Read My Letter";

const LetterContent = () => (
  <>
    <p className="mb-4">My Dearest {CELEBRANT_NAME},</p>
    <p className="mb-4">
      On this day, as the pages turn to mark another year of your incredible story,
      I find myself wanting to add a small verse, a heartfelt note in the margins of your life.
      Happy Birthday! 🎉
    </p>
    <p className="mb-4">
      Knowing you feels like discovering a classic novel, one filled with unexpected twists,
      profound wisdom, and moments that take my breath away. Your presence adds such vibrant
      color and depth to the world around you (and certainly to mine!).
    </p>
    <p className="mb-4">
      I admire [mention a specific quality you admire - e.g., your passion for stories, your kind heart, your brilliant mind] immensely.
      It's truly inspiring to see [mention something specific they do or achieve].
    </p>
    <p className="mb-4">
      May this new chapter be your most exciting one yet, filled with joy, adventure, love,
      and all the beautiful narratives you deserve. May your story continue to unfold with
      grace and wonder.
    </p>
    <p>With deepest affection and warmest wishes,</p>
    <p>[Your Name]</p>
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
