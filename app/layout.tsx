import type { Metadata } from "next";
import { inter, jetbrainsMono } from './fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "F1SHERMAN TECHNOLOGIES",
  description: "Optimizing business process through software",
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
        {children}
      </body>
    </html>
  );
}
