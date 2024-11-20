import React from 'react'
import Slider from '../../Component/Slider'
import AboutHome from '../../Component/AboutHome'
import HomeVeriant from '../../Component/HomeVeriant'
import Step from '../../Component/Step'
import ColdStorage from '../../Component/ColdStorage'
import TempSlider from '../../Component/TempSlider'
import ContactInfo from '../../Component/ContactInfo'
import ContactForm from '../../Component/ContactForm'

export default function Home() {
  return (<>
    <Slider/>
    <AboutHome/>
    <Step/>
    <ColdStorage/>
    <HomeVeriant/>
    <div class="contact-us service-area-6  space overflow-hidden bg-smoke">
        <div class="container container2">
          <div class="row">
            <ContactInfo />
            <div class="col-lg-6 bg-white py-5 px-3">
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
  )
}
