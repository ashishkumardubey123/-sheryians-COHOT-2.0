import React, { useContext } from "react";
import { Datacontaxt } from "../Context/ProductContaxt";
import { Link } from "react-router-dom";


const Products = () => {
  const data = useContext(Datacontaxt);

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-00 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-md font-semibold line-clamp-2">
                {product.title}
              </h2>

              <p className="text-lg font-bold mt-2 text-green-600">
                ₹ {product.price}
              </p>
              <Link to={`/product/${product.id}`} className="mt-4 w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg hover:opacity-90 transition">
            
               View Details
             
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
