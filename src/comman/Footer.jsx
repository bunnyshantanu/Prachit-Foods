import React from "react";
import LogoImage from "../assets/logo12.png";
import footerbg from "../assets/footer-top4-bg.png";

export default function Footer() {
  return (
    <>
      <footer class="border-top border-white footer-wrapper  bg-grey overflow-hidden background-image position-relative">
        <div class="portfolio-shape1_2 shape-mockup">
          <img src={footerbg} alt="img" />
        </div>
        <div class="container">
          <div class="widget-area">
            <div class="row justify-content-between">
              <div class="col-md-6 col-xl-4 col-lg-4">
                <div class="widget footer-widget">
                  <div class="widget-about">
                    <div class="footer-logo">
                      <a>
                        <img src={LogoImage} alt="" />
                      </a>
                    </div>
                    <p class="about-text">
                      Prachit Foods (India) Pvt. Ltd., headquartered in the
                      heart of central India—Indore, Madhya Pradesh is a leading
                      global exporter and supplier of fresh, premium-quality
                      agro products.
                    </p>
                    <div class="social-btn color-theme">
                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        tabindex="0"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-2 col-lg-4 mx-auto mt-5">
                <div class="widget widget-contact widget_nav_menu footer-widget">
                  <h3 class="widget_title">Quick links</h3>

                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>About Us</a>
                      </li>
                      <li>
                        <a>Product</a>
                      </li>
                      <li>
                        <a>Gallery</a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-5 col-lg-4 mt-5">
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
                        <h4 class="info-card_text">contact@prachitfoods.com</h4>
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
