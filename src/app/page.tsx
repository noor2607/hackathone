import Hero from "@/components/Hero";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

export default function Home() {
  return (
    <div className="font-helvetica">
      <Hero />

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        {/* Title and Shop Button */}
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <h2 className="text-2xl font-bold pl-5">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="rounded-[50%]  flex items-center justify-center font-bold">
                <FaChevronLeft />
              </button>
              <button className="rounded-full p-2 flex items-center justify-center">
                <FaChevronRight /> 
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Product 1 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/best1.png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="flex mt-4 justify-between text-[15px] leading-6 font-[500px]">
              <h3 className="text-lg">Nike Air Max pluse</h3>
              <p className="mt-1">₹ 13,995</p>
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">Women's Shoes</p>
          </div>

          {/* Product 2 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/best2.png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="flex mt-4 justify-between text-[15px] leading-6 font-[500px]">
              <h3 className="text-lg">Nike Air Max pluse</h3>
              <p className="mt-1">₹ 13,995</p>
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">Men's Shoes</p>
          </div>

          {/* Product 3 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/best3.png"
              alt="Nike Air Max 97 SE"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="flex mt-4 justify-between text-[15px] leading-6 font-[500px]">
              <h3 className="text-lg">Nike Air Max 97 SE</h3>
              <p className="mt-1">₹ 16,995</p>
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">Men's Shoes</p>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/featured.png"
            alt="Running Man"
            width={1300}
            height={700}
            className="mx-auto"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Gear Up</h2>

          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8 flex-wrap">
            {/* Shop Men's Section */}
            <div className="flex items-center mb-4 sm:mb-0">
              <h2 className="text-1xl font-bold text-gray-900 ml-4 sm:ml-0">Shop Men</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                <FaChevronLeft /> 
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                <FaChevronRight /> 
              </button>
            </div>

            {/* Shop Women's Section */}
            <div className="flex items-center mb-4 sm:mb-0">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                <FaChevronLeft /> 
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                <FaChevronRight /> 
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Men's Section */}
            <div className="flex flex-col">
              <Image
                src="/gear1.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-8 text-[15px] leading-6 font-[500px]">
                <h3 className="font-[500px] text-[black] leading-6">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="font-[500px] text-[black] leading-6">₹ 3,895</p>
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Men's Short-Sleeve <br /> Running Top
              </p>
            </div>

            <div className="flex flex-col">
              <Image
                src="/gear2.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-24 text-[15px] leading-6 font-[500px]">
                <h3 className="font-[500px] text-[black] leading-6">
                  Nike Dri-FIT Challenger
                </h3>
                <p className="font-[500px] text-[black] leading-6">₹ 2,495</p>
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Men's 18cm (approx.) 2-in- <br />1 Versatile Shorts
              </p>
            </div>

            <div className="flex flex-col">
              <Image
                src="/gear3.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-12 text-[15px] leading-6 font-[500px]">
                <h3 className="font-[500px] text-[black] leading-6">
                  Nike Dri-FIT ADV Run Division
                </h3>
                <p className="font-[500px] text-[black] leading-6">₹ 5,295</p>
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Women's Long-Sleeve <br /> Running Top
              </p>
            </div>

            <div className="flex flex-col">
              <Image
                src="/gear4.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-48 text-[15px] leading-6 font-[500px]">
                <h3 className="font-[500px] text-[black] leading-6">Nike Fast</h3>
                <p className="font-[500px] text-[black] leading-6">₹ 3,795</p>
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Women's Mid-Rise 7/8 Running <br /> Leggings with Pockets
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left font-sans">
            Don't Miss
          </h2>

          <div className="">
            {/* Fullscreen Sneaker Image */}
            <div className="relative h-screen">
              <Image
                src="/dontmiss.png"
                alt="Sneaker"
                width={1344}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
      


      {/* Flight Essentials Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-helvetica text-4xl sm:text-5xl md:text-6xl font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Your built to last all week's wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          {/* Fullscreen Product Image */}
          <Image
            src="/essentional.png"
            alt="Nike Air Max Pulse"
            layout="intrinsic"
           width={1200}
             height={1200} 
             className="object-contain"
           />
        </div>

      {/* Footer Section */}
      <footer className="bg-white py-8 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {/* Column 1 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Icons</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Kids'</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>Infant & Toddler Shoes</li>
              <li>Kids' Shoes</li>
              <li>Kids' Jordan Shoes</li>
              <li>Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm mt-8">
          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

    
  