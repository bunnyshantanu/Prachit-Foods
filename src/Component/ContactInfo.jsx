import React from "react";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <>
      <div class="col-md-4  col-lg-4   my-auto p-0 m-0">
        <div class="widget-contact bg-color py-5 px-5">
          <div class="title-area">
            <h3 class=" text-white">Quick Link</h3>
          </div>{" "}
          <div class="row">
            <div class="contact-info-card col-lg-12">
              <div class="n">
                <i class="fas fa-arrow-right text-white"></i>
              </div>
              <div class="info-card_content text-white">
                <Link to="/" class="text-white">
                  Home
                </Link>
              </div>
            </div>

            <div class="contact-info-card col-lg-12">
              <div class="n">
                <i class="fas fa-arrow-right text-white"></i>
              </div>
              <div class="info-card_content text-white">
                <Link to="/about" class="text-white">
                  About Us
                </Link>
              </div>
            </div>

            <div class="contact-info-card col-lg-12">
              <div class="n">
                <i class="fas fa-arrow-right text-white"></i>
              </div>
              <div class="info-card_content text-white">
                <Link to="/product" class="text-white">
                  Product
                </Link>
              </div>
            </div>

            <div class="contact-info-card col-lg-12">
              <div class="n">
                <i class="fas fa-arrow-right text-white"></i>
              </div>
              <div class="info-card_content text-white">
                <Link to="/gallery" class="text-white">
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
