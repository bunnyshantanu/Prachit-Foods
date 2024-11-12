import React, { useEffect, useRef } from "react";
import Breatcamp from "../../comman/Breatcamp";
import shape1 from "../../assets/service-shape1-2.png";
import shape2 from "../../assets/service-shape1-2.png";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/cold-1.jpeg";
import s4 from "../../assets/s4.avif";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";

export default function Service() {
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
      <Breatcamp page="What We Do" />
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
        <div class="container-fluid ">
          <div class="row justify-content-center">
            <div class="col-xl-11 col-lg-10">
              <div class="title-area text-center mb-0" ref={rowRef}>
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
        </div>
      </div>
      <div class="space overflow-hidden">
        <div class="">
          {/* s1 */}
          <div className="container-fluid px-5">
            <div class="row text-start">
              <div class="col-lg-5">
                <div class="about-thumb2 mb-50 mb-lg-0">
                  <div class="about-img-1">
                    <img src={s1} alt="img" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Sourcing and Procurement</h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Local Partnerships:</b> We have established strong
                          relationships with farmers in Madhya Pradesh and
                          Gujarat, enabling us to procure the finest quality
                          potatoes directly from the source. Our commitment to
                          ethical practices ensures that farmers are treated
                          fairly and paid promptly.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b>Quality Assurance:</b>
                          Our team meticulously inspects the potatoes to
                          guarantee that only the best produce is selected for
                          export. We adhere to stringent quality control
                          measures to maintain the freshness and integrity of
                          our products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* s2 */}
          <div className="container-fluid px-5  bg-light">
            <div class="row text-start pt-50 pb-50">
              <div class="col-lg-7 my-auto">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Contract Farming </h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Land Base Management:</b> With a robust land base
                          of 500 acres dedicated to contract farming, we
                          cultivate potatoes under optimal conditions, ensuring
                          high yield and quality.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b>Expertise in Cultivation:</b>
                          Our team, led by experienced agricultural
                          professionals, utilizes advanced farming techniques
                          and best practices to enhance production efficiency
                          and product quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="about-thumb2 pb-0 mb-lg-0">
                  <div class="about-img-1 hellu">
                    <img src={s2} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* s3 */}

          <div className="container-fluid px-5 py-5">
            <div class="row text-start">
              <div class="col-lg-5">
                <div class="about-thumb2 mb-5 pb-4 mb-lg-0">
                  <div class="about-img-1">
                    <img src={s3} alt="img" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 my-auto">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Cold Storage Facilities </h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> State-of-the-Art Cold Storage:</b> Our cold
                          storage facility in Indore is equipped with the latest
                          technology to maintain the ideal temperature and
                          humidity levels, preserving the freshness of our
                          potatoes during storage and transport.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b>Efficient Inventory Management:</b>
                          We utilize advanced inventory management systems to
                          monitor stock levels and ensure timely deliveries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* s4 */}
          <div className="container-fluid px-5  bg-light">
            <div class="row text-start pt-50 pb-50">
              <div class="col-lg-7 my-auto">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Export Services </h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Custom Export Solutions:</b> We provide tailored
                          export solutions to meet the specific needs of our
                          clients, including packaging, labeling, and
                          documentation for international shipments.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Partnerships with Leading Shipping Lines:</b>
                          Our collaborations with major shipping lines like MSC,
                          CMA, and Maersk ensure reliable and timely delivery to
                          our international clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="about-thumb2 pb-0 mb-lg-0">
                  <div class="about-img-1 hellu">
                    <img src={s4} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* s5 */}

          <div className="container-fluid px-5 py-5">
            <div class="row text-start">
              <div class="col-lg-5">
                <div class="about-thumb2 mb-5 pb-4 mb-lg-0">
                  <div class="about-img-1">
                    <img src={s5} alt="img" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 my-auto">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Logistics and Distribution </h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b>End-to-End Logistics Management:</b> From the
                          moment our potatoes are harvested to their arrival at
                          the destination, we manage the logistics to ensure a
                          smooth supply chain process.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Timely Deliveries:</b>
                          We understand the importance of timely deliveries in
                          the export business and work diligently to ensure that
                          our products reach our clients promptly and in perfect
                          condition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* s6 */}
          <div className="container-fluid px-5  bg-light">
            <div class="row text-start pt-50 pb-50">
              <div class="col-lg-7 my-auto">
                <div class="about-content-wrap">
                  <div class="title-area mb-3">
                    <h3 class="h3">Customer Support and Communication </h3>
                  </div>
                  <div class="about-list-wrap">
                    <div class="about-list-box mb-2">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Dedicated Customer Service:</b> Our team is
                          committed to providing exceptional customer support,
                          addressing inquiries, and offering assistance
                          throughout the export process.
                        </p>
                      </div>
                    </div>
                    <div class="about-list-box">
                      <div class="list-content-area">
                        <p class="list-text">
                          <b> Regular Updates:</b>
                          We keep our clients informed at every stage of the
                          process, from order confirmation to shipment tracking,
                          ensuring transparency and peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="about-thumb2 pb-0 mb-lg-0">
                  <div class="about-img-1 hellu">
                    <img src={s6} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-5 pt-45">
          <p className="">
            At Prachit Foods India Pvt. Ltd., we are dedicated to becoming one
            of the largest potato exporters while maintaining our commitment to
            quality, sustainability, and ethical practices. Our comprehensive
            services are designed to meet the diverse needs of our clients,
            ensuring satisfaction and fostering long-term partnerships.
          </p></div>
        </div>
      </div>
    </>
  );
}
