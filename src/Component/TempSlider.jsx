import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../assets/20695.jpg";

export default function TempSlider() {
  const settings = {
    fade: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
  };
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <Slider {...settings} className="global-carousel" id="heroSlider1">
        <div
          className="hero-slider1 bg1"
         
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-style1">
                  <span
                    className="hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    NATURAL ENVIRONMENT1
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    {" "}
                    Leading the way to
                  </h1>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    a greener future{" "}
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    {" "}
                    Ecology is the scientific study of the relationships between
                    organisms and their environment, including their physical,
                    chemical.{" "}
                  </p>
                  <div
                    className="btn-wrap"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    <a href="contact.html" className="btn style2">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </a>
                    <a href="contact.html" className="btn style3">
                      Get Started<i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider bg1" style={{ backgroundImage: `url(${bg1})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="hero-style1">
                  <span
                    className="hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    NATURAL ENVIRONMENT
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    {" "}
                    Saving the planet
                  </h1>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    one step at a time
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    {" "}
                    Ecology is the scientific study of the relationships between
                    organisms and their environment, including their physical,
                    chemical.{" "}
                  </p>
                  <div
                    className="btn-wrap"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    <a href="contact.html" className="btn style2">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </a>
                    <a href="contact.html" className="btn style3">
                      Get Started<i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="slider-social-area">
        <ul>
          <li>
            <a href="https://www.facebook.com/"> Facebook </a>
          </li>
          <li>
            <a href="https://www.instagram.com/"> Instagram </a>
          </li>
          <li>
            <a href="https://www.twitter.com/"> Twitter </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
