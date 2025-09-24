import React from "react";
import Rating from "./Rating";
import Badge from "./Badge"; 

export default function ProductCard({ product }) {
  const {
    name,
    price,
    discountPrice,
    discountPercent,
    ratingValue,
    ratingCount,
    isHot,
    imageUrl,
  } = product;

  return (
    <div className="bg-white border-2 border-gray-100 rounded-lg flex flex-col w-[250px]">
      <div className="relative w-full h-[200px] bg-gray-100 flex justify-center items-center">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full rounded-sm"
        />
        {isHot && (
          <Badge
            text="HOT"
            className="bg-red-500 text-white rounded-md text-xs px-2 py-1 absolute top-2 left-2"
          />
        )}
      </div>

      <div className="flex flex-col items-center p-4">
        <h3 className="text-blue-900 font-bold text-md text-center">{name}</h3>
        
        <div className="mt-0">
          <Rating value={ratingValue} count={ratingCount} />
        </div>
        
        <div className="flex justify-center items-baseline mt-1 text-sm text-gray-600">
          <span className="font-bold text-sky-500 mr-2">
            ${discountPrice}
          </span>
          <span className="text-gray-400 line-through mr-2">
            ${price}
          </span>
          <span className="text-red-500 font-semibold">
            {discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
}