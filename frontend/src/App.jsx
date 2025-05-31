import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Pricing from "./pages/Pricing.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import RouteScrollToTop from "./elements/RouteScrollToTop.jsx";
import HomeThree from "./pages/HomeThree.jsx";
import HomeFour from "./pages/HomeFour.jsx";
import HomeFive from "./pages/HomeFive.jsx";
import ServiceDetailsRail from "./pages/ServiceDetailsRail.jsx";
import ServiceDetailsLand from "./pages/ServiceDetailsLand.jsx";
import ServiceDetailsWarehouse from "./pages/ServiceDetailsWarehouse.jsx";
import ServiceDetailsCrane from "./pages/ServiceDetailsCrane.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
    <RouteScrollToTop />
    <Routes>
      <Route exact path='/' element={<HomeThree />} />
      <Route exact path='/home-2' element={<HomeTwo />} />
      {/* <Route exact path='/home-3' element={<HomeThree />} /> */}
      <Route exact path='/home-4' element={<HomeFour />} />
      <Route exact path='/home-5' element={<HomeFive />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/service' element={<Service />} />
      <Route exact path='/service-details' element={<ServiceDetails />} />
      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/blog-details' element={<BlogDetails />} />
      <Route exact path='/pricing' element={<Pricing />} />
      <Route exact path='/faq' element={<Faq />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/air' element={<ServiceDetails/>} />
      <Route exact path='/rail' element={<ServiceDetailsRail/>} />
      <Route exact path='/land' element={<ServiceDetailsLand/>} />
      <Route exact path='/warehouse' element={<ServiceDetailsWarehouse/>} />
      <Route exact path='/crane' element={<ServiceDetailsCrane/>} />



    </Routes>
    <ScrollToTop className="flex items-center justify-center" smooth color='#FA4318' />
  </BrowserRouter>
  )
}

export default App
