"use client";

import { helix, quantum } from "ldrs";
import { Lato, Alegreya } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  helix.register();

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center bgimg">
      <div className="absolute inset-0 bg-gradient-to-b from-accent to-background/0" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="mb-8 inline-block">
              <l-helix size="150" speed="7" color="white"></l-helix>
            </div>

            <h1
              className={`text-4xl md:text-6xl mb-6 text-white ${alegreya.className}`}
            >
              Illustrating Ideas, Illuminating <span className="bg-slate-600 bg-gradient-to-r from-cyan-300 to-pink-600 text-transparent bg-clip-text">Science.</span>
            </h1>

            <p
              className={`text-lg text-gray-50 max-w-xl mb-8 ${lato.className}`}
            >
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
// import Image from "next/image";
// import { helix } from "ldrs";

// export default function Hero() {
//   helix.register();

//   return (
//     <section className="min-h-screen relative overflow-hidden flex items-center bgimg">
//       <div className="absolute inset-0 bg-gradient-to-b from-accent to-background/0" />

//       <div className="container px-4 mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="z-10">
//             <div className="mb-8 inline-block">
//               <l-helix size="150" speed="7" color="white"></l-helix>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello! I'm Osh</h1>

//             <p className="text-lg text-muted-foreground max-w-xl mb-8 text-white">
//               Where science meets artistry - bringing complex concepts to life
//               through detailed illustration
//             </p>

//             <div>
//               <a
//                 href="#gallery"
//                 className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
//               >
//                 View Gallery
//               </a>
//               <a
//                 href="#about"
//                 className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
//               >
//                 About Me
//               </a>
//             </div>
//           </div>

//           {/* <div className="relative z-10">
//             <div className="">
//               <Image
//                 src="https://images.unsplash.com/photo-1608037521244-f1c6c7635194?q=80&w=1000"
//                 alt="Osh portfolio"
//                 className="object-cover rounded-full"
//                 priority
//                 height={500}                rm -rf node_modules package-lock.json
//                 width={500}
//               />
//                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
//             </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
