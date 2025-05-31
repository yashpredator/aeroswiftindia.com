import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const ServiceOneAll = React.lazy(() => import("../components/ServiceOneAll"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Service = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          <div className="">
            <div className="bg-white h-12 fixed top-0 left-0 w-full z-50"></div>
            <NavbarThree />
          </div>

          {/* Breadcrumb */}
          <Breadcrumb title={"SERVICES"} />

          {/* Service One All */}
          <ServiceOneAll />

          {/* Contact One */}
          {/* <div className='call-to-contact-area pd-top-140  mt-0'>
            <ContactOne />
          </div> */}

          {/* Partner One */}
          {/* <PartnerOne /> */}

          {/* Footer One */}
          {/* <FooterOne /> */}
            <FooterThree/>
          {/* Footer Bottom One */}
          {/* <FooterBottomOne /> */}
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default Service;
