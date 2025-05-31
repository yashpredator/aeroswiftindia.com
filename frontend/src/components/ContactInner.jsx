import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const ContactInner = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    fetch("https://aeroswiftindia.com/api/send", { // Change port to your server's
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.current[0].value, // Adjust based on input field order
        email: form.current[1].value,
        phone: form.current[2].value, // Updated index for phone
        message: form.current[4].value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.success("Message Sent Successfully!");
          form.current.reset();
        } else {
          toast.error("Message Not Sent!");
        }
      })
      .catch((error) => toast.error("Error: " + error.message));
  };

  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>RAISE AN ISSUE</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner w-full'>
                      <label className="flex flex-col justify-center">
                        <FaUserAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='Your name'
                        name='user_name'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label className="flex flex-col justify-center">
                        <FaRegEnvelope />
                      </label>
                      <input
                        type='text'
                        placeholder='Your email'
                        name='user_email'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label className="flex flex-col justify-center">
                        <FaCalculator />
                      </label>
                      <input type='text' placeholder='Phone number' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-select-inner'>
                      <label className="flex flex-col justify-center">
                        <FaFileAlt />
                      </label>
                      <select className='single-select' defaultValue="">
                        {/* <option>Subject</option> */}
                        <option value="" disabled>Select Option</option>
                        <option value={1}>Air Freight</option>
                        <option value={2}>Land Freight</option>
                        <option value={3}>Rail Freight</option>
                        <option value={4}>Warehouse Service</option>
                        <option value={5}>Crane and Forklift Service</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label className="flex flex-col justify-center">
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Write message'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base bg-slate-600 hover:bg-cyan-400' type='submit'>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='contact-information-wrap bg-gray-600'>
                <h3>CONTACT INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Contact Number:</h6>
                  <div className='media'>
                    <div className='icon flex flex-row justify-center items-center bg-emerald-400 h-16 w-16'>
                      <FaPhoneAlt />
                    </div>
                    <div className='media-body flex flex-col justify-center'>
                      <p>+91 8041317797</p>
                      
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>Mail Address:</h6>
                  <div className='media'>
                    <div className='icon flex flex-row justify-center items-center bg-emerald-400 h-16 w-16' style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className='media-body flex flex-col justify-center'>
                      <p>info@aeroswiftindia.com</p>
  
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>Office Location:</h6>
                  <div className='media'>
                    <div className='icon flex flex-row justify-center items-center bg-emerald-400 h-16 w-16' style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>ST No. 114/1 5 Opp: Thiru, mala Bakery,</p>
                      <p>Whitefield, Kadugodi Extension SO,</p>
                      <p>Bangalore, Karnataka, India, 560067</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}

      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>
    </>
  );
};

export default ContactInner;
