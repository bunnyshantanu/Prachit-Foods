import React, { useEffect, useRef } from "react";
import p1 from "../assets/poptat1.jpeg";
import p2 from "../assets/373.jpg";
export default function HomeVeriant() {

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
    <div>
      <div class="space overflow-hidden">
        <div class="container">
          <div class="row gy-4 justify-content-center" ref={rowRef}>
            <div class="col-lg-6 col-md-6">
              <div class="service-card style7">
                <div class="service-card_img">
                  <img src={p1} alt="img" />
                </div>
                <div class="service-card_content">
                  <h3 class="service-card_title ">
                    <a> Jyoti Potato</a>
                  </h3>
                </div>
                <div class="service-card-hover">
                  <h3 class="service-card_title ">
                    <a>Jyoti Potato</a>
                  </h3>
                  <p class="service-card_text">
                    We also supply eminent entity engaged in offering to our
                    clients a high quality Organic Potatoes
                  </p>
                  <a class="btn style9 bg-none">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="service-card style7">
                <div class="service-card_img">
                  <img src={p2} alt="img" />
                </div>
                <div class="service-card_content">
                  <h3 class="service-card_title ">
                    <a> Lady Rosetta Potato</a>
                  </h3>
                </div>
                <div class="service-card-hover">
                  <h3 class="service-card_title ">
                    <a>Lady Rosetta Potato</a>
                  </h3>
                  <p class="service-card_text">
                    We also supply eminent entity engaged in offering to our
                    clients a high quality Organic Potatoes
                  </p>
                  <a class="btn style9 bg-none">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
