// import Link from "next/link";
// import Image from "next/image";
// import { Albert_Sans } from "next/font/google";

// const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "500"] });

// function MiniCard({
//   label,
//   value,
//   delta,
//   variant = "light",
// }: {
//   label: string;
//   value: string;
//   delta?: string;
//   variant?: "light" | "dark";
// }) {
//   const isDark = variant === "dark";
//   return (
//     <div
//       className={`rounded-xl p-4 w-[200px] ${
//         isDark ? "bg-brand-dark text-white" : "bg-white text-brand-dark"
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <span
//           className={`text-[12px] ${isDark ? "text-neutral-400" : "text-brand-bodyText"}`}
//         >
//           {label}
//         </span>
//         <span className={isDark ? "text-neutral-400" : "text-brand-bodyText"}>
//           •••
//         </span>
//       </div>
//       <div
//         className={`mt-2 text-[24px] font-bold ${isDark ? "text-white" : "text-brand-dark"}`}
//       >
//         {value}
//       </div>
//       {delta && (
//         <div
//           className={`mt-1 flex items-center gap-1 text-[12px] ${isDark ? "text-brand-orange" : "text-brand-orange"}`}
//         >
//           <svg
//             width="12"
//             height="12"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//           >
//             <polyline points="3 17 9 11 13 15 21 7" />
//           </svg>
//           <span className="font-medium">{delta}</span>
//           <span className={isDark ? "text-neutral-400" : "text-brand-bodyText"}>
//             from last month
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Analytics() {
//   return (
//     <section className="absolute w-full h-[508px] top-[4680px] bg-[#FFEEE7] left-1/2 -translate-x-1/2">
//       <div
//         className="absolute w-full h-[419px] left-0 top-[52px]"
//         style={{
//           background: "linear-gradient(180deg, #F05A24 0%, #D94D1F 100%)",
//         }}
//       />
//       <div className="absolute left-1/2 -translate-x-1/2 w-[1440px] h-[508px]">
//         <div>
//           <div className="absolute w-[634px] h-[122px] top-[147px] left-[100px]">
//             <h2
//               className={`${albertSans.className} absolute font-medium text-[64px] leading-[61px] tracking-[-0.03em] text-[#F2F2F2]`}
//             >
//               Accelerate your portfolio analytics.
//             </h2>
//           </div>
//           <Link
//             href="#contact"
//             className={`${albertSans.className} absolute w-[220px] h-[56px] left-[100px] top-[323px] bg-[#191A23] rounded-[14px] flex flex-row justify-center items-center px-[35px] py-[20px] gap-[10px] font-normal text-[20px] leading-[28px] text-center text-white`}
//           >
//             Connect with us
//           </Link>
//         </div>
//         <div className="absolute w-[680px] h-[508px] left-[660px] top-0">
//           {/* Right: floating cards mock */}
//           {/* <div className="relative h-[320px]"> */}
//           <div
//             className="absolute w-[328px] h-[174px] left-0 top-0"
//             style={{ filter: "drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.08))" }}
//           >
//             {/* <MiniCard label="Total Accounts" value="257" delta="+12.5%" /> */}
//             <Image
//               src={"/images/container-5.png"}
//               alt={"Total Account"}
//               width={328}
//               height={174}
//             />
//           </div>
//           <div
//             className="absolute w-[328px] h-[174px] left-[352px] top-[130px]"
//             style={{ filter: "drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.08))" }}
//           >
//             {/* <MiniCard label="Drifted Accounts" value="50" delta="-15.2%" /> */}
//             <Image
//               src={"/images/container-1-1.png"}
//               alt={"Total Account"}
//               width={328}
//               height={174}
//             />
//           </div>
//           <div
//             className="absolute w-[328px] h-[174px] left-0 top-[204px]"
//             style={{ filter: "drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.08))" }}
//           >
//             {/* <MiniCard
//               label="Assets Under Management"
//               value="$45.2M"
//               delta="+8.3%"
//             /> */}
//             <Image
//               src={"/images/container-2.png"}
//               alt={"Total Account"}
//               width={328}
//               height={174}
//             />
//           </div>
//           <div
//             className="absolute w-[328px] h-[174px] left-[352px] top-[334px]"
//             style={{ filter: "drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.08))" }}
//           >
//             {/* <MiniCard
//               label="Rebalances Completed"
//               value="47"
//               delta="+22.4%"
//               variant="dark"
//             /> */}
//             <Image
//               src={"/images/container-3-1-md.png"}
//               alt={"Total Account"}
//               width={328}
//               height={174}
//             />
//           </div>
//           {/* </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    src: "/images/container-5.png",
    alt: "Total Account",
    left: "left-0",
    top: "top-0",
  },
  {
    src: "/images/container-1-1.png",
    alt: "Drifted Accounts",
    left: "left-[352px]",
    top: "top-[130px]",
  },
  {
    src: "/images/container-2.png",
    alt: "Assets Under Management",
    left: "left-0",
    top: "top-[204px]",
  },
  {
    src: "/images/container-3-1-md.png",
    alt: "Rebalances Completed",
    left: "left-[352px]",
    top: "top-[334px]",
  },
];

export default function Analytics() {
  return (
    <section className="absolute w-full h-[508px] top-[4680px] bg-[#FFEEE7] left-1/2 -translate-x-1/2">
      <div
        className="absolute w-full h-[419px] left-0 top-[52px]"
        style={{
          background: "linear-gradient(180deg, #F05A24 0%, #D94D1F 100%)",
        }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 w-[1440px] h-[508px]">
        {/* Left: CTA */}
        <h2
          className={`${albertSans.className} absolute w-[634px] h-[122px] top-[147px] left-[100px] font-medium text-[64px] leading-[61px] tracking-[-0.03em] text-[#F2F2F2]`}
        >
          Accelerate your portfolio analytics.
        </h2>
        <Link
          href="#contact"
          className={`${albertSans.className} absolute w-[221px] h-[56px] left-[100px] top-[323px] bg-[#191A23] rounded-[14px] flex justify-center items-center px-[35px] py-[20px] gap-[10px] font-normal text-[20px] leading-[28px] text-center text-white`}
        >
          Connect with us
        </Link>

        {/* Right: Cards */}
        <div className="absolute w-[680px] h-[508px] left-[660px] top-0">
          {cards.map((card) => (
            <div
              key={card.src}
              className={`absolute w-[328px] h-[174px] ${card.left} ${card.top}`}
              style={{
                filter: "drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.08))",
              }}
            >
              <Image src={card.src} alt={card.alt} width={328} height={174} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
