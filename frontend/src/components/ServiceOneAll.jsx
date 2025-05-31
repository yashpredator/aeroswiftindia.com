import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>SERVICES</h4>
                <h2 className='title'>WHAT SERVICES WE PROVIDE YOU</h2>
                <p>
                  Quickly optimize cooperative models for long-term high-impact
                  ROI. Dynamically drive innovative e-commerce and distributed
                  paradigms.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/crane.png' alt='Aero Swift' />
                  <div className='icon'>
                    <img src='assets/img/service/crane.png' alt='Aero Swift' />
                  </div>
                </div>
                <div className='details hover:bg-cyan-600'>
                  <h5>CRANE AND FORKLIFT</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text flex items-center justify-center' to='/crane'>
                      READ MORE
                      <span className='ml-2 flex justify-center items-center'>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/about/291x356.jpeg' alt='Aero Swift' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Aero Swift'
                    />
                  </div>
                </div>
                <div className='details hover:bg-cyan-600'>
                  <h5>AIR TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text flex items-center justify-center' to='/air'>
                      READ MORE
                      <span className='ml-2 flex justify-center items-center'>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/warehouse.jpeg' alt='Aero Swift' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Aero Swift'
                    />
                  </div>
                </div>
                <div className='details hover:bg-cyan-600'>
                  <h5>WAREHOUSING</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text flex items-center justify-center' to='/warehouse'>
                      READ MORE
                      <span className='ml-2 flex justify-center items-center'>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/about/another.jpeg' alt='Aero Swift' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-4.png'
                      alt='Aero Swift'
                    />
                  </div>
                </div>
                <div className='details hover:bg-cyan-600'>
                  <h5>ROAD TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text flex items-center justify-center' to='/land'>
                      READ MORE
                      <span className='ml-2 flex justify-center items-center'>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/about/rail.jpeg' alt='Aero Swift' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-5.png'
                      alt='Aero Swift'
                    />
                  </div>
                </div>
                <div className='details hover:bg-cyan-600'>
                  <h5>TRAIN TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text flex items-center justify-center' to='/rail'>
                      READ MORE
                      <span className='ml-2 flex justify-center items-center'>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOneAll;
