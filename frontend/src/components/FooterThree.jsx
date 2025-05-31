import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <>
      {/* footer area start  */}
      <footer className='footer-area-3 bg-slate-700'>
        {/* Widget Area Starts */}
        <div className='footer-widget-area'>
          <div className='container mt-5'>
            <div className='row -my-20'>
              <div className='col-lg-3 tab-margin-bottom-30'>
                <div className='footer-widget widget about_us_widget'>
                  <div className='footer-logo'>
                    <Link to='/'>
                      <img className="w-48 text-white" src='assets/img/aeroswiftlogo.png' alt='logo' />
                    </Link>
                  </div>
                  <p className='text-white font-sans py-5'>
                  At Aero Swift, we accelerate your logistics journey,
                   delivering efficiency, security, and reliability with every shipment. 
                   Our dedicated team is committed to providing tailored solutions that adapt to your unique needs. 
                   Trust us to navigate the complexities of logistics, ensuring your goods reach their destination swiftly and safely.
                  </p>
                </div>
              </div>
              <div className='col-lg-2 offset-lg-1 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title text-red-200 text-2xl'>Valuable link</h5>
                  <ul className="m-3 ">
                    <li>
                      <a href='/service'>Services</a>
                    </li>
                    <li>
                      <a href='/'>Home</a>
                    </li>
                    <li>
                      <a href='/about'>About us</a>
                    </li>
                    <li>
                      <a href='/contact'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title text-red-200 text-2xl'>Address </h5>
                  <p>ST No. 114/1 5 Opp: Thiru, mala</p>
                      <p>Bakery, Whitefield, Kadugodi Extension SO, Bangalore</p>
                      <p>Karnataka, India, 560067</p>
                  <p>Phone: +91 8041317797</p>
                  <p className="mb-3"> Email: info@aeroswiftindia.com</p>
                </div>
              </div>
              <div className='col-lg-3 offset-lg-1'>
                <div className='footer-widget widget'>
                  <h5 className='widget-title text-red-200 text-2xl'>Company Links</h5>
                  <ul className='social-link flex flex-col'>
                    <li className="mt-3 mb-3">
                      <a href='#' className='facebook'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href='#' className='twitter'>
                        <FaTwitter />
                      </a>
                    </li>

                    <li className="mb-3">
                      <a href='#' className='instagram'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='linkedin'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Widget Area End */}
      </footer>
    </>
  );
};

export default FooterThree;
