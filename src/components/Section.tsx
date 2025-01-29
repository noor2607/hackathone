import Image from "next/image"
export default function Section (){
    return (
         <div className="relative bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                  <Image
                    src="/featured.png"
                    alt="Running Man"
                    width={1300}
                    height={700}
                    loading="lazy"
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
    )
}