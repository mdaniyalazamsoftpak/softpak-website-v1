// import { Albert_Sans } from "next/font/google";
// import Link from "next/link";
// import Image from "next/image";

// const albertSans = Albert_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });
// const columns = [
//   {
//     heading: "Solutions",
//     links: [
//       { label: "Enterprise Solutions", href: "/solutions/enterprise" },
//       { label: "RIA Solutions", href: "/solutions/ria" },
//       { label: "Custom Solutions", href: "/solutions/custom" },
//     ],
//   },
//   {
//     heading: "Products",
//     links: [
//       { label: "Urebal Hub", href: "/products/urebal-hub" },
//       { label: "Urebal", href: "/products/urebal" },
//       { label: "Scalax", href: "/products/scalax" },
//       { label: "Mars", href: "/products/mars" },
//     ],
//   },
//   {
//     heading: "Resources",
//     links: [
//       { label: "Expert Insights", href: "/resources/insights" },
//       { label: "Blog", href: "/resources/blog" },
//       { label: "Publications", href: "/resources/publications" },
//       { label: "Event Replays", href: "/resources/events" },
//       { label: "Whitepapers", href: "/resources/whitepapers" },
//     ],
//   },
//   {
//     heading: "Company",
//     links: [
//       { label: "About Softpak", href: "/about" },
//       { label: "In the News", href: "/about/news" },
//       { label: "Press Releases", href: "/about/press" },
//       { label: "Privacy", href: "/privacy" },
//       { label: "Legal", href: "/legal" },
//       { label: "Careers", href: "/careers" },
//       { label: "Contact", href: "#contact" },
//     ],
//   },
// ];

// function SocialIcon({ d, label }: { d: string; label: string }) {
//   return (
//     <a
//       href="#"
//       aria-label={label}
//       className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-orange transition-colors"
//     >
//       <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
//         <path d={d} />
//       </svg>
//     </a>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="absolute w-full bg-[#0A0A0A] top-[8700px] h-[658px] overflow-hidden">
//       <div className="absolute w-[1440px]  left-1/2 -translate-x-1/2">
//         <div className="w-[1440px] h-[481.05px] opacity-100">
//           <div className="absolute w-[1368px] h-[1px] left-[calc(50%-1368px/2)] top-[36px] border-t border-[#F05A24]"></div>
//           <div className="relative grid grid-cols-5 gap-0 w-[1368px] h-[303.05px] ml-[63px] top-[74.05px] opacity-100">
//             <div className="w-[273.6px] h-[301px]  ml-[40.8px] mr-[22.8px] opacity-100 pb-[80.64px]">
//               <div className="w-[210px] h-[220.36px] opacity-100 relative flex flex-col">
//                 <div className="relative w-[145px] h-[53px]">
//                   <Image
//                     src="/images/image-4.png"
//                     alt="Softpak Logo Black and White"
//                     fill
//                     className="object-contain opacity-100"
//                   />
//                 </div>
//                 <p
//                   className={`${albertSans.className} mt-[16px] w-[210px] h-[23px] font-normal text-[13px] leading-[23px] flex items-center text-white flex-none self-stretch flex-grow-0`}
//                 >
//                   info@softpak.com
//                 </p>
//                 <p
//                   className={`${albertSans.className} w-[210px] h-[46px] mt-[18px] font-normal text-[13px] leading-[23px] flex items-center text-white flex-none self-stretch flex-grow-0`}
//                 >
//                   35 Main Street Ste 5 Wayland,
//                   <br />
//                   MA 01778, USA
//                 </p>
//               </div>
//               <div className="flex flex-col items-start pb-[0.61px] h-[22.3px] left-0 right-0 top-[218.66px]">
//                 <p
//                   className={`${albertSans.className} w-[52px] h-[21px] font-semibold text-[17px] leading-[20px] flex items-center text-white flex-none flex-grow-0`}
//                 >
//                   Follow
//                 </p>
//               </div>
//               <div className="flex flex-row items-end h-[22px] left-0 right-0 mt-[18.4px]">
//                 <div className="grid grid-cols-[auto_auto_auto_auto]">
//                   <div className="flex flex-row items-start pr-[9px] pb-[4px] w-[27px] h-[22px] flex-none flex-grow-0">
//                     <Image
//                       src="/icons/Youtube.svg"
//                       alt="Youtube Icon"
//                       width={16.59}
//                       height={11.6}
//                       className="mt-[3.2px] object-cover"
//                     />
//                   </div>
//                   <div className="flex flex-row items-start pb-[4px] w-[36px] h-[22px] flex-none flex-grow-0">
//                     <Image
//                       src="/icons/Linkedin.svg"
//                       alt="Linkedin Icon"
//                       width={10.5}
//                       height={10.5}
//                       className="mt-[4.11px] mx-auto object-cover"
//                     />
//                   </div>
//                   <div className="flex flex-row items-start pb-[4px] w-[33.44px] h-[22px] flex-none flex-grow-0">
//                     <Image
//                       src="/icons/Github.svg"
//                       alt="Github Icon"
//                       width={15.43}
//                       height={15.43}
//                       className="mt-[1.44px] mx-auto object-cover"
//                     />
//                   </div>

