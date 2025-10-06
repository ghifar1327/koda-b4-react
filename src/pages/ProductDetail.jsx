import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import data from "../data/allProduct.json";
import { Footer } from "../components/Footer";
import { Navbar2 } from "../components/Navbar2";

export const ProductDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { AllMenus } = data;
  const product = AllMenus.find((p) => p.title === title) || AllMenus[0];

  // ✅ DIPERBAIKI: State terpisah untuk suhu
  const [size, setSize] = useState("Regular");
  const [temperature, setTemperature] = useState("Ice");
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // ✅ BARU: Fungsi tambah ke keranjang
  const handleAddToCart = () => {
    const cartItem = {
      product,
      size,
      temperature,
      qty,
      timestamp: Date.now()
    };
    
    // Simpan ke localStorage (atau gunakan context/Redux)
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <div>
        <Navbar2 />
      </div>
      <main className="font-sans bg-white text-gray-800">
        {/* ================= Product Detail Section ================= */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Image Gallery */}
            <div>
              <div className="relative">
                <img
                  src={product.img}
                  alt={`${product.title} - main product image`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              {/* ✅ DIPERBAIKI: Galeri dengan alt text yang tepat */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {product.gallery ? (
                  product.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${product.title} - tampilan ${i + 1}`}
                      className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                    />
                  ))
                ) : (
                  [...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      src={product.img}
                      alt={`${product.title} - thumbnail ${i + 1}`}
                      className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                    />
                  ))
                )}
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-xl">
                FLASH SALE
              </span>
              {/* ✅ DIPERBAIKI: h2 diganti h1 untuk hierarki heading yang benar */}
              <h1 className="text-3xl font-bold my-1">{product.title}</h1>
              
              {/* ✅ DIPERBAIKI: Harga dinamis dari data produk */}
              <div className="flex items-center gap-5 mb-2">
                {product.originalPrice && (
                  <p className="text-[#D00000] line-through">
                    IDR {product.originalPrice.toLocaleString('id-ID')}
                  </p>
                )}
                <p className="text-[#FF8906] font-semibold text-2xl">
                  Rp {typeof product.price === 'number' 
                    ? product.price.toLocaleString('id-ID') 
                    : product.price}
                </p>
              </div>

              {/* ✅ DIPERBAIKI: Rating dan review dinamis */}
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/Frame 41.png" 
                  alt="5 star rating" 
                />
                <span className="relative left-[-5%]">
                  {product.rating || '5.0'}
                </span>
              </div>
              <div className="flex gap-5 items-center my-5">
                <span>{product.reviews || '200'}+ Reviews</span>
                <span className="text-gray-400" aria-hidden="true">|</span>
                <span className="text-gray-600 text-sm">Recommendation</span>
                <img src="/ThumbsUp.png" alt="Recommended" />
              </div>

              <p className="text-gray-600 mb-3">{product.description}</p>

              {/* ✅ DIPERBAIKI: Aksesibilitas dengan label dan ARIA */}
              <div className="mb-4">
                <label className="block font-semibold mb-1" htmlFor="size-selector">
                  Pilih Ukuran
                </label>
                <div className="flex justify-between gap-5" role="group" aria-labelledby="size-selector">
                  {["Regular", "Medium", "Large"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      aria-pressed={size === s}
                      className={`py-1 w-[32%] border-2 transition ${
                        size === s
                          ? "text-black border-[#FF8906] bg-orange-50"
                          : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ FIXED: Separate state for temperature */}
              <div className="mb-4">
                <label className="block font-semibold mb-1" htmlFor="temp-selector">
                  Hot/Ice
                </label>
                <div className="flex justify-between gap-5" role="group" aria-labelledby="temp-selector">
                  {["Ice", "Hot"].map((temp) => (
                    <button
                      key={temp}
                      onClick={() => setTemperature(temp)}
                      aria-pressed={temperature === temp}
                      className={`py-1 w-[50%] border-2 transition ${
                        temperature === temp
                          ? "text-black border-[#FF8906] bg-orange-50"
                          : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ IMPROVED: Better quantity controls */}
              <div className="mb-6">
                <label className="block font-semibold mb-2" htmlFor="quantity">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                    className="w-8 h-8 border border-[#FF8906] text-[#FF8906] rounded-md flex justify-center items-center hover:bg-orange-50 transition"
                  >
                    −
                  </button>
                  <div className="text-lg font-semibold min-w-[2rem] text-center" id="quantity">
                    {qty}
                  </div>
                  <button
                    onClick={() => setQty(qty + 1)}
                    aria-label="Increase quantity"
                    className="w-8 h-8 bg-[#FF8906] text-white rounded-md flex justify-center items-center hover:bg-orange-600 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ✅ FIXED: Add to Cart functionality + responsive layout */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: { product, size, temperature, qty },
                    })
                  }
                  className="bg-[#FF8906] hover:bg-orange-600 text-white py-2 rounded-md font-semibold w-full sm:w-[49%] transition"
                >
                  Buy
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="border-2 border-[#FF8906] text-[#FF8906] py-1 rounded-md font-semibold hover:bg-orange-50 flex justify-center items-center gap-2 w-full sm:w-[49%] transition"
                >
                  <img src="/ShoppingCart (1).png" alt="" /> 
                  {addedToCart ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Recommendation Section ================= */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="text-center mb-10">
            {/* ✅ FIXED: Changed h3 to h2 */}
            <h2 className="text-3xl font-bold">
              Recommendation <span className="text-[#FF8906]">For You</span>
            </h2>
          </div>

          {/* ✅ IMPROVED: Better responsive grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {AllMenus.slice(0, 3).map((item, i) => (
              
              <div
                key={i}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
                  FLASH SALE
                </span>
                <Link to={`/product/${encodeURIComponent(item.title)}`} key={i}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
                </Link>
                 
                <div className="p-4">
                  {/* ✅ FIXED: Changed h4 to h3 */}
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#FF8906] font-semibold mb-2">
                    Rp {typeof item.price === 'number' 
                      ? item.price.toLocaleString('id-ID') 
                      : item.price}
                  </p>
                  <img src="/Frame 41.png" alt="5 star rating" className="w-20 mb-2" />
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() =>
                        navigate("/payment", {
                          state: { product: item, size: "Regular", temperature: "Ice", qty: 1 },
                        })
                      }
                      className="w-full bg-[#FF8906] text-white py-2 rounded-md hover:bg-orange-600 transition"
                    >
                      Buy
                    </button>
                    <button aria-label={`Add ${item.title} to favorites`}>
                      <img src="/Frame 37.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ IMPROVED: Semantic pagination with nav and ARIA */}
          <nav aria-label="Pagination" className="flex justify-center items-center mt-10 gap-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                aria-label={`Page ${n}`}
                aria-current={n === 1 ? 'page' : undefined}
                className={`w-8 h-8 rounded-full transition ${
                  n === 1 ? "bg-[#FF8906] text-white" : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {n}
              </button>
            ))}
            <button 
              aria-label="Next page"
              className="bg-[#FF8906] p-1 rounded-full hover:bg-orange-600 transition"
            >
              <img src="/arrow-right.png" alt="" className="w-6 h-6" />
            </button>
          </nav>
        </section>
        <Footer />
      </main>
    </>
  );
};