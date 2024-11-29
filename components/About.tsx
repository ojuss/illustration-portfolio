import React from "react";
import Logo from "./Logo";
import OshPic2 from "@/assets/oshpfp2.jpg";
import Image from "next/image";

import { IoIosSchool } from "react-icons/io";

 const Ouch = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6 "
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center">
        <div className="relative ">
          <Logo />
          <div className="mt-12 relative">
            <Image
              src={OshPic2}
              alt="Osh's Pic"
              className="w-auto h-[450px] lg:h-[550px] md:h-[500px] pointer-events-none"
            />
          </div>
        </div>

        <div className="space-y-8 mt-10">
          <h1 className={`text-5xl tracking-wider text-gray-900`}>
            Hello from{" "}
            <span className="bg-slate-600 font-bold bg-gradient-to-r from-purple-300 to-blue-400 text-transparent bg-clip-text">
              Osh!
            </span>
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Illustration is my science in motion.
              <br /> <br /> Hi, I'm Osh—a freelance Scientific Illustrator and
              Visual Communicator with a Master's in Biology and a minor in
              Science Education. Based in India, I transform complex scientific
              ideas into clear, engaging visuals. <br />
              <br />
              Scientific knowledge drives progress, but its true impact relies
              on how well it is communicated. With a passion for immunology and
              expertise in biology and design, I create visuals that make
              research accessible and meaningful. By using visual language to
              bridge gaps across cultures and audiences, I help scientists
              connect and make their work stand out. When I'm not working on
              visuals, you'll find me skating, practicing yoga, or exploring new
              ways to express my creativity through painting.
            </p>

            <p className="flex items-center gap-3">
              <IoIosSchool size={44} />{" "}
              <span className="font-bold">
                IISER Mohali BS-MS integrated program
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ouch;
