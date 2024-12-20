"use client";

import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl mb-4 text-black`}>
            Have a story to tell through scientific art? Let's bring it to life!
          </h2>
        </motion.div>
        <div className="flex gap-10 items-center justify-center flex-col">
          <div className="flex gap-10 items-center justify-center">
            <a
              href="mailto:guptaosh365@gmail.com"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <IoMail className="w-11 h-11" />
            </a>
            <a
              href="https://www.linkedin.com/in/osh-241949201/"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a
              href="https://x.com/osh_gupta00"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaSquareXTwitter className="w-10 h-10" />
            </a>
            <a
              href="https://www.instagram.com/osh_mosis/"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <AiFillInstagram className="w-11 h-11" />
            </a>
          </div>
          <p className="text-muted-foreground mb-4 md:mb-0">
            Copyright © Osh Gupta - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
