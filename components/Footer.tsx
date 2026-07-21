import Link from "next/link";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";

const columns = [
  {
    heading: "Solutions",
    headingWidth: "w-[73px]",
    links: [
      { label: "Enterprise Solutions", href: "/solutions/enterprise" },
      { label: "RIA Solutions", href: "/solutions/ria" },
      { label: "Custom Solutions", href: "/solutions/custom" },
    ],
  },
  {
    heading: "Products",
    headingWidth: "w-[73px]",
    links: [
      { label: "Urebal Hub", href: "/products/urebal-hub" },
      { label: "Urebal", href: "/products/urebal" },
      { label: "Scalax", href: "/products/scalax" },
      { label: "Mars", href: "/products/mars" },
    ],
  },
  {
    heading: "Resources",
    headingWidth: "w-[88px]",
    links: [
      { label: "Expert Insights", href: "/resources/insights" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Publications", href: "/resources/publications" },
      { label: "Event Replays", href: "/resources/events" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
    ],
  },
  {
    heading: "Company",
    headingWidth: "w-[80px]",
    links: [
      { label: "About Softpak", href: "/about" },
      { label: "In the News", href: "/about/news" },
      { label: "Press Releases", href: "/about/press" },
      { label: "Privacy", href: "/privacy" },
      { label: "Legal", href: "/legal" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socialIcons = [
  {
    src: "/icons/Youtube.svg",
    alt: "Youtube Icon",
    width: 16.59,
    height: 11.6,
    wrapperClass: "pr-[9px] w-[27px]",
    imgClass: "mt-[3.2px]",
  },
  {
    src: "/icons/Linkedin.svg",
    alt: "Linkedin Icon",
    width: 10.5,
    height: 10.5,
    wrapperClass: "w-[36px]",
    imgClass: "mt-[4.11px] mx-auto",
  },
  {
    src: "/icons/Github.svg",
    alt: "Github Icon",
    width: 15.43,
    height: 15.43,
    wrapperClass: "w-[33.44px]",
    imgClass: "mt-[1.44px] mx-auto",
  },
  {
    src: "/icons/Copilot.svg",
    alt: "Copilot Icon",
    width: 23,
    height: 18,
    wrapperClass: "w-[41px]",
    imgClass: "mx-auto",
  },
];

const linkClass = `${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`;
const headingClass = `${albertSans.className} flex items-center h-[21px] font-semibold text-[17px] leading-[20px] text-white flex-none`;

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0A0A] h-[658px] overflow-hidden">
      <div className="absolute w-[1440px] left-1/2 -translate-x-1/2">
        <div className="w-[1440px] h-[481.05px]">
          {/* Top border */}
          <div className="absolute w-[1368px] h-[1px] left-[calc(50%-1368px/2)] top-[36px] border-t border-brand-orange" />

          {/* Columns grid */}
          <div className="relative grid grid-cols-5 gap-0 w-[1368px] h-[303.05px] ml-[63px] top-[74.05px]">
            {/* Col 1 — Logo + contact + social */}
            <div className="w-[273.6px] h-[301px] ml-[40.8px] mr-[22.8px] pb-[80.64px]">
              <div className="w-[210px] h-[220.36px] relative flex flex-col">
                <div className="relative w-[145px] h-[53px]">
                  <Image
                    src="/images/image-4.png"
                    alt="Softpak Logo Black and White"
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className={`${albertSans.className} mt-[16px] w-[210px] h-[23px] font-normal text-[13px] leading-[23px] flex items-center text-white flex-none self-stretch`}
                >
                  info@softpak.com
                </p>
                <p
                  className={`${albertSans.className} w-[210px] h-[46px] mt-[18px] font-normal text-[13px] leading-[23px] flex items-center text-white flex-none self-stretch`}
                >
                  35 Main Street Ste 5 Wayland,
                  <br />
                  MA 01778, USA
                </p>
              </div>

              <p
                className={`${albertSans.className} w-[52px] h-[21px] font-semibold text-[17px] leading-[20px] flex items-center text-white flex-none`}
              >
                Follow
              </p>

              <div className="flex flex-row items-end h-[22px] mt-[18.4px]">
                <div className="grid grid-cols-[auto_auto_auto_auto]">
                  {socialIcons.map(
                    ({ src, alt, width, height, wrapperClass, imgClass }) => (
                      <div
                        key={alt}
                        className={`flex flex-row items-start pb-[4px] h-[22px] flex-none ${wrapperClass}`}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={width}
                          height={height}
                          className={`object-cover ${imgClass}`}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Cols 2–5 — Nav columns */}
            {columns.map(({ heading, headingWidth, links }) => (
              <div
                key={heading}
                className="w-[273.6px] h-[301px] ml-[40.8px] mr-[22.8px] pb-[80.64px]"
              >
                <p className={`${headingClass} ${headingWidth} mb-[18px]`}>
                  {heading}
                </p>
                <div className="flex flex-col">
                  {links.map(({ label, href }) => (
                    <Link key={label} href={href} className={linkClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow ellipse */}
      <div className="absolute w-[1084px] h-[376px] left-1/2 -translate-x-1/2 top-[482px] bg-brand-orange rounded-[50%] blur-[100px]" />

      {/* Softpak watermark */}
      <div className="absolute w-[819px] h-[109px] top-[562px] left-1/2 -translate-x-1/2 mix-blend-screen">
        <Image
          src="/icons/Layer_1.svg"
          alt="Softpak"
          fill
          className="object-contain"
        />
      </div>

      {/* Copyright bar */}
      <div className="absolute w-[1440px] h-[70px] top-[588px] left-1/2 -translate-x-1/2 pt-[27px] pr-[36px] pb-[27px] pl-[36px] z-10">
        <p
          className={`${albertSans.className} flex items-center w-[215px] h-[16px] mx-auto font-normal text-[13.1px] leading-[16px] text-white flex-none`}
        >
          © 2026 Softpak . All rights reserved
        </p>
      </div>
    </footer>
  );
}
