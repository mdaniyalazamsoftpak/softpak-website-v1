import type { ReactNode } from "react";

function IconBase({
  children,
  stroke = "#F05A24",
  className = "w-6 h-6",
}: {
  children: ReactNode;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function GlobeAltIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
      <path d="M12 3c2.5 0 4.5 4 4.5 9s-2 9-4.5 9-4.5-4-4.5-9 2-9 4.5-9Z" />
    </IconBase>
  );
}

export function LightBulbIcon() {
  return (
    <IconBase>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4-2.5 5.5-.5.8-.8 1.5-.8 2.5h-5.4c0-1-.3-1.7-.8-2.5C7.5 13 6 11.5 6 9a6 6 0 0 1 6-6Z" />
    </IconBase>
  );
}

export function ChevronRightIcon() {
  return (
    <IconBase stroke="#97A3B7" className="w-3 h-3">
      <path d="M9 5l7 7-7 7" />
    </IconBase>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.9" />
      <path d="M20 16.5v15l12-7.5-12-7.5Z" fill="#F05A24" />
    </svg>
  );
}
