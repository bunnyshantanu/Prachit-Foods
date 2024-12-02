import React, { useEffect } from "react";
import Slider from "../../Component/Slider";
import AboutHome from "../../Component/AboutHome";
import HomeVeriant from "../../Component/HomeVeriant";
import Step from "../../Component/Step";
import ColdStorage from "../../Component/ColdStorage";
import TempSlider from "../../Component/TempSlider";
import ContactInfo from "../../Component/ContactInfo";
import ContactForm from "../../Component/ContactForm";
import Certificate from "../../Component/Certificate";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
      if (hash === '#contact') {
          const element = document.getElementById('contact');
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [hash]);
  return (
    <>
      <Slider />
      <AboutHome />
      <ColdStorage />
      <Certificate />
      {/* <Step/> */}
      {/* <HomeVeriant/> */}
      <div class="contact-us service-area-6  space overflow-hidden bg-smoke" id="contact">
        <div class="container container2">
          <div class="row">
            <ContactInfo />
            <div class="col-lg-8 bg-white py-5 px-3">
              <div class="contact-form-wrap ms-xl-4 mt-40 mt-lg-0">
                <div class="title-area">
                  {/* <span class="sub-title">TALK TO US</span> */}
                  <h2 class="sec-title ">Talk to Us</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
