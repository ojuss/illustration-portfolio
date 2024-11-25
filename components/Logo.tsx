import React from 'react';

const Logo = () => {
  return (
    <div className="w-12 h-12 relative">
      <div className="absolute inset-0 animate-spin-slow">
        <div className="w-full h-1 bg-gray-900 absolute top-1/2 left-0 transform -translate-y-1/2"></div>
        <div className="w-full h-1 bg-gray-900 absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45"></div>
        <div className="w-full h-1 bg-gray-900 absolute top-1/2 left-0 transform -translate-y-1/2 rotate-90"></div>
        <div className="w-full h-1 bg-gray-900 absolute top-1/2 left-0 transform -translate-y-1/2 rotate-[135deg]"></div>
      </div>
    </div>
  );
};

export default Logo;