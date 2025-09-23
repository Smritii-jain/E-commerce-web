import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center">
        <img 
          src="https://i.postimg.cc/tJN9189n/logo.png" 
          alt="E-Comm Logo" 
          className="w-9 h-8 mr-2" 
        />
        <h1 className="text-xl font-bold text-black-600">E-Comm</h1>
      </div>

      <ul className="flex gap-20 text-black-900">
        <li className="hover:text-blue-600 cursor-pointer font-bold text-blue-600">HOME</li>
        <li className="hover:text-blue-600 cursor-pointer">BAG</li>
        <li className="hover:text-blue-600 cursor-pointer">SNEAKERS</li>
        <li className="hover:text-blue-600 cursor-pointer">BELT</li>
        <li className="hover:text-blue-600 cursor-pointer">CONTACT</li>
      </ul>

      <div className="flex items-center gap-2 text-gray-600">
        <img src="https://i.postimg.cc/wTXy0HNs/Cart.png" alt="Shopping Cart" className="w-6 h-6" />
        <span>Items: $0.00</span>
      </div>
    </nav>
  );
}
