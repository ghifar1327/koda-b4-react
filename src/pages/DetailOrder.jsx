import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar2 } from "../components/Navbar2";
import { Footer } from "../components/Footer";

export const DetailOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = savedOrders.find((o) => o.id === id);
    setOrder(found);
  }, [id]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <p>Order not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar2 />
      <main className="font-sans bg-white min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-[#FF8906] hover:underline"
          >
            ← Back
          </button>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={order.product.img}
                alt={order.product.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold">{order.product.title}</h1>
                <p className="text-gray-600">
                  {order.qty} pcs | {order.size} | {order.temperature}
                </p>
                <p className="text-[#FF8906] font-semibold mt-2 text-lg">
                  Rp {order.total.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <p>
                <strong>Delivery Type:</strong> {order.delivery}
              </p>
              <p>
                <strong>Customer:</strong> {order.fullName}
              </p>
              <p>
                <strong>Email:</strong> {order.email}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.timestamp).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                Order ID: <span className="font-mono">{order.id}</span>
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <span className="font-semibold text-lg">
                Subtotal: Rp {order.total.toLocaleString("id-ID")}
              </span>
              <button
                onClick={() => navigate("/ProductPage")}
                className="bg-[#FF8906] hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold"
              >
                Order Again
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
