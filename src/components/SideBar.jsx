import { useState } from "react";

export const SideBar = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["Coffee"]);
  const [selectedSort, setSelectedSort] = useState(["Flash sale"]);
  const [priceRange, setPriceRange] = useState([374, 500]);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const toggleSort = (value) => {
    setSelectedSort((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const handleApplyFilter = () => {
    onFilterChange({
      search: searchTerm,
      category: selectedCategories,
      sort: selectedSort,
      priceRange: priceRange,
    });
  };

  return (
    <div className="w-1/4 bg-black text-white p-6 rounded-lg h-fit">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button
          className="text-sm text-white/70 hover:text-orange-500 transition-colors"
          onClick={() => {
            setSearchTerm("");
            setSelectedCategories([]);
            setSelectedSort([]);
            setPriceRange([374, 500]);
          }}
        >
          Reset Filter
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm mb-2">Search</label>
        <input
          type="text"
          placeholder="Search Your Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white text-black rounded-md px-4 py-2 text-sm outline-none"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-sm mb-3">Category</label>
        <div className="flex flex-col gap-3">
          {["Favorite Product", "Coffee", "Non Coffee", "Foods", "Add-On"].map(
            (cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-sm">{cat}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label className="block text-sm mb-3">Sort By</label>
        <div className="flex flex-col gap-3">
          {["Buy 1 get 1", "Flash sale", "Birthday Package", "Cheap"].map(
            (sort) => (
              <label
                key={sort}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSort.includes(sort)}
                  onChange={() => toggleSort(sort)}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-sm">{sort}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Range Price */}
      <div className="mb-6">
        <label className="block text-sm mb-3">Range Price</label>
        <div className="flex flex-col gap-2">
          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value), priceRange[1]])
              }
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500 -ml-2"
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>Idr.{priceRange[0]}</span>
            <span>Idr.{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Apply Filter Button */}
      <button
        onClick={handleApplyFilter}
        className="w-full bg-orange-500 text-black font-medium py-3 rounded-md hover:bg-orange-600 transition-colors"
      >
        Apply Filter
      </button>
    </div>
  );
};