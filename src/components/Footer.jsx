import React from "react";
import logo from "../assets/images/praise sawa  (1).svg";
import LineMark from "../assets/images/LineMark.svg";
import waves from "../assets/images/Frame 28.png";
import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import ArrowRight from "../assets/images/ArrowRight.svg";
import earth from "../assets/images/earth.svg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";

const Footer = () => {
  return (
    <div className="w-full h-[300px]">
      <div className="ml-[257px] flex gap-10">


        {/* Logo Section */}
        <div className="flex flex-col gap-6 m-5">

          <div className="flex flex-col gap-6">
            <img
              src={logo}
              alt="weblogo"
              className="w-[245px] h-[201px]"
            />
          </div>

          {/* links */}
          <div className="flex items-center gap-6 ml-4">
            <div className="w-[35px] h-[35px] relative">
              <div className="w-[35px] h-[35px] bg-[#d9d9d9] rounded-full absolute" />
              <img
                className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
                src={facebook}
                alt="icon"
              />
            </div>
            <div className="w-[35px] h-[35px] relative">
              <div className="w-[35px] h-[35px] bg-[#d9d9d9] rounded-full absolute" />
              <img
                className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
                src={twitter}
                alt="icon"
              />
            </div>
            <div className="w-[35px] h-[35px] relative">
              <div className="w-[35px] h-[35px] bg-[#d9d9d9] rounded-full absolute" />
              <img
                className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
                src={instagram}
                alt="icon"
              />
            </div>
            <div className="w-[35px] h-[35px] relative">
              <div className="w-[35px] h-[35px] bg-[#d9d9d9] rounded-full absolute" />
              <img
                className="absolute left-[10px] top-[10px] w-[15px] h-[15px]"
                src={youtube}
                alt="icon"
              />
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center">

          <div className="font-bold font-['Poppins'] leading-[13px]">Arabic translated & transliterated songs </div>

          <div className="flex justify-center gap-30 ">

            {/* Quick Links Section */}
            <div className="flex flex-col gap-3  justify-center">
              <div className="flex flex-col gap-4">
                <div className="text-black text-base font-medium font-['Poppins'] capitalize leading-[13px]">
                  Quick link
                </div>
                <img src={LineMark} alt="linemark" className="w-[38px]" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-end gap-1.5">
                  <img
                    className="w-[13px] h-[13px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                    Home
                  </div>
                </div>
                <div className="flex items-end gap-1.5">
                  <img
                    className="w-[13px] h-[13px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                    About us
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section 2 */}
            <div className="flex flex-col gap-3 ml-[50px] mb-5 mr-5 mt-[75px] justify-center">
              <div className="flex flex-col gap-5">
                <div className="flex items-end gap-1.5">
                  <img
                    className="w-[13px] h-[13px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                    Services
                  </div>
                </div>
                <div className="flex items-end gap-1.5">
                  <img
                    className="w-[13px] h-[13px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                    Product
                  </div>
                </div>
              </div>
            </div>

            {/* Developed By Section */}
            <div className="flex flex-col gap-3 mt-5 mr-5 mb-5 ml-[100px] justify-center">
              <div className="flex flex-col gap-4">
                <div className="text-black text-base font-medium font-['Poppins'] leading-[13px]">
                  Developed By
                </div>
                <img className="w-[38px]" src={LineMark} alt="linemark" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1.5">
                  <img
                    className="w-[15px] h-[15px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="relative">
                    <div className="text-black text-base font-medium font-['Poppins'] capitalize">
                      Mina Samy{" "}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <img
                    className="w-[15px] h-[15px]"
                    src={ArrowRight}
                    alt="icon"
                  />
                  <div className="relative">
                    <div className="text-black text-base font-medium font-['Poppins'] capitalize">
                      Hany Kamal
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* contact */}
        <div className="flex flex-col gap-[13px] justify-center ml-[120px]">
          <div className="flex flex-col gap-4">
            <div className="text-black text-base font-bold font-['Poppins'] leading-[13px]">
              Contact
            </div>
            <div className="flex gap-[13px]">
              <div className="w-[33px] h-[7px] relative">
                <img className="w-[38px]" src={LineMark} alt="linemark" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <img
                className="w-[25px] h-[25px]"
                src={earth}
                alt="icon"
              />
              <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                Praisemelodies.org
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <img
                className="w-[25px] h-[25px]"
                src={email}
                alt="icon"
              />
              <div className="text-black text-base font-normal font-['Poppins'] capitalize">
                care@betterdignity.org
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <img
                className="w-[25px] h-[25px]"
                src={phone}
                alt="icon"
              />
              <div className="text-black text-base font-normal font-['Poppins'] capitalize leading-[13px]">
                +20 120 236 2474
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
