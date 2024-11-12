import React, { useState } from "react";
import LogoImage from "../assets/logo12.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.png";
import MobileSidebar from "./MobileSidebar";
import AppRouter from "../router";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
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
                  </div>
                </div>

                <div class="col-auto ">
                  <div class="header-button">
                    <Link
                      to="mailto:contact@prachitfoods.com"
                      className="icon-circle"
                    >
                      <i className="fas fa-envelope"></i>
                    </Link>
                    <Link
                      to="https://api.whatsapp.com/send?phone=+917314970981
"
                      target="_blank"
                      className="icon-circle"
                    >
                      <i class="fab fa-whatsapp"></i>
                    </Link>

                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={toggleMenu}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <MobileSidebar/> */}

      <div className={`mobile-menu-wrapper ${menuOpen ? "body-visible" : ""}`}>
        <div className="mobile-menu-area text-center">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i class="fas fa-times"></i>
          </button>
          <div class="mobile-logo">
            <Link to="/"  onClick={closeMenu}>
              <img src={LogoImage} alt="" width={"150px"} />
            </Link>
          </div>
          <div class="mobile-menu">
            <div class="">
              <div class="row justify-content-between">
                <div class="col-md-3 col-xl-2 col-lg-2 mx-auto mt-4">
                  <div class="widget widget-contact widget_nav_menu footer-widget mx-4">
                    <h3 class="widget_title">Quick links</h3>

                    <div class="menu-all-pages-container">
                      <ul class="menu">
                        <li>
                          <Link to="/" onClick={closeMenu}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about" onClick={closeMenu}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/service" onClick={closeMenu}>
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link to="/product" onClick={closeMenu}>
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link to="/team" onClick={closeMenu}>
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link to="/gallery" onClick={closeMenu}>
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" onClick={closeMenu}>
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-xl-2 col-lg-2 mx-auto mt-4">
                  <div class="widget widget-contact widget_nav_menu footer-widget">
                    <h3 class="widget_title">Product</h3>

                    <div class="menu-all-pages-container">
                      <ul class="menu">
                        <li>
                          <Link to="/product/1" onClick={closeMenu}>
                            Jyoti Potato
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/2" onClick={closeMenu}>
                            Chipsona Potato
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/3" onClick={closeMenu}>
                            Seed Potato
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-5 col-lg-5 mt-4">
                  <div class="widget-contact">
                    <h3 class="widget_title">Contact Us</h3>
                    <div className="row">
                      <div class="contact-info-card col-lg-12">
                        <div class="info-card_icon">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="info-card_content">
                          <p class="info-card_title">Phone Number</p>
                          <h4 class="info-card_text">0731-4970981</h4>
                        </div>
                      </div>
                      <div class="contact-info-card col-lg-12">
                        <div class="info-card_icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info-card_content">
                          <p class="info-card_title">Email</p>
                          <h4 class="info-card_text">
                            contact@prachitfoods.com
                          </h4>
                        </div>
                      </div>
                      <div class="contact-info-card col-lg-12">
                        <div class="info-card_icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-card_content">
                          <p class="info-card_title">Office Address</p>
                          <h4 class="info-card_text">
                            282, Orbit Mall, A.B. Road, Indore - 452010 (M.P.),
                            India
                          </h4>
                        </div>
                      </div>

                      {/* <div class="contact-info-card col-lg-6">
                        <div class="info-card_icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-card_content">
                          <p class="info-card_title">Export Office</p>
                          <h4 class="info-card_text">
                            282, Orbit Mall, A.B. Road, Indore - 452010 (M.P.),
                            India
                          </h4>
                        </div>
                      </div> */}

                      <div class="contact-info-card col-lg-12">
                        <div class="info-card_icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <div class="info-card_content">
                          <p class="info-card_title">Hours</p>
                          <h4 class="info-card_text">
                            Mon - Sat: 11:00AM - 06:00PM .<br />
                            Sunday: Closed
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
