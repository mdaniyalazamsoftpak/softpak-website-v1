import Link from "next/link";

export default function PortfolioRebalancing() {
  return (
    <section className="w-full bg-brand-darker py-24">
      <div className="mx-auto max-w-canvas px-[72px]">
        <div className="bg-brand-cardGray rounded-3xl p-12 grid grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h2 className="text-h2 font-bold text-brand-dark leading-tight">
              Portfolio Rebalancing
            </h2>
            <p className="mt-6 text-[16px] text-brand-bodyText leading-relaxed max-w-[420px]">
              30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms.
            </p>
            <Link
              href="/products/urebal"
              className="mt-8 inline-flex items-center rounded-full bg-brand-orange px-7 py-3.5 text-white font-medium hover:bg-brand-orangeAlt transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Right: mock dashboard cards */}
          <div className="relative h-[380px]">
            {/* Pending Approval card (top, dark) */}
            <div className="absolute top-0 right-0 bg-brand-dark text-white rounded-xl p-4 w-[280px]">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-neutral-400">Pending Approval</span>
                <span className="text-neutral-400">•</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[26px] font-bold">$153.2M</span>
                <span className="text-[13px] text-brand-orange">91.6%</span>
              </div>
            </div>

            {/* Rebalance Status (mid, with donut) */}
            <div className="absolute top-[110px] right-0 bg-white rounded-xl p-4 w-[280px] shadow-lg">
              <div className="flex items-center gap-4">
                {/* Donut */}
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#DADADA" strokeWidth="3.5" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9"
                      fill="none"
                      stroke="#F05A24"
                      strokeWidth="3.5"
                      strokeDasharray="8.5 100"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] text-brand-bodyText">Approved</div>
                  <div className="text-[22px] font-bold text-brand-orange">$14.1M</div>
                  <div className="text-[11px] text-brand-bodyText">of $167.3M</div>
                </div>
              </div>
            </div>

            {/* Approved Trades (bottom, orange) */}
            <div className="absolute bottom-0 right-0 bg-brand-orange text-white rounded-xl p-4 w-[280px]">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-white/80">Approved Trades</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="3 17 9 11 13 15 21 7" />
                </svg>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[26px] font-bold">$14.1M</span>
                <span className="text-[13px]">+8.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
