import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Literary Love - Happy Birthday!',
  description: 'A special birthday message for someone who loves novels.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Force dark theme */}
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'antialiased font-sans bg-background text-foreground min-h-screen'
        )}
      >
        <main className="container mx-auto px-4 py-8 md:py-16 max-w-3xl">
          {children}
        </main>
        <Toaster /> {/* Add Toaster for potential future use */}
      </body>
    </html>
  );
}
