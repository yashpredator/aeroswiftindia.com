import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaTruckMoving } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../index.css"

const BannerThree = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }

  // Slider settings with autoplay enabled
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time between slides (in milliseconds)
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-3'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div>
              <div
                className='item'
                style={{ background: "url('/assets/img/banner/1960x600-2.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white left-10 text-center'>
                        <h1 className='text-4xl b-animate-2 title font-sans text-pink-700'>
                          Reliable Logistics Solution
                        </h1>
                        <p className='b-animate-3 content text-xl text-red-500'>
                          Delivering your goods swiftly and securely, anywhere you need.
                        </p>
                        <div className='icon-wrap b-animate-3'>
                          <div className='icon-file'>
                            <FaTruckMoving /> <span>Road Transport</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='img-wrap b-animate-6 '>
                        <div className='img-file'>
                          <img className='size-44 sm:size-52 lg:size-80' src='assets/img/banner/truck.png' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ background: "url('/assets/img/banner/1960x600.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white left-10'>
                        <h1 className='b-animate-2 title text-5xl'>
                          Reliable Logistics Solution
                        </h1>
                        <p className='b-animate-3 content text-xl'>
                          Delivering your goods swiftly and securely, anywhere you need.
                        </p>
                        <div className='icon-wrap b-animate-3'>
                          <div className='icon-file'>
                            <RiFlightTakeoffFill />{" "}
                            <span>Airlines Transport</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='img-wrap b-animate-6'>
                        <div className='img-file'>
                          <img className=' translate-y-32 -translate-x-0' src='assets/img/banner/aeroplane.png' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerThree;
