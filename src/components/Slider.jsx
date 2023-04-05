import React from "react";

export default function Slider({ onNext, onPrev }) {
  return (
    <div className="absolute bg-white rounded-full bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-20 h-10 md:left-0 md:translate-x-full md:translate-y-1/2">
      <div
        onClick={() => onNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 max-w-[10px] cursor-pointer"
      >
        <img src="./assets/images/icon-next.svg" alt="" />
      </div>
      <div
        onClick={() => onPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 max-w-[10px] rotate-180 cursor-pointer"
      >
        <img src="./assets/images/icon-next.svg" alt="" />
      </div>
    </div>
  );
}
