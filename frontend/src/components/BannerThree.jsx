import React, { useState, useEffect } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";

const BannerThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: "/assets/img/banner/1960x600-2.png",
      icon: <FaTruckMoving className="text-4xl text-pink-600" />,
      service: "Road Transport",
      image: "assets/img/banner/truck.png"
    },
    {
      background: "/assets/img/banner/1960x600.png",
      icon: <RiFlightTakeoffFill className="text-4xl text-pink-600" />,
      service: "Airlines Transport",
      image: "assets/img/banner/aeroplane.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] mt-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="relative h-full flex items-center"
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 text-center lg:text-left">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      Reliable Logistics Solution
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                      Delivering your goods swiftly and securely, anywhere you need.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      {slide.icon}
                      <span className="text-xl text-white font-semibold">
                        {slide.service}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={slide.image}
                      alt={slide.service}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-pink-600 w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerThree;
