import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className=" bg-black h-[400px] text-white ">
        <div className=" md:flex md:w-[1200px] sm:w-[400px]  h-[231px] gap-x-[100px] py-10">
            {/* 1st columns */}
          <div className="md:pl-12 flex flex-col">
            {" "}
            <h1 className="pb-2 font-normal text-[15px] leading-[32.67px]">
              FIND A STORE
            </h1>
            <a
              href="#"
              className="py-1 font-normal text-[15px] leading-[32.67px]"
            >
              Become A Member
            </a>
            <a
              href="#"
              className="py-1 font-normal text-[15px] leading-[32.67px]"
            >
              Sign Up for Email
            </a>
            <a
              href="#"
              className="py-1 font-normal text-[15px] leading-[32.67px]"
            >
              Send Us Feedback
            </a>
            <a
              href="#"
              className="py-1 font-normal text-[15px] leading-[32.67px]"
            >
              Student Discounts
            </a>
          </div>

                 {/* 2nd  column */}

          <div className="flex flex-col ">
            {" "}
            <h1 className="pb-2 font-normal text-[15px] leading-[32.67px]">
              GET HELP
            </h1>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Order Status
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Delivery
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Returns
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Payment Options
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Contact Us On Nike.com Inquiries
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Contact Us On All Other Inquiries
            </a>
          </div>
               {/* 3rd column  */}

          <div className="flex flex-col">
            {" "}
            <h1 className="pb-2 font-normal text-[15px] leading-[32.67px]">
              ABOUT NIKE
            </h1>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              News
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Careers
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Investors
            </a>
            <a
              href="#"
              className="py-1 text-[#7E7E7E] leading-[28px] font-normal"
            >
              Sustainability
            </a>
          </div>

           {/* social icons */}
          <div className=" flex gap-5 text-[#7E7E7E]">
            <FaTwitter className="h-5 w-5 md:ml-60 " />
            <FaFacebook className="h-5 w-5 " />
            <FaYoutube className="h-5 w-5 " />
            <FaInstagram className="h-5 w-5 " />
          </div>
        </div>
      </footer>

                 {/* privacy policy section */}
      <div className="flex justify-between bg-black">
        <div className="bg-black pb-5 text-white flex pl-12 gap-2">
          <p className="flex gap-2 leading-3">
            {" "}
            <IoLocationOutline className="h-[15px] w-[18px]" />
            India{" "}
          </p>
          <p className="pl-6 leading-3 font-normal text-[#7E7E7E]">
            {" "}
            © 2023 Nike, Inc. All Rights Reserved
          </p>{" "}
        </div>
        <div className="bg-black px-12 pb-5">
          <a
            href=""
            className="text-[#7E7E7E] px-3  leading-[28px] font-normal "
          >
            Guide
          </a>
          <a
            href=""
            className="text-[#7E7E7E] px-3 leading-[28px] font-normal "
          >
            Terms of Sale
          </a>
          <a
            href=""
            className="text-[#7E7E7E] px-3 leading-[28px] font-normal "
          >
            Terms of Use
          </a>
          <a
            href=""
            className="text-[#7E7E7E] px-3 leading-[28px] font-normal "
          >
            Nike Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
