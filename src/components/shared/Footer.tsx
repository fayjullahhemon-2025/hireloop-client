import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    id: "product",
    title: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    id: "navigations",
    title: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    id: "resources",
    title: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
];

const SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    id: "instagram",
    label: "Instagram",
    path: "M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm-4 12.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Zm4.8-8.3a.9.9 0 1 1 .9-.9.9.9 0 0 1-.9.9Z",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    path: "M6.5 8.5H4V20h2.5ZM5.2 3.5A1.7 1.7 0 1 0 5.2 7a1.7 1.7 0 0 0 0-3.5ZM20 13.3c0-3-1.6-4.9-4.2-4.9a3.6 3.6 0 0 0-3.1 1.6V8.5H10V20h2.7v-5.7c0-1.5.7-2.4 2-2.4s1.9.9 1.9 2.4V20H20Z",
  },
];

const linkClass =
  "text-xs text-white/50 transition-colors hover:text-white sm:text-sm";

function Footer() {
  return (
    <footer className="w-full bg-[#0d0d10] px-4 pt-14 pb-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Image
              src="/images/logo.png"
              alt="HireLoop"
              width={96}
              height={24}
              className="h-6 w-auto"
            />
            <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-14 lg:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.id}>
                <h3 className="text-xs font-semibold text-white sm:text-sm">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/" className={linkClass}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href="/"
                aria-label={social.label}
                className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <span className="sr-only">{social.label}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-3.5"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className={linkClass}>Copyright 2024 – Programming Hero</span>
            <span className={linkClass}>
              Terms &amp; Policy · Privacy Guideline
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
