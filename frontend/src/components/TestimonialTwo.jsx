import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* testimonial area start */}
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
          <div className='testimonial-slider owl-carousel'>
          <Slider {...settings}>
  <div className='item'>
    <div className='single-testimonial-wrap'>
      <div className='icon'>
        <img src='assets/img/testimonial/quote.png' alt='Transpro' />
      </div>
      <p>
        “Aero Swift Logistics handled our warehousing and freight needs seamlessly. Their team is 
        professional, efficient, and always on time!”
      </p>
      <div className='client-wrap'>
        <div className='details'>
          <h5>Rajesh Kumar</h5>
          <p>Operations Manager, Bharat Industries</p>
        </div>
      </div>
    </div>
  </div>

  <div className='item'>
    <div className='single-testimonial-wrap'>
      <div className='icon'>
        <img src='assets/img/testimonial/quote.png' alt='Transpro' />
      </div>
      <p>
        “The professionalism shown by Aero Swift's crane services team made all the difference in 
        our heavy lifting projects.”
      </p>
      <div className='client-wrap'>
        <div className='details'>
          <h5>Suman Verma</h5>
          <p>Project Lead, JMD Constructions</p>
        </div>
      </div>
    </div>
  </div>

  <div className='item'>
    <div className='single-testimonial-wrap'>
      <div className='icon'>
        <img src='assets/img/testimonial/quote.png' alt='Transpro' />
      </div>
      <p>
        “Aero Swift’s land freight services exceeded our expectations. Reliable, secure, and quick 
        delivery every single time.”
      </p>
      <div className='client-wrap'>
        <div className='details'>
          <h5>Ananya Iyer</h5>
          <p>Supply Chain Manager, SAI Traders</p>
        </div>
      </div>
    </div>
  </div>

  <div className='item'>
    <div className='single-testimonial-wrap'>
      <div className='icon'>
        <img src='assets/img/testimonial/quote.png' alt='Transpro' />
      </div>
      <p>
        “Top-notch air freight solutions from Aero Swift! Their support and timely updates 
        were invaluable for our exports.”
      </p>
      <div className='client-wrap'>
        <div className='details'>
          <h5>Ravi Patel</h5>
          <p>Export Manager, Global Exports Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  </div>
</Slider>

          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialTwo;
