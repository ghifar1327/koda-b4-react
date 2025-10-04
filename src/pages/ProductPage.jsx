import React from "react";
import { Navbar } from "../components/Navbar";

export default function ProductPage() {
  const products = [
    { title: "Hazelnut Latte", price: "10.000", img: "/product1.jpg" },
    { title: "Fried Chicken", price: "20.000", img: "/product2.jpg" },
    { title: "Hazelnut Latte", price: "10.000", img: "/product1.jpg" },
    { title: "Fried Chicken", price: "20.000", img: "/product2.jpg" },
    { title: "Hazelnut Latte", price: "10.000", img: "/product1.jpg" },
    { title: "Fried Chicken", price: "20.000", img: "/product2.jpg" },
  ];

  return (
    <div className="font-sans">
      {/* ================= NAVBAR ================= */}
      <nav className="absolute bg-black w-[100%]">
        <div className=" flex justify-between mx-20 ">
          <div className="flex justify-between gap-10 items-center text-white">
            <div>
              <img src="Frame 13.png" alt="" />
            </div>
            <div>Home</div>
            <div>Produc</div>
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

      {/* ================= HERO ================= */}
      <section
        className="h-[280px] bg-cover bg-center flex items-center px-12 text-white"
        style={{ backgroundImage: "url('/Rectangle 299.png')" }}
      >
        <h1 className="text-5xl md:text-4xl max-w-lg drop-shadow-lg">
          We Provide Good Coffee and Healthy Meals
        </h1>
      </section>

      {/* ================= PROMO ================= */}
      <section className="">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold mb-4">Today Promo</div>
          <div className="flex gap-5">
            <button className="bg-[#E8E8E8] p-5 rounded-[50%]">
              <img src="arrow-up.png" alt="" />
            </button>
            <button className="bg-[#FF8906] p-5 rounded-[50%]">
              <img src="arrow-up.png" alt="" className="rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 overflow-x-auto">
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-r-4xl">
            <img src="/image 46.png" alt="" />
            <div className="m-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-4xl px-5">
            <img src="/image 46.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-4xl px-5">
            <img src="/image 46.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>

          <div className="bg-[#F5C361] w-[20%] flex pt-2 pl-5  rounded-l-4xl">
            <img src="/image 43.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT (Sidebar + Products) ================= */}
      <section className="flex px-10 py-10 gap-6">
        {/* ===== Sidebar Filter ===== */}
        <aside className="w-1/4 bg-black text-white p-6 rounded-lg h-fit">
          <h3 className="text-lg font-bold mb-4">Filter</h3>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            className="w-full p-2 rounded mb-6 text-black"
          />

          {/* Category */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Category</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <input type="checkbox" className="mr-2" /> Coffee
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Non-Coffee
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Foods
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Add-ons
              </li>
            </ul>
          </div>

          {/* Range Price */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Range Price</h4>
            <input type="range" className="w-full accent-[#FF8906]" />
          </div>

          <button className="w-full py-2 bg-[#FF8906] rounded font-semibold">
            Apply Filter
          </button>
        </aside>

        {/* ===== Product Grid ===== */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="border rounded-lg shadow bg-white overflow-hidden relative"
            >
              {/* Badge Flash Sale */}
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
                FLASH SALE
              </span>
              {/* Product Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[160px] object-cover"
              />
              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-[#FF8906] font-bold">Rp {p.price}</p>
                <button className="mt-3 w-full bg-[#FF8906] text-white py-2 rounded hover:bg-orange-500">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 mt-10 p-8 text-center text-gray-600 text-sm">
        <p>© 2025 Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
