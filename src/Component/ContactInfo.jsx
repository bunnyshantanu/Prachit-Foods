import React from "react";

export default function ContactInfo() {
  return (
    <>
      <div class="col-md-6  col-lg-6  bg-color py-5 px-5">
        <div class="widget-contact">
          <div class="title-area">
            <h2 class="sec-title text-white">Contact Info</h2>
          </div>{" "}
          <div class="row">
          <div class="contact-info-card col-lg-12">
              <div class="info-card_icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-card_content">
                <p class="info-card_title">Office Address</p>
                <h4 class="info-card_text">
                  282, Orbit Mall, A.B. Road, Indore - 452010 (M.P.), India
                </h4>
              </div>
            </div>
            <div class="contact-info-card col-lg-12">
              <div class="info-card_icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-card_content">
                <p class="info-card_title">Export Office</p>
                <h4 class="info-card_text">
                319, D.M. Tower, Near Janjeerwala Square , Indore - 452010 (M.P.), India
                </h4>
              </div>
            </div>
            <div class="contact-info-card col-lg-12">
              <div class="info-card_icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="info-card_content">
                <p class="info-card_title">Phone Number</p>
                <h4 class="info-card_text">0731-4970981</h4>
              </div>
            </div>
            <div class="contact-info-card col-lg-12">
              <div class="info-card_icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="info-card_content">
                <p class="info-card_title">Email</p>
                <h4 class="info-card_text">contact@prachitfoods.com</h4>
              </div>
            </div>
          
            <div class="contact-info-card col-lg-12">
              <div class="info-card_icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="info-card_content">
                <p class="info-card_title">Hours</p>
                <h4 class="info-card_text">
                  Mon - Sat: 11:00AM - 06:00PM .<br />
                  Sunday: Closed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
