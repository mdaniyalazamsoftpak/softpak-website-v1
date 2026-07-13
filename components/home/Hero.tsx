// import Link from "next/link";
// import Image from "next/image";
// import { Albert_Sans } from "next/font/google";
// import HeroTextContainer from "./HeroTextContainer";

// const albertSans = Albert_Sans({
//   subsets: ["latin"],
//   variable: "--font-albert-local",
//   weight: "500",
// });

// function StatCard({
//   label,
//   value,
//   delta,
//   deltaColor = "text-brand-orange",
//   className = "",
// }: {
//   label: string;
//   value: string;
//   delta: string;
//   deltaColor?: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={"bg-white rounded-2xl shadow-lg p-5 w-[220px] " + className}
//     >
//       <div className="flex items-center justify-between">
//         <span className="text-[13px] text-brand-bodyText">{label}</span>
//         <span className="text-brand-bodyText">⋯</span>
//       </div>
//       <div className="mt-2 text-[28px] font-bold text-brand-dark">{value}</div>
//       <div className={"mt-1 flex items-center gap-1 text-[13px] " + deltaColor}>
//         <svg
//           width="14"
//           height="14"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//         >
//           <polyline points="3 17 9 11 13 15 21 7" />
//         </svg>
//         <span className="font-medium">{delta}</span>
//         <span className="text-brand-bodyText">from last month</span>
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <div className="w-full flex justify-center bg-transparent">
//       <section className="relative w-[1440px] h-[525px] shrink overflow-hidden">
//         <HeroTextContainer />
//         <div className="absolute top-[1px] left-[763px] w-[500px] h-[525px] rounded-[24px] overflow-hidden shadow-md">
//           <Image
//             src="/images/image-7.png"
//             alt="Portfolio dashboard"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="absolute top-[246.5px] left-[468px] w-[1985px] h-[1882px]">
//           <Image
//             src="/images/illustration-image-1.png"
//             alt="Rebalancing interface"
//             width={745}
//             height={442}
//           />
//         </div>
//         <Image
//           src="/images/object.png"
//           alt="Rebalancing interface"
//           width={129}
//           height={86}
//           className="absolute top-[472.5px] left-[778px] object-cover"
//         />
//         <Image
//           src="/images/container-2-md.png"
//           alt="Drifted Accounts"
//           width={275}
//           height={137}
//           className="absolute top-[72.5px] left-[697px] shadow-[0_4px_18px_0_rgba(0,0,0,0)] rounded-lg"
//         />
//         <Image
//           src="/images/container-1-md.png"
//           alt="Assets Under Management"
//           width={275}
//           height={137}
//           className="absolute top-[300.5px] left-[1065px] shadow-[0_4px_18px_0_rgba(0,0,0,0)] rounded-lg"
//         />
//         {/* <StatCard
//           label="Drifted Accounts"
//           value="50"
//           delta="-15.2%"
//           deltaColor="text-red-500"
//           className="absolute top-6 left-0 z-10"
//         />
//         <StatCard
//           label="Assets Under Management"
//           value="$45.2M"
//           delta="+8.3%"
//           className="absolute bottom-6 right-0 z-10"
//         /> */}
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import HeroTextContainer from "./HeroTextContainer";

export default function Hero() {
  return (
    <section className="relative w-[1440px] mx-auto h-[525px] overflow-hidden">
      <HeroTextContainer />

      <div className="absolute top-[1px] left-[763px] w-[500px] h-[525px] rounded-[24px] overflow-hidden shadow-md">
        <Image
          src="/images/image-7.png"
          alt="Portfolio dashboard"
          fill
          className="object-cover"
        />
      </div>

      <Image
        src="/images/illustration-image-1.png"
        alt="Rebalancing interface"
        width={745}
        height={442}
        className="absolute top-[246.5px] left-[468px]"
      />

      <Image
        src="/images/object.png"
        alt="Rebalancing interface"
        width={129}
        height={86}
        className="absolute top-[472.5px] left-[778px] object-cover"
      />

      <Image
        src="/images/container-2-md.png"
        alt="Drifted Accounts"
        width={275}
        height={137}
        className="absolute top-[72.5px] left-[697px] rounded-lg"
      />

      <Image
        src="/images/container-1-md.png"
        alt="Assets Under Management"
        width={275}
        height={137}
        className="absolute top-[300.5px] left-[1065px] rounded-lg"
      />
    </section>
  );
}
