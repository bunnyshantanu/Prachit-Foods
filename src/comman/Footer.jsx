import React from "react";
import LogoImage from "../assets/logo12.png";
import footerbg from "../assets/footer-top4-bg.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="border-top border-white footer-wrapper  bg-grey overflow-hidden background-image position-relative">
        <div class="portfolio-shape1_2 shape-mockup">
          <img src={footerbg} alt="img" />
        </div>
     
        <div class="container ">
          <div class="widget-area zindex position-relative">
            <div class="row justify-content-between">
              {/* <div class="col-md-6 col-xl-4 col-lg-4">
                <div class="widget footer-widget">
                  <div class="widget-about">
                    <div class="footer-logo">
                      <a>
                        <img src={LogoImage} alt="" />
                      </a>
                    </div>
                  
                    <div class="social-btn color-theme">
                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                     
                      <a
                        href="https://www.linkedin.com/company/prachit-foods-india-pvt-ltd/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-md-6 col-xl-2 col-lg-4 mx-auto mt-5">
                <div class="widget widget-contact widget_nav_menu footer-widget">
                  <h3 class="widget_title">Quick links</h3>

                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Service</Link>
                      </li>
                      <li>
                        <Link to="/product">Product</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              <div class="col-12">
                <div class="widget-contact">
                  <div className="row">
                    <div class="contact-info-card col-lg-12 justify-content-center">
                      <div class="info-card_content">
                        <h2>PRACHIT FOOD INDIA PVT LTD</h2>
                        <h4 class="info-card_text text-center ">
                          282, Orbit Mall, A.B. Road, Indore - 452010 (M.P.),
                          India
                        </h4>
                        <div class=" gx-2 justify-content-center pt-4 aluminium">
                          <div class="contact-info-card me-4">
                            <div class="">
                              <i class="fas fa-phone-alt "></i>
                            </div>
                            <div class="info-card_content">
                              <h4 class="info-card_text">0731-4970981</h4>
                            </div>
                          </div>
                          <div class="contact-info-card ">
                            <div class="">
                              <i class="fas fa-envelope "></i>
                            </div>
                            <div class="info-card_content">
                              <h4 class="info-card_text">
                                contact@prachitfoods.com
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
        </div>
        <div class="container ">
          <div class="copyright-wrap">
            <div class="row gy-3 justify-content-lg-between justify-content-center">
              <div class="col-auto align-self-center">
                <p class="copyright-text">
                  © Copyright 2024 <a href="#">Prachit Foods.</a> All Rights
                  Reserved
                </p>
              </div>
              <div class="col-auto align-self-center">
                <p class="copyright-text">
                  Powered by : <a className="copy">i</a>Websoul{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
