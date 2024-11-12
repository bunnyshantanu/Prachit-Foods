import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)

    // After successful form submission, redirect to Thank You page
    navigate("/thank-you");
  };

  return (
     
        <form className="contact-form ajax-contact" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control style-border"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control style-border"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control style-border"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control style-border"
                  name="company"
                  id="company"
                  placeholder="Company Name"
                />
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control style-border"
                  name="service"
                  id="service"
                  placeholder="Subject"
                />
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  className="form-control style-border"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-btn col-12 text-center">
            <button type="submit" className="btn w-100 style4">
              Submit Now
            </button>
          </div>
        </form>
        
   
  );
}
