import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    heading: "Solutions",
    links: [
      { label: "Enterprise Solutions", href: "/solutions/enterprise" },
      { label: "RIA Solutions", href: "/solutions/ria" },
      { label: "Custom Solutions", href: "/solutions/custom" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Urebal Hub", href: "/products/urebal-hub" },
      { label: "Urebal", href: "/products/urebal" },
      { label: "Scalax", href: "/products/scalax" },
      { label: "Mars", href: "/products/mars" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Expert Insights", href: "/resources/insights" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Publications", href: "/resources/publications" },
      { label: "Event Replays", href: "/resources/events" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Softpak", href: "/about" },
      { label: "In the News", href: "/about/news" },
      { label: "Press Releases", href: "/about/press" },
      { label: "Privacy", href: "/privacy" },
      { label: "Legal", href: "/legal" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-orange transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
        <path d={d} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="absolute w-full h-[658px] top-[8700px] left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="mx-auto max-w-canvas px-[72px]">
        <div className="border-t border-neutral-200 pt-12" />

        <div className="grid grid-cols-[300px_1fr_1fr_1fr_1fr] gap-8">
          {/* Left: logo + contact */}
          <div>
            <Image
              src="/images/logo.png"
              alt="SoftPak"
              width={154}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-6 text-[14px] text-brand-bodyText">
              info@softpak.com
            </p>
            <p className="mt-2 text-[14px] text-brand-bodyText leading-relaxed">
              35 Main Street Ste 5 Wayland,
              <br />
              MA 01778, USA
            </p>

            <div className="mt-10">
              <p className="text-[14px] font-semibold text-brand-dark mb-3">
                Follow
              </p>
              <div className="flex gap-3">
                <SocialIcon
                  label="YouTube"
                  d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C17 4 12 4 12 4s-5 0-8 .2c-.4.1-1.3.1-2.1 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.7.2 7.7.2s5 0 8-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM10 15V9l5 3-5 3z"
                />
                <SocialIcon
                  label="LinkedIn"
                  d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.04c.4-.75 1.4-1.55 2.86-1.55C18.6 9.65 19 11.4 19 13.5V19z"
                />
                <SocialIcon
                  label="Instagram"
                  d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm5.6-7.4a1 1 0 1 1-2.1 0 1 1 0 0 1 2.1 0z"
                />
                <SocialIcon
                  label="Discord"
                  d="M20.3 4.4A19 19 0 0 0 15.7 3l-.2.4c1.6.4 2.3.9 3.1 1.6-1.4-.7-2.8-1.4-5.6-1.4S8.8 4.3 7.4 5c.8-.7 1.7-1.3 3.1-1.6L10.3 3a19 19 0 0 0-4.6 1.4C2.4 9.5 1.6 14.4 2 19.2c1.6 1.2 3.3 1.9 4.9 2.4.4-.5.8-1.1 1.1-1.7-.6-.2-1.2-.5-1.7-.9.1-.1.3-.2.4-.3 3.4 1.6 7 1.6 10.4 0 .1.1.3.2.4.3-.5.4-1.1.7-1.7.9.3.6.7 1.2 1.1 1.7 1.6-.5 3.3-1.2 4.9-2.4.4-5.5-.7-10.4-1.5-14.8zM9 15.8c-1 0-1.9-1-1.9-2.1 0-1.2.8-2.2 1.9-2.2s2 1 1.9 2.2c0 1.1-.9 2.1-1.9 2.1zm6 0c-1 0-1.9-1-1.9-2.1 0-1.2.8-2.2 1.9-2.2s2 1 1.9 2.2c0 1.1-.9 2.1-1.9 2.1z"
                />
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[16px] font-semibold text-brand-dark mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-brand-bodyText hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big orange semicircle graphic at bottom */}
        <div className="relative mt-16 h-[180px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] rounded-full bg-brand-orange" />
        </div>

        <div className="relative z-10 py-6 text-center text-[13px] text-brand-bodyText">
          © 2026 Softpak. All rights reserved
        </div>
      </div>
    </footer>
  );
}
