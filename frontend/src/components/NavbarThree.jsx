import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarThree = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement.querySelector(".sub-menu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  // Check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* navbar start */}
      <header className="navbar-area fixed top-0 left-0 w-full z-50">
        <nav
          className={
            "navbar navbar-area-1  navbar-area-3 navbar-area navbar-expand-lg"
          }
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none"
                }
                data-target="#transpro_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/">
                <img className="ml-4 h-16 w-64 -mt-7" src="assets/img/aeroswiftlogo.png" alt="Aero Swift" />
              </Link>
            </div>
            <div className="nav-left-part"></div>

            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id="transpro_main_menu"
            >
              <ul className="navbar-nav menu-open flex justify-evenly">
                <li className="menu-item-has-children current-menu-item">
                  <Link
                    to="/"
                    className={isActive("/") ? "text-red-500 font-bold" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={isActive("/about") ? "text-red-500 font-bold" : ""}
                  >
                    About Us
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link
                    to="/service"
                    className={isActive("/service") ? "text-red-500 font-bold" : ""}
                  >
                    Services
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        to="/about"
                        className={isActive("/about") ? "text-red-500 font-bold" : ""}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        className={isActive("/service") ? "text-red-500 font-bold" : ""}
                      >
                        Service Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className={isActive("/contact") ? "text-red-500 font-bold" : ""}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={isActive("/contact") ? "text-red-500 font-bold" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarThree;
