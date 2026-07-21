import Link from "next/link";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";
import Solutions from "@/components/solutions/Solutions";
import Resources from "@/components/resources/Resources";

const navLinkClass =
  "whitespace-nowrap font-normal leading-[32px] tracking-[0em] text-[16px] text-brand-dark hover:text-brand-orange transition-colors";

export default function Header() {
  return (
    <>
      {/* lead-in gap: scrolls away normally before the bar sticks */}
      <div className="h-[70px]" aria-hidden />

      <header className="sticky top-0 z-50 w-full flex justify-center bg-white">
        <div className="w-[1440px] px-[100px] h-[80px] flex items-center justify-between">
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
            <div className="group relative">
              <Link href="/solutions" className={navLinkClass}>
                Solutions
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 z-50">
                <Solutions />
              </div>
            </div>
            <Link href="/who-we-serve" className={navLinkClass}>
              Who we serve
            </Link>
            <div className="group relative">
              <Link href="/resources" className={navLinkClass}>
                Resources
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 z-50">
                <Resources />
              </div>
            </div>
            <Link href="/partners" className={navLinkClass}>
              Partners
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link
              href="#contact"
              className="whitespace-nowrap h-[46px] px-[20px] flex items-center justify-center rounded-[14px] bg-brand-orange font-normal text-[16px] leading-[28px] tracking-[0em] text-white hover:bg-brand-orangeAlt transition-colors"
            >
              Contact us
            </Link>
          </nav>
        </div>
      </header>

      {/* trailing gap: scrolls up and passes behind the stuck bar */}
      <div className="h-[70px]" aria-hidden />
    </>
  );
}
