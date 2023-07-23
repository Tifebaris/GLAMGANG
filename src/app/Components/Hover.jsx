'use client'
import React, { useState } from 'react';

const ImageWithHover = ({ imageUrl, hoverImageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? hoverImageUrl : imageUrl}
        alt="Image"
        className="object-cover"
      />
    </div>
  );
};

export default ImageWithHover;
