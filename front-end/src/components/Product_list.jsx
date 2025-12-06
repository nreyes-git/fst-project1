import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../api/api_base";
import Loading from "./Loading";

const Product_list = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="py-16 px-6">
      <div className="p-2 flex items-center justify-center">
        <h1 className="text-primary text-4xl font-bold">Product list</h1>
      </div>
      <div className="flex flex-wrap justify-between px-25">
        {products.slice(0, 6).map((product, index) => (
          <div className="shadow-xl/20 flex flex-col items-center my-12 p-5">
            <div key={index} className="product-card bg-white">
              <img
                src={`${BASE_URL}${product.image}`}
                alt={product.product_name}
              />
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold">{product.product_name}</h2>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p>{product.product_price}</p>
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
