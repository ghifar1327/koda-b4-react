import React from "react";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { SideBar } from "../components/SideBar";
import { PromoToday } from "../components/PromoToday";
import { Navbar2 } from "../components/Navbar2";

export default function ProductPage() {
  return (
    <div className="font-sans">
      <Navbar2/>

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