//                   <div className="flex flex-row items-start pb-[4px] w-[41px] h-[22px] flex-none flex-grow-0">
//                     <Image
//                       src="/icons/Copilot.svg"
//                       alt="Copilot Icon"
//                       width={23}
//                       height={18}
//                       className=" mx-auto object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[273.6px] h-[301px]  ml-[40.8px] mr-[22.8px] opacity-100 pb-[80.64px]">
//               <div className="w-[210px] h-[300.75px]">
//                 <div className="flex flex-col items-start pb-[0.61px] absolute h-[22.3px] left-0 right-0 top-[-0.7px]" />
//                 <p
//                   className={`${albertSans.className} flex items-center w-[73px] h-[21px] font-semibold text-[17px] leading-[20px] text-white flex-none`}
//                 >
//                   Solutions
//                 </p>
//               </div>
//               <div className="absolute w-[120px] h-[69px] top-[39px] opacity-100">
//                 <p
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Enterprise Solutions
//                 </p>
//                 <p
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   RIA Solutions
//                 </p>
//                 <p
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Custom Solutions
//                 </p>
//               </div>
//             </div>
//             <div className="w-[273.6px] h-[301px]  ml-[40.8px] mr-[22.8px] opacity-100 pb-[80.64px]">
//               <div className="w-[210px] h-[300.75px]">
//                 <div className="flex flex-col items-start pb-[0.61px] absolute h-[22.3px] left-0 right-0 top-[-0.7px]" />
//                 <p
//                   className={`${albertSans.className} flex items-center w-[73px] h-[21px] font-semibold text-[17px] leading-[20px] text-white flex-none`}
//                 >
//                   Products
//                 </p>
//               </div>
//               <div className="absolute w-[120px] h-[69px] top-[39px] opacity-100">
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Urebal Hub
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Urebal
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Scalax
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Mars
//                 </Link>
//               </div>
//             </div>
//             <div className="w-[273.6px] h-[301px]  ml-[40.8px] mr-[22.8px] opacity-100 pb-[80.64px]">
//               <div className="w-[210px] h-[300.75px]">
//                 <div className="flex flex-col items-start pb-[0.61px] absolute h-[22.3px] left-0 right-0 top-[-0.7px]" />
//                 <p
//                   className={`${albertSans.className} flex items-center w-[73px] h-[21px] font-semibold text-[17px] leading-[20px] text-white flex-none`}
//                 >
//                   Resources
//                 </p>
//               </div>
//               <div className="absolute w-[120px] h-[69px] top-[39px] opacity-100">
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Expert Insights
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Blog
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Publications
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Event Replays
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Whitepapers
//                 </Link>
//               </div>
//             </div>
//             <div className="w-[273.6px] h-[301px]  ml-[40.8px] mr-[22.8px] opacity-100 pb-[80.64px]">
//               <div className="w-[210px] h-[300.75px]">
//                 <div className="flex flex-col items-start pb-[0.61px] absolute h-[22.3px] left-0 right-0 top-[-0.7px]" />
//                 <p
//                   className={`${albertSans.className} flex items-center w-[73px] h-[21px] font-semibold text-[17px] leading-[20px] text-white flex-none`}
//                 >
//                   Company
//                 </p>
//               </div>
//               <div className="absolute w-[120px] h-[69px] top-[39px] opacity-100">
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   About Softpak
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   In the News
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Press Releases
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Privacy
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Legal
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Careers
//                 </Link>
//                 <Link
//                   href="#"
//                   className={`${albertSans.className} flex items-center font-normal text-[13px] leading-[23px] text-white flex-none`}
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="relative mt-16 h-[180px]">
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] rounded-full bg-brand-orange" />
//         </div> */}
//       </div>
//       <div className="absolute w-[1440px] h-[70px] top-[588px] left-1/2 -translate-x-1/2 opacity-100 pt-[27px] pr-[36px] pb-[27px] pl-[36px] z-10">
//         <p
//           className={`${albertSans.className} flex items-center w-[215px] h-[16px] mx-auto font-normal text-[13.1px] leading-[16px] text-white flex-none`}
//         >
//           © 2026 Softpak . All rights reserved
//         </p>
//       </div>
//       <div className="absolute w-[1084px] h-[376px] left-1/2 -translate-x-1/2 top-[482px] bg-[#F05A24] rounded-[50%] blur-[100px]"></div>
//       <div className="absolute w-[819px] h-[109px] top-[562px] left-1/2 -translate-x-1/2 opacity-100 mix-blend-screen">
//         <Image
//           src="/icons/Layer_1.svg"
//           alt="Softpak"
//           fill
//           className="object-contain"
//         />
//       </div>
//     </footer>
//   );
// }

import { Albert_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
    <footer className="absolute w-full bg-[#0A0A0A] top-[8700px] h-[658px] overflow-hidden">
      <div className="absolute w-[1440px] left-1/2 -translate-x-1/2">
        <div className="w-[1440px] h-[481.05px]">
          {/* Top border */}
          <div className="absolute w-[1368px] h-[1px] left-[calc(50%-1368px/2)] top-[36px] border-t border-[#F05A24]" />

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
      <div className="absolute w-[1084px] h-[376px] left-1/2 -translate-x-1/2 top-[482px] bg-[#F05A24] rounded-[50%] blur-[100px]" />

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
