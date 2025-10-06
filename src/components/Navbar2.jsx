import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
  return (
    <>
      <nav className="bg-black w-[100%] p-3 z-1">
        <div className=" flex justify-between items-center mx-20">
          <div className="flex justify-between gap-10 items-center text-white">
            <div>
              <img src="/Frame 13.png" alt="" />
            </div>
            <Link to='/'>Home</Link>
            <Link to="/ProductPage">Product</Link>
          </div>
          <div className="flex justify-between gap-10 items-center z-1">
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
  )
}
