// components/Gear.tsx
import { Product } from "@/sanity/lib/fetchProducts";
import Image from "next/image";
import Link from "next/link";
 // Import the Product type

interface GearProps {
  products: Product[];
}

const Gear = ({ products }: GearProps) => {
  return (
    <div className="bg-white px-6 py-8 relative">
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <h2 className="text-2xl font-bold pl-5">Gear Up</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 font-bold rounded-full">Shop</button>
          <div className="flex space-x-2">
            <button className="rounded-[50%]  flex items-center justify-center font-bold">
              {/* Add your icon here */}
            </button>
            <button className="rounded-full p-2 flex items-center justify-center">
              {/* Add your icon here */}
            </button>
          </div>
        </div>
      </div>

      {/* Display Gear Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/ProductDetails/${product.slug.current}`}>
          <div key={product.productName} className="border border-white rounded-md p-4">
             
            <Image
              src={product.imageUrl || "/default-image.png"} // Default image in case it's missing
              alt={product.productName}
              width={300}
              height={300}
              loading="lazy"
              className="mx-auto"
            />
            <div className="flex mt-4 justify-between text-[15px] leading-6 font-[500px]">
              <h3 className="text-lg">{product.productName}</h3>
              <p className="mt-1">₹ {product.price}</p>
            </div>
            <p className="text-left text-[#757575] text-[15px] leading-6">{product.category}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gear;
