import type { ComponentType } from "react";
import Image from "next/image";
import { albertSans } from "@/lib/fonts";
import {
  VideoCameraIcon,
  PencilIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  ScaleIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  FaqDecoration,
} from "@/components/resources/icons";

type ResourceItem = {
  title: string;
  description: string;
  icon: ComponentType;
};

const columns: ResourceItem[][] = [
  [
    {
      title: "Webinars",
      description: "Learn about your users",
      icon: VideoCameraIcon,
    },
    { title: "Blogs", description: "Monitor your metrics", icon: PencilIcon },
    {
      title: "Pricing",
      description: "Measure B2B account health",
      icon: CurrencyDollarIcon,
    },
  ],
  [
    {
      title: "News/Product Updates",
      description: "Real-time analytics user trends",
      icon: MegaphoneIcon,
    },
    {
      title: "Case Studies",
      description: "Segments with perfect target",
      icon: BriefcaseIcon,
    },
    {
      title: "White Papers/Reports",
      description: "Surface hidden trends",
      icon: DocumentReportIcon,
    },
  ],
  [
    {
      title: "SoftPak vs Competitors",
      description: "Measure B2B account health",
      icon: ScaleIcon,
    },
  ],
];

const faqs = [
  "How to Build Fintech Software?",
  "What is the Future of Fintech Software Development?",
  "How Do I Find the Right Fintech Software Development Company?",
];

function ResourceItemRow({ item }: { item: ResourceItem }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="w-6 h-6 shrink-0">
        <Icon />
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

function ResourcesCategory() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div
        className={`${albertSans.className} font-semibold text-[12px] leading-[150%] tracking-[0.5px] uppercase text-[#9E9E9E]`}
      >
        Resources
      </div>
      <div className="flex flex-row w-full gap-10">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-5 flex-1">
            {col.map((item, j) => (
              <ResourceItemRow key={j} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqRow({ question }: { question: string }) {
  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <div className="w-6 h-6 shrink-0">
        <QuestionMarkCircleIcon />
      </div>
      <div
        className={`${albertSans.className} font-semibold text-[16px] leading-[150%] text-brand-dark flex-1`}
      >
        {question}
      </div>
      <div className="w-3 h-3 shrink-0">
        <ChevronRightIcon />
      </div>
    </div>
  );
}

function FaqCard() {
  return (
    <div className="px-8">
      <div className="relative w-full rounded-2xl bg-white overflow-visible px-5 py-6">
        {/* decorative graphic placeholder — swap in the exported swirl asset */}
        <div
          className="absolute -top-[65px] right-6 w-[292px] h-[292px] pointer-events-none select-none"
          aria-hidden
        >
          <FaqDecoration />
        </div>

        <div className="flex flex-row items-center justify-between">
          <div
            className={`${albertSans.className} font-semibold text-[12px] leading-[150%] tracking-[0.5px] uppercase text-[#9E9E9E]`}
          >
            FAQS
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-[567px] mt-4">
          {faqs.map((question) => (
            <FaqRow key={question} question={question} />
          ))}
        </div>

        <a
          href="/resources"
          className={`${albertSans.className} mt-[43.95px] flex items-center gap-[5px] font-medium text-[14px] leading-[150%] text-brand-orange`}
        >
          See all
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden
          />
        </a>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="relative w-[1050px]">
      {/* caret pointing up at the trigger */}
      <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10.16px] border-x-transparent border-b-[11.02px] border-b-brand-cardGray" />
      <div className="rounded-[18px] bg-brand-cardGray shadow-[0_24px_56px_0_rgba(167,174,186,0.16)] py-8 flex flex-col gap-10">
        <ResourcesCategory />
        <FaqCard />
      </div>
    </div>
  );
}
