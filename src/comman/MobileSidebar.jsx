import React, { useState } from "react";
import LogoImage from "../assets/logo12.png";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div class="header-button d-lg-none d-md-none d-block">
        <Link to="mailto:contact@prachitfoods.com" className="icon-circle d-none"  >
          <i className="fas fa-envelope"></i>
        </Link>
        <Link
          to="https://api.whatsapp.com/send/?phone=9108966047937&text&type=phone_number&app_absent
"
          target="_blank"
          className="icon-circle d-none"
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
      <div className={`mobile-menu-wrapper ${menuOpen ? "body-visible" : ""}`}>
        <div className="mobile-menu-area text-center">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i class="fas fa-times"></i>
          </button>
          <div class="mobile-logo">
            <Link to="/" onClick={closeMenu}>
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
                        {/* <li>
                          <Link to="/service" onClick={closeMenu}>
                            Service
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/product" onClick={closeMenu}>
                            Product
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/team" onClick={closeMenu}>
                            Team
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/gallery" onClick={closeMenu}>
                            Gallery
                          </Link>
                        </li>
                        <li>
                          {/* <Link to="/contact" onClick={closeMenu}>
                            Contact Us
                          </Link> */}
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
                {/* <div class="col-md-6 col-xl-5 col-lg-5 mt-4">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
