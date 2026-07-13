"use client";

import { useState } from "react";

/**
 * Dot world map — a stylized approximation of the SVG's stippled world map.
 * The Figma export uses ~2100 hand-placed dots which would balloon the bundle,
 * so we generate a similar visual with a repeating dot pattern clipped to
 * approximate continent shapes.
 */
function WorldMapBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 1200 500"
        className="w-full max-w-[1200px] opacity-60"
        aria-hidden
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="1.6" fill="#DADADA" />
          </pattern>
          <mask id="continents">
            {/* very rough continent silhouettes */}
            <rect width="1200" height="500" fill="black" />
            {/* North America */}
            <ellipse cx="230" cy="200" rx="150" ry="90" fill="white" />
            <ellipse cx="260" cy="290" rx="60" ry="60" fill="white" />
            {/* South America */}
            <ellipse cx="330" cy="380" rx="55" ry="90" fill="white" />
            {/* Europe */}
            <ellipse cx="600" cy="180" rx="80" ry="55" fill="white" />
            {/* Africa */}
            <ellipse cx="640" cy="310" rx="90" ry="110" fill="white" />
            {/* Asia */}
            <ellipse cx="850" cy="200" rx="180" ry="90" fill="white" />
            <ellipse cx="920" cy="280" rx="70" ry="45" fill="white" />
            {/* Australia */}
            <ellipse cx="1000" cy="380" rx="70" ry="40" fill="white" />
          </mask>
        </defs>
        <rect
          width="1200"
          height="500"
          fill="url(#dots)"
          mask="url(#continents)"
        />
        {/* Orange location pins */}
        {[
          [230, 200],
          [330, 380],
          [600, 180],
          [640, 310],
          [850, 200],
          [1000, 380],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#F05A24" />
        ))}
      </svg>
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
  const hasLabel = Boolean(label);
  return (
    <label className="block relative">
      {hasLabel && (
        <span className="absolute -top-2 left-4 bg-white px-2 text-[12px] text-brand-orange font-medium">
          {label}
        </span>
      )}
      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-neutral-200 px-5 py-4 text-[15px] text-brand-dark placeholder-brand-bodyText focus:border-brand-orange focus:outline-none min-h-[140px] resize-none bg-white"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-neutral-200 px-5 py-4 text-[15px] text-brand-dark placeholder-brand-bodyText focus:border-brand-orange focus:outline-none bg-white"
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
      <WorldMapBg />

      <div className="relative mx-auto max-w-canvas px-[72px]">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-brand-dark">Contact Us</h2>
          <p className="mt-3 text-[16px] text-brand-bodyText max-w-[560px] mx-auto">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-[560px] mx-auto space-y-5"
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

          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-dark py-4 text-white font-medium hover:bg-black transition-colors"
          >
            Connect with us
          </button>
        </form>
      </div>
    </section>
  );
}
