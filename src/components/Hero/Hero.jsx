import React from "react";
import Heroimage from "../../assets/image/caroousel.jpg";

const Hero = () => {
  return (
    <div className="h-full bg-black/20 w-full">
      <div className="flex flex-col-reverse items-center justify-center h-full p-6 sm:flex-row sm:gap-8 sm:justify-around">
        {/* Left Content (Text and Title) */}
        <div className="container flex flex-col items-center sm:items-start text-center sm:text-left mb-8 sm:mb-0">
          <div className="grid grid-cols-5 gap-2 mb-6">
            {["T", "I", "D", "E", "S"].map((letter, index) => (
              <h1
                key={index}
                data-aos="fade-up"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-blue-600 font-sans">
                {letter}
              </h1>
            ))}
          </div>
          <h4 className="text-white text-lg sm:text-2xl font-semibold mb-4">
            <q className="font-serif">Explore Discover Conserve</q>
          </h4>
          <p className="text-white text-sm sm:text-base lg:text-lg leading-loose max-w-lg">
            Technology for Intelligent Detection of Ecosystem Species is a
            cutting-edge system that uses advanced technology to intelligently
            track and identify marine species in their natural ecosystems.
            Empowering conservation efforts, TIDES supports sustainable ocean
            management and fosters a deeper understanding of marine
            biodiversity. Dive into a better future with TIDES!
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
          <img
            src={Heroimage}
            alt="Marine Ecosystem"
            className="w-full h-72 sm:h-80 md:h-96 object-cover border-2 border-gray-800 rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
