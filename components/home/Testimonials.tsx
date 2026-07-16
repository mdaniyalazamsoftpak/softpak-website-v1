import Image from "next/image";

const testimonials = [
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
    faded: true,
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Rachael, UK",
    role: "Fintech Consultant",
    faded: true,
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Peter, Belgium",
    role: "CFO",
    faded: false,
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Keri, USA",
    role: "Financial Advisor",
    faded: true,
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
    faded: true,
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div
      className={
        "bg-white rounded-2xl p-8 min-h-[280px] flex flex-col justify-between shadow-sm border border-neutral-100 transition-opacity " +
        (t.faded ? "opacity-40" : "opacity-100")
      }
    >
      <div>
        <svg
          width="42"
          height="34"
          viewBox="0 0 42 34"
          fill={t.faded ? "#F5B7A0" : "#F05A24"}
          className="mb-6"
        >
          <path d="M0 22C0 12 6 3 16 0L18 4C11 6 7 12 7 18H15V34H0V22ZM24 22C24 12 30 3 40 0L42 4C35 6 31 12 31 18H39V34H24V22Z" />
        </svg>
        <p className="text-[20px] font-medium text-brand-dark leading-snug">
          {t.quote}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div>
          <div className="text-[14px] font-medium text-brand-dark">
            {t.name}
          </div>
          <div className="text-[13px] text-brand-bodyText">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="absolute w-full h-[923px] top-[6787px] bg-[#F2F2F2] left-1/2 -translate-x-1/2">
      <div className="mx-auto mt-[165px] max-w-canvas px-[72px]">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-brand-dark">
            Straight from our clients
          </h2>
          <p className="mt-3 text-[16px] text-brand-bodyText max-w-[600px] mx-auto">
            Our solutions speak volume. We have been privileged to serve a range
            of organizations and professionals in managing their portfolios.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-3 h-[426.6px]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
