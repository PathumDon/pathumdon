import React from "react";
import { useState } from "react";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";

const ImageGallery = () => {
  const images = [
    "../../src/assets/images/pic1.jpg",
    "../../src/assets/images/pic2.jpg",
    "../../src/assets/images/pic3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute md:left-10 left-5 top-1/2 transform -translate-y-1/2 bg-white opacity-50 text-gray-500 text-xl px-2 py-1 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaCaretLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute md:right-10 right-5 top-1/2 transform -translate-y-1/2 bg-white opacity-50 text-gray-500 text-xl px-2 py-1 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaCaretRight />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
