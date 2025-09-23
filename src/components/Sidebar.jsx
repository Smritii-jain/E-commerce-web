import React, { useState } from "react";

export default function Sidebar({ filters, setFilters }) {
  const [expandedSection, setExpandedSection] = useState("hotDeals");

  const hotDeals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48 },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  const brands = ["Nike", "Adidas", "Puma", "Vans"];
  const colors = ["red", "blue", "maroon", "yellow", "black", "white"];

  const toggleFilter = (section, value) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section] === value ? null : value,
    }));
  };

  const toggleExpansion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <aside className="w-64 bg-white border-r hidden lg:block overflow-y-auto">
      <div className="p-4 space-y-5">
        <div className="bg-gray-100 rounded-md p-4 cursor-pointer hover:bg-gray-200 transition-colors">
          <button
            className="font-bold text-black-600 w-full text-left flex justify-between items-center"
            onClick={() => toggleExpansion("hotDeals")}
          >
            Hot Deals
            <span>{expandedSection === "hotDeals" ? " " : "+"}</span>
          </button>
          {expandedSection === "hotDeals" && (
            <ul className="mt-6 space-y-5">
              {hotDeals.map((item, index) => (
                <li key={index} className="flex justify-between text-sm text-black-600">
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-colors">
          <button
            className="font-bold text-gray-700 w-full text-left flex justify-between items-center"
            onClick={() => toggleExpansion("price")}
          >
            PRICE
            <span>{expandedSection === "price" ? " " : "+"}</span>
          </button>
          {expandedSection === "price" && (
            <div className="mt-6">
              <input
                type="range"
                min="0"
                max="600"
                step="50"
                value={filters.price}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
                }
                className="w-full"
              />
              <p className="text-sm text-BLACK-600">Up to ${filters.price}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-colors">
          <button
            className="font-bold text-gray-700 w-full text-left flex justify-between items-center"
            onClick={() => toggleExpansion("color")}
          >
            COLOR
            <span>{expandedSection === "color" ? " " : "+"}</span>
          </button>
          {expandedSection === "color" && (
            <div className="flex gap-2 mt-6">
              {colors.map((c) => (
                <div
                  key={c}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    filters.color === c ? "border-blue-600" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c }}
                  onClick={() => toggleFilter("color", c)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-colors">
          <button
            className="font-bold text-gray-700 w-full text-left flex justify-between items-center"
            onClick={() => toggleExpansion("brand")}
          >
            BRAND
            <span>{expandedSection === "brand" ? " " : "+"}</span>
          </button>
          {expandedSection === "brand" && (
            <ul className="mt-6 space-y-5">
              {brands.map((b) => (
                <li
                  key={b}
                  className={`cursor-pointer text-sm ${
                    filters.brand === b ? "font-bold text-blue-600" : "text-gray-600"
                  }`}
                  onClick={() => toggleFilter("brand", b)}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="font-bold text-black-700">MORE</span>
          <div className="flex -space-x-2">
          </div>
        </div>

      </div>
    </aside>
  );
}