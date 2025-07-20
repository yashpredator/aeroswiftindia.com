import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote: "Aero Swift Logistics handled our warehousing and freight needs seamlessly. Their team is professional, efficient, and always on time!",
      name: "Rajesh Kumar",
      position: "Operations Manager, Bharat Industries"
    },
    {
      quote: "The professionalism shown by Aero Swift's crane services team made all the difference in our heavy lifting projects.",
      name: "Suman Verma",
      position: "Project Lead, JMD Constructions"
    },
    {
      quote: "Aero Swift's land freight services exceeded our expectations. Reliable, secure, and quick delivery every single time.",
      name: "Ananya Iyer",
      position: "Supply Chain Manager, SAI Traders"
    },
    {
      quote: "Top-notch air freight solutions from Aero Swift! Their support and timely updates were invaluable for our exports.",
      name: "Ravi Patel",
      position: "Export Manager, Global Exports Pvt. Ltd."
    }
  ];

  const totalSlides = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getVisibleSlides = () => {
    const slides = [];
    const windowWidth = window.innerWidth;
    let slidesToShow = 3;

    if (windowWidth < 576) {
      slidesToShow = 1;
    } else if (windowWidth < 991) {
      slidesToShow = 2;
    }

    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % totalSlides;
      slides.push(testimonials[slideIndex]);
    }

    return slides;
  };

  return (
    <div
      className='testimonial-area pd-top-115 pd-bottom-120'
      style={{ backgroundImage: "url(assets/img/testimonial/bg.png)" }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center mb-0'>
              <h4 className='subtitle style-2'>TESTIMONIALS</h4>
              <h2 className='title'>WHAT OUR CLIENTS SAY</h2>
              <p className='content'>
                Greatly boost interactive metrics for reliable services. Effectively provide in-depth,
                researched e-commerce strategies.
              </p>
            </div>
          </div>
        </div>

        <div className='relative mt-8'>
          <div className='flex justify-center items-stretch gap-4 overflow-hidden'>
            {getVisibleSlides().map((testimonial, index) => (
              <div
                key={index}
                className={`w-full md:w-1/2 lg:w-1/3 transform transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className='single-testimonial-wrap bg-white p-6 rounded-lg shadow-md h-full'>
                  <div className='icon mb-4'>
                    <img src='assets/img/testimonial/quote.png' alt='quote' className='w-12 h-12' />
                  </div>
                  <p className='text-gray-700 mb-6'>{testimonial.quote}</p>
                  <div className='client-wrap'>
                    <div className='details'>
                      <h5 className='font-semibold text-lg'>{testimonial.name}</h5>
                      <p className='text-gray-600'>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-800 text-white p-3 rounded-full hover:bg-yellow-900 transition-colors duration-300 hidden md:block'
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-800 text-white p-3 rounded-full hover:bg-yellow-900 transition-colors duration-300 hidden md:block'
            aria-label="Next testimonial"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTwo;
