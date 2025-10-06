import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import data from "../data/allProduct.json"
import { ChatFeatur } from "../components/ChatFeatur";

export const HomePage = () => {
  const {FavoriteMenus} = data

  return (
    <>
      <Navbar />
      <main className="font-sans text-gray-800">
        {/* ================= Hero Section ================= */}
        <div className="grid grid-cols-2 bg-gradient-to-r from-[#777C82] to-[#000000] h-[150vh] text-white">
          {/* Left Content */}
          <div className="flex justify-center items-center">
            <div className="w-[70%]">
              <div className="text-4xl md:text-5xl leading-tight">
                Start Your Day with <br /> Coffee and Good Meals
              </div>
              <div className="text-gray-400 mt-4">
                We provide high quality coffee, meals, and desserts made with
                love.
              </div>

              <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition">
                Get Started
              </button>

              {/* Stats */}
              <div className="flex  justify-between mt-8 text-gray-300">
                <div>
                  <p className="text-5xl text-[#FF8906] mb-3">90+</p>
                  <span>Staff</span>
                </div>
                <div className="w-[1px] bg-white"></div>
                <div>
                  <p className="text-5xl text-[#FF8906] mb-3">30+</p>
                  <span>Stores</span>
                </div>
                <div className="w-[1px] bg-white"></div>
                <div>
                  <p className="text-5xl text-[#FF8906] mb-3">800+</p>
                  <span>Customers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/Rectangle 287.png"
              alt="Coffee"
              className="h-[150vh] w-full"
            />
            </div>
        </div>
        <ChatFeatur/>
        {/* ================= About Section ================= */}
        <section className="flex flex-col md:flex-row items-center mx-auto">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <div className="max-w-[70%] mx-auto">
              <div className="text-5xl mb-10">
                We Provide <span className="text-[#8E6447]">Good Coffee</span>{" "}
                and <span className="text-[#8E6447]">Healthy Meals</span>
              </div>
              <div className="text-[#4F5665] text-lg mb-10">
                You can explor the menu that we provide white fun and have their
                own teste and make your day better
              </div>
              <ul className="space-y-2 text-gray-600 text-lg">
                <li className="flex gap-3  mb-10">
                  <img src="/Vector1.png" alt="" /> High quality beans
                </li>
                <li className="flex gap-3 mb-10">
                  <img src="/Vector1.png" alt="" /> Healthy meals you can
                  request the ingredients
                </li>
                <li className="flex gap-3  mb-10">
                  <img src="/Vector1.png" alt="" /> Can with our stuff to get
                  better experience for ordering
                </li>
                <li className="flex gap-3  ">
                  <img src="/Vector1.png" alt="" /> Free member card with a
                  minimum purchase of IDR 200.000
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="/Rectangle 291.png"
              alt="Barista"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* ================= Favorite Menu ================= */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="text-center ">
            <div className="text-center text-5xl mb-10">
              Here is People’s <span className="text-[#8E6447]">Favorite</span>
            </div>
            <div className="w-[10%] h-2 bg-[#FF8906] flex mx-auto mb-10"></div>
            <div className="test-[#4F5665] mb-20">
              let's choose and have abit teste of people’s favorite. it might be
              yours too!
            </div>
          </div>

          <div className="grid md:grid-cols-4 max-w-8xl mx-auto">
            {FavoriteMenus.map(({ name, price, description, img }, i) => (
              <div key={i} className="transition p-6 relative">
                <div className="h-75">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-60 object-cover mb-4"
                  />
                </div>
                <div className="absolute z-1 bg-white top-[65%] w-[78%] left-[11%] p-2">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p>{description}</p>
                  <p className="text-orange-500 font-semibold">{price}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <button className=" w-full rounded-lg bg-[#FF8906] p-1">
                      Buy
                    </button>
                    <div>
                      <img src="Frame 37.png" alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= Map Section ================= */}
        <section className="py-16 px-6 text-center mt-20 bg-[#E8E8E84D]">
          <div className="text-5xl">
            <span className="text-[#8E6447]">Visit Our Store</span> in the Spot
            on the Map Below
          </div>
          <div className="h-2 w-[10%] bg-[#FF8906] mx-auto mt-10"></div>
          <p className="text-gray-500 mt-10">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <img
            src="/Huge Global.png"
            alt="Map"
            className="mt-8 mx-auto max-w-4xl w-full"
          />
        </section>

        {/* ================= Testimonial ================= */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
            <img src="/Rectangle 295.png" alt="Customer" className="" />
            <div>
              <div className="text-md mb-5">TESTIMONIAL</div>
              <div className="flex gap-5 p-1 mb-5">
                <div className="w-1 bg-[#FF8906]"></div>
                <div className="text-5xl">Viezh Robert</div>
              </div>
              <div className="text-[#FF8906] mb-5">Manager coffee shop</div>
              <p className="mt-2 text-gray-300 mb-5">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
              <img src="Frame 41.png" alt="" className="mb-10" />
              <img src="Group 1306.png" alt="" className="mb-10" />
              <img src="Group 1300.png" alt="" className="mb-10" />
            </div>
          </div>
        </section>

        <Footer></Footer>
      </main>
    </>
  );
};
