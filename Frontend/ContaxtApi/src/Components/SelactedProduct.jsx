import React from 'react'
import {Datacontaxt} from '../Context/ProductContaxt.jsx';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'




const ProductDetails = () => {
 


const data =  useContext(Datacontaxt);

   const {id} = useParams()

    let selactedProduct =  " "

     if(data && data.length>0){
       selactedProduct = data.find((item) => item.id == id)
     }
      console.log(selactedProduct);

  return (
    // 🔹 Root wrapper
    // ❗ Dark/Light theme future me yahin se control hogi
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-white transition-all duration-300">

      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">
          Product Details
        </h1>

        {/* 🔹 THEME TOGGLE (UI ONLY) */}
        {/* ❗ Abhi functionality nahi hai */}
        <button className="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          🌙 / ☀️
        </button>
      </header>

      {/* ================= PRODUCT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">

        {/* PRODUCT IMAGE */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden">
          <img
            src={selactedProduct.image}
            alt={selactedProduct.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {selactedProduct.title}
          </h2>

          <p className="text-xl text-gray-700 dark:text-white mb-6">
             ₹ {selactedProduct.price}
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {selactedProduct.description}
          </p>

          {/* SIZES */}
          <div className="mb-8">
            

            <div className="flex gap-3">
        
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg hover:opacity-90 transition">
              Add to Cart
            </button>

            <button className="flex-1 border border-gray-400 dark:border-gray-600 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Clothing Brand
      </footer>

    </div>
  );
};

export default ProductDetails;

