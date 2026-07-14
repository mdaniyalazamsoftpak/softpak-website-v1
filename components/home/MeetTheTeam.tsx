import Link from "next/link";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const teamImages = [
  { src: "/images/container-sm-5.png" },
  { src: "/images/container-sm-4.png" },
  { src: "/images/container-sm-3.png" },
  { src: "/images/container-sm-2.png" },
  { src: "/images/container-sm-1.png" },
  { src: "/images/container-0.png" },
];

export default function MeetTheTeam() {
  return (
    <section className="absolute w-full h-[572px] top-[6215px] bg-[#F2F2F2] left-1/2 -translate-x-1/2">
      <div className="absolute w-[1240px] h-[373px] left-1/2 -translate-x-1/2 top-[114px]">
        <div className="absolute w-[599px] h-[373px] left-0 top-0 rounded-none">
          <div className="grid grid-cols-3 gap-x-[40px] gap-y-[22px]">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className="relative w-[173px] h-[173px] rounded-[24px] overflow-hidden bg-neutral-200 p-[16px]"
              >
                <Image
                  src={img.src}
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute w-[568px] h-[288.78px] top-[42.28px] left-[640px] opacity-100">
            <div className="w-[568px] h-[61.59px] opacity-100">
              <h2
                className={`${albertSans.className} absolute w-[321px] h-[62px] left-0 top-[0.5px] font-medium text-[48px] leading-[62px] text-center tracking-[-1.09922px] text-[#0F0F0F]`}
              >
                Meet the Team
              </h2>
            </div>
            <div className="absolute w-[568px] h-[115.19px] top-[85.59px] opacity-100">
              <p
                className={`${albertSans.className} absolute w-[567px] h-[75px] left-0 top-[0.5px] font-normal text-[18px] leading-[25px] tracking-[-0.439453px] text-[#0F0F0F]/60`}
              >
                Certified engineers with deep expertise across portfolio
                construction, risk management, rebalancing, compliance, and
                quantitative finance. Our team has been building financial
                technology for over 30 years.
              </p>
            </div>
            <Link
              href="#"
              className="absolute w-[205px] h-[56px] left-0 top-[232.72px] bg-[#191A23] rounded-[14px] flex items-center justify-center"
            >
              <span className="w-[146px] h-[24px] font-medium text-[16px] leading-[24px] text-center tracking-[-0.3125px] text-white">
                Book a consultation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
