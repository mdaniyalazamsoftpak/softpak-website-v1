import React from "react";
import CardsOverVideo from "./CardsOverVideo";
import { albertSans } from "@/lib/fonts";

export default function PulseVideoSection() {
  return (
    <section className="absolute w-full h-[902px] bg-[#000000] left-1/2 -translate-x-1/2 z-0">
      <div className="relative mx-auto w-[1440px] h-[1902px]">
        <div className="absolute w-[1440px] h-[902px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/circuit-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-[1440px] h-[286px] left-0 top-0">
          <div className="absolute w-[891px] h-[116px] top-[93px] left-[276px]">
            <p
              className={`${albertSans.className} absolute font-medium text-[48px] leading-[58px] text-center text-white`}
            >
              We build critical software infrastructure powering modern wealth
              management.
            </p>
          </div>
        </div>
        <div className="absolute w-[1441px] h-[616px] left-1/2 -translate-x-1/2 top-[286px] pr-[101px] pl-[101px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <CardsOverVideo />
        </div>
      </div>
    </section>
  );
}
