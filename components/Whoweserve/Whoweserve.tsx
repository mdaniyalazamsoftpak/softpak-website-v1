import Image from "next/image";
import { albertSans } from "@/lib/fonts";
import { GlobeAltIcon, LightBulbIcon, ChevronRightIcon, PlayIcon } from "./icons";

type GridItem = {
  title: string;
  description: string;
};

const columns: { width: string; items: GridItem[] }[] = [
  {
    width: "w-[250px]",
    items: [
      { title: "Family Offices", description: "Analyze conversation" },
      { title: "Independent RIAs", description: "Measure active usage" },
    ],
  },
  {
    width: "w-[305px]",
    items: [
      { title: "Breakaway Advisors", description: "Maximize all customers" },
      { title: "Enterprise Wealth Managers", description: "Maximize all customers" },
    ],
  },
  {
    width: "w-[305px]",
    items: [
      { title: "Innovation Leaders", description: "Find retentation drivers" },
      {
        title: "IT Teams for Financial Institutions",
        description: "Maximize all customers",
      },
    ],
  },
];

const articles = [
  "The FOMC continues to project one cut in 2026",
  "Fed reacts to oil price shock with caution",
  "Energy CPI faces risks from developments in the Middle East",
  "Conflict in the Middle East poses headline inflation risk",
  "Insight's Senior Portfolio Manager Melissa Niu answers some frequ...",
];

function GridItemRow({ item }: { item: GridItem }) {
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="w-6 h-6 shrink-0">
        <GlobeAltIcon />
      </div>
      <div className="flex flex-col gap-0.5">
        <div
          className={`${albertSans.className} font-semibold text-[16px] leading-[150%] text-brand-dark`}
        >
          {item.title}
        </div>
        <div
          className={`${albertSans.className} font-medium text-[14px] leading-[150%] text-[#797979]`}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
}

function WhoWeServeGrid() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div
        className={`${albertSans.className} font-semibold text-[12px] leading-[150%] tracking-[0.5px] uppercase text-[#9E9E9E]`}
      >
        Who We Serve
      </div>
      <div className="flex flex-row gap-10">
        {columns.map((col, i) => (
          <div key={i} className={`flex flex-col gap-5 ${col.width}`}>
            {col.items.map((item, j) => (
              <GridItemRow key={j} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsNewCard() {
  return (
    <div className="w-[232px] shrink-0 rounded-2xl bg-gradient-to-b from-brand-orange to-[#B6421C] p-5 flex flex-col gap-4">
      <div>
        <div
          className={`${albertSans.className} font-semibold text-[16px] leading-[150%] text-white`}
        >
          What&apos;s new?
        </div>
        <div
          className={`${albertSans.className} font-medium text-[14px] leading-[150%] text-white/90 mt-0.5`}
        >
          Take a look at our latest product release.
        </div>
      </div>

      {/* placeholder demo thumbnail — swap in the real "Urebal Redesign" export */}
      <div className="relative w-full h-[153px] rounded-[18px] border-2 border-[#F1C4B4] bg-black/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center w-12 h-12 m-auto">
          <PlayIcon />
        </div>
      </div>
    </div>
  );
}

function ArticleRow({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <div className="w-6 h-6 shrink-0">
        <LightBulbIcon />
      </div>
      <div
        className={`${albertSans.className} font-semibold text-[16px] leading-[150%] text-brand-dark flex-1`}
      >
        {title}
      </div>
      <div className="w-3 h-3 shrink-0">
        <ChevronRightIcon />
      </div>
    </div>
  );
}

function InsightCard() {
  return (
    <div className="w-[676px] rounded-2xl bg-white px-5 py-6 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div
          className={`${albertSans.className} font-semibold text-[12px] leading-[150%] tracking-[0.5px] uppercase text-[#9E9E9E]`}
        >
          Insight
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {articles.map((title) => (
          <ArticleRow key={title} title={title} />
        ))}
      </div>

      <a
        href="/who-we-serve"
        className={`${albertSans.className} flex items-center gap-[5px] font-medium text-[14px] leading-[150%] text-brand-orange`}
      >
        See all
        <Image src="/icons/arrow-icon.svg" alt="" width={16} height={16} aria-hidden />
      </a>
    </div>
  );
}

function CardsRow() {
  return (
    <div className="px-8 flex flex-row items-stretch gap-8">
      <WhatsNewCard />
      <InsightCard />
    </div>
  );
}

export default function Whoweserve() {
  return (
    <div className="relative w-[1050px]">
      {/* caret pointing up at the trigger */}
      <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10.16px] border-x-transparent border-b-[11.02px] border-b-brand-cardGray" />
      <div className="rounded-[18px] bg-brand-cardGray shadow-[0_24px_56px_0_rgba(167,174,186,0.16)] py-8 flex flex-col gap-10">
        <WhoWeServeGrid />
        <CardsRow />
      </div>
    </div>
  );
}
