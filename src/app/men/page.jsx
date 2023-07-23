// pages/index.js
import React from 'react';

const imagesWithCaptions = [
  {
    imageUrl: '/img8.jpeg',
    caption: 'Image 1',
  },
 
  // Add more image objects as needed
];

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap">
      {imagesWithCaptions.map((image, index) => (
        <div
          key={index}
          className="w-full h-screen bg-black flex items-center justify-center"
        >
          <div
            className="max-h-full max-w-full p-4"
            style={{
              backgroundImage: `url(${image.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <p className="text-white text-xl font-bold bg-black bg-opacity-50 p-2">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
