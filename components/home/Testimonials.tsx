"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Rachael, UK",
    role: "Fintech Consultant",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Peter, Belgium",
    role: "CFO",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Keri, USA",
    role: "Financial Advisor",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
  },
  {
    quote: "Urebal platform is a game changer for our firm.",
    name: "Davide, London",
    role: "Fintech Consultant",
  },
];

const CARD_WIDTH = 336.6;
const CARD_GAP = 21.6;
const SLIDE_MS = 500;
const COUNT = testimonials.length;

// Render 3 laps of the deck back-to-back (prev lap / current lap / next lap)
// so the strip always has real cards to slide into on either side — that's
// what makes the leftmost and rightmost feel "attached" to each other instead
// of hitting a dead end.
const LAPS = 3;
const slots = Array.from({ length: COUNT * LAPS }, (_, slot) => ({
  slot,
  t: testimonials[slot % COUNT],
}));

// Reverse-engineered from the original hand-authored "V" arch offsets
// (0, 14.4, 28.8, 43.2, 28.8, 14.4, 0 ...) — offset shrinks by 14.4px per
// step away from the active card and floors at 0.
function archOffset(distance: number) {
  return Math.max(0, 43.2 - distance * 14.4);
}

function TestimonialCard({
  t,
  distance,
  isActive,
  instant,
  onClick,
}: {
  t: (typeof testimonials)[number];
  distance: number;
  isActive: boolean;
  instant: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive}
      style={{
        flex: `0 0 ${CARD_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        transform: `translateY(${archOffset(distance)}px)`,
        transitionDuration: instant ? "0ms" : `${SLIDE_MS}ms`,
      }}
      className={
        "text-left cursor-pointer bg-white rounded-[24px] p-8 h-[383.4px] flex flex-col justify-between shadow-sm border border-neutral-100 transition-[transform,opacity] ease-out " +
        (isActive ? "opacity-100" : "opacity-40")
      }
    >
      <div>
        <Image
          src="/icons/Vector (5).svg"
          alt=""
          width={42}
          height={34}
          className="mb-6"
        />
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
    </button>
  );
}

export default function Testimonials() {
  const [centerSlot, setCenterSlot] = useState(
    () => COUNT + Math.floor(COUNT / 2),
  );
  const [instant, setInstant] = useState(false);

  // Once we've slid into the prev/next lap, silently snap back into the
  // middle lap (same underlying card, so it's visually identical) with
  // transitions off for one frame — this is what lets sliding continue
  // forever in either direction instead of running out of laps.
  useEffect(() => {
    if (centerSlot >= COUNT && centerSlot < COUNT * 2) return;

    const timer = setTimeout(() => {
      setInstant(true);
      setCenterSlot((s) => (s < COUNT ? s + COUNT : s - COUNT));
    }, SLIDE_MS);
    return () => clearTimeout(timer);
  }, [centerSlot]);

  useEffect(() => {
    if (!instant) return;
    const raf = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  const centerOffset =
    centerSlot * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;

  return (
    <section className="relative w-full h-[923px] bg-brand-cardGray">
      <div className="mx-auto pt-[165px] max-w-canvas px-[72px]">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-brand-dark">
            Straight from our clients
          </h2>
          <p className="mt-3 text-[16px] text-brand-bodyText max-w-[600px] mx-auto">
            Our solutions speak volume. We have been privileged to serve a range
            of organizations and professionals in managing their portfolios.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="relative left-1/2 flex items-start h-[426.6px] ease-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${centerOffset}px)`,
            transitionProperty: "transform",
            transitionDuration: instant ? "0ms" : `${SLIDE_MS}ms`,
          }}
        >
          {slots.map(({ slot, t }) => (
            <TestimonialCard
              key={slot}
              t={t}
              distance={Math.abs(slot - centerSlot)}
              isActive={slot === centerSlot}
              instant={instant}
              onClick={() => setCenterSlot(slot)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
