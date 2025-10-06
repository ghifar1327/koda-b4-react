import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar2 } from "../components/Navbar2";
import { Footer } from "../components/Footer";

export const PaymentDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, size, qty } = location.state || {};

  const [delivery, setDelivery] = useState("Dine In");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No product selected. Please go back.</p>
      </div>
    );
  }

  const itemPrice = parseInt(product.price.replace(/\./g, ""));
  const deliveryFee = delivery === "Dine In" ? 0 : 0;
  const tax = 4000;
  const subtotal = itemPrice * qty + deliveryFee + tax;

  return (
    <>
      <Navbar2 />
      <main className="font-sans bg-white min-h-screen">
        <div className="max-w-6xl mx-auto py-8 px-6">
          <h1 className="text-3xl font-bold mb-8">Payment Details</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Order Items & Form */}
            <div className="lg:col-span-2">
              {/* Your Order Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                
                {/* Order Item */}
                <div className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 mb-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                          FLASH SALE
                        </span>
                        <h3 className="font-bold text-lg mt-2">{product.title}</h3>
                        <p className="text-sm text-gray-600">
                          {qty}pcs | {size} | Ice | Dine In
                        </p>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-gray-400 line-through text-sm">
                        IDR {product.price}
                      </p>
                      <p className="text-[#FF8906] font-bold text-lg">
                        IDR {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info & Delivery */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Info & Delivery</h2>
                
                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8906]"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8906]"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-4 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8906]"
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery</label>
                  <div className="flex gap-4">
                    {["Dine In", "Door Delivery", "Pick Up"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setDelivery(option)}
                        className={`flex-1 py-3 border rounded-lg font-medium transition ${
                          delivery === option
                            ? "bg-[#FF8906] text-white border-[#FF8906]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#FF8906]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-[#FF8906] text-white px-3 py-1 rounded text-sm font-semibold">
                    Address
                  </span>
                  <span className="font-bold text-lg">Total</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Order</span>
                    <span className="font-semibold">Idr. {(itemPrice * qty).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="font-semibold">Idr. {deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span className="font-semibold">Idr. {tax.toLocaleString('id-ID')}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Sub Total</span>
                    <span>Idr. {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <button className="w-full bg-[#FF8906] hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mb-4">
                  Checkout
                </button>

                <div>
                  <p className="text-sm text-gray-600 mb-3">We Accept</p>
                  <div className="flex gap-3 items-center flex-wrap">
                    <img src="/bca.png" alt="BCA" className="h-8" />
                    <img src="/gopay.png" alt="GoPay" className="h-8" />
                    <img src="/visa.png" alt="Visa" className="h-8" />
                    <img src="/ovo.png" alt="OVO" className="h-8" />
                    <img src="/paypal.png" alt="PayPal" className="h-8" />
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    *Get Discount if you pay with Bank Central Asia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};