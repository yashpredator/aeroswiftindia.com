import React from "react";

const SolutionOne = () => {
  return (
    <>
      {/* Start Solution area  */}
      <div className='solution_area text-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title   text-center'>
                <span className='subtitles'>Experience</span>
                <h2 className='title'>Our Solution</h2>
                <p>
                Our logistics solutions ensure seamless import and export services across land, rail, and air. With expertise in freight management, we optimize delivery efficiency and provide reliable transportation solutions, tailored to meet the unique needs of businesses nationwide.
                </p>
              </div>
            </div>
          </div>
          <div className='row  justify-content-center'>
            <div className='col-lg-2 col-md-4 col-sm-4'>
              <div className='solution-item flex flex-col items-center'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/export.png'
                    className='img-fluid size-36'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Export Logistics</h4>
              </div>
            </div>
            <div className='col-lg-2 col-md-4  col-sm-4'>
              <div className='solution-item flex flex-col items-center'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/import.jpeg'
                    className='img-fluid size-36'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Import Logistics</h4>
              </div>
            </div>
            <div className='col-lg-2 col-md-4   col-sm-4'>
              <div className='solution-item flex flex-col items-center'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/cargo.jpeg'
                    className='img-fluid size-36'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Cargo Express</h4>
              </div>
            </div>
            {/* <div className='col-lg-2 col-md-4   col-sm-4'>
              <div className='solution-item'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/04.png'
                    className='img-fluid'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Information Express</h4>
              </div>
            </div> */}
            <div className='col-lg-2 col-md-4   col-sm-4'>
              <div className='solution-item flex flex-col items-center'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/warehouse.jpeg'
                    className='img-fluid size-36'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Warehousing And Distribution</h4>
              </div>
            </div>
            <div className='col-lg-2 col-md-4   col-sm-4'>
              <div className='solution-item flex flex-col items-center'>
                <div className='solution-image'>
                  <img
                    src='assets/img/solution/brokerage.png'
                    className='img-fluid size-36'
                    alt='solution image'
                  />
                </div>
                <h4 className='title'>Brokerage Services</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Solution area  */}
    </>
  );
};

export default SolutionOne;
