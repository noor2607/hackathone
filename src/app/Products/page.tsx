"use client"; // Ensures this runs on the client side

import { fetchProducts, Product } from "@/sanity/lib/fetchProducts";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");
  const [filter, setFilter] = useState<{ men: boolean; women: boolean }>({
    men: false,
    women: false,
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);
    const sorted = [...filteredProducts];

    if (option === "priceLowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "priceHighToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "alphabetical") {
      sorted.sort((a, b) => a.productName.localeCompare(b.productName));
    }

    setFilteredProducts(sorted);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newFilter = { ...filter, [name]: checked };
    setFilter(newFilter);

    let filtered = products;
    if (newFilter.men && !newFilter.women) {
      filtered = products.filter((product) => product.category.includes("Men"));
    } else if (newFilter.women && !newFilter.men) {
      filtered = products.filter((product) => product.category.includes("Women"));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/4 p-5">
        <h2 className="text-xl font-bold">New ({products.length})</h2>
        <ul className="product-ul font-medium py-5 border-b border-gray-300">
          {[
            "Shoes",
            "Sports Bra",
            "Tops & T-Shirts",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Trousers & Tights",
            "Shorts",
            "Tracksuits",
            "Jumpsuits & Rompers",
            "Skirts & Dresses",
            "Socks",
            "Accessories & Equipment",
            "Sneakers",
            "Toe",
          ].map((item) => (
            <li className="pt-1 px-12 font-medium text-sm" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <label className="block ml-4">
            <input type="checkbox" name="men" checked={filter.men} onChange={handleFilterChange} className="mr-2" />
            Men's
          </label>
          <label className="block ml-4">
            <input type="checkbox" name="women" checked={filter.women} onChange={handleFilterChange} className="mr-2" />
            Women's
          </label>
        </div>
      </div>
      <div className="w-full sm:w-3/4 p-5">
        <div className="flex justify-end mb-4">
          <label htmlFor="sort-by" className="mr-2 text-sm">
            Sort By:
          </label>
          <select id="sort-by" value={sortOption} onChange={handleSortChange} className="text-sm">
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div key={product.slug.current} className="p-4">
              <Link href={`/ProductDetails/${product.slug.current}`}>
                <Image
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.productName}
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <h3 className="font-semibold">{product.productName}</h3>
                <p>{product.category}</p>
                <p>Rs: {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
