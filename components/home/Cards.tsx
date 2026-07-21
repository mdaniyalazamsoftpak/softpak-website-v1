import React from "react";
import Link from "next/link";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";

interface CardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
  className?: string;
  zIndex?: number;
}

export default function Card({
  title,
  description,
  buttonLabel,
  onButtonClick,
  imageSrc,
  imageAlt,
  visual,
  className,
  zIndex,
}: CardProps) {
  return (
    <div className="sticky top-0 mb-[30px] w-[1239px] h-[582px] bg-brand-cardGray rounded-[24px] flex-none self-stretch flex-grow-0 shadow-[0px_4px_35px_rgba(0,0,0,0.25)]">
      <div
        className="absolute w-[587px] h-[523px] top-[30px] left-[30px] flex flex-col gap-[263px]"
        style={{ zIndex }}
      >
        <div className="w-[498px] h-[192px]">
          <h3
            className={`${albertSans.className} absolute w-[352px] h-[61px] left-0 top-0 font-medium text-[38px] leading-[61px] tracking-[-0.03em] text-black`}
          >
            {title}
          </h3>
          <p
            className={`${albertSans.className} absolute w-[498px] h-[96px] left-0 top-[77px] font-medium text-[24px] leading-[32px] tracking-[-0.449219px] text-black/50`}
          >
            {description}
          </p>
        </div>
        <Link
          href="#"
          className={`${albertSans.className} w-[175px] h-[68px] bg-brand-orange rounded-[14px] flex flex-row items-center justify-center px-[35px] py-[20px] gap-[10px] font-normal text-[20px] leading-[28px] text-center text-white`}
        >
          {buttonLabel}
        </Link>
      </div>

      {visual ? (
        visual
      ) : (
        <div className="absolute w-[446px] h-[522px] left-[749px] top-[30px] drop-shadow-[0px_4px_18px_rgba(0,0,0,0.08)]">
          <Image
            src={imageSrc}
            alt={imageAlt || "Card visual representation"}
            width={446}
            height={522}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
