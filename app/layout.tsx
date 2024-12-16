import type { Metadata } from "next";
import { inter, jetbrainsMono } from './fonts'
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Amos Okello",
  description: "Optimizing business process through software",
};

const socialLinks = {
  instagram: 'https://instagram.com/f1sher.man',
  linkedin: 'https://linkedin.com/in/amos-ng-uono-179aa8169/',
  github: 'https://github.com/mohraf',
  twitter: 'https://twitter.com/f1sher_man',
  email: 'amosokello04@gmail.com'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="bg-black text-white font-sans"
      >
        <Navbar />
        {children}

        <TooltipProvider>
          <Toaster />
          <Sonner />
        </TooltipProvider>
        <Footer socialLinks={socialLinks} />
      </body>
    </html>
  );
}
