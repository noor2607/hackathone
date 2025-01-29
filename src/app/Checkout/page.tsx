"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image'; 

export default function Checkout() {
  const [cart, setCart] = useState<any[]>([]);

  // Fetch cart data from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <Image src="/nike-logo.png"
         alt="Nike Logo"
         width={100}
         height={100}
         className="h-6" />
        <div className="text-sm">000 800 100 9538</div>
      </header>

      <main className="flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Section: Form */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">How would you like to get your order?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Customs regulation for India requires a copy of the recipient's KYC. The address on this KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns.
          </p>
          <button className="w-full border border-black text-center py-2 rounded-md mb-6">
            Deliver it
          </button>

          {/* Form: Name and Address */}
          <h3 className="text-lg font-bold mb-4">Enter your name and address:</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full border border-gray-300 p-3 rounded-md">
                <option>State/Territory</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
              <select className="w-full border border-gray-300 p-3 rounded-md">
                <option>India</option>
              </select>
            </div>
            <h3 className="text-lg font-bold mt-6 mb-4">Contact information?</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <button className="w-full bg-gray-300 font-semibold text-black py-3 rounded-md mt-6">
              Place Order
            </button>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex items-center">
                  <Image src={item.imageUrl} alt={item.productName} width={20} height={20} className="w-20 h-20 rounded-md" />
                  <div className="ml-4">
                    <p>{item.productName}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>₹ {item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
          </div>
          {cart.length > 0 && (
            <>
              <div className="flex justify-between font-bold mt-4">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                (The total reflects the price of your order, including all duties and taxes.)
              </p>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-gray-100 text-center text-sm">
        <div>© 2023 Nike, Inc. All Rights Reserved</div>
      </footer>
    </div>
  );
}
