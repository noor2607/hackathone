import Image from "next/image";
import Link from  "next/link"
export default function Essential() {
  return (
    <div>
        <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-helvetica text-4xl sm:text-5xl md:text-6xl font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Your built to last all week's wears—but with style only Jordan Brand can deliver.
          </p>
          <Link href="/Products">
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button> </Link>
        </div>
      </div>
    <section className="m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5">
        <Image width={350} height={300} alt="" src={"/E1.png"} />
        <Image width={350} height={300} alt="" src={"/E2.png"}  />
        <Image width={350} height={300} alt="" src={"/E3.png"} />
      </div>
    </section>
    </div>
  );
}