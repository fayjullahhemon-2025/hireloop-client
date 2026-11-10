import {
  BriefcaseIcon,
  BuildingIcon,
  MapPinIcon,
  SearchIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TRENDING_POSITIONS = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const STATS = [
  { icon: UserIcon, value: "50K", label: "Active Jobs" },
  { icon: BuildingIcon, value: "12K", label: "Companies" },
  { icon: SearchIcon, value: "2M", label: "Job Seekers" },
  { icon: TrendingUpIcon, value: "97%", label: "Satisfaction Rate" },
];

const searchButtonClass =
  "h-9 w-full rounded-lg bg-violet-600 hover:bg-violet-500 sm:size-9 sm:w-9";

const trendingPillClass =
  "rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-white/80 transition-colors hover:border-white/20 hover:bg-white/10";

const statCardClass =
  "w-full rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.07] via-transparent to-transparent p-3.5 text-left sm:p-4";

function BadgeFlank({ side }: { side: "left" | "right" }) {
  return (
    <span aria-hidden="true" className="hidden items-center gap-1 sm:flex">
      {side === "left" && <span className="h-px w-6 bg-white/15" />}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-2 w-px bg-white/20 ${
            side === "left" ? "rotate-[-30deg]" : "rotate-[30deg]"
          }`}
        />
      ))}
      {side === "right" && <span className="h-px w-6 bg-white/15" />}
    </span>
  );
}

function GlobeBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 w-[140%] max-w-none -translate-x-1/2 translate-y-[34%] select-none sm:w-[86%] sm:max-w-6xl"
    >
      <div
        className="absolute top-[18%] left-1/2 h-[32%] w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,92,252,0.4),transparent)] blur-2xl"
      />
      <Image
        src="/images/globe.png"
        alt=""
        width={1440}
        height={1882}
        draggable={false}
        className="relative block w-full"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] w-full flex-col overflow-hidden bg-[#131316]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:110px_80px] opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 30% at 50% 62%, rgba(124, 92, 252, 0.12), transparent 70%), radial-gradient(30% 25% at 0% 58%, rgba(124, 92, 252, 0.1), transparent 70%), radial-gradient(30% 25% at 100% 58%, rgba(124, 92, 252, 0.1), transparent 70%)",
        }}
      />
      <GlobeBackdrop />

      <div className="relative mx-auto flex w-full flex-1 flex-col items-center px-4 pt-10 pb-6 text-center sm:pt-14 lg:px-8">
        <div className="flex items-center gap-2.5">
          <BadgeFlank side="left" />
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
            <BriefcaseIcon className="size-3.5 text-orange-400" />
            <span className="text-[11px] font-semibold text-white">
              50,000+
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-white/45 uppercase">
              New jobs this month
            </span>
          </span>
          <BadgeFlank side="right" />
        </div>

        <h1 className="mt-4 text-[26px] font-semibold tracking-tight text-white sm:mt-5 sm:text-3xl lg:text-4xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-3 max-w-[32rem] text-xs leading-relaxed text-white/60 sm:text-sm">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          action="/"
          className="mt-6 flex w-full max-w-lg flex-col gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm sm:mt-7 sm:flex-row sm:items-center sm:gap-0"
        >
          <label className="flex h-9 flex-1 items-center gap-2 px-2.5">
            <SearchIcon className="size-3.5 shrink-0 text-white/40" />
            <input
              type="search"
              name="q"
              placeholder="Job title, skill or company"
              className="h-full w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
            />
          </label>
          <span aria-hidden="true" className="mx-2 hidden h-5 w-px bg-white/10 sm:block" />
          <label className="flex h-9 flex-1 items-center gap-2 px-2.5">
            <MapPinIcon className="size-3.5 shrink-0 text-white/40" />
            <input
              type="search"
              name="location"
              placeholder="Location or Remote"
              className="h-full w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
            />
          </label>
          <Button
            type="submit"
            aria-label="Search jobs"
            className={searchButtonClass}
          >
            <SearchIcon />
          </Button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          <span className="mr-1 text-xs text-white/50">
            Trending Position
          </span>
          {TRENDING_POSITIONS.map((position) => (
            <a
              key={position}
              href="/"
              className={trendingPillClass}
            >
              {position}
            </a>
          ))}
        </div>

        <div className="relative flex w-full flex-1 flex-col items-center justify-end">
          <p className="mb-5 max-w-[24rem] text-balance text-base font-semibold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:mb-6 sm:text-lg lg:text-xl">
            Assisting over 15,000 job seekers find their dream positions.
          </p>
          <div className="grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className={statCardClass}>
                <stat.icon className="size-3.5 text-white/60" />
                <div className="mt-5 text-xl font-semibold tracking-tight text-white sm:mt-7 sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[10px] text-white/40 sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
