'use client'; // Ensures this is a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/sanity/lib/fetchProducts';
import Image from 'next/image'; // Correct import

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Fetch wishlist data from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  // Handle removing a product from the wishlist
  const removeFromWishlist = (slug: string) => {
    const updatedWishlist = wishlist.filter((product) => product.slug?.current !== slug);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    alert('Product removed from wishlist.');
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {wishlist.map((product) => (
            <div key={product.slug?.current || product.productName} className="p-4">
              <Link href={`/ProductDetails/${product.slug?.current || ''}`}>
                <div>
                  {/* Ensure the image URL is valid */}
                  <Image
                    src={product.imageUrl || '/placeholder-image.png'} // Fallback to a placeholder if imageUrl is missing
                    alt={product.productName || 'Product Image'}
                    loading="lazy"
                    className="w-[300px] h-[200px] object-cover"
                  />
                  <div className="text-left">
                    <h3 className="font-normal text-red-500">{product.status}</h3>
                    <h3 className="font-semibold">{product.productName}</h3>
                    <p>{product.category}</p>
                    <p>{product.colors?.join(', ')}</p>
                    <p>Rs:{product.price}</p>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => removeFromWishlist(product.slug?.current || '')}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}
