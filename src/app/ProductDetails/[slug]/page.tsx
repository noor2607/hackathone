'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; // ✅ Fix: Using Next.js built-in useParams
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { BsCartPlus } from "react-icons/bs"; 
import { Product } from "@/sanity/lib/Product";

async function getProduct(slug: string): Promise<Product | null> {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      slug,
      category,
      price,
      inventory,
      colors,
      status,
      "imageUrl": image.asset->url,
      description
    }
  `;

  try {
    const product = await client.fetch(query, { slug });
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductPage() {
  const params = useParams(); 
  const slug = params?.slug as string; 

  const [product, setProduct] = useState<Product | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!slug) return; 

    const fetchProduct = async () => {
      const productData = await getProduct(slug);
      setProduct(productData);
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = [...storedCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }
  };

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p className="text-gray-600">Loading..</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex p-8 mt-6 space-x-8">
      <div className="flex-none w-[500px] h-[500px]">
        <Image
          src={product.imageUrl}
          alt={product.productName || "Product Image"}
          width={450}
          height={350}
          loading="lazy"
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-medium text-gray-600">Price: ₹{product.price}</p>
        <p className="text-gray-700">Category: {product.category}</p>
        <p className="text-gray-700">Inventory: {product.inventory}</p>
        <p className="text-gray-700">Color: {product.colors.join(", ")}</p>
        <p className="text-red-700">Status: {product.status}</p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart <BsCartPlus className="inline ml-2" />
        </button>

        {isAdded && (
          <div className="absolute top-20 right-10 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
            Product added to cart!
          </div>
        )}
      </div>
    </div>
  );
}
