import React from "react";

export default function Rating({ value, count }) {
  return (
    <div className="flex items-center text-yellow-500 text-sm mt-1">
      {"★".repeat(Math.round(value))}
      {"☆".repeat(5 - Math.round(value))}
      <span className="ml-2 text-gray-500">({count})</span>
    </div>
  );
}
