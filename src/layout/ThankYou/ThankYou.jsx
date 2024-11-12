import React from "react";
import img1 from "../../assets/tq.png";
import Breatcamp from "../../comman/Breatcamp";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <Breatcamp page="Thank You" />
      <div class="service-area-6 space overflow-hidden  text-center">
        <img src={img1} alt="" />
        <h3>Thank you for contacting us!</h3>
        <p class="text-center">We have received your message. We’ll reach you out immediately</p>
        
        <Link class="btn style2 style-r0" to="/"> Back To Home<i class="fas fa-angle-double-right"></i></Link>
      </div>
    </>
  );
}
