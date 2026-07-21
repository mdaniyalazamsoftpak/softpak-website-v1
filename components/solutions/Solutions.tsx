import type { ComponentType } from "react";
import { albertSans } from "@/lib/fonts";
import {
  LocationMarkerIcon,
  CreditCardIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  ViewGridIcon,
  DesktopComputerIcon,
  ChipIcon,
  TerminalIcon,
  CubeIcon,
} from "@/components/solutions/icons";

type SolutionItem = {
  title: string;
  description: string;
  icon: ComponentType;
};

type SolutionCategory = {
  title: string;
  columns: SolutionItem[][];
};

const categories: SolutionCategory[] = [
  {
    title: "RIA Solutions",
    columns: [
      [
        {
          title: "Universal Rebalancer and Trading",
          description: "Learn about your users",
          icon: LocationMarkerIcon,
        },
        {
          title: "Client Billing",
          description: "Monitor your metrics",
          icon: CreditCardIcon,
        },
        {
          title: "Portfolio Reporting",
          description: "Measure B2B account health",
          icon: ClockIcon,
        },
      ],
      [
        {
          title: "Portfolio Performance Analytics",
          description: "Real-time analytics user trends",
          icon: ChartBarIcon,
        },
        {
          title: "Document Management",
          description: "Segments with perfect target",
          icon: DocumentIcon,
        },
        {
          title: "Proposal Generator",
          description: "Surface hidden trends",
          icon: DocumentDuplicateIcon,
        },
      ],
      [
        {
          title: "Investor Portal",
          description: "Measure B2B account health",
          icon: UserGroupIcon,
        },
        {
          title: "UREBAL HUB",
          description: "Surface hidden trends",
          icon: ViewGridIcon,
        },
      ],
    ],
  },
  {
    title: "Enterprise Solutions",
    columns: [
      [
        {
          title: "Scalax",
          description: "Learn about your users",
          icon: DesktopComputerIcon,
        },
      ],
      [
        {
          title: "Managed Account Rebalancing Systems (MARS)",
          description: "Real-time analytics user trends",
          icon: ChipIcon,
        },
      ],
      [
        {
          title: "Staff Augmentation",
          description: "Monitor your metrics",
          icon: UserGroupIcon,
        },
      ],
    ],
  },
  {
    title: "Custom Software Solutions",
    columns: [
      [
        {
          title: "Engineering/QA",
          description: "Learn about your users",
          icon: TerminalIcon,
        },
      ],
      [
        {
          title: "Fintech Software Development",
          description: "Real-time analytics user trends",
          icon: ChipIcon,
        },
      ],
      [
        {
          title: "Custom Integrations",
          description: "Monitor your metrics",
          icon: CubeIcon,
        },
      ],
    ],
  },
];

function SolutionItemRow({ item }: { item: SolutionItem }) {
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

function CategorySection({ category }: { category: SolutionCategory }) {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div
        className={`${albertSans.className} font-semibold text-[12px] leading-[150%] tracking-[0.5px] uppercase text-[#9E9E9E]`}
      >
        {category.title}
      </div>
      <div className="flex flex-row w-full gap-10">
        {category.columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-5 flex-1">
            {col.map((item, j) => (
              <SolutionItemRow key={j} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="relative w-[1050px]">
      {/* caret pointing up at the trigger */}
      <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10.16px] border-x-transparent border-b-[11.02px] border-b-brand-cardGray" />
      <div className="rounded-[18px] bg-brand-cardGray shadow-[0_24px_56px_0_rgba(167,174,186,0.16)] py-8 flex flex-col gap-10">
        {categories.map((category) => (
          <CategorySection key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}
