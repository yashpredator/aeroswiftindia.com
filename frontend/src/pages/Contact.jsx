import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Contact = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          <div className="">
            <div className="bg-white h-12 fixed top-0 left-0 w-full z-50"></div>
            <NavbarThree />
          </div>

          {/* Breadcrumb */}
          <Breadcrumb title={"CONTACT US"} />

          {/* Breadcrumb */}
          <ContactInner />

          {/* Footer One */}
          {/* <FooterOne /> */}

          {/* Footer Bottom One */}
          {/* <FooterBottomOne /> */}
          <FooterThree/>
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;
