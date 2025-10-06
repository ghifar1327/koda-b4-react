import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-10 px-[15%] mt-10">
        <div className="flex gap-10">
          {/* Brand */}
          <div className="w-[25%]">
            <img src="Frame 27.png" alt="" />
            <p className="text-gray-600 mt-5 mb-5">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
            <p className="text-[#AFB5C0]">&copy;2020CoffeeStore</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="text-gray-600 mt-2 space-y-2 ">
              <li>OurProduct</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h4 className="font-semibold">Engage</h4>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>Partner</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privasi Policy</li>
              <li>Terms Of Servicey</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold mb-5 ml-5">Social</div>
            <div className="">
              <img src="/Frame 42.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
