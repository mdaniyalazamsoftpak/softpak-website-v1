import { albertSans } from "@/lib/fonts";

const stats = [
  {
    value: "248%",
    label: "ROI Increase",
    labelWidth: "w-[90px]",
    labelLeft: "left-[93.13px]",
  },
  {
    value: "130K+",
    label: "Transactions Daily",
    labelWidth: "w-[129px]",
    labelLeft: "left-[73.76px]",
  },
  {
    value: "50+",
    label: "Enterprise Clients",
    labelWidth: "w-[126px]",
    labelLeft: "left-[74.94px]",
  },
  {
    value: "30+",
    label: "Years of Excellence",
    labelWidth: "w-[138px]",
    labelLeft: "left-[68.85px]",
  },
];

type Stat = (typeof stats)[number];

function StatCard({ value, label, labelWidth, labelLeft }: Stat) {
  return (
    <div className="w-[274px] h-[104px] flex flex-col gap-[8px]">
      <div className="relative w-[274px] h-[72px] flex-none self-stretch">
        <div
          className={`${albertSans.className} absolute w-[194px] h-[72px] left-[40.64px] top-[0.5px] font-medium text-[76px] leading-[72px] tracking-[-3px] text-center text-brand-orangeAlt`}
        >
          {value}
        </div>
      </div>
      <div className="relative w-[274px] h-[24px] flex-none self-stretch">
        <div
          className={`${albertSans.className} absolute ${labelWidth} ${labelLeft} h-[24px] top-[-0.5px] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] text-center text-[#444444]/60`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full flex bg-transparent">
      <div className="relative mx-auto mt-[8px] w-[1440px] h-[252px] flex flex-col items-start gap-[48px] px-[124px] pt-[80px]">
        <div className="grid grid-cols-4 gap-[32px] w-[1192px] h-[104px] flex-none self-stretch">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
