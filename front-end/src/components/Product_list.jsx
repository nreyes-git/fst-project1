import React from "react";
import { products } from "../api/products";

const Product_list = () => {
  return (
    <div className="py-16 px-6">
      <div className="p-2 flex items-center justify-center">
        <h1 className="text-primary text-4xl font-bold">Product list</h1>
      </div>
      <div className="flex flex-wrap justify-between px-25">
        {products.slice(0, 6).map((product, index) => (
          <div className="shadow-xl/20 flex flex-col items-center my-12 p-5">
            <div key={index} className="product-card bg-white">
              <img src={product.image} alt={product.name} />
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold">{product.name}</h2>
                  <p>{product.brand}</p>
                  <p>{product.category}</p>
                </div>
                <div>
                  <p>{product.price}</p>
                  <button className="bg-primary w-15 h-8 rounded text-white hover:bg-primary-hover">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_list;
