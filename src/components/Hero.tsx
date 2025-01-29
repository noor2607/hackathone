import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Heading Section */}
      <div className="w-[100%] pt-1 bg-[#f5f5f5]">
        <h1 className="text-[15px] font-[500] leading-4 mb-2">
          Hello Nike App
        </h1>
        <p className=" text-[15px] leading-6 font-normal">
          Download the app to access everything Nike.{" "}
         <a href="https://play.google.com/store/apps/details?id=com.nike.omega&hl=en&pli=1">  <span className="underline font-semibold">  Get your great. </span> </a>
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:h-[977px]">
        <Image src="/hero.png" alt="Nike App" width={1250} height={600} loading="lazy" />
        <div className="pt-[56px]">
          <h1 className="text-[15px] leading-6">First Look</h1>
          <h1 className="text-[56px] pt-2 font-[500] leading-[60px]">
            NIKE AIR MAX PLUS
          </h1>
          <p className="text-[15px] leading-6 pt-6">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <Link href="/Help">
          <button className="w-[110px] mt-4 h-[39px] rounded-[30px] bg-black text-white font-[500] leading-6 text-[15px]">
            Notify Me
          </button> </Link>
          <Link href="/Products">  <button className="w-[138px] ml-2 h-[39px] rounded-[30px] bg-black text-white font-[500] leading-6 text-[15px]">
            Shop Air Max
          </button> </Link>
        </div>
      </div>
    </div>
  );
}
