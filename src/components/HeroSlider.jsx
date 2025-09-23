import React from 'react';

export default function HeroSlider() {
  return (
    <div className="bg-sky-400 p-10 text-white flex justify-between items-center relative overflow-hidden h-72">
      

      {/* Content Section */}
      <div className="z-10">
        <h3 className="text-2xl font-bold mt-10 max-w-xs">Adidas Men Running Sneakers</h3>
        <p className=" text-xs max-w-md">Performance and design. Taken right to the edge.</p>
        <button className="mt-6 px-4 py-2 bg-white text-sky-400 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          SHOP NOW
        </button>
      </div>

      {/* Image Section */}
      <div className="z-10">
        <img
          src="https://i.postimg.cc/Qx6qgnRH/Shoe.png"
          alt="Running Shoe"
          className="w-96 -rotate-360"
        />
      </div>

      {/* Placeholder for slider controls */}
      <div className="absolute bottom-4 right-4 text-xs">
        {/* You can add icons or dots here for navigation */}
      </div>
    </div>
  );
}