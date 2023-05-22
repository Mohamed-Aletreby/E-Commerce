import React from "react";
import Banners from "./Banners/Banners";
import Navbar from "./Navbar/Navbar";
import ProductsSection from "./ProductsSection/ProductsSection";
import Slider from "./Slider/Slider";
import Footer from "./Footer/Footer";

function MainPage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Banners />
      <ProductsSection />
      <Footer />
    </>
  );
}

export default MainPage;
