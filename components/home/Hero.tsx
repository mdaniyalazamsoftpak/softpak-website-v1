import Image from "next/image";
import HeroTextContainer from "./HeroTextContainer";

export default function Hero() {
  return (
    <section className="relative w-[1440px] mx-auto h-[525px] overflow-hidden">
      <HeroTextContainer />

      <div className="absolute top-[1px] left-[763px] w-[500px] h-[525px] rounded-[24px] overflow-hidden shadow-md">
        <Image
          src="/images/image-7.png"
          alt="Portfolio dashboard"
          fill
          className="object-cover"
        />
      </div>

      <Image
        src="/images/illustration-image-1.png"
        alt="Rebalancing interface"
        width={745}
        height={442}
        className="absolute top-[246.5px] left-[468px]"
      />

      <Image
        src="/images/object.png"
        alt="Rebalancing interface"
        width={129}
        height={86}
        className="absolute top-[472.5px] left-[778px] object-cover"
      />

      <Image
        src="/images/container-2-md.png"
        alt="Drifted Accounts"
        width={275}
        height={137}
        className="absolute top-[72.5px] left-[697px] rounded-lg"
      />

      <Image
        src="/images/container-1-md.png"
        alt="Assets Under Management"
        width={275}
        height={137}
        className="absolute top-[300.5px] left-[1065px] rounded-lg"
      />
    </section>
  );
}
