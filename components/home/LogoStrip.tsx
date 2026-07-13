import Image from "next/image";

export default function LogoStrip() {
  return (
    <section className="absolute top-[876px] left-1/2 -translate-x-1/2 w-[738px]">
      {/* <section className="w-[738px] flex top-[911px]"> */}
      <Image
        src="/images/logos-featured.svg"
        alt="Featured on Forbes, Entrepreneur, Inc. 5000, Yahoo! Finance, and Clutch"
        width={738}
        height={88}
        className="h-auto w-full"
        priority
      />
    </section>
  );
}
