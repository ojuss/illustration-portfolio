import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-6 items-center">
      <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
        <Twitter className="w-15 h-15" />
      </a>
      <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
        <Facebook className="w-15 h-15" />
      </a>
      <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
        <Instagram className="w-15 h-15" />
      </a>
    </div>
  );
};

export default SocialLinks;