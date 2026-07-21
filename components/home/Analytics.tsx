import Link from "next/link";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";

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
    <section className="relative z-10 w-full h-[419px] -mt-[53px] bg-[#FFEEE7]">
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
