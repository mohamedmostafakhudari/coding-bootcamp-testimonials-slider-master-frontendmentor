import React from "react";
import Slider from "./Slider";
import useWindowSize from "../hooks/useWindowSize";
export default function Testimonial({ testimonial, onNext, onPrev }) {
  const { name, role, imgSrc, text, visible } = testimonial;
  const { width } = useWindowSize();
  const backgroundStyle = {
    backgroundImage: 'url("./assets/images/pattern-bg.svg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: width < 768 ? "90% 90%" : "contain",
    backgroundPosition: width < 768 ? "50%" : "0% 0%",
  };

  return (
    <>
      <div
        className="relative md:order-2 flex-1 md:-ml-12"
        style={backgroundStyle}
      >
        <div
          className={`p-10 px-14 relative rounded-xl h-full max-h-[530px] max-w-md md:p-0 md:pt-14 ${
            visible ? "flipin" : "flipout"
          }`}
        >
          <Slider onNext={onNext} onPrev={onPrev} />
          <img
            src={imgSrc}
            alt={name}
            id="profileImage"
            className={`object-cover object-center rounded min-h-full h-full shadow-xl shadow-black/25 md:ml-10`}
          />
        </div>
        {/* <div>
          <img src="./assets/images/pattern-curve.svg" alt="" />
        </div> */}
      </div>
      <div
        id="textSection"
        className={`relative md:order-1 flex-1 flex md:justify-end z-10 md:-mr-12 md:self-center ${
          visible ? "fadein" : "fadeout"
        }`}
      >
        <div className="absolute max-w-[60px] left-1/2 -translate-x-1/2 bottom-full translate-y-6">
          <img src="./assets/images/pattern-quotes.svg" alt="" />
        </div>
        <div className="text-center md:text-left">
          <div className="font-light text-textPrimary md:text-xl max-w-[34ch]">
            " {text} "
          </div>
          <div className="mt-6 flex flex-col md:flex-row text-sm">
            <p className="text-bold text-textPrimary">{name}</p>
            <p className="text-medium text-textSecondary md:ml-2">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
