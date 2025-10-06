import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar2 } from "../components/Navbar2";
import { Footer } from "../components/Footer";

export const HistoryOrder = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  return (
    <>
      <Navbar2 />
      <main className="min-h-screen bg-white font-sans py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Order History</h1>

          {orders.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <p>No order history found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {orders.map((order, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => navigate(`/detailorder/${order.id}`)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={order.product.img}
                      alt={order.product.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{order.product.title}</h2>
                      <p className="text-sm text-gray-600">
                        {order.qty} pcs | {order.size} | {order.temperature}
                      </p>
                      <p className="text-[#FF8906] font-semibold">
                        Rp {order.total.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(order.timestamp).toLocaleString()}</span>
                    <span className="bg-[#FF8906] text-white px-3 py-1 rounded-md text-xs">
                      {order.delivery}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
