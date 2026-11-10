"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Browse Jobs", href: "#browse-jobs" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
];

const signInButtonClass =
  "text-violet-500 hover:bg-transparent hover:text-violet-400 dark:text-violet-400 dark:hover:text-violet-300";
const getStartedButtonClass = "bg-violet-600 text-white hover:bg-violet-500";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center"
      aria-label="HireLoop home"
    >
      <Image
        src="/images/logo.png"
        alt="HireLoop"
        width={154}
        height={44}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xs supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-between gap-8">
          <Logo />
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="mr-2 hidden h-5 w-px bg-border md:block"
          />
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="ghost"
              render={<Link href="/sign-in" />}
              className={signInButtonClass}
            >
              Sign In
            </Button>
            <Button
              render={<Link href="/sign-up" />}
              className={getStartedButtonClass}
            >
              Get Started
            </Button>
          </div>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="flex h-full w-72 gap-0"
          >
            <div className="flex h-16 items-center border-b border-border px-4">
              <Logo onClick={closeMobile} />
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobile}
                className="ml-auto"
                aria-label="Close menu"
              >
                <XIcon />
              </Button>
            </div>
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1 px-4 py-4"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} onClick={closeMobile} />
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
              <Button
                variant="ghost"
                render={<Link href="/sign-in" />}
                onClick={closeMobile}
                className={signInButtonClass}
              >
                Sign In
              </Button>
              <Button
                render={<Link href="/sign-up" />}
                onClick={closeMobile}
                className={getStartedButtonClass}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
