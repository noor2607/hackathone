"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type CartItem = {
  _id: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  image?: { asset?: { url?: string } };
};

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart).map((item: CartItem) => ({
          ...item,
          price: Number(item.price) || 0, // Ensure price is a number
          quantity: Number(item.quantity) || 1, // Ensure quantity is a valid number
        }));
        setCart(parsedCart);
      }
    } catch (error) {
      console.error("Error parsing cart data:", error);
      setCart([]);
    }
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col lg:flex-row p-6">
      <div className="flex-1 space-y-4">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={item.imageUrl ?? item.image?.asset?.url ?? "/placeholder.png"}
                alt={item.productName}
                width={96}
                height={96}
                loading="lazy"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 pl-4">
                <p className="font-medium">{item.productName}</p>
                <p className="text-gray-500">Price: ₹ {item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="text-black text-[32px] hover:text-red-600"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="text-black text-[20px] hover:text-green-900"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="w-[300px] lg:w-[440px] bg-gray-50 p-6 rounded-md shadow-md lg:ml-8">
        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹ {totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          (The total reflects the price of your order, including all duties and taxes)
        </p>

        <Link href="/Checkout">
          <button
            className="w-full bg-black text-white py-2 mt-4 rounded-md hover:bg-gray-800 transition"
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
