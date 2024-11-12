import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import p1 from "../../assets/Jyoti-Potato.jpg";
import p2 from "../../assets/333785a.jpg";
import p3 from "../../assets/seddpotato.png";
import Breatcamp from "../../comman/Breatcamp";
import { Button } from "bootstrap";
import ContactForm from "../../Component/ContactForm";


// Example product data
const products = [
  { id: 1, image: p1, title: "Jyoti Potato", content: "We also supply eminent entity engaged in offering to our clients a high quality Organic Potatoes, Jyoti are white colour oval shape potatoes which are big in size and are easy to cook, waxy texture, mild flavour, free from discoloration after cooking. These Organic Potatoes are grown in hygienic and favourable conditions or highly appreciated due to their features like naturally grown, freshness, natural taste and long shelf life. Easy to cook, Waxy texture, mild flavour, free from discoloration after cooking. We export potatoes in different sizes. Potato is known for its high carbohydrate content. We procure potatoes from well-known agriculturists and framers. Our vegetables are wholesome, fresh and hygienically packed." },
  { id: 2, image: p2, title: "Chipsona Potato", content:"We are an eminent entity engaged in offering to our clients a high quality Organic Potatoes, Chipsona are light yellow colour potatoes which are easy to cook, waxy texture, mild flavour, free from discoloration after cooking. Provided potato are consumed in the form of vegetable and due to high dray matter, low reducing sugars and low phenols suitable for making chips and French fries. These Organic Potatoes are grown in hygienic and favourable conditions or highly appreciated due to their features like naturally grown, freshness, natural taste and long shelf life.<br>Easy to cook, Waxy texture, mild flavour, free from discoloration after cooking. Due to high dry matter, low reducing sugars and low phenol, the variety is highly suitable for making chips and French fries. We export potatoes in different sizes. Potato is known for its high carbohydrate content. We procure potatoes from well-known agriculturists and framers. We use mesh and jute bags to pack the potatoes. Our vegetables are wholesome, fresh and hygienically packed." },
  { id: 3, image: p3, title: "Seed Potato", content: "Quality of the potato seeds determines the quality of the produce. High quality seeds are important for farmers as well as for food processors as the quality of the end product depends highly on the quality of the seeds. Prachit Foods provides high quality and high yielding potato seeds. The quality of our seeds is tried and tested. Our potato seeds not only guarantee a high yield but also economic. Our main agenda of suppling potato seeds is that we want to grow all the farmers who are connected with us so that they can grow a good crop and earn good and this will be beneficial for the Food Processing Companies.<br>We offer seeds of Lady Rosetta, Chipsona, Jyoti and other varieties according to demands, which is supplied in 50 Kg. packaging." },
  // Add more products as needed
];

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return <Navigate to="/NotFound" />;
  }
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
      <>
      <Breatcamp page={product.title} />

      {/* <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div> */}


<section class="blog-details-area space-top space-extra-bottom">
        <div class="container">
            <div class="row gx-40">
                <div class="col-xxl-12">
                    <div class="blog-card row">
                        <div class=" col-lg-6">
                            <img src={product.image} alt={product.title} width={'100%'} />
                        </div>
                        <div class="blog-content col-lg-6">
                            <h4>{product.title}</h4>
                            <p class="mb-20">Going green and reducing your carbon footprint are important steps towards creating a more sustainable future for our planet. There are many simple changes that you can make in your daily life that can have a significant impact on reducing your carbon footprint and helping the environment.</p>
                            <p>One of the most effective ways to reduce your carbon footprint is to make changes to your energy consumption. You can start by reducing your use of fossil fuels and increasing your use of renewable energy sources like solar, wind, or hydroelectric power. You can also make your home more energy-efficient by installing insulation, upgrading to energy-efficient appliances and light bulbs, and using programmable thermostats.</p>
                         
                            <div class="post-content-tags ">
                                <div class="post-tag-social">
                                    <div class="post-tag">
                                    <a class="btn style5 style-r0"  onClick={handleShow}>Enquiry Now<i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                
                   
                </div>

              
            </div>
        </div>
    </section>


    {showModal && (
        <div
          className="modal fade show"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Enquiry Modal</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
               <ContactForm />
              </div>
            
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
      </>
  );
};

export default ProductDetail;
