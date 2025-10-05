import React from "react";

export const ProductGrid = () => {
  const products = [
    { title: "Hazelnut Latte", price: "10.000", img: "/image 23.png" },
    { title: "Fried Chicken", price: "20.000", img: "/image 24.png" },
    { title: "Hazelnut Latte", price: "10.000", img: "/image 23.png" },
    { title: "Fried Chicken", price: "20.000", img: "/image 24.png" },
    { title: "Hazelnut Latte", price: "10.000", img: "/image 23.png" },
    { title: "Fried Chicken", price: "20.000", img: "/image 24.png" },
  ];
  return (
    <>
      <div className="w-2/4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative w-[50vh] h-[80vh] overflow-hidden relative"
          >
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
            {/* Info */}
            <div className="absolute p-4 bg-white w-[90%] z-1 bottom-0 left-[5%]">
              <p className="text-2xl font-semibold mb-2">{p.title}</p>
              <p className="text-[#FF8906] font-bold">Rp {p.price}</p>
              <p className="text-[#4F5665]">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <div className="flex items-center">
                <img src="Frame 41.png" alt="" className="my-2" />
                <span className="relative left-[-5%]">5.0</span>
              </div>
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
        <div className="col-span-2">
          <img src="Frame 625526.png" alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};
