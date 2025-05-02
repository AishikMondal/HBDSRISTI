// 'use server'
'use server';

/**
 * @fileOverview Generates personalized romantic quotes in a Shakespearean style for birthdays.
 *
 * - generateShakespeareanQuote - A function that generates a Shakespearean quote.
 * - ShakespeareanQuoteInput - The input type for the generateShakespeareanQuote function.
 * - ShakespeareanQuoteOutput - The return type for the generateShakespeareanQuote function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ShakespeareanQuoteInputSchema = z.object({
  celebrantName: z.string().describe('The name of the birthday celebrant.'),
});
export type ShakespeareanQuoteInput = z.infer<typeof ShakespeareanQuoteInputSchema>;

const ShakespeareanQuoteOutputSchema = z.object({
  quote: z.string().describe('A romantic Shakespearean-style quote related to love and birthdays, personalized for the celebrant.'),
});
export type ShakespeareanQuoteOutput = z.infer<typeof ShakespeareanQuoteOutputSchema>;

export async function generateShakespeareanQuote(input: ShakespeareanQuoteInput): Promise<ShakespeareanQuoteOutput> {
  return generateShakespeareanQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'shakespeareanQuotePrompt',
  input: {
    schema: z.object({
      celebrantName: z.string().describe('The name of the birthday celebrant.'),
    }),
  },
  output: {
    schema: z.object({
      quote: z.string().describe('A romantic Shakespearean-style quote related to love and birthdays, personalized for the celebrant.'),
    }),
  },
  prompt: `Compose a romantic Shakespearean-style quote related to love and birthdays, personalized for {{celebrantName}}. The quote should sound like it was written by Shakespeare and should be suitable for a birthday message to express love and admiration.`,
});

const generateShakespeareanQuoteFlow = ai.defineFlow<
  typeof ShakespeareanQuoteInputSchema,
  typeof ShakespeareanQuoteOutputSchema
>({
  name: 'generateShakespeareanQuoteFlow',
  inputSchema: ShakespeareanQuoteInputSchema,
  outputSchema: ShakespeareanQuoteOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
