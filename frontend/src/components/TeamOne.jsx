import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPlus,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Slider from "react-slick";

const TeamOne = () => {
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
    initialSlide: 1,
    // autoplay: true,
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
      {/*team-area start*/}
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
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='team-slider owl-carousel'>
                <Slider {...settings}>
                  <div className='item'>
                    {/* <div className='single-team-wrap'>
                      <div className='thumb'>
                        <img src='assets/img/team/1.png' alt='Transpro' />
                      </div>
                      <div className='details'>
                        <h5>ABHINAV SRIVASTAVA</h5>
                        <p>LEGAL ADVISOR</p>
                        <div className='hover-icon flex items-center justify-center'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className='item'>
                    <div className='single-team-wrap'>
                      <div className='thumb'>
                        <img className="size-9/12 ml-12" src='assets/img/about/finalanuj.jpg' alt='aeroswift' />
                      </div>
                      <div className='details'>
                        <h5>ANUJ SRIVASTAVA</h5>
                        <p>CO-FOUNDER &amp; DIRECTOR</p>
                        {/* <div className='hover-icon flex items-center justify-center'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='single-team-wrap'>
                      <div className='thumb'>
                        <img className="size-8/12 ml-20" src='assets/img/about/bhabhi2.jpg' alt='Aeroswift' />
                      </div>
                      <div className='details'>
                        <h5 className="-mt-4">HARSHITA SRIVASTAVA</h5>
                        <p>CO-FOUNDER &amp; DIRECTOR</p>
                        {/* <div className='hover-icon flex items-center justify-center'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='single-team-wrap'>
                      <div className='thumb'>
                        <img className="size-9/12 ml-14"src='assets/img/about/yashb.png' alt='aeroswift' />
                      </div>
                      <div className='details'>
                        <h5>YASHRAJ SRIVASTAVA</h5>
                        <p>TECHNICAL TEAM MANAGER &amp; CEO</p>
                        {/* <div className='hover-icon flex items-center justify-center'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*team-area end*/}
    </>
  );
};

export default TeamOne;
