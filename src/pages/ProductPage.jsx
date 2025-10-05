import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { SideBar } from "../components/SideBar";
import { PromoToday } from "../components/PromoToday";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <div className="font-sans">
      {/* ================= NAVBAR ================= */}
      <nav className="absolute bg-black w-[100%]">
        <div className=" flex justify-between mx-20 ">
          <div className="flex justify-between gap-10 items-center text-white">
            <div>
              <img src="Frame 13.png" alt="" />
            </div>
            <Link to="/">Home</Link>
            <Link to='/ProductPage'>Product</Link>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <div>
              <img src="/Search.png" alt="" />
            </div>
            <div>
              <img src="/ShoppingCart.png" alt="" />
            </div>
            <div>
              <button className="border border-white text-white p-3 rounded-md">
                Sign In
              </button>
            </div>
            <div>
              <button className="bg-[#FF8906] p-3 rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="h-[280px] bg-cover bg-center flex items-center px-12 text-white"
        style={{ backgroundImage: "url('/Rectangle 299.png')" }}
      >
        <h1 className="text-5xl md: ml-20 md:text-4xl max-w-lg drop-shadow-lg">
          We Provide Good Coffee and Healthy Meals
        </h1>
      </section>
      <PromoToday />
      <section className="flex justify-center px-10 py-10 gap-6">
        <SideBar />
        <ProductGrid />
      </section>
      <Footer />
    </div>
  );
}
