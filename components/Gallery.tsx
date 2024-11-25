"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Cell from "@/assets/1 CELL.png"
import Pic2 from "@/assets/0056.png"
import Pic3 from "@/assets/Brain and molecule.png"
import Pic4 from "@/assets/not submitted.png"
import Pic5 from "@/assets/Osh sub2.png"
import Pic6 from "@/assets/pathogen-macrophage final.png"

const artworks = [
  {
    id: 1,
    title: "Cell Structure",
    category: "Biology",
    image: Pic2,
    height: 600
  },
  {
    id: 2,
    title: "Neural Network",
    category: "Neuroscience",
    image: Cell,
    height: 1000
  },
  {
    id: 3,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic3,
    height: 800
  },
  {
    id: 4,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic4,
    height: 800
  },
  {
    id: 5,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic5,
    height: 600
  },
  {
    id: 6,
    title: "DNA Helix",
    category: "Molecular Biology",
    image: Pic6,
    height: 1000
  },
  // Add more artwork items here with varying heights
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of scientific illustrations, showcasing the intricate details
            and beauty of scientific concepts through artistic visualization.
          </p>
        </motion.div>

        <div className="gallery-grid">
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
                <div style={{ paddingBottom: `${(artwork.height / 800) * 100}%` }} />
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">{artwork.title}</h3>
                    <p className="text-sm text-primary/80">{artwork.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-40 z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              
              height={selectedImage.height}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}