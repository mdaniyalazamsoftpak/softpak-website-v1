import type { ReactNode } from "react";

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F05A24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      {children}
    </svg>
  );
}

export function LocationMarkerIcon() {
  return (
    <IconBase>
      <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" />
      <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    </IconBase>
  );
}

export function CreditCardIcon() {
  return (
    <IconBase>
      <path d="M3 10h18" />
      <path d="M7 15h1m4 0h1" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </IconBase>
  );
}

export function ClockIcon() {
  return (
    <IconBase>
      <path d="M12 8v4l3 3" />
      <circle cx="12" cy="12" r="9" />
    </IconBase>
  );
}

export function ChartBarIcon() {
  return (
    <IconBase>
      <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0h6m4 0h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
    </IconBase>
  );
}

export function DocumentIcon() {
  return (
    <IconBase>
      <path d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
      <path d="M13 3v6h6" />
    </IconBase>
  );
}

export function DocumentDuplicateIcon() {
  return (
    <IconBase>
      <path d="M8 7v8a2 2 0 0 0 2 2h6M8 7V5a2 2 0 0 1 2-2h4.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V15a2 2 0 0 1-2 2h-2" />
      <path d="M8 7H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
    </IconBase>
  );
}

export function UserGroupIcon() {
  return (
    <IconBase>
      <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </IconBase>
  );
}

export function ViewGridIcon() {
  return (
    <IconBase>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </IconBase>
  );
}

export function DesktopComputerIcon() {
  return (
    <IconBase>
      <path d="M9 17v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1m-6 0h6m-6 0H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4" />
    </IconBase>
  );
}

export function ChipIcon() {
  return (
    <IconBase>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2" />
    </IconBase>
  );
}

export function TerminalIcon() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 9l3 3-3 3M13 15h3" />
    </IconBase>
  );
}

export function CubeIcon() {
  return (
    <IconBase>
      <path d="M20 7 12 3 4 7m16 0-8 4M4 7l8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </IconBase>
  );
}
