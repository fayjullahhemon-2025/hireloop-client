import Link from "next/link";

function CtaBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#131316] px-4 pt-24 pb-16 sm:pt-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[160%] max-w-none -translate-x-1/2 translate-y-[55%] rounded-[100%] sm:h-[520px] sm:w-[120%] lg:w-[86%]"
        style={{
          background:
            "radial-gradient(closest-side at 50% 22%, rgba(124,92,252,0.75), rgba(124,92,252,0.25) 45%, rgba(124,92,252,0.05) 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[440px] w-[160%] max-w-none -translate-x-1/2 translate-y-[55%] rounded-[100%] opacity-40 sm:h-[540px] sm:w-[120%] lg:w-[86%]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.22) 0 1px, transparent 1px 64px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.22) 0 1px, transparent 1px 64px)",
          maskImage:
            "radial-gradient(closest-side at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Your next role is
          <br />
          already looking for you
        </h2>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/sign-up"
            className="inline-flex h-10 items-center rounded-lg bg-white px-5 text-sm font-medium text-[#131316] transition-colors hover:bg-white/90"
          >
            Create a free account
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex h-10 items-center rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
