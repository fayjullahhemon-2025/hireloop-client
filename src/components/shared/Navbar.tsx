"use client";

import { LogOutIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { authClient, signOut, useSession } from "@/lib/auth-client";

const NAV_LINKS = [
  { label: "Browse Jobs", href: "#browse-jobs" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
];

const signInButtonClass =
  "text-violet-500 hover:bg-transparent hover:text-violet-400 dark:text-violet-400 dark:hover:text-violet-300";
const getStartedButtonClass = "bg-violet-600 text-white hover:bg-violet-500";

type SessionUser = {
  name: string;
  email: string;
  image?: string | null;
};

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

function getInitials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U"
  );
}

function UserMenu({
  user,
  closeMenu,
}: {
  user: SessionUser;
  closeMenu?: () => void;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    closeMenu?.();
    router.push("/");
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label="Open user menu"
            className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        }
      >
        <Avatar className="cursor-pointer">
          {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
          <AvatarFallback className="bg-violet-600 text-sm font-medium text-white">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="py-2">
            <div className="truncate text-sm font-medium text-foreground">
              {user.name}
            </div>
            <div className="truncate text-xs font-normal text-muted-foreground">
              {user.email}
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/profile" onClick={closeMenu} />}>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SessionPlaceholder() {
  return <div className="size-8 animate-pulse rounded-full bg-foreground/10" />;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, isPending } = useSession();

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
            {isPending ? (
              <SessionPlaceholder />
            ) : session?.user ? (
              <UserMenu user={session.user} />
            ) : (
              <>
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
              </>
            )}
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
              {isPending ? (
                <SessionPlaceholder />
              ) : session?.user ? (
                <UserMenu user={session.user} closeMenu={closeMobile} />
              ) : (
                <>
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
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
