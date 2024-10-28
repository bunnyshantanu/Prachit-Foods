import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import Img1 from "../assets/cold-1.jpeg";
import Img2 from "../assets/cold-2.jpeg";
import Img3 from "../assets/cold-3.jpeg";
import Img4 from "../assets/cold-4.jpeg";

export default function ColdStorage() {
  const titleRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div class="space pb-0  overflow-hidden ">
      <div class="container ">
        <div className="row global-carousel project-slider5 ">
          <Slider {...settings}>
            <ProjectCard link={Img1} text={'cold storage'} />
            <ProjectCard link={Img2} text={'cold storage'}/>
            <ProjectCard link={Img3} text={'cold storage'}/>
            <ProjectCard link={Img4} text={'cold storage '}/>
          </Slider>
        </div>
        <div className="sec-btn mb-0 ">
          <div className="icon-box arrow-style2">
            <button
              className="slick-arrow default"
              onClick={() => this.slider.slickPrev()}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="slick-arrow default"
              onClick={() => this.slider.slickNext()}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        {/* <div class="row gy-4 justify-content-center" ref={rowRef}>
          <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/YroDqi6vcho?si=fCF14-izmzixncST"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div> 
          <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/UE0y7vGQmUg?si=ATC1ablM-1cAJnnT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div> 
         <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/AXMR-JFOoIE?si=sCiJ86RRGJlcK1al"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
