import React, { useEffect, useRef } from "react";
import shape1 from "../assets/service-shape1-2.png";
import shape2 from "../assets/service-shape1-2.png";
import Certificate from "./Certificate";
export default function AboutHome() {
  const titleRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
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
  return (
    <div class="service-area-1 space bg-smoke overflow-hidden">
      <div
        class="service-shape1_1 shape-mockup jump-reverse d-lg-block d-none"
        data-top="0"
        data-right="0"
      >
        <img src={shape1} alt="img" />
      </div>
      <div
        class="service-shape1_2 shape-mockup jump-reverse d-lg-block d-none"
        data-top="0"
        data-left="0"
      >
        <img src={shape2} alt="img" />
      </div>
      <div
        class="leaf-shape-animation"
        data-bg-src="assets/img/icon/leaf.svg"
      ></div>
      <div class="container container2">
        <div class="row justify-content-center">
          <div class="col-xl-11 col-lg-10">
            <div class="title-area text-center mb-0" ref={rowRef}>
              {/* <span class="sub-title">OUR SERVICES</span> */}
              <h2 class="sec-title" ref={titleRef}>
                Welcome to <span className="text-theme">Prachit Foods</span>
              </h2>
              <p >
                Prachit Foods (India) Pvt. Ltd. is a central India based export
                company situated in Indore, Madhya Pradesh, India. We offer
                fresh farm vegetables, industrial food grade material & other
                food grade material (cereals, pulses, spices & dairy products)
                as per the client’s requirements. We supply to wholesalers,
                retailers, food service companies and importers. We offer our
                clients a full range of vegetables which are sourced directly
                from the grower and are able to supply to almost any destination
                in the world.
              </p>
              <p > 
                 Excellent quality products with prompt and customer-oriented
                service are the keywords defining Prachit Foods. Our commitment
                towards providing exceptional service to our clients and our
                strong work ethics make us one of the best export houses in
                Central Indian food industry.
              </p>

              <a class="btn style4" >
                Learn More <i class="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      <Certificate/>
      </div>

    </div>
  );
}
