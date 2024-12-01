"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import RBC from "@/public/1RBC, hb, oxy.png";
import Virus from "@/public/2Virus.png";
import Plasama from "@/public/3Plasmamembrane.png";
import Icosphere from "@/public/4Abstract_icosphere_gif.gif";
import Mesh from "@/public/5Dark_mesh gif.gif"
import DNA from "@/public/6DNA to chromosome.png"
import RBC_HB from "@/public/7RBC_Hb structure.png"

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof artworks)[0] | null
  >(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-6xl mb-4 text-black">Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of ideas transformed into art.
        </p>
      </div>
      <div className="container px-4 mx-auto ">
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
                  className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg max-w-full"
                  quality={25}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-8 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl max-h-xl mx-auto w-full">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              height={selectedImage.height}
              className="object-contain pointer-events-none"
              loading="lazy"
              quality={100}
            />
          </div>
          <button
            className="absolute top-8 right-8 text-white text-2xl z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

const artworks = [
  {
    id: 1,
    title: "RBC, HB, OXY",
    image: RBC,
    height: 1000,
  },
  {
    id: 2,
    title: "Neural Network",
    image: Virus,
    height: 800,
  },
  {
    id: 3,
    title: "DNA Helix",

    image: Plasama,
    height: 600,
  },
  {
    id: 4,
    title: "DNA Helix",

    image: Icosphere,
    height: 600,
  },
  {
    id: 5,
    title: "DNA Helix",

    image: Mesh,
    height: 600,
  },
  {
    id: 6,
    title: "DNA Helix",

    image: DNA,
    height: 800,
  },
  {
    id: 7,
    title: "DNA Helix",

    image: RBC_HB,
    height: 1000,
  }
];
