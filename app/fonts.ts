import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

// Configure Inter for body and headings
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

// Configure JetBrains Mono for code and accents
export const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

