import Link from "next/link";
import Image from "next/image";
import { albertSans, inter } from "@/lib/fonts";

const services = [
  {
    title: "Enterprise-Grade Technology for RIAs",
    image: "/images/image-10-1.png",
    href: "/solutions/enterprise",
    titleWidth: "w-[236px]",
    imageProps: { width: 178, height: 236, left: 182, top: 132 },
  },
  {
    title: "Risk-Based Optimization & Automation",
    image: "/images/image-11-1.png",
    href: "/solutions/risk",
    titleWidth: "w-[195px]",
    imageProps: { width: 221, height: 320, left: 139, top: 132 },
  },
  {
    title: "Custom Financial Software & Systems Integration",
    image: "/images/image-12.png",
    href: "/solutions/custom",
    titleWidth: "w-[267px]",
    imageProps: { width: 300, height: 370, left: 60, top: 132 },
  },
];

type ServiceCardProps = {
  title: string;
  image: string;
  href: string;
  titleWidth: string;
  imageProps: { width: number; height: number; left: number; top: number };
};

function ServiceCard({
  title,
  image,
  href,
  titleWidth,
  imageProps,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="relative w-[384px] h-[300px] rounded-[24px] bg-brand-cardGray overflow-hidden">
        <div className="absolute w-[336px] h-[66px] left-[24px] top-[23.16px]">
          <h3
            className={`${albertSans.className} absolute ${titleWidth} h-[99px] left-0 top-[0.25px] font-medium text-[28px] leading-[33px] tracking-[0.0703125px] text-brand-dark`}
          >
            {title}
          </h3>
        </div>
        <Image
          src={image}
          alt={title}
          width={imageProps.width}
          height={imageProps.height}
          className="absolute"
          style={{ left: imageProps.left, top: imageProps.top }}
        />
      </div>
      <div className="w-[384px] h-[24px] text-center">
        <Link
          href={href}
          className={`${albertSans.className} w-[81px] h-[24px] font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#444444]/60`}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full flex justify-center bg-transparent">
      <div className="relative w-[1440px] h-[803px] mt-[54px]">
        {/* Heading */}
        <div className="w-[1200px] mx-auto mt-[80px] flex flex-col gap-[16px]">
          <div className="h-[61.59px] pt-[10.5px]">
            <h2
              className={`${albertSans.className} mx-auto w-[275px] h-[48px] font-medium text-[48px] leading-[48px] tracking-[-1.1px] text-center text-brand-darker`}
            >
              Our Services
            </h2>
          </div>
          <div className="h-[27px] pt-[0.5px]">
            <p
              className={`${albertSans.className} mx-auto w-[544px] h-[27px] font-normal text-[18px] leading-[27px] tracking-[-0.44px] text-center text-[#444444]/60`}
            >
              Enterprise-grade solutions for every segment of wealth management
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="absolute w-[1200px] h-[340px] left-1/2 -translate-x-1/2 top-[256px]">
          <div className="grid grid-cols-3 gap-[24px]">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/solutions"
          className={`${inter.className} absolute w-[193.81px] h-[56px] left-[627.09px] top-[667px] bg-brand-dark rounded-[14px] flex items-center justify-center font-medium text-[16px] leading-[24px] tracking-[-0.31px] text-center text-white`}
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
