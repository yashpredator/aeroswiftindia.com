import React from "react";
import {
  FaMoneyBillAlt,
  FaShieldAlt,
  FaToolbox,
  FaTruckMoving,
} from "react-icons/fa";

const FeatureTwo = () => {
  return (
    <>
      {/* Start Our Features area  */}
      <div
        className='features-area-2'
        style={{
          backgroundImage: 'url("assets/img/bg/1920x1108.jpeg")',
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6'>
              <div className='features-item'>
                <div className='single-features-item flex flex-col items-center bg-lime-900'>
                  <div className='icon'>
                    <FaMoneyBillAlt />
                  </div>
                  <h4>Open Charges</h4>
                </div>
                <div className='single-features-item flex flex-col items-center bg-lime-900'>
                  <div className='icon'>
                    <FaToolbox />
                  </div>
                  <h4>Secure Warehousing</h4>
                </div>
                <div className='single-features-item flex flex-col items-center bg-lime-900'>
                  <div className='icon'>
                    <FaTruckMoving />
                  </div>
                  <h4>Continuous monitoring</h4>
                </div>
                <div className='single-features-item flex flex-col items-center bg-lime-900'>
                  <div className='icon'>
                    <FaShieldAlt />
                  </div>
                  <h4>Freight safeguarding</h4>
                </div>
              </div>
            </div>
            <div className='col-xl-6 d-flex flex flex-col py-5'>
              <div className='section-title white  text-left m-auto'>
                <span className='subtitles text-5xl font-serif text-orange-200 mb-5'>Our Features</span>
                <h2 className='title active mb-5 mt-5'>Why Partner with Us</h2>
                <p className='mb-5'>
                Partner with us for reliable logistics solutions, transparent rates, 
                and secure cargo handling. We offer real-time tracking, 
                efficient deliveries, and expert management to meet your business needs,
                ensuring seamless freight operations across land, rail, and air.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='/contact' className='btn-bounce'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Features area  */}
    </>
  );
};

export default FeatureTwo;
