import React, { useEffect, useRef } from "react";
import shape1 from "../assets/service-shape1-2.png";
import shape2 from "../assets/service-shape1-2.png";
import Certificate from "./Certificate";
import { Link } from "react-router-dom";
export default function AboutHome() {
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
                Welcome to <span className="text-theme">Prachit Foods </span>
              </h2>
              <p>
                Located in Indore, Madhya Pradesh, Prachit Foods (India) Pvt.
                Ltd. is dedicated to the cultivation and export of top-quality
                potatoes and their variants. With a strong focus on quality, we
                have established ourselves as a trusted supplier in the global
                market, known for our commitment to delivering fresh, premium
                produce.
              </p>
              <p>
                Our company boasts a robust infrastructure, featuring 500 acres
                of land devoted to contract farming and three state-of-art cold
                storage facilities which allows us to maintain strict quality
                control and ensure a consistent supply. By sourcing potatoes
                from both Madhya Pradesh and Gujarat, we leverage the
                agricultural strengths of these key regions, enabling us to meet
                diverse market demands.
              </p>

              <Link to="/about" class="btn style4">
                Learn More <i class="fas fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <Certificate />
      </div>
    </div>
  );
}
