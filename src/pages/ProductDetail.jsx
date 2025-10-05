import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/allProduct.json";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ProductDetail = () => {
  const { title } = useParams();
  const { AllMenus } = data;
  const product = AllMenus.find((p) => p.title === title) || AllMenus[0];

  const [size, setSize] = useState("Regular");
  const [qty, setQty] = useState(1);

  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-gray-800">
        {/* ================= Product Detail Section ================= */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Image Gallery */}
            <div>
              <div className="relative">
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">
                  FLASH SALE
                </span>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={product.img}
                    alt="gallery"
                    className="w-full h-[80px] object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                  />
                ))}
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
              <p className="text-[#FF8906] font-semibold text-2xl mb-3">
                Rp {product.price}
              </p>

              {/* Rating & Info */}
              <div className="flex items-center gap-3 mb-4">
                <img src="/Frame 41.png" alt="rating" className="" />
                <span className="relative left-[-5%]">5.0</span>
              </div>
              <div className="flex gap-5 items-center my-5">
                <span>200 Reviews</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 text-sm">Recommendation</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Choose Size */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Choose Size</label>
                <div className="flex gap-4">
                  {["Regular", "Medium", "Large"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 border rounded-lg transition ${
                        size === s
                          ? "bg-[#FF8906] text-white border-[#FF8906]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#FF8906]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 border border-gray-400 rounded-md flex justify-center items-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 border border-gray-400 rounded-md flex justify-center items-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#FF8906] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
                  Buy Now
                </button>
                <button className="border-2 border-[#FF8906] text-[#FF8906] px-6 py-3 rounded-md font-semibold hover:bg-orange-50">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Recommendation Section ================= */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">
              Recommendation <span className="text-[#FF8906]">For You</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {AllMenus.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
                  FLASH SALE
                </span>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-[#FF8906] font-semibold mb-2">
                    Rp {item.price}
                  </p>
                  <img src="/Frame 41.png" alt="rating" className="w-20 mb-2" />
                  <Link to={`/product/${encodeURIComponent(item.title)}`}>
                    <button className="w-full bg-[#FF8906] text-white py-2 rounded-md hover:bg-orange-600">
                      Buy
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (dummy) */}
          <div className="flex justify-center mt-10 gap-2">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 rounded-full ${
                  n === 1 ? "bg-[#FF8906] text-white" : "bg-gray-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </section>
        <Footer/>
      </main>
    </>
  );
};
