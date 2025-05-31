import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const ServiceDetailsInnerWarehouse = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='thumb'>
                  <img className='h-screen w-screen' src='assets/img/service-details/Warehousef.jfif' alt='Aero Swift' />
                  <div className='icon'>
                    <img className="rounded-full"
                      src='assets/img/service-details/Warehousef.jfif' 
                      alt='Aero Swift'
                    />
                  </div>
                </div>
                <h2 className=" font-serif text-center">WAREHOUSE SERVICES</h2>
                <p>
                Aero Swift Logistic Limited offers state-of-the-art warehouse services designed 
                to streamline your supply chain. Our facilities are equipped with advanced security systems, 
                climate control, and real-time inventory tracking, ensuring your goods are stored safely and 
                efficiently. We provide flexible storage solutions, whether you need short-term warehousing 
                or long-term storage, with dedicated staff for handling, packing, and distribution. Let us 
                take care of your inventory so you can focus on growing your business.


                </p>
                
                <div className='row text-center w-screen'>
                  {/* <div className='col-lg-6 align-self-center'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='assets/img/service/8.png' alt='Transpro' />
                    </div>
                  </div> */}
                  <div className='col-lg-6 align-self-center'>
                    <h4 className='subtitle'>Global Transaction Advisory</h4>
                    <ul className='list-inner-wrap'>
                      <li> Customs and Regulatory Compliance
                        Assistance with navigating customs regulations, duties,
                         and taxes to ensure smooth cross-border transactions.

                      </li>
                      <li> Trade Documentation
                      Preparation and verification of essential documents
                       like bills of lading, export/import permits, and certificates of origin.</li>
                      <li> Currency and Exchange Risk Management
                      Advisory on managing currency fluctuations
                       and mitigating risks associated with international payments.</li>
                      <li> Tax and Duty Optimization
                      Strategies to minimize taxes and duties through
                       preferential trade agreements, exemptions, or rebates.</li>
                      <li>Logistics and Supply Chain Coordination
                      Streamlining shipping routes and coordinating with multiple stakeholders
                       to ensure cost-effective, efficient transport.</li>
                      <li> Insurance and Risk Management
                      Recommendations on appropriate cargo insurance policies to protect goods in transit.</li>
                    </ul>
                  </div>
                </div>
               
                
                
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar-area'>
                
                
                <div
                  className=' widget widget_support text-center mb-0 '
                  style={{
                    background: "url(assets/img/widget/support-bg.png)",
                  }}
                >
                  <h4 className='widget-title style-white'>
                    24/7 ONLINE SUPPORT <span className='dot' />
                  </h4>
                  <p>
                    Assertively pontificate high standards in scenarios rather
                    than sustainable system. Interactively empower.
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="contact flex items-center justify-center w-full">
                      <FaRegEnvelope className="mr-2" />{" "}
                      {/* Adds space to the right of the icon */}
                      <span className="text-center w-full">
                        info@aeroswiftindia.com
                      </span>
                    </p>
                    <p className="contact mb-0 flex items-center justify-center w-full">
                      <FaPhoneAlt className="mr-2"/>
                      <span className="text-center w-full">
                      +91 80413137797
                      </span>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ServiceDetailsInnerWarehouse;
