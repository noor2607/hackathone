"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { fetchProducts } from "@/sanity/lib/fetchProducts"; // Assuming you have a fetchProducts function

export default function Header() {
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query state
  const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([]); // Filtered search suggestions
  const [products, setProducts] = useState<any[]>([]); // All products

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(); // Fetch products from CMS or API
      setProducts(data);
    };
    getProducts();
  }, []);

  // Search bar 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (product: any) => {
    window.location.href = `/ProductDetails/${product.slug.current}`; 
  };

  return (
    <div>
      {/* Top Section */}
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
        {/* Logo Section */}
        <Image src="/1stlogo.png" alt="Logo" width={24} height={24} loading="lazy" />

        {/* Links Section */}
        <nav>
          <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <span className="h-[14px] w-px bg-gray-400" />
            <li>
              <Link href="/Products">Find a Store</Link>
            </li>
            <span className="h-[14px] w-px bg-gray-400" />
            <li>
              <Link href="/Help">Help</Link>
            </li>
            <span className="h-[14px] w-px bg-gray-400" />
            <li>
              <Link href="/Sign-up">Join Us</Link>
            </li>
            <span className="h-[14px] w-px bg-gray-400" />
            <li>
              <Link href="/Sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Navbar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={60} height={60} loading="lazy" />

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 pl-52 items-center font-medium">
            <a href="/Products" className="text-black hover:underline">
              New & Featured
            </a>
            <a href="#" className="text-black hover:underline">
              Men
            </a>
            <a href="#" className="text-black hover:underline">
              Women
            </a>
            <a href="#" className="text-black hover:underline">
              Kids
            </a>
            <a href="#" className="text-black hover:underline">
              SNKRS
            </a>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1">
              <CiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm flex-grow pl-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {/* Suggestions Dropdown */}
              {searchQuery && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 rounded-md z-10">
                  <ul className="max-h-60 list-disc overflow-y-auto">
                    {filteredSuggestions.map((product) => (
                      <li
                        key={product._id}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSuggestionClick(product)}
                      >
                        {product.productName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Icons */}
     <Link href="/Wishlist"> <FaRegHeart className="text-black text-lg" /></Link>      
            <Link href="/Cart">
              <Image src="/cart.png" alt="Cart Icon" width={24} height={24} loading="lazy" />
            </Link>
          </div>

          
          <button className="md:hidden text-black text-lg" id="hamburger-btn">
            <span className="font-semibold">Menu</span>
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="md:hidden bg-white w-full px-4 py-3 hidden" id="mobile-menu">
          <a href="#" className="block text-black py-1 hover:underline">
            New & Featured
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Men
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Women
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Kids
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            SNKRS
          </a>
        </div>
      </header>
    </div>
  );
}
