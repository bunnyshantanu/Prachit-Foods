import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/hero-7-1.jpg";
import bg1 from "../assets/20695.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Custom Next Arrow Component
// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: 0,
      }} // Customize the arrow style
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        style={{ color: "black", fontSize: "2rem" }}
      />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", left: 0 }} // Customize the arrow style
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: "black", fontSize: "2rem" }}
      />
    </div>
  );
};
const HeroSlider = () => {
  const settings = {
    // dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // waitForAnimate: false,
    centerPadding: "40px",
  };

  return (
    <div className="hero-wrapper hero-6">
      <Slider {...settings} className="global-carousel">
        <div
          className="hero-slider bg1"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* <img src="bg1" alt="" /> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
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
                    <Link to="/#contact" className="btn style3 style-r0">
                      Connect With Us
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/service">
          <div className="hero-slider bg6 hero22"></div>
        </Link>
        <div className="hero-slider bg2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
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
                    <Link to="/#contact" className="btn style3 style-r0">
                      Connect With Us
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* <div className="hero-slider bg3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
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
                    Global Excellence in Every Potato
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/#contact" className="btn style3 style-r0">
                      Connect With Us
                      <i className="fas fa-angle-double-right"></i>
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
              <div className="col-lg-8 col-md-12">
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
                    Harvesting Quality, Delivering Excellence
                  </h1>
                  <div className="btn-wrap " style={{ animationDelay: "0.7s" }}>
                    <Link to="/about" className="btn style2 style-r0">
                      Read More<i className="fas fa-angle-double-right"></i>
                    </Link>
                    <Link to="/#contact" className="btn style3 style-r0">
                      Connect With Us
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
