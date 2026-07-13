"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { key: "rebalancing", title: "Portfolio Rebalancing", image: "/images/container-1.png", href: "/solutions/rebalancing",
    description: "Intelligent drift detection and automated rebalancing workflows trusted by RIAs and enterprise wealth managers." },
  { key: "risk", title: "Risk Optimization", image: "/images/container-3-1.png", href: "/solutions/risk",
    description: "Advanced analytics and real-time risk insights, empowering investment managers to identify and manage risk at every level." },
  { key: "activity", title: "Activity Tracker", image: "/images/container-4-1.png", href: "/solutions/activity",
    description: "A live audit trail of every portfolio event — rebalances, model updates, account changes — in one unified timeline." },
  { key: "models", title: "Models", image: "/images/container-5-1.png", href: "/solutions/models",
    description: "Build, manage, and distribute investment models at scale with full version control and performance attribution." },
  { key: "accounts", title: "Account Tracking", image: "/images/container-1-hero-top.png", href: "/solutions/accounts",
    description: "Real-time account monitoring with household aggregation, cash flow tracking, and compliance reporting built in." },
];

export default function InfrastructureBanner() {
  const [active, setActive] = useState(products[0].key);
  const activeProduct = products.find((p) => p.key === active)!;

  return (
    <section className="w-full bg-brand-darker relative overflow-hidden">
      <video autoPlay loop muted playsInline aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
        <source src="/videos/circuit-loop.mp4" type="video/mp4" />
      </video>

      <div className="relative mx-auto max-w-canvas px-[72px] py-20">
        <div className="text-center mb-16">
          <h2 className="text-[44px] font-bold text-white leading-tight max-w-[760px] mx-auto">
            We build critical software infrastructure{" "}
            <span className="text-brand-orange">powering modern wealth management.</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {products.map((p) => (
            <button key={p.key} onClick={() => setActive(p.key)}
              className={"px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors " +
                (active === p.key ? "bg-brand-orange text-white" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white")}>
              {p.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_480px] gap-12 items-center">
          <div>
            <h3 className="text-[36px] font-bold text-white leading-tight mb-5">{activeProduct.title}</h3>
            <p className="text-[17px] text-white/75 leading-relaxed max-w-[460px]">{activeProduct.description}</p>
            <Link href={activeProduct.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-7 py-3.5 font-medium hover:bg-neutral-100 transition-colors">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[481/420] bg-brand-dark/50">
            <Image src={activeProduct.image} alt={activeProduct.title} fill className="object-cover object-top" sizes="480px" />
          </div>
        </div>
      </div>
    </section>
  );
}
