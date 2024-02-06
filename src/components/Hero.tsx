import can from "../assets/Can.png";
import leaf from "../assets/leaf.png";
import lemon from "../assets/lemon.png";
import sliceLemon from "../assets/slice-lemon.png";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  return (
    <div className="w-full h-full hero">
      <div className="relative w-full h-screen flex items-center justify-center ">
        <h1 className="absolute top-[27%] font-bold text-[#FFD399] z-10 text-[30vh]">
          Orange
        </h1>
        <img
          src={can}
          alt="Can"
          className="absolute top-[30%]  w-[40%] h-[40%] object-contain z-50 canBottle"
        />
        <img
          src={leaf}
          alt="leaf"
          className="absolute top-[10%] left-[33%] w-[150px] h-[40%] object-contain z-50 leaf"
        />
        <img
          src={lemon}
          alt="lemon"
          className="absolute top-[16%] right-[32%] w-[220px] h-[60%] object-contain z-50"
        />
        <img
          src={sliceLemon}
          alt="sliceLemon"
          className="absolute top-[36%] left-[32%] w-[280px] h-[60%] object-contain z-50"
        />
        <button className="bg-transparent border-2 border-black rounded-xl absolute top-32 py-2 px-10">
          Click slide
        </button>
      </div>
      <div className="h-screen w-full two">Hello</div>
      <div className="h-screen w-full three">Hello</div>
      <div className="h-screen w-full ">Hello</div>
    </div>
  );
};

export default Hero;
