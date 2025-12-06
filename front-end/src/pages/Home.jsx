import React from "react";
import Hero from "../components/Hero.jsx";
import ProductGuide from "../components/ProductGuide.jsx";
import Product_list from "../components/Product_list.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductGuide />
      <Product_list />
    </div>
  );
};

export default Home;
