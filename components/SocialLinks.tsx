import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const SocialLinks = () => {
  return (
    <div className="flex gap-10 items-center justify-center flex-col">
      <div className="flex gap-10 items-center justify-center">
      <a
        href="mailto:guptaosh00@gmail.com"
        className="text-gray-800 hover:text-gray-600 transition-colors"
      >
        <IoMdMail className="w-11 h-11" />
      </a>
      <a
        href="https://www.linkedin.com/in/osh-241949201/"
        className="text-gray-800 hover:text-gray-600 transition-colors"
      >
        <FaLinkedin className="w-10 h-10" />
      </a>
      <a
        href="https://www.linkedin.com/in/osh-241949201/"
        className="text-gray-800 hover:text-gray-600 transition-colors"
      >
        <FaSquareXTwitter className="w-10 h-10" />
      </a>
      
      </div>
      <p className="text-muted-foreground mb-4 md:mb-0">
        © {new Date().getFullYear()} Osh Portfolio. All rights
        reserved.
      </p>
    </div>
  );
};

export default SocialLinks;
