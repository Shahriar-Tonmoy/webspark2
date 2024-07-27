import React, { useState } from 'react';
import Slider1 from '../assets//Handwritten design to WebPage.png';
import Slider2 from '../assets/Image to webpage.png';
import Slider3 from '../assets/Sketch Board Design to Webpage.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    Slider1,
    Slider2,
    Slider3
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  setTimeout(nextSlide, 5000);

  return (
    <div className="relative w-full">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 ease-in-out absolute w-full h-full`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          onClick={prevSlide}
          className="w-8 h-8 bg-gray-800 text-white rounded-full focus:outline-none"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          onClick={nextSlide}
          className="w-8 h-8 bg-gray-800 text-white rounded-full focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
