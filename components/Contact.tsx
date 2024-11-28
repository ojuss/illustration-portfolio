"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section className="py-12 bg-[#f3f3f4]">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl mb-4 text-black`}>
            Have a story to tell through scientific art? Let's bring it to
            life!
          </h2>
        </motion.div>
        <SocialLinks />
      </div>
    </section>
  );
}
