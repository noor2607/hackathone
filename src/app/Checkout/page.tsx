"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sanityClient from "@/sanity/lib/sanityClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    City: "",
    postalCode: "",
    country: "India",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      _type: "order",
      customer: {
        _type: "customer",
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        address: {
          _type: "address",
          address: userData.address,
          City: userData.City,
          postalCode: userData.postalCode,
          country: userData.country,
        },
      },
      items: cart.map((item) => ({
        _type: "cartItem",
        _key: item.id, // Ensure unique key
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl,
      })),
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    try {
      await sanityClient.create(orderData);
      toast.success("Order placed successfully!");
      localStorage.removeItem("cart");
      setCart([]);
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="flex justify-between items-center border-b pb-4">
        <div className="text-sm">000 800 100 9538</div>
      </header>
      <main className="flex flex-col lg:flex-row gap-8 mt-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="text" name="City" placeholder="City" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full border p-3 rounded-md" />
            <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold mt-6" disabled={cart.length === 0}>
              Place Order
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image src={item.imageUrl} alt={item.productName} width={80} height={80} className="w-20 h-20 rounded-md object-cover" />
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
      </main>
      <ToastContainer />
    </div>
  );
}