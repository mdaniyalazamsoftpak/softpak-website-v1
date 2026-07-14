import React from "react";
import Card from "./Cards";
import Image from "next/image";

export default function CardsOverVideo() {
  return (
    <div className="mt-[500px] flex flex-col">
      <Card
        zIndex={1}
        title="Portfolio Rebalancing"
        description="30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms."
        buttonLabel="Learn more"
        imageSrc="/images/container-1.png"
        imageAlt="Rebalance status panel showing approved trades and pending approvals"
      />
      <Card
        zIndex={2}
        title="Risk Optimization"
        description="30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms."
        buttonLabel="Learn more"
        visual={
          <>
            <div className="absolute w-[445px] h-[264px] left-[749px] top-[30px] drop-shadow-[0px_4px_18px_rgba(0,0,0,0.08)]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/container-1-hero-top.png"
                  alt="Drifted accounts panel: 21 out of tolerance, 29 cash in"
                  fill
                  sizes="445px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute w-[445px] h-[174px] left-[749px] top-[324px] drop-shadow-[0px_4px_18px_rgba(0,0,0,0.08)]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/container-2-hero-bot.png"
                  alt="Assets under management panel: $45.2M, up 8.3% from last month"
                  fill
                  sizes="445px"
                  className="object-cover"
                />
              </div>
            </div>
          </>
        }
      />
      <Card
        zIndex={3}
        title="Activity Tracker"
        description="30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms."
        buttonLabel="Learn more"
        imageSrc="/images/container-3-1.png"
        imageAlt="Activity tracker panel"
      />
      <Card
        zIndex={4}
        title="Models"
        description="30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms."
        buttonLabel="Learn more"
        imageSrc="/images/container-4-1.png"
        imageAlt="Models panel"
      />
      <Card
        zIndex={9}
        title="Account Tracking"
        description="30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms."
        buttonLabel="Learn more"
        imageSrc="/images/container-5-1.png"
        imageAlt="Account tracking panel"
      />
    </div>
  );
}
