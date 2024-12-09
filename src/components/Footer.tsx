import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaSearchLocation,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      {/* Footer */}

      <div
        className="w-full bg-black h-[42vh] md:h-[50vh] flex justify-center items-center 
       md:flex-row flex-col"
      >
        <div className="flex justify-between h-[33vh]  md:h-[32vh]  md:flex-row flex-col w-[90%]">
          <div className="md:w-[90%] gap-[100px]  flex md:flex-row flex-col  items-center">
            <div className="flex flex-col gap-4 justify-center md:items-start items-center">
              <div className="font-normal text-white text-[15px]">
                Find A Store
              </div>
              <div>
                <ul className="flex md:justify-start justify-center items-center font-normal md:items-start gap-4 flex-col  text-white">
                  <li>Become A Member</li>
                  <li>Sign Up for Email</li>
                  <li>Send Us Feedback</li>
                  <li>Student Discounts</li>
                </ul>
              </div>
            </div>
            <div className="md:flex hidden flex-col gap-4 justify-center md:items-start items-center">
              <div className="font-medium text-white text-[15px]">Get Help</div>
              <div>
                <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                  <li> Order Status</li>
                  <li> Delivery</li>
                  <li> Returns</li>
                  <li> Contact Us On Nike.com Inquiries</li>
                  <li> Contact Us On All Other Inquiries</li>
                </ul>
              </div>
            </div>
            <div className="md:flex hidden flex-col   gap-4 justify-center md:items-start items-center">
              <div className="font-medium text-white text-[15px]">About Nike</div>
              <div>
                <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                  <li>News </li>
                  <li>careers</li>
                  <li>Investors</li>
                  <li>Sustainbility</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center md:items-start gap-5 text-[30px]">
            <FaTwitter className="text-[#7E7E7E]" />
            <FaYoutube className="text-[#7E7E7E]" />
            <FaFacebook className="text-[#7E7E7E]" />
            <FaInstagram className="text-[#7E7E7E]" />
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="w-full bg-black h-[10vh]  md:h-[10vh] flex justify-center items-center 
       md:flex-row flex-col"
      >
        <div className="flex justify-between h-[4vh] md:h-[10vh]  md:flex-row flex-col w-[90%]">
          <div className="text-white flex gap-9 md:gap-16 justify-center items-center">
            <div className="flex gap-3 items-center">
              <FaSearchLocation className="text-[#7E7E7E]" />
              <p>India</p>
            </div>
            <div></div>
          </div>
          <div className="md:flex hidden justify-center items-center gap-6 text-[#7E7E7E]">
            <p>Guide</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
