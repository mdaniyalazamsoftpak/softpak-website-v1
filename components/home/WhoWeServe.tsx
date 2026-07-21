"use client";

import { useState } from "react";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";

const tabs = [
  {
    key: "enterprise",
    label: "Enterprise Wealth Management Firms",
    image: "/Who We Serve/Who We Serve/enterprise.gif",
    tabWidth: "w-[238px]",
  },
  {
    key: "ria",
    label: "Registered Investment Advisors",
    image: "/Who We Serve/Who We Serve/registered.gif",
    tabWidth: "w-[282px]",
  },
  {
    key: "it",
    label: "Information Technology Teams",
    image: "/Who We Serve/Who We Serve/information.gif",
    tabWidth: "w-[297px]",
  },
  {
    key: "innovators",
    label: "Innovation Leaders in Fintech",
    image: "/Who We Serve/Who We Serve/innovation.gif",
    tabWidth: "w-[237px]",
  },
];

type Tab = (typeof tabs)[number];

function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "w-[460px] h-[112px] text-left rounded-[24px] pt-[20px] pr-[30px] pb-[20px] pl-[30px] transition-colors flex items-center gap-[24px] " +
        (isActive
          ? "bg-brand-darker text-white"
          : "bg-white text-[#898989] hover:bg-white/80")
      }
    >
      {isActive && (
        <Image
          src="/images/background.png"
          alt="Who we serve"
          width={76}
          height={53}
        />
      )}
      <span
        className={`${albertSans.className} ${tab.tabWidth} h-[72px] font-medium text-[28px] leading-[36px] tracking-[-0.03em]`}
      >
        {tab.label}
      </span>
    </button>
  );
}

export default function WhoWeServe() {
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative w-full h-[1192px] bg-brand-peach">
      <div className="relative mx-auto w-[1440px] h-[1192px]">
        {/* Heading */}
        <div className="absolute w-[303px] h-[48px] top-[127px] left-1/2 -translate-x-1/2">
          <h2
            className={`${albertSans.className} w-[302px] h-[48px] font-medium text-[48px] leading-[48px] tracking-[-1.1px] text-center text-brand-darker`}
          >
            Who we serve
          </h2>
        </div>

        {/* Subheading */}
        <div className="absolute w-[567px] h-[50px] top-[191px] left-1/2 -translate-x-1/2">
          <p
            className={`${albertSans.className} w-[567px] h-[50px] font-normal text-[18px] leading-[25px] tracking-[-0.44px] text-center text-brand-darker/60`}
          >
            We are proud to partner with a diverse range of firms and experts to
            help them achieve their financial goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="absolute w-[460px] top-[366px] left-[100px] flex flex-col gap-[24px]">
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              tab={tab}
              isActive={tab.key === active}
              onClick={() => setActive(tab.key)}
            />
          ))}
        </div>

        {/* GIF */}
        <div className="absolute w-[798px] h-[421px] left-[562px] top-[420px] overflow-hidden">
          <Image
            src={activeTab.image}
            alt={activeTab.label}
            fill
            className="object-cover object-top"
            sizes="798px"
          />
        </div>
      </div>
    </section>
  );
}
