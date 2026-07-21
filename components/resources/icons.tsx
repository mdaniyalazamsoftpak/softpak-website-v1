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

export function VideoCameraIcon() {
  return (
    <IconBase>
      <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
      <rect x="3" y="6" width="12" height="12" rx="2" />
    </IconBase>
  );
}

export function PencilIcon() {
  return (
    <IconBase>
      <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" />
      <path d="M17.586 3.586a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z" />
    </IconBase>
  );
}

export function CurrencyDollarIcon() {
  return (
    <IconBase>
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.11 0-2.08.402-2.599 1" />
      <circle cx="12" cy="12" r="9" />
    </IconBase>
  );
}

export function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15" />
      <path d="M18 13a3 3 0 1 0 0-6" />
      <path d="M5.436 13.683A4.001 4.001 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 0 1-1.564-.317Z" />
    </IconBase>
  );
}

export function BriefcaseIcon() {
  return (
    <IconBase>
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12a23.93 23.93 0 0 0 18 0" />
    </IconBase>
  );
}

export function DocumentReportIcon() {
  return (
    <IconBase>
      <path d="M9 17v-2m3 2v-4m3 4v-6" />
      <path d="M9 21h9a2 2 0 0 0 2-2V7.414a1 1 0 0 0-.293-.707l-4.414-4.414A1 1 0 0 0 14.586 2H9a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2Z" />
    </IconBase>
  );
}

export function ScaleIcon() {
  return (
    <IconBase>
      <path d="M12 3v17M9 20h6" />
      <path d="M3 7l6-2 6 2M18 7l3-1" />
      <path d="M6 7l-3 8a4.5 4.5 0 0 0 6 0Z" />
      <path d="M18 7l3 8a4.5 4.5 0 0 1-6 0Z" />
    </IconBase>
  );
}

export function QuestionMarkCircleIcon() {
  return (
    <IconBase>
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093" />
      <path d="M12 17h.01" />
      <circle cx="12" cy="12" r="9" />
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

/* Placeholder decorative graphic — swap for the exported swirl asset. */
export function FaqDecoration() {
  return (
    <svg viewBox="0 0 292 292" fill="none" className="w-full h-full">
      <circle cx="146" cy="146" r="130" fill="#FFF3EF" />
      <circle cx="180" cy="110" r="80" fill="#FFEEE7" />
      <circle cx="150" cy="150" r="45" stroke="#F05A24" strokeWidth="2" />
      <circle cx="150" cy="150" r="70" stroke="#F05A24" strokeWidth="2" strokeDasharray="6 8" />
    </svg>
  );
}
