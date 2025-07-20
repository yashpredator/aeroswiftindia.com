import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TeamOne = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    {
      image: 'assets/img/about/finalanuj.jpg',
      name: 'ANUJ SRIVASTAVA',
      position: 'CO-FOUNDER & DIRECTOR',
      imageClass: 'size-9/12 ml-12'
    },
    {
      image: 'assets/img/about/bhabhi2.jpg',
      name: 'HARSHITA SRIVASTAVA',
      position: 'CO-FOUNDER & DIRECTOR',
      imageClass: 'size-8/12 ml-20'
    },
    {
      image: 'assets/img/about/yashb.png',
      name: 'YASHRAJ SRIVASTAVA',
      position: 'TECHNICAL TEAM MANAGER & CEO',
      imageClass: 'size-9/12 ml-14'
    }
  ];

  const totalSlides = teamMembers.length;

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
      slides.push(teamMembers[slideIndex]);
    }

    return slides;
  };

  return (
    <div className='team-area pd-top-115'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              <h4 className='subtitle text-yellow-800 rounded-none'>OUR TEAM</h4>
              <h2 className='title'>OUR SKILLED PROFESSIONALS</h2>
              <p>
                Substantially boost interactive metrics for trustworthy services.
                Proactively provide thoroughly researched e-commerce strategies.
              </p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='flex justify-center items-center gap-4 overflow-hidden'>
            {getVisibleSlides().map((member, index) => (
              <div
                key={index}
                className={`transform transition-transform duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div className='single-team-wrap'>
                  <div className='thumb'>
                    <img
                      className={member.imageClass}
                      src={member.image}
                      alt='team member'
                    />
                  </div>
                  <div className='details'>
                    <h5 className={member.name === 'HARSHITA SRIVASTAVA' ? '-mt-4' : ''}>
                      {member.name}
                    </h5>
                    <p>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-800 text-white p-2 rounded-full hover:bg-yellow-900 transition-colors duration-300 hidden md:block'
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-800 text-white p-2 rounded-full hover:bg-yellow-900 transition-colors duration-300 hidden md:block'
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
