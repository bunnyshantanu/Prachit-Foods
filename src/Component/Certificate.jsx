import React, { useEffect, useRef } from "react";
import cer1 from "../assets/mp11.png";
import cer2 from "../assets/apedaa.png";
import cer3 from "../assets/iso1.png";
import cer4 from "../assets/iso2.png";

export default function Certificate() {
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
  <div class=" space bg-color">
      <div class="container">
      <div class="row " ref={rowRef}>
        <div class="col-xl-3">
          <a class="client-wrap">
            <img src={cer1} alt="img" />
          </a>
        </div>

        <div class="col-xl-3">
          <a class="client-wrap">
            <img src={cer3} alt="img" />
          </a>
        </div>
        <div class="col-xl-3">
          <a class="client-wrap">
            <img src={cer4} alt="img" />
          </a>
        </div>

        <div class="col-xl-3">
          <a class="client-wrap">
            <img src={cer2} alt="img" />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
