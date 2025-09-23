import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-200 text-gray-700 px-32 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-60 pb-8">
          <div>
            <div className="flex items-center mb-2">
              <img
                src="https://i.postimg.cc/tJN9189n/logo.png"
                alt="E-Comm Logo"
                className="w-9 h-8 mr-2"
              />
              <h2 className="font-bold text-xl text-black-900">E-Comm</h2>
            </div>
            <p className="text-xs mt-2 max-w-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
          </div>

          <div className="md:col-span-1">
            <h2 className="font-semibold text-lg">Follow us</h2>
            <p className="text-xs mt-2 max-w-60">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div className="flex mt-3 space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <img src="https://i.postimg.cc/HLHyc10d/Linkedinn.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <img src="https://i.postimg.cc/C5vZ9R9K/Insta-logo.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Contact Us</h2>
            <p className="text-sm mt-2 max-w-32">E-Comm, 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-52 pt-8">
          <div>
            <h2 className="font-semibold text-lg">Information</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Service</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">My Account</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Our Offers</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-6 mt-8 border-t-2 border-white-900">
          <p className="text-sm text-gray-400">
            © 2025 ECommerce theme by yoursite.com
          </p>
          <div className="flex space-x-2">
            <img src="https://i.postimg.cc/mkJtw00X/Cards.png" alt="card" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}