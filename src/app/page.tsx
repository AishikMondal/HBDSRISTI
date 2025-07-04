// src/app/page.tsx
import { HeroPortrait } from '@/components/hero-portrait';
import { AnimatedLetterModal } from '@/components/animated-letter-modal';
import { ShakespeareanQuoteDisplay } from '@/components/shakespearean-quote-display';
import { Separator } from '@/components/ui/separator';
import { QuillIcon } from '@/components/icons/quill-icon';

// Configuration - Updated
const CELEBRANT_NAME = "Sristi"; // Updated name
const CELEBRANT_IMAGE_URL = "https://picsum.photos/300/300"; // Placeholder image
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
      Getting to know you has been like discovering a favorite novel – one filled with unexpected depth,
      captivating moments, and a unique perspective that makes me see the world a little differently.
      Your presence truly adds something special.
    </p>
    <p className="mb-4">
      I genuinely admire your approach to things, the way you navigate challenges with grace,
      and the unique light you bring. It's quietly inspiring.
    </p>
    <p className="mb-4">
      May this new chapter be your most fulfilling one yet, filled with joy, adventure, wonderful discoveries,
      and all the beautiful narratives you deserve. May your story continue to unfold with
      happiness and wonder.
    </p>
    <p>With warmest thoughts,</p>
    <p>Aishik</p> {/* Updated name */}
  </>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 animate-fade-in"> {/* Added fade-in animation */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold to-rose-gold font-serif cursor-default transition-all duration-300 hover:tracking-wider"> {/* Added hover effect */}
          Happy Birthday, {CELEBRANT_NAME}!
        </h1>
        <HeroPortrait imageUrl={CELEBRANT_IMAGE_URL} altText={`Portrait of ${CELEBRANT_NAME}`} size={180} />
      </header>

      <Separator className="w-1/2 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent h-[1px]" />

      <section className="w-full max-w-xl space-y-6">
         {/* Added group hover for interactivity */}
        <div className="flex justify-center items-center gap-2 text-secondary group cursor-default">
            <QuillIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110" /> {/* Added hover effect */}
            <h2 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">A Verse For You</h2> {/* Added hover effect */}
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
