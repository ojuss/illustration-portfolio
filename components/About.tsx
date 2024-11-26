"use client"

import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import OshPic from "@/assets/oshpfp.jpg";
import Image from "next/image";
import { Alegreya } from "next/font/google";
import { quantum } from "ldrs";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"] });
quantum.register();

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2  items-center">
        <div className="relative ">
          
          <div className="mt-12 relative">
            <Image
              src={OshPic}
              alt="Osh's Pic"
              className="w-auto h-[500px]"
            />
          </div>
        </div>

        <div className="space-y-8 mt-10">
          <h1
            className={`text-6xl font-bold tracking-wider text-gray-900 ${alegreya.className}`}
          >
            Nice to meet you!
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Hackney started as a small interior design firm in downtown
              Michigan, aiming to help home buyers to make do with the new space
              that they had acquired. It soon became obvious that it would make
              sense to help our clients see beyond the walls and floor plans,
              and be there with them from the get-go.
            </p>

            <p>
              Currently, we offer house realtor, interior design, and
              architecture services in order to help our customers find their
              forever homes as seamlessly and painlessly as possible. We value
              our customers above everything else, meaning that we won't take
              'OK' as an answer.
            </p>
          </div>

          {/* <div className="pt-8">
            <SocialLinks />
          </div> */}
          <Logo />
          {/* <l-quantum size="100" speed="7" color="black"/> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
