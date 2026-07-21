import Link from "next/link";
import { albertSans } from "@/lib/fonts";

export default function HeroTextContainer() {
  return (
    <div
      className={`${albertSans.className} absolute w-[587px] h-[405px] top-[59px] left-[100px] gap-[35px] flex flex-col`}
    >
      <h1 className="font-medium text-6xl leading-[61px] tracking-[-0.03em]">
        Critical software powering modern wealth management
      </h1>
      <p className="font-medium text-[24px] leading-[32px] tracking-[-0.0045em] text-[#444444]/60">
        30+ years building mission-critical portfolio management systems trusted
        by RIAs and institutional firms.
      </p>
      <Link
        href="#contact"
        className="w-[252px] h-[56px] rounded-[14px] bg-brand-dark py-[20px] px-[35px] gap-[10px] flex items-center justify-center font-normal text-[20px] leading-[28px] text-white"
      >
        Book a consultation
      </Link>
    </div>
  );
}
