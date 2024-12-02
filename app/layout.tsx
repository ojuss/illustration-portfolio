import "./globals.css";
import type { Metadata } from "next";

import { Alegreya, Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-alegreya" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oshgupta.com'),
  title: "Osh | Illustrations",
  description: "I create designs that make scientific knowledge clear, engaging, and accessible to a broader audience.",
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Osh | Illustrations",
    description:
      "I create designs that make scientific knowledge clear, engaging, and accessible to a broader audience.",
    siteName: "Osh | Illustrations",
    locale: "en-US",
  },
  twitter: {
    title: "Osh | Illustrations",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${lato.variable} ${alegreya.variable}`}>
        {children}
      </body>
    </html>
  );
}
