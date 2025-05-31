import React from "react";
import {
  FaBuffer,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";

const SupportBarOne = () => {
  return (
    <>
      {/* support bar area start */}
      <div className="fixed left-0 top-0 z-50 bg-white w-full h-12 "></div>
      <div className="bg-white w-full ">
      <div className='hidden sm:block support-bar bg-slate-800 fixed right-0 top-0 z-50 w-5/12 flex sm:w-6/12 md:w-7/12 lg:w-7/12 xl:w-6/12'>
        <div className='container'>
          <div className='row reorder-xs clearfix'>
            <div className='col-lg-6 align-self-center flex justify-center lg:justify-end'>
              <div className='support-left'>
                {/* support left start */}
                <ul className="flex">
                  {/* <li>
                    <FaGlobe />
                    <select className='country'>
                      <option value='english selected'>English</option>
                      <option value='Arabic'>Arabic</option>
                      <option value='spanish'>Spanish</option>
                      <option value='bangla'>Bangla</option>
                    </select>
                  </li> */}
                  <li>
                    <a href='mailTo:info@aeroswiftindia.com'>
                      <div className="flex justify-center"><FaRegEnvelope /></div>
                      info@aeroswiftindia.com
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a href='tel:8041317797'>
                      {" "}
                      <div className="flex justify-center"><FaPhoneAlt /></div>
                      8041317797
                    </a>
                  </li>
                </ul>
              </div>
              {/* support left end */}
            </div>
            <div className='col-lg-6 flex flex-col justify-center'>
              <div className='support-right flex justify-evenly'>
                {" "}
                {/* support right start */}
                <ul>
                  {/* <li className='fare-rate-responsive'>
                    <a href='#'>
                      <FaBuffer />
                      Get a Fare Rate
                    </a>
                  </li> */}
                  <li>
                    <ul className='social-link'>
                      <li>
                        <a href='#' className='facebook'>
                          {" "}
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='twitter'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ'
                          className='youtube'
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='instagram'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              {/* support right end */}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* support bar area end */}
    </>
  );
};

export default SupportBarOne;
