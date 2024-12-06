"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import RBC from "@/public/1RBC, hb, oxy.webp";
import Virus from "@/public/2virus.webp";
import PlasmaMembrane from "@/public/3Plasmamembrane.webp";
import AbstractIcosphere from "@/public/4Abstract_icosphere_gif.gif";
import DarkMesh from "@/public/5Dark_mesh gif.gif";
import DNAtoChromosome from "@/public/6DNA to chromosome.webp";
import RBCHbStructure from "@/public/7RBC_Hb structure.webp";
import WBC from "@/public/8WBC.webp";
import SARS from "@/public/9 SARS_ CoV2 structure.webp";
import StaphMacrophage from "@/public/10 S. aureus-macrophage-min.webp";
import CARTCellAttack from "@/public/11 CAR T cell attack-min.webp";
import CARTCellInteraction from "@/public/12closer interaction CAR-T cell.webp";
import Interneuron from "@/public/13 Interneuron.webp";
import StaphStructure from "@/public/14 S. aureus structure.webp";
import PhageDisplay from "@/public/15Phage_display_biopan.webp";
import Phagocytosis from "@/public/16 Phagocytosis.webp";
import InnateImmunity from "@/public/17 Innate immunity.webp";
import AdaptiveImmunity from "@/public/18 Adaptive immunity.webp";
import Apoptosis from "@/public/19 Apoptosis.webp";
import Graphene from "@/public/20 graphene.webp";
import Cell from "@/public/21 CELL.webp";
import CellStructure from "@/public/22Cell_structure.webp";
import CellEvolution from "@/public/23 Cell_evolution.webp";


export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof artworksOrdered)[0] | null
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
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A showcase of my recent ideas transformed into art.
        </p>
      </div>
      <div className="container px-4 mx-auto ">
        <div className="gallery-grid ">
          {artworksOrdered.map((artwork, index) => (
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
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-primary ">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl mb-4 text-gray-600 text-center py-12">Some more of my work</h2>
      <div className="container px-4 mx-auto max-h-screen overflow-y-scroll">
        <div className="gallery-grid ">
          {artworksUnordered.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative overflow-hidden ">
                <div
                  style={{ paddingBottom: `${(artwork.height / 800) * 100}%` }}
                />
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg max-w-full"
                  quality={75}
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

const artworksOrdered = [
  {
    id: 1,
    title: "RBC, HB, OXY",
    image: RBC,
    height: 800,
  },
  {
    id: 2,
    title: "Abstracted Icosphere",
    image: AbstractIcosphere,
    height: 800,
  },
  {
    id: 3,
    title: "Virus",
    image: Virus,
    height: 1000,
  },
  {
    id: 5,
    title: "Mesh",
    image: DarkMesh,
    height: 600,
  },
  {
    id: 6,
    title: "Plasma Membrane",
    image: PlasmaMembrane,
    height: 800,
  },
  {
    id: 4,
    title: "DNA to Chromosome",
    image: DNAtoChromosome,
    height: 800,
  },
];

const artworksUnordered = [
  {
    id: 8,
    title: "RBC Hb Structure",
    image: RBCHbStructure,
    height: 800,
  },
  {
    id: 9,
    title: "White Blood Cell",
    image: WBC,
    height: 600,
  },
  {
    id: 10,
    title: "SARS-CoV2 Structure",
    image: SARS,
    height: 800,
  },
  {
    id: 11,
    title: "Staphylococcus aureus Macrophage Interaction",
    image: StaphMacrophage,
    height: 1000,
  },
  {
    id: 12,
    title: "CAR-T Cell Attack",
    image: CARTCellAttack,
    height: 600,
  },
  {
    id: 13,
    title: "Closer Interaction CAR-T Cell",
    image: CARTCellInteraction,
    height: 800,
  },
  {
    id: 14,
    title: "Interneuron",
    image: Interneuron,
    height: 1000,
  },
  {
    id: 15,
    title: "Staphylococcus aureus Structure",
    image: StaphStructure,
    height: 600,
  },
  {
    id: 16,
    title: "Phage Display",
    image: PhageDisplay,
    height: 800,
  },
  {
    id: 17,
    title: "Phagocytosis",
    image: Phagocytosis,
    height: 600,
  },
  {
    id: 18,
    title: "Innate Immunity",
    image: InnateImmunity,
    height: 1000,
  },
  {
    id: 19,
    title: "Adaptive Immunity",
    image: AdaptiveImmunity,
    height: 600,
  },
  {
    id: 20,
    title: "Apoptosis",
    image: Apoptosis,
    height: 800,
  },
  {
    id: 21,
    title: "Graphene",
    image: Graphene,
    height: 1000,
  },
  {
    id: 22,
    title: "Cell",
    image: Cell,
    height: 800,
  },
  {
    id: 23,
    title: "Cell Structure",
    image: CellStructure,
    height: 1000,
  },
  {
    id: 24,
    title: "Cell Evolution",
    image: CellEvolution,
    height: 1000,
  },
];
