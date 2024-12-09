import React from 'react';

export default function Cart() {
  return (
    <>
      <div className="min-h-screen bg-white flex  p-6">
        {/* Left Side: Header and Bag Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-[#E5E5E5] pl-2 w-[700px] mx-auto h-[62px] flex flex-col justify-center items-start  mb-6">
            <p className="font-medium">Free Delivery</p>
            <p className="text-sm text-center">
              Applies to orders of ₹ 14,000.00 or more.&#39;{' '}
              <span className="underline">View details</span>
            </p>
          </div>

          {/* Bag Section */}
          <div className="bg-white w-[700px] mx-auto">
            <h2 className="text-lg font-bold mb-4">Bag</h2>

            {/* Item 1 */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <img
                src="/gear1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                className="w-24 h-24 rounded-md border"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm text-gray-600">Men&#39;s Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <div className='flex gap-4 text-sm text-gray-500'>
                  <p className="text-sm text-gray-500">Size: L </p><p>Quantity:&#39;1</p>
                </div>   
              </div>
              <div className="text-right">
                <p className="font-medium">MRP:₹ 3,895.00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="ml-28 flex-1">
                <h3 className="font-medium text-gray-800">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men&#39;s Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <div className='flex gap-4 text-sm text-gray-500'>
                  <p className="text-sm text-gray-500">Size: 8 </p><p>Quantity:&#39;1</p>
                </div>   
              </div>
              <div className="text-right">
                <p className="font-medium">MRP:₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Summary Section */}
        <div className=" bg-white mr-40 w-[300px] ">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-medium">₹ 20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Estimated Delivery &amp; Handling</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-4">
            <p>Total</p>
            <p>₹ 20,890.00</p>
          </div>
          <button className="w-full bg-black text-white font-medium py-3 rounded-full mt-4">
            Member Checkout
          </button>
        </div>
      </div>
    </>
  );
}
