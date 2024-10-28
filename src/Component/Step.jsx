import React, { useEffect, useRef } from "react";
import arrow1 from "../assets/process-arrow1-1.png";
import arrow2 from "../assets/process-arrow1-2.png";
import step1 from "../assets/potato.png";
import step2 from "../assets/automatic.png";
import step3 from "../assets/warehouse.png";
import step4 from "../assets/logistics.png";
import step5 from "../assets/global-distribution.png";
import step6 from "../assets/support.png";
export default function Step() {
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
    <>
      <div class="service-area-6 space overflow-hidden bg-smoke">
        <div class="container container2">
          <div class="row align-items-center text-xl-start text-center justify-content-center">
            <div class="col-12 text-center">
              <div class="title-area" ref={titleRef}>
                <h2 class="sec-title ">What We Do</h2>
                <p className="text-center">
                  At Prachit Foods India Pvt. Ltd., we specialize in the export
                  of high-quality potatoes and their variants, ensuring that our
                  products meet the highest standards of quality and freshness.
                  Our services encompass the entire supply chain, from sourcing
                  to delivery, allowing us to provide a seamless experience for
                  our clients. Here’s a detailed overview of our services:
                </p>
              </div>
            </div>
          </div>
          <div class="row gy-4 justify-content-center" ref={rowRef}>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step1} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Sourcing and Procurement</a>
                    </h3>
                    <p class="service-card_text text-center">
                      We have established strong relationships with farmers in
                      Madhya Pradesh and Gujarat, enabling us to procure the
                      finest
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step2} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Contract Farming</a>
                    </h3>
                    <p class="service-card_text text-center">
                      With a robust land base of 500 acres dedicated to contract
                      farming, we cultivate potatoes under optimal conditions,
                      ensuring
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step3} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Cold Storage Facilities</a>
                    </h3>
                    <p class="service-card_text text-center">
                      Our cold storage facility in Indore is equipped with the
                      latest technology to maintain the ideal temperature and
                      humidity levels
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step4} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Export Services</a>
                    </h3>
                    <p class="service-card_text text-center">
                      We provide tailored export solutions to meet the specific
                      needs of our clients, including packaging, labeling, and
                      documentation.
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step5} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Logistics and Distribution</a>
                    </h3>
                    <p class="service-card_text text-center">
                      From the moment our potatoes are harvested to their
                      arrival at the destination, we manage the logistics to
                      ensure a smooth supply
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card style6">
                <div class="service-card_content">
                  <div class="process-card px-0">
                    <div class="process-card-icon">
                      <img src={step6} alt="" />
                    </div>
                    <h3 class=" service-card_title">
                      <a>Customer Support and Communication</a>
                    </h3>
                    <p class="service-card_text text-center">
                      Our team is committed to providing exceptional customer
                      support, addressing inquiries.
                    </p>
                  </div>
                  <a class="btn style5 style-r0">
                    Read More <i class="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="process-area-2 space overflow-hidden position-relative background-image shape-mockup-wrap">
        <div class="container container2">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="title-area text-center">
                <h2 ref={titleRef} class="sec-title ">
                  What We Do
                </h2>
              </div>
            </div>
          </div>
          <div class="row gy-30 justify-content-center" ref={rowRef}>
            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-arrow">
                  <img src={arrow1} alt="img" />
                </div>
                <div class="process-card-icon">
                  <div class="process-num">01</div>
                  <img src={step1} alt="" />{" "}
                </div>
                <h3 class="process-card-title">Sourcing and Procurement</h3>
              </div>
            </div>
            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-arrow">
                  <img src={arrow2} alt="img" />
                </div>
                <div class="process-card-icon">
                  <div class="process-num">02</div>
                  <img src={step2} alt="" />
                </div>
                <h3 class="process-card-title">Contract Farming</h3>
              </div>
            </div>
            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-arrow">
                  <img src={arrow1} alt="img" />
                </div>
                <div class="process-card-icon">
                  <div class="process-num">03</div>
                  <img src={step3} alt="" />
                </div>
                <h3 class="process-card-title">Cold Storage Facilities</h3>
              </div>
            </div>
            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-arrow">
                  <img src={arrow2} alt="img" />
                </div>
                <div class="process-card-icon">
                  <div class="process-num">04</div>
                  <img src={step4} alt="" />
                </div>
                <h3 class="process-card-title">Export Services</h3>
              </div>
            </div>
            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-arrow">
                  <img src={arrow1} alt="img" />
                </div>
                <div class="process-card-icon">
                  <div class="process-num">05</div>
                  <img src={step5} alt="" />
                </div>
                <h3 class="process-card-title">Logistics and Distribution</h3>
              </div>
            </div>

            <div class="col-lg-auto col-md-6 process-card-wrap">
              <div class="process-card">
                <div class="process-card-icon">
                  <div class="process-num">06</div>
                  <img src={step6} alt="" />
                </div>
                <h3 class="process-card-title">
                  {" "}
                  Customer Support and Communication
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
