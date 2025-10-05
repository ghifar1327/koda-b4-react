import React from "react";

export const SideBar = () => {
  return (
    <>
      <aside className="w-1/4 bg-black text-white p-6 rounded-lg h-fit">
        <h3 className="text-lg font-bold mb-4">Filter</h3>

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="w-full p-2 rounded mb-6 text-black"
        />

        {/* Category */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Category</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> Coffee
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Non-Coffee
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Foods
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Add-ons
            </li>
          </ul>
        </div>

        {/* Range Price */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Range Price</h4>
          <input type="range" className="w-full accent-[#FF8906]" />
        </div>

        <button className="w-full py-2 bg-[#FF8906] rounded font-semibold">
          Apply Filter
        </button>
      </aside>
    </>
  );
};
