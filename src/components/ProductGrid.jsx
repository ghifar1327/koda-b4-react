import React from "react";
import data from "../data/allProduct.json"
import { Link } from "react-router-dom";

export const ProductGrid = () => {
 const {AllMenus} = data
  return (
    <>
      <div className="w-2/4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {AllMenus.map((p, i) => (
          <div
            key={i}
            className="relative w-[50vh] h-[80vh] overflow-hidden relative"
          >
            <Link to={`/product/${encodeURIComponent(p.title)}`} key={i}>
            {/* Badge Flash Sale */}
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
              FLASH SALE
            </span>
            {/* Product Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-[80%] object-cover"
            />
          </Link>

            {/* Info */}
            <div className="absolute p-4 bg-white w-[90%] z-1 bottom-0 left-[5%]">
            <Link to={`/product/${encodeURIComponent(p.title)}`} key={i}>
              <p className="text-2xl font-semibold mb-2">{p.title}</p>
              <p className="text-[#FF8906] font-bold">Rp {p.price}</p>
              <p className="text-[#4F5665]">
                {p.description}
              </p>
              <div className="flex items-center">
                <img src="Frame 41.png" alt="" className="my-2" />
                <span className="relative left-[-5%]">5.0</span>
              </div>
              </Link>
              <div className="flex items-center gap-2 mt-4">
                <button className=" w-full rounded-lg bg-[#FF8906] p-1">
                  Buy
                </button>
                <div>
                  <img src="/Frame 37.png" alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-2">
          <img src="Frame 625526.png" alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};
