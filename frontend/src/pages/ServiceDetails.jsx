import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterThree from "../components/FooterThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"))
// const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const NavbarThree = React.lazy(() => import("../components/NavbarThree"));

const ServiceDetailsInner = React.lazy(() =>
  import("../components/ServiceDetailsInner")
);
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const ServiceDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          {/* <NavbarOne /> */}
          <div className="bg-white h-10 fixed top-0 left-0 z-50 w-full"> </div>
          <div><NavbarThree/></div>


          {/* Breadcrumb */}
          <Breadcrumb title={"SERVICES DETAILS/AIR FREIGHTS"} />

          {/* Service Details Inner */}
          <ServiceDetailsInner />

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

export default ServiceDetails;
