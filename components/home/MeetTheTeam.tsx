import Link from "next/link";
import Image from "next/image";

const teamImages = [
  { src: "/images/image-10.png" },
  { src: "/images/image-11.png" },
  { src: "/images/image-9.png" },
  { src: "/images/blog-0.png" },
  { src: "/images/blog-1.png" },
  { src: "/images/image-7.png" },
];

export default function MeetTheTeam() {
  return (
    <section className="absolute w-full h-[572px] top-[6215px] bg-[#F2F2F2] left-1/2 -translate-x-1/2">
      <div className="absolute w-[1240px] h-[373px] left-1/2 -translate-x-1/2 top-[114px]">
        <div className="grid grid-cols-[560px_1fr] gap-16 items-center">
          <div className="grid grid-cols-3 gap-3">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-200"
              >
                <Image
                  src={img.src}
                  alt="Team member"
                  fill
                  className="object-cover"
                  sizes="179px"
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-h2 font-bold text-brand-dark leading-tight">
              Meet the Team
            </h2>
            <p className="mt-6 text-[16px] text-brand-bodyText leading-relaxed max-w-[500px]">
              Certified engineers with deep expertise across portfolio
              construction, risk management, rebalancing, compliance, and
              quantitative finance. Our team has been building financial
              technology for over 30 years.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-brand-dark px-7 py-3.5 text-white font-medium hover:bg-black transition-colors"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
