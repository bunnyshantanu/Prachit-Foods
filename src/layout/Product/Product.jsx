import React from "react";
import Breatcamp from "../../comman/Breatcamp";
import p1 from "../../assets/Jyoti-Potato.jpg";
import p2 from "../../assets/333785a.jpg";
import p3 from "../../assets/seddpotato.png";
import { Link } from "react-router-dom";

export default function Product() {
  const blogData = [
    {id:1, image: p1, title: "Jyoti Potato" },
    {id:2, image: p2, title: "Chipsona Potato" },
    {id:3, image: p3, title: "Seed Potato" },
    // Add more blog items as needed
  ];

  return (
    <>
      <Breatcamp page="Product" />
      <section class="blog-area space-top space-extra-bottom">
        <div class="container-fluid px-5">
          <div class="row gy-4 justify-content-center">
            {blogData.map((blog) => (
              <div key={blog.id} class="col-xl-3 col-lg-6">
                <div class="blog-card style2">
                  <div class="blog-img">
                    <a Link to={`/product/${blog.id}`}>
                      <img src={blog.image} alt={blog.title} />
                    </a>
                  </div>
                  <div class="blog-content">
                    <h3 class="blog-title box-title">{blog.title}</h3>
                    <Link to={`/product/${blog.id}`}>View</Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
