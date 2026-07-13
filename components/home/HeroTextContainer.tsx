// import Link from "next/link";
// import { Albert_Sans } from "next/font/google";

// const albertSans = Albert_Sans({
//   subsets: ["latin"],
//   variable: "--font-albert-local",
//   weight: "500",
// });

// export default function HeroTextContainer() {
//   return (
//     <div className="absolute w-[587px] h-[405px] top-[59px] left-[100px] gap-[35px] flex flex-col">
//       <div className="w-[634px] h-[183px]">
//         <h1 className="${albertSans.variable} font-[family-name:var(--font-albert-local)] font-medium text-6xl leading-[61px] tracking-[-0.03em]">
//           Critical software powering modern wealth management
//         </h1>
//       </div>
//       <div className="w-[498px] h-[96px]">
//         <p className="${albertSans.variable} font-[family-name:var(--font-albert-local)] font-medium text-[24px] leading-[32px] tracking-[-0.0045em] text-[#444444]/60">
//           30+ years building mission-critical portfolio management systems
//           trusted by RIAs and institutional firms.
//         </p>
//       </div>
//       <Link
//         href="#contact"
//         className="w-[252px] h-[56px] rounded-[14px] bg-[#191A23] py-[20px] px-[35px] gap-[10px] flex flex-row items-center justify-center ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal text-[20px] leading-[28px] tracking-[0em] text-[#FFFFFF]"
//       >
//         Book a consultation
//       </Link>
//     </div>
//   );
// }

import Link from "next/link";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
        className="w-[252px] h-[56px] rounded-[14px] bg-[#191A23] py-[20px] px-[35px] gap-[10px] flex items-center justify-center font-normal text-[20px] leading-[28px] text-white"
      >
        Book a consultation
      </Link>
    </div>
  );
}
