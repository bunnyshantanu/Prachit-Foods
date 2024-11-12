import Breatcamp from "../../comman/Breatcamp";
import React, { useEffect, useRef } from "react";
import shape1 from "../../assets/service-shape1-2.png";
import shape2 from "../../assets/service-shape1-2.png";
import a2 from "../../assets/quality.jpg";
import Certificate from "../../Component/Certificate";

export default function AboutUs() {
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
      <Breatcamp page="About Us" />
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
                  Welcome to{" "}
                  <span className="text-theme">
                    {" "}
                    Prachit Foods (India) Pvt. Ltd.{" "}
                  </span>
                </h2>
                <p>
                  Prachit Foods (India) Pvt. Ltd., headquartered in the heart of
                  central India—Indore, Madhya Pradesh is a leading global
                  exporter and supplier of fresh, premium-quality agro products.
                  Established with the vision of becoming a leading player in
                  the global agro sector, we specialize exclusively in potatoes,
                  leveraging our in-depth expertise and extensive farming
                  resources to deliver consistent quality that meets
                  international standards. Prachit Foods is dedicated to the
                  cultivation, production, and export of premium-quality
                  potatoes and their variants viz. Lady Rosita (LR), Chipsona,
                  Jyoti etc.
                </p>
                <p>
                  At Prachit Foods, we pride ourselves on our unmatched
                  reputation in the global market, particularly as a premier
                  supplier and exporter of potatoes. Our potatoes are recognized
                  for their consistent quality, which is ensured through
                  rigorous quality control measures at every stage—from farming
                  to delivery. Backed by a dedicated and experienced team, we
                  stay attuned to market trends, offering our customers products
                  that meet their evolving needs.
                </p>

                <p>
                  Our competitive edge lies in our well-established
                  infrastructure. With a 500-acre land base dedicated to
                  contract farming, we significantly reduce reliance on external
                  suppliers, ensuring that we maintain control over the quality
                  and consistency of our produce. In addition to our farming
                  operations, we have strategic partnerships with major global
                  shipping lines such as MSC, CMA, and Maersk, and we maintain
                  reserved loading facilities at two key Indian ports—Nhava
                  Sheva and Mundra—allowing us to guarantee timely and efficient
                  deliveries to our clients worldwide.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="why-area-1 space overflow-hidden   background-image">
        <div class="container container2">
          <div class="row">
            <div class="col-xl-12 col-lg-8">
              <div class="title-area">
                <h3 class=" h3">
                  Potato Expertise and Madhya Pradesh Advantage
                </h3>
                <p>
                  Madhya Pradesh, particularly the Malwa region, is renowned for
                  its agricultural significance, ranking as the third-largest
                  potato-producing state in India. The Indore district alone
                  contributes nearly 50% of the state's potato production. With
                  access to more than 20 of the 50 potato varieties developed by
                  the Central Potato Research Institute (CPRI) in Shimla, Madhya
                  Pradesh is rapidly emerging as a prime location for potato
                  processing and retail. This geographical advantage, coupled
                  with our expertise, positions Prachit Foods as a trusted
                  partner in the global agro-product supply chain.
                </p>
                <p>
                  In addition to Madhya Pradesh, Prachit Foods also sources
                  high-quality potatoes from Gujarat, another key
                  potato-producing region in India. This diversified sourcing
                  strategy ensures a consistent and reliable supply of potatoes
                  year-round, allowing us to meet market demands effectively.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="why-area-1 space overflow-hidden  bg-smoke background-image">
        <div class="container-fluid px-5">
          <div class="row">
            <div class="col-xl-6">
              <img src={a2} alt="" class="rounded" />
            </div>
            <div class="col-xl-6 col-lg-8">
              <div class="title-area">
                <h3 class=" h3">Commitment to Quality</h3>
                <p>
                  At Prachit Foods, quality is not just a standard but our
                  identity. Each product we offer undergoes stringent quality
                  checks, ensuring that our clients receive only the best.
                  Whether it’s fresh vegetables or industrial-grade food
                  materials, our unwavering focus on quality and reliability has
                  made us a preferred choice in both local and international
                  markets.
                </p>
                <p>
                  With a robust supply chain, a commitment to excellence, and a
                  deep understanding of the global agro sector, Prachit Foods
                  (India) Pvt. Ltd. continues to set benchmarks in the industry.
                  We look forward to fostering long-lasting relationships with
                  our clients while delivering agricultural excellence across
                  the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="why-area-1 space overflow-hidden   background-image">
        <div class="container container2">
        <h3 class=" text-center">Certificates</h3>
        <p class="text-center">Prachit Foods is registered with 
 ISO 9001:2015, 
 ISO 22000:2005  
 HACCP,  
FSSAI  
APEDA.</p>
<p></p>

          <Certificate/>
          <p class="pt-3">These certifications represent our genuine efforts to make every product and every technique in 
          good favour of human and animal consumption. </p>
        </div>
      </div>

    </>
  );
}
