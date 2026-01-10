import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322')] bg-cover bg-center">
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              Wear Your Identity
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
              Premium clothing crafted for comfort, confidence, and everyday style.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
               <Link className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition"  to="/product">
                     <button >
                Shop Collection
              </button>
               
               </Link>
        
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      {/* BRAND STORY */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            More Than Clothing — It’s a Lifestyle
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe clothing should feel as good as it looks.  
            Every piece is designed with premium fabrics, attention to detail,
            and a modern aesthetic — made for people who value style without compromise.
          </p>
        </div>
      </section>

      {/* BEST SELLERS */}
      
      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Clothing Brand. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;
