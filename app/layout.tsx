import "./globals.css";
import type { Metadata } from "next";

import { Alegreya, Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-alegreya" });

export const metadata: Metadata = {
  title: "Osh's Portfolio",
  description: "I create designs that make scientific knowledge clear, engaging, and accessible to a broader audience.",
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
