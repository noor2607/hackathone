import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Heading Section */}
      <div className="w-[100%] pt-1 bg-[#f5f5f5] ">
        <h1 className="text-[15px] font-[500px] leading-4 mb-2">
          Hello Nike App
        </h1>
        <p className="text-lg text-[11px] leading-6 font-normal">
          Download the app to access everything Nike.{" "}
          <span className="underline font-semibold">Get your great.</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="h-[977px] ">
        <Image
          src="/hero.png" //
          alt="Nike App"
          width={1250}
          height={600}
        />
        <div className="pt-[56px]">
          <h1 className="text-[15px] leading-6 ">First Look</h1>
          <h1 className="text-[56px] pt-2 font-[500px] leading-[60px]">
            NIKE AIR MAX PLUS
          </h1>
          <p className="text-[15px] leading-6 pt-6">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <button className="w-[110px]  mt-4 h-[39px] rounded-[30px] bg-black text-white font-[500px] leading-6 text-[15px]">
            Notify Me
          </button>
          <button className="w-[138px] ml-2 h-[39px] rounded-[30px] bg-black text-white font-[500px] leading-6 text-[15px]">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        {/* Title and Shop Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold pl-5">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="rounded-[50%] bg-gray-100  flex items-center justify-center font-bold">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-3 gap-1">
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
              <h3 className=" text-lg">Nike Air Max pluse</h3>
              <p className=" mt-1 ">₹ 13,995</p>{" "}
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">
              Women's Shoes
            </p>
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
              <h3 className=" text-lg">Nike Air Max pluse</h3>
              <p className=" mt-1 ">₹ 13,995</p>{" "}
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">
              Men's Shoes
            </p>
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
              <h3 className=" text-lg">Nike Air Max 97 SE</h3>
              <p className=" mt-1 ">₹ 16,995</p>{" "}
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">
              Men's Shoes
            </p>
          </div>
        </div>
      </div>

      {/* New Section (from Uploaded Image) */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/featured.png"
            alt="Running Man"
            width={1300}
            height={700}
            className=" mx-auto"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">
            Gear Up
          </h2>

          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8">
            {/* Shop Men's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900 ml-96">
                Shop Men
              </h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>

            {/* Shop Women's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 ">
            {/* Men's Section */}
            <div className=" flex flex-col ml-4 ">
              <Image
                src="/gear1.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-8 text-[15px] leading-6 font-[500px]">
                <h3 className=" font-[500px] text-[black] leading-6">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className=" font-[500px] text-[black] leading-6 ">₹ 3 895</p>{" "}
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Men's Short-Sleeve <br /> Running Top
              </p>
            </div>
            <div className=" flex flex-col  ">
              <Image
                src="/gear2.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-24 text-[15px] leading-6 font-[500px]">
                <h3 className=" font-[500px] text-[black] leading-6">
                  Nike Dri-FIT Challenger
                </h3>
                <p className=" font-[500px] text-[black] leading-6 ">₹ 2495</p>{" "}
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Men's 18cm (approx.) 2-in- <br />1 Versatile Shorts
              </p>
            </div>
            <div className=" flex flex-col ">
              <Image
                src="/gear3.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-12 text-[15px] leading-6 font-[500px]">
                <h3 className=" font-[500px] text-[black] leading-6">
                  Nike Dri-FIT ADV Run Division
                </h3>
                <p className=" font-[500px] text-[black] leading-6 ">₹ 5295</p>{" "}
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Women's Long-Sleeve <br /> Running Top
              </p>
            </div>
            <div className=" flex flex-col ">
              <Image
                src="/gear4.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex mt-3 gap-48 text-[15px] leading-6 font-[500px]">
                <h3 className=" font-[500px] text-[black] leading-6">
                  Nike Fast
                </h3>
                <p className=" font-[500px] text-[black] leading-6 ">₹ 3 795</p>{" "}
              </div>
              <p className="text-left text-[#757575] text-[15px] leading-6">
                Women's Mid-Rise 7/8 Running <br />
                Leggings with Pockets
              </p>
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
              <div className="relative  h-screen ">
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
        <div className="relative bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-helvetica text-[52px]  leading-[60px] text-center font-bold">
              Flight Essentials
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Your buit to last all weeks wears-but with style only Joran Brand
              can deliver
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

        <footer className="bg-white py-8 w-full">
          {/* Footer Links Section */}
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12  ml-4">
            {/* Column 1 */}
            <div className="text-left">
              <h3 className="font-bold mb-4">Icons</h3>
              <ul className="space-y-2 text-[15px] font-[500px] text-left text-[#757575] leading-6">
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="text-left">
              <h3 className="font-bold mb-4">Shoes</h3>
              <ul className="space-y-2 text-[15px] font-[500px] text-left text-[#757575] leading-6">
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="text-left">
              <h3 className="font-bold mb-4">Clothing</h3>
              <ul className="space-y-2 text-[15px] font-[500px] text-left text-[#757575] leading-6">
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="text-left">
              <h3 className="font-bold mb-4">Kids'</h3>
              <ul className="space-y-2 text-[15px] font-[500px] text-left text-[#757575] leading-6">
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm">
            {/* Social Icons */}
            <div className="flex space-x-4 text-lg">
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
    </div>
  );
}
