'use client'
// src/components/CoatsAndJackets.js
import React, { useState } from 'react';

const CoatsAndJackets = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const coatsAndJackets = [
    // Add your coat and jacket data here (image URLs, names, etc.).
    // Example:
    { id: 1, name: 'Coat 1', imageUrl: '/k3.jpeg', hoverImageUrl: '/k1.jpeg' },
    { id: 2, name: 'Jacket 1', imageUrl: '/k5.jpeg', hoverImageUrl: '/k2.jpeg' },
    // Add more items as needed
  ];

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {coatsAndJackets.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={hoveredItemId === item.id ? item.hoverImageUrl : item.imageUrl}
            alt={item.name}
            className="object-cover w-full h-64 rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 rounded-lg">
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoatsAndJackets;
