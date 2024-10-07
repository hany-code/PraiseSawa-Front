import React, { useState } from "react";
import arrow2 from "../assets/images/arrow2.svg";
import arrowSlider from "../assets/images/arrowSlider.svg";
import albumsIcon from "../assets/images/albumsIcons.svg";
import translateIcons from "../assets/images/translateIcon.svg";
import songsIcons from "../assets/images/songicon.svg";
import maherFayz from "../assets/images/maherFayz.png";
import hermesSamir from "../assets/images/hermasSamir.png";
import butterlife from "../assets/images/butterlife.png";
import houseOfPrayer from "../assets/images/houseOfPrayer.png";
import qasrAldobara from "../assets/images/qasrAldobara.png";
import SamuelFarouk from "../assets/images/SamuelFarouk.png";
import newLive from "../assets/images/newLive.png"

const Intro = () => {
  // Set initial state for the slider index
  const [startIndex, setStartIndex] = useState(0);
  const [isLeftIconVisible, setIsLeftIconVisible] = useState(false);

  // Sample images array
  const images = [
    maherFayz,
    hermesSamir,
    butterlife,
    houseOfPrayer,
    qasrAldobara,
    SamuelFarouk,
    newLive,
  ];

  // Number of images visible at a time
  const visibleImages = 5;

  // Move slider left
  const slideLeft = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - visibleImages
    );
  };

  // Move slider right
  const slideRight = () => {
    showLeftIcon();
    setStartIndex((prevIndex) =>
      prevIndex < images.length - visibleImages ? prevIndex + 1 : 0
    );
  };

  const showLeftIcon = () => {
    setIsLeftIconVisible(true);
  }

  return (
    <div className="relative pt-20">
      <div className="flex justify-between w-full h-60 relative">
        {/* Text container */}
        <div className="w-[1000px] left-0 top-[0.33px] absolute justify-between items-start inline-flex">
          <div className="flex-col justify-start items-start gap-[8.33px] inline-flex">
            <div className="text-black text-[25px] font-normal font-['Roboto'] capitalize">
              musicians and worshipers{" "}
            </div>
            <div className="text-[#333] text-[15px] font-normal font-['Roboto'] capitalize leading-[15.14px]">
              albums and Songs{" "}
            </div>
          </div>
          <div className="justify-center items-center mt-7 gap-2.5 inline-flex">
            <div className="text-right text-[#333] text-[15px] font-normal font-['Roboto'] leading-[15.14px]">
              View all
            </div>
            <div className="w-[15px] h-[15px] origin-top-left justify-center items-center flex">
              <img src={arrow2} alt="sendTo" />
            </div>
          </div>
        </div>

        {/* Slider container */}
        <div className="w-[1000px] mt-20 h-[173.33px] rounded-2xl gap-[19.17px] inline-flex">
          {/* Render visible images */}
          {images
            .slice(startIndex, startIndex + visibleImages)
            .map((image, index) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                key={index}
                className="w-[197px] h-[174px] rounded-[9px]"
                src={image}
                alt={`slider-image-${index}`}
              />
            ))}
        </div>

        {/* Left arrow button */}
        <div
          className="left-icon"
          style={{ display: isLeftIconVisible ? "block" : "none" }}
        >
          <div
            className="w-[43.62px] h-[43.62px] left-[-30px] top-[61%] absolute cursor-pointer"
            onClick={slideLeft}
          >
            <div className="w-[43.62px] h-[43.62px] bg-[#343538]/70 rounded-full shadow backdrop-blur-[3.33px] flex justify-center items-center">
              <img className="rotate-180" src={arrowSlider} alt="arrowSlider" />
            </div>
          </div>
        </div>

        {/* Right arrow button */}

        <div
          className="w-[43.62px] h-[43.62px] left-[104%] top-[59%] absolute cursor-pointer"
          onClick={slideRight}
        >
          <div className="w-[43.62px] h-[43.62px] bg-[#343538]/70 rounded-full shadow backdrop-blur-[3.33px] flex justify-center items-center">
            <img src={arrowSlider} alt="arrowSlider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
