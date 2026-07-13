// import Link from "next/link";
// import Image from "next/image";
// import { Albert_Sans } from "next/font/google";

// const albertSans = Albert_Sans({
//   subsets: ["latin"],
//   variable: "--font-albert-local",
//   weight: "500",
// });

// export default function Header() {
//   return (
//     <header className="w-full flex justify-center bg-transparent">
//       <div className="w-[1440px] px-[100px] mt-[70px] h-[80px] flex items-center justify-between">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/images/logo.png"
//             alt="SoftPak"
//             width={168}
//             height={35}
//             priority
//           />
//         </Link>
//         <nav className="w-[676px] h-[46px] flex flex-row items-center gap-[40px]">
//           <Link
//             href="/solutions"
//             className="w-[68px] h-[28px] ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors"
//           >
//             Solutions
//           </Link>
//           <Link
//             href="/who-we-serve"
//             className="w-[116px] h-[28px] ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors"
//           >
//             Who we serve
//           </Link>
//           <Link
//             href="/resources"
//             className="w-[77px] h-[28px] ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors"
//           >
//             Resources
//           </Link>
//           <Link
//             href="/partners"
//             className="w-[62px] h-[28px] ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors"
//           >
//             Partners
//           </Link>
//           <Link
//             href="/about"
//             className="w-[45px] h-[28px] ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="#contact"
//             // rounded-[14px] bg-[#191A23] py-[20px] px-[35px] gap-[10px] flex flex-row items-center justify-center ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal text-[20px] leading-[28px] tracking-[0em] text-[#FFFFFF]
//             className="w-[120px] h-[46px] flex flex-row items-center rounded-[14px] py-[20px] gap-[10px] bg-[#F05A24] justify-center ${albertSans.variable} font-[family-name:var(--font-albert-local)] font-normal text-[16px] leading-[28px] tracking-[0em] text-white text-center hover:bg-brand-orangeAlt transition-colors"
//           >
//             Contact us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const navLinkClass =
  "whitespace-nowrap font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors";

export default function Header() {
  return (
    <header className="w-full flex justify-center bg-transparent">
      <div className="w-[1440px] px-[100px] mt-[70px] mb-[70px] h-[80px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SoftPak"
            width={168}
            height={35}
            priority
          />
        </Link>

        <nav
          className={`${albertSans.className} w-[676px] h-[46px] flex flex-row items-center gap-[40px]`}
        >
          <Link href="/solutions" className={navLinkClass}>
            Solutions
          </Link>
          <Link href="/who-we-serve" className={navLinkClass}>
            Who we serve
          </Link>
          <Link href="/resources" className={navLinkClass}>
            Resources
          </Link>
          <Link href="/partners" className={navLinkClass}>
            Partners
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link
            href="#contact"
            className="whitespace-nowrap h-[46px] px-[20px] flex items-center justify-center rounded-[14px] bg-[#F05A24] font-normal text-[16px] leading-[28px] tracking-[0em] text-white hover:bg-brand-orangeAlt transition-colors"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
