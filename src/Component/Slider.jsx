import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/hero-7-1.jpg";
import bg1 from "../assets/20695.jpg";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    centerPadding: '40px'

  };

  return (
    <div className="hero-wrapper hero-6">
      <Slider {...settings} className="global-carousel">
        <div className="hero-slider bg1" style={{ backgroundImage: `url(${bg1})` }}>
          {/* <img src="bg1" alt="" /> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="hero-style6">
                  <span
                    className="hero-subtitle "
                    style={{ animationDelay: "0.3s" }}
                  >
                    Prachit Foods
                  </span>
                  <h1
                    className="hero-title "
                    style={{ animationDelay: "0.4s" }}
                  >
                    Quality Products Guaranteed!
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/contact" className="btn style3 style-r0">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider bg2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="hero-style6">
                  <span
                    className="hero-subtitle "
                    style={{ animationDelay: "0.3s" }}
                  >
                    Prachit Foods
                  </span>
                  <h1
                    className="hero-title "
                    style={{ animationDelay: "0.4s" }}
                  >
                    Quality Products and Quality Service
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/contact" className="btn style3 style-r0">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider bg3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="hero-style6">
                  <span
                    className="hero-subtitle "
                    style={{ animationDelay: "0.3s" }}
                  >
                    Prachit Foods
                  </span>
                  <h1
                    className="hero-title "
                    style={{ animationDelay: "0.4s" }}
                  >
                    Quality Products Guaranteed!
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/contact" className="btn style3 style-r0">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider bg4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="hero-style6">
                  <span
                    className="hero-subtitle "
                    style={{ animationDelay: "0.3s" }}
                  >
                    Prachit Foods
                  </span>
                  <h1
                    className="hero-title "
                    style={{ animationDelay: "0.4s" }}
                  >
                    Quality Products and Quality Service
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/contact" className="btn style3 style-r0">
                      Join Us Now<i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
