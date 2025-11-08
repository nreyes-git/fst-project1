import React from "react";

const ProductGuide = () => {
  const steps = [
    {
      icon: <div className="text-3xl text-blue-700 mx-auto" />,
      title: "Browse",
    },
    {
      icon: <div className="text-3xl text-blue-700 mx-auto" />,
      title: "Add to Cart",
    },
    {
      icon: <div className="text-3xl text-blue-700 mx-auto" />,
      title: "Checkout",
    },
    {
      icon: <div className="text-3xl text-blue-700 mx-auto" />,
      title: "Payment",
    },
    {
      icon: <div className="text-3xl text-blue-700 mx-auto" />,
      title: "Then Wait",
    },
  ];

  return (
    <section className="bg-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          ONE STOP ONE SHOP
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-md shadow-md p-6 w-36 hover:scale-105 transform transition duration-200"
            >
              {step.icon}
              <p className="text-gray-800 font-semibold mt-3">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGuide;
