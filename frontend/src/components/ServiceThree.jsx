import React from "react";

const ServiceThree = () => {
  return (
    <>
      {/* Start Services area  */}
      <div className='service_area-3 bg-slate-800'>
        <div className='container-fluid'>
          <div className='row justify-content-end'>
            <div className='col-lg-5 col-md-12'>
              <div className='service-content'>
                <div className='section-title white  text-left'>
                  <span className='subtitles text-5xl font-serif'>WHAT WE OFFER</span>
                  {/* <h2 className='title'>What We Can Do For You</h2>
                  <p>
                    Supported neglected met she therefore unwilling discovery
                    remainder. Way sentiments two indulgence uncommonly
                    own.Shameless see the tolerably how continued.
                  </p> */}
                </div>
                <div className='service-item'>
                  <div className='row'>
                    <div className='col-lg-6  col-md-6 col-sm-6'>
                      <div className='service-single-item'>
                        <h3>
                          <span>01</span>Road Transport
                        </h3>
                        <p>
                        Efficient road transport for seamless deliveries,
                        ensuring your cargo reaches its destination on time, every time.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6'>
                      <div className='service-single-item'>
                        <h3>
                          <span>02</span>Fly Anywhere
                        </h3>
                        <p>
                        Swift air cargo services for high-priority shipments,
                        delivering speed and precision across the skies.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6'>
                      <div className='service-single-item'>
                        <h3>
                          <span>03</span>Railway Transport
                        </h3>
                        <p>
                        Fast and reliable freight solutions via rail, 
                        connecting your goods to every corner of the country.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6'>
                      <div className='service-single-item'>
                        <h3>
                          <span>04</span>Warehouse Services
                        </h3>
                        <p>
                          Its sometimes her behaviour are contented. Do
                          listening am eagerness .
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6'>
                      <div className='service-single-item'>
                        <h3>
                          <span>05</span>Crane and Forklift Services
                        </h3>
                        <p>
                          Its sometimes her behaviour are contented. Do
                          listening am eagerness .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 remove-col-padding'>
              <div
                className='service-image'
                style={{
                  backgroundImage: 'url("assets/img/service/960x734.jpeg")',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Services area  */}
    </>
  );
};

export default ServiceThree;
