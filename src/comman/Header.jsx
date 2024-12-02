import React, { useState } from "react";
import LogoImage from "../assets/logo12.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.png";
import MobileSidebar from "./MobileSidebar";
import AppRouter from "../router";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header class="nav-header header-layout7">
        {/* <div class="header-top">
        <div class="container">
            <div class="row justify-content-center justify-content-lg-between align-items-center gy-3">
                <div class="col-auto d-sm-block d-none">
                    <div class="header-links">
                        <ul>
                            <li><i class="fas fa-phone-alt"></i><a href="tel:6294551029">(629) 555-0129</a></li>
                            <li><i class="fas fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></li>
                            <li><i class="fas fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</li>                                
                        </ul>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="social-btn color-theme">
                        <a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                        <a href="https://behance.com/"><i class="fab fa-behance"></i></a>
                        <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div> */}
        <div class="sticky-wrapper">
          <div class="menu-area">
            <div class="container-fluid px-5">
              <div class="row align-items-center justify-content-between">
                <div class="col-auto">
                  <div class="header-logo">
                    <Link to="/">
                      <img src={LogoImage} width={"140px"} alt="logo" />
                    </Link>
                    {/* <div class="header-button mt-2 text-center">
                      <Link
                        to="mailto:contact@prachitfoods.com"
                        className="icon-circle"
                      >
                        <i className="fas fa-envelope"></i>
                      </Link>
                      <Link
                        to="https://api.whatsapp.com/send/?phone=9108966047937&text&type=phone_number&app_absent
"
                        target="_blank"
                        className="icon-circle"
                      >
                        <i class="fab fa-whatsapp"></i>
                      </Link>

                  
                    </div> */}
                  </div>
                </div>
                <div class="col-auto">
                  <nav class="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      {/* <li>
                          <Link to="/service" onClick={closeMenu}>
                            Service
                          </Link>
                        </li> */}
                      <li>
                        <Link to="/product">Products</Link>
                      </li>
                      {/* <li>
                          <Link to="/team" onClick={closeMenu}>
                            Team
                          </Link>
                        </li> */}
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      {/* <li>
                          <Link to="/contact" onClick={closeMenu}>
                            Contact Us
                          </Link>
                        </li> */}
                    </ul>
                  </nav>
                </div>

                <div class="col-auto ">
                  <div class="header-button d-lg-block d-md-block d-none">
                    <Link to="/#contact" class="btn">
                      Enquiry Now
                      <i class="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                  <MobileSidebar/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <MobileSidebar/> */}
    </>
  );
}
