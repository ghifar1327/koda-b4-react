// import React, { useState } from "react";

// export function RangePrice() {
//   const [min, setMin] = useState(374);
//   const [max, setMax] = useState(500);

//   // Fungsi menghitung posisi label di atas knob
//   const getPosition = (value) => `${(value / 1000) * 100}%`;

//   return (<div className="mb-6">
//         <label className="block text-sm mb-3">Range Price</label>
//         <div className="flex flex-col gap-2">
//           <div className="relative flex items-center">
//             <input
//               type="range"
//               min="0"
//               max="1000"
//               value={priceRange[0]}
//               onChange={(e) =>
//                 setPriceRange([parseInt(e.target.value), priceRange[1]])
//               }
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
//             />
//             <input
//               type="range"
//               min="0"
//               max="1000"
//               value={priceRange[1]}
//               onChange={(e) =>
//                 setPriceRange([priceRange[0], parseInt(e.target.value)])
//               }
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500 -ml-2"
//             />
//           </div>
//           <div className="flex justify-between text-xs mt-1">
//             <span>Idr.{priceRange[0]}</span>
//             <span>Idr.{priceRange[1]}</span>
//           </div>
//         </div>
//       </div>


//   );
// }
