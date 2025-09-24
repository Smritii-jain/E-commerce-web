import React from 'react';

export default function HeroSlider() {
  return (
    <div className="bg-sky-400 p-10 text-white flex justify-between items-center relative overflow-hidden h-72">

      <div className="z-10">
        <h3 className="text-2xl font-bold mt-10 max-w-xs">Adidas Men Running Sneakers</h3>
        <p className=" text-xs max-w-md">Performance and design. Taken right to the edge.</p>
        <button className="mt-6 py-2 text-xs text-white-400 font-semibold">
          SHOP NOW
          <div className=" w-3/5 h-0.5 bg-white"></div>
        </button>
      </div>

      <div className="z-10">
        <img
          src="https://i.postimg.cc/hGRnd66r/Shoe-png.png"
          alt="Running Shoe"
          className="w-96 pt-20 pl-3"
        />
      </div>

      <div className="absolute bottom-4 right-4 text-xs">
      </div>
    </div>
  );
}