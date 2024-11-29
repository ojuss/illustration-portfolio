"use client";

import { helix } from "ldrs";
import { useEffect } from "react";


export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      helix.register();
    }
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center bgimg">
      <div className="absolute inset-0 bg-gradient-to-b from-accent to-background/0" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="mb-8 inline-block">
              <l-helix size="110" speed="7" color="white"></l-helix>
              
            </div>

            <h1 className={`text-4xl md:text-6xl mb-6 text-white `}>
              Illustrating Ideas, Illuminating{" "}
              <span className="bg-slate-600 bg-gradient-to-r from-cyan-300 to-pink-600 text-transparent bg-clip-text">
                Science.
              </span>
            </h1>

            <p className={`text-lg text-gray-50 max-w-xl mb-8 font-bold`}>
              I create designs that make scientific knowledge clear, engaging,
              and accessible to a broader audience.
            </p>

            <div>
              <a
                href="#portfolio"
                className="inline-block bg-[#5dbbf2] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-400 transition-colors mr-4"
              >
                View Portfolio
              </a>
              <a
                href="#about"
                className="inline-block bg-[#2d375d] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors "
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
