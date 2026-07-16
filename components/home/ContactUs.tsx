"use client";

import React from "react";
import { useState } from "react";
import { Albert_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "500"] });

/**
 * Dot world map — a stylized approximation of the SVG's stippled world map.
 * The Figma export uses ~2100 hand-placed dots which would balloon the bundle,
 * so we generate a similar visual with a repeating dot pattern clipped to
 * approximate continent shapes.
 */
function WorldMapBg() {
  return (
    <div className="absolute w-[1063.55px] h-[607.17px] top-[234.76px] left-[calc(50%-1063.55px/2)] opacity-100">
      <Image
        src={"/images/Vector.svg"}
        alt={"World Map"}
        fill
        className="object-coverS"
      />
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  as = "input",
  value,
  onChange,
}: {
  label?: string;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = React.useState(false);
  const floated = focused || value.length > 0;

  return (
    <label className="block relative">
      {/* Floating label */}
      <span
        className={`${albertSans.className} absolute left-[20px] bg-[#F9F9F9] px-[4px] pointer-events-none transition-all duration-200 text-[#6B6B6B] z-10
          ${
            floated
              ? "top-[-6px] text-[10px] leading-[100%]"
              : as === "textarea"
                ? "top-[16px] text-[15px] leading-[24px]"
                : "top-[20px] text-[15px] leading-[24px]"
          }`}
      >
        {label || placeholder}
      </span>

      {as === "textarea" ? (
        <textarea
          placeholder=""
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-[489px] h-[200px] bg-[#F9F9F9] border-2 border-[#A9A9A9] rounded-[20px] px-5 py-4 text-[15px] text-brand-dark focus:border-brand-orange focus:outline-none resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder=""
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-[489px] h-[64px] bg-[#F9F9F9] border-2 border-[#A9A9A9] rounded-[20px] px-5 py-4 text-[15px] text-brand-dark focus:border-brand-orange focus:outline-none"
        />
      )}
    </label>
  );
}

export default function ContactUs() {
  const [name, setName] = useState("Behzad Raza");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      className="absolute w-full h-[990px] top-[7710px] bg-[#F2F2F2] left-1/2 -translate-x-1/2"
    >
      <div className="w-[1440px] h-[990px]">
        <WorldMapBg />
        <h2
          className={`${albertSans.className} absolute w-[239px] h-[48px] left-[calc(50%-239px/2-0.95px)] top-[57px] font-medium text-[48px] leading-[48px] text-center tracking-[-1.09922px] text-[#0F0F0F]`}
        >
          Contact Us
        </h2>
        <p
          className={`${albertSans.className} absolute w-[672px] h-[50px] left-[calc(50%-672px/2-0.45px)] top-[121px] font-normal text-[18px] leading-[25px] text-center tracking-[-0.439453px] text-[#0F0F0F]/60`}
        >
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>

        <div className="absolute w-[489px] h-[545px] top-[279px] left-[calc(50%-489px/2)] opacity-100">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-[20px]"
          >
            <Field
              label="Full name"
              placeholder="Full name"
              value={name}
              onChange={setName}
            />
            <Field
              placeholder="Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <Field
              placeholder="Company Name"
              value={company}
              onChange={setCompany}
            />
            <Field
              placeholder="Short Message"
              as="textarea"
              value={message}
              onChange={setMessage}
            />
            <Link
              href="#"
              className="mt-[10px] flex flex-row justify-center items-center px-[35px] py-[20px] gap-[10px] w-[489px] h-[56px] bg-[#191A23] rounded-[14px]"
            >
              <span
                className={`${albertSans.className} w-[150px] h-[28px] font-normal text-[20px] leading-[28px] text-center text-white flex-none flex-grow-0`}
              >
                Connect with us
              </span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
