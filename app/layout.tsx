import "./globals.css";
import type { Metadata } from "next";

import { Alegreya, Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Scientific Illustrator Portfolio",
  description: "Portfolio showcasing scientific illustrations and artwork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
