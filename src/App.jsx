import React, { useEffect, useState } from "react";
import Header from "./comman/Header";
import Home from "./layout/HomePage/Home";
import Footer from "./comman/Footer";
import ScrollToTop from "./comman/Scroll";
import Preloader from "./Component/Preloader";
import AppRouter from "./router";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header />
        <AppRouter/>
      <Footer />
      <ScrollToTop />
    </>
  );
}
