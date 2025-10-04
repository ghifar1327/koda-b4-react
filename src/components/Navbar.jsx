import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="absolute bg-transparent w-[100%] top-5">
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
                <button className="border border-white text-white p-3 rounded-md">Sign In</button>
            </div>
            <div>
                <button className="bg-[#FF8906] p-3 rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
