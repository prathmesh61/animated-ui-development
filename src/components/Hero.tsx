import can from "../assets/Can.png";
import leaf from "../assets/leaf.png";
import lemon from "../assets/lemon.png";
import sliceLemon from "../assets/slice-lemon.png";
import greenLeaf from "../assets/greenLeaf.png";
import coca from "../assets/cocaCola.webp";
import sprite from "../assets/sprite.webp";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Hero = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const oneRef = useRef<HTMLDivElement | null>(null);
  const twoRef = useRef<HTMLDivElement | null>(null);
  const threeRef = useRef<HTMLDivElement | null>(null);
  const canRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // first timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: twoRef.current,
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
          // markers: true,
        },
      })
      .to(
        canRef.current,
        {
          top: "120%",
          left: "0%",
        },
        "same"
      )
      .to(
        ".leaf",
        {
          top: "100%",
          left: "8%",
        },
        "same"
      )
      .to(
        ".lemon",
        {
          top: "120%",
          left: "25%",
        },
        "same"
      )
      .to(
        ".sliceLemon",
        {
          top: "125%",
          left: "5%",
        },
        "same"
      )
      .to(
        ".greenLeaf1",
        {
          top: "100%",
          rotationX: "40px",
        },
        "same"
      )
      .to(
        ".greenLeaf2",
        {
          rotateY: "-90px",
        },
        "same"
      );

    // secont timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: threeRef.current,
          start: "0% 95%",
          end: "20% 50%",
          scrub: true,
          // markers: true,
        },
      })
      .to(canRef.current, {
        top: "215%",
        left: "30%",
      });
  }, []);

  return (
    <div className="w-full h-full hero" ref={mainRef}>
      <div
        className="relative w-full h-screen flex items-center justify-center bg-[#FFEFDA]"
        ref={oneRef}
      >
        <h1 className="absolute top-[27%] font-bold text-[#FFD399] z-10 text-[30vh]">
          Orange
        </h1>
        <img
          src={can}
          alt="Can"
          className="absolute top-[30%]  w-[40%] h-[40%] object-contain z-50 canBottle "
          ref={canRef}
        />
        <img
          src={leaf}
          alt="leaf"
          className="absolute top-[10%] left-[33%] w-[150px] h-[40%] object-contain z-50 leaf"
        />
        <img
          src={lemon}
          alt="lemon"
          className="absolute top-[16%] right-[32%] w-[220px] h-[60%] object-contain z-50 lemon"
        />
        <img
          src={sliceLemon}
          alt="sliceLemon"
          className="absolute top-[36%] left-[32%] w-[280px] h-[60%] object-contain z-50 sliceLemon"
        />
        <img
          src={greenLeaf}
          alt="greenLeaf"
          className="absolute top-[26%] right-[-10%] rotate-green2 w-[40%] h-auto object-contain z-50 greenLeaf1"
        />
        <img
          src={greenLeaf}
          alt="greenLeaf"
          className="absolute top-[6%] left-[-15%] rotate-green w-[40%] h-auto object-contain z-50 greenLeaf2"
        />
        <button className="bg-transparent border-2 border-black rounded-xl absolute top-32 py-2 px-10">
          Click slide
        </button>
      </div>
      <div className="relative h-screen w-full two bg-[#ffae43e0]" ref={twoRef}>
        <div className="absolute top-[30%] left-[50%] z">
          <h2 className="font-extrabold text-6xl text-white">
            New Updated Flavour
          </h2>
          <p className="max-w-[600px] text-base text-white mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            esse illo et nostrum corrupti laudantium in minus voluptatibus
            facilis debitis explicabo quaerat laborum vero aut eligendi error
            eaque aspernatur, sunt nemo, repellendus porro nulla? Fugit neque
            rem, sapiente architecto commodi unde ducimus itaque asperiores
            possimus maiores debitis? Id, fugit quisquam!
          </p>
        </div>
      </div>
      <div
        className="h-screen w-full three bg-[#ff9543df]  flex items-center justify-center gap-5 p-4"
        ref={threeRef}
      >
        <div className="relative w-1/3 h-[400px] bg-red-500 brightness-95 flex flex-col items-center rounded-full">
          <img
            src={coca}
            alt="Coca-Cola"
            className="absolute top-[-30%] w-[60%] h-auto object-cover Coca-Cola"
          />
          <h3 className="absolute font-bold text-6xl text-white top-[75%]">
            Coca Cola
          </h3>
        </div>
        <div className="relative w-1/3 h-[400px] bg-orange-500 brightness-95 flex flex-col items-center rounded-full">
          <h3 className="absolute font-bold text-6xl text-white top-[75%]">
            Fanta
          </h3>
        </div>
        <div className="relative w-1/3 h-[400px] bg-green-500 brightness-95 flex flex-col items-center rounded-full">
          <img
            src={sprite}
            alt="sprite"
            className="absolute top-[-30%] w-[60%] h-auto object-cover sprite"
          />
          <h3 className="absolute font-bold text-6xl text-white top-[75%]">
            Sprite
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
