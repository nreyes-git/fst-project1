import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductGuide from "../components/ProductGuide.jsx";
import Product_list from "../components/Product_list.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGuide />
      <Product_list />
    </div>
  );
};

export default Home;
