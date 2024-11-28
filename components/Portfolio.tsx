"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Pic1 from "@/assets/1 CELL.png";
import Pic2 from "@/assets/0056.png";
import Pic3 from "@/assets/membrane.png";
import Pic4 from "@/assets/closer interaction view_.png";
import Pic5 from "@/assets/Osh sub2.png";
import Pic6 from "@/assets/graphene.png";
import Pic7 from "@/assets/hb, rbc.png";
import Pic8 from "@/assets/Osh sars cov2 illustration.png";
import Pic9 from "@/assets/Osh submission.png";
import Pic10 from "@/assets/osh submission1.png";
import Pic11 from "@/assets/osh_molecule sub.png";
import Pic12 from "@/assets/proj1 innate immunity-02.jpg";
import Pic13 from "@/assets/proj2 adaptive immunity-01.jpg";
import Pic14 from "@/assets/VHH.png";
import Pic15 from "@/assets/virus.png";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"] });

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof artworks)[0] | null
  >(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="text-center mb-16">
          <h2 className={`text-5xl mb-4 text-black ${alegreya.className}`}>
            Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of ideas transformed into art.
          </p>
        </div>
      <div className="container px-4 mx-auto overflow-x-scroll max-h-screen">
        
        <div className="gallery-grid ">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative overflow-hidden">
                <div
                  style={{ paddingBottom: `${(artwork.height / 800) * 100}%` }}
                />
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-primary/80">
                      {artwork.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center lg:px-40 p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              height={selectedImage.height}
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}

const artworks = [
  {
    id: 1,
    title: "Cell Structure",
    category: "Biology",
    image: Pic15,
    height: 600,
  },
  {
    id: 2,
    title: "Neural Network",
    category: "Neuroscience",
    image: Pic3,
    height: 600,
  },
  {
    id: 3,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic1,
    height: 600,
  },
  {
    id: 4,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic4,
    height: 600,
  },
  {
    id: 5,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic5,
    height: 600,
  },
  {
    id: 6,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic6,
    height: 600,
  },
  {
    id: 7,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic7,
    height: 600,
  },
  {
    id: 8,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic8,
    height: 600,
  },
  {
    id: 9,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic9,
    height: 600,
  },
  {
    id: 10,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic10,
    height: 600,
  },
  {
    id: 11,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic11,
    height: 600,
  },
  {
    id: 12,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic12,
    height: 600,
  },
  {
    id: 13,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic13,
    height: 600,
  },
  {
    id: 14,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic14,
    height: 600,
  },
  {
    id: 15,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic2,
    height: 600,
  },
  {
    id: 16,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic13,
    height: 600,
  },
  {
    id: 17,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic14,
    height: 600,
  },
  
];
