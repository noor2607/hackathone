import Image from "next/image"
export default function Dontmiss(){
    return (
          <div className="bg-white py-16 px-8">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left font-sans">
                    Dont Miss
                  </h2>
        
                  <div className="">
                    {/* Fullscreen Sneaker Image */}
                    <div className="relative lg:h-screen">
                      <Image
                        src="/dontmiss.png"
                        alt="Sneaker"
                        width={1344}
                        height={700}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
    )
}