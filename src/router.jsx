// src/router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/HomePage/Home";
import AboutUs from "./layout/AboutUs/AboutUs";
import Contact from "./layout/ContactUs.js/Contact";
import ThankYou from "./layout/ThankYou/ThankYou";
import Gallery from "./layout/Gallery/Gallery";
import Product from "./layout/Product/Product";
import Service from "./layout/Service/Service";
import Team from "./layout/Team/Team";
import ProductDetail from "./layout/Product/ProductDetail";
import ScrollToTop from "./Component/ScrollToTop";
import TeamDetail from "./layout/Team/TeamDetail";
import NotFound from "./Component/NotFound";

function AppRouter() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/team/:teamId" element={<TeamDetail />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default AppRouter;
