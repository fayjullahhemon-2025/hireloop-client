"use client";

import { BarChart3Icon, CrownIcon, PlusIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "starter",
    icon: CrownIcon,
    name: "Starter",
    price: 0,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: false,
  },
  {
    id: "growth",
    icon: BarChart3Icon,
    name: "Growth",
    price: 17,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    icon: ZapIcon,
    name: "Premium",
    price: 99,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    highlighted: false,
  },
];

const cardClass = (highlighted: boolean) =>
  cn(
    "flex flex-col rounded-2xl border p-5 sm:p-6",
    highlighted
      ? "border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_0_40px_rgba(124,92,252,0.15)]"
      : "border-white/[0.08] bg-white/[0.02]",
  );

const featureItemClass = "flex items-center gap-2 text-xs text-white/60";

const plusIconClass =
  "flex size-4 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]";

function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      id="pricing"
      className="relative w-full bg-[#131316] px-4 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-violet-400 uppercase">
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
            Pricing
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
          </span>
          <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Pay for the leverage, not the listings
          </h2>

          <div className="mt-6 flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                billing === "monthly"
                  ? "bg-white text-[#131316]"
                  : "text-white/60 hover:text-white",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                billing === "yearly"
                  ? "bg-white text-[#131316]"
                  : "text-white/60 hover:text-white",
              )}
            >
              Yearly
              <span className="rounded-full bg-fuchsia-500 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price =
              billing === "yearly" ? Math.ceil(plan.price * 0.75) : plan.price;
            return (
              <article key={plan.id} className={cardClass(plan.highlighted)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-lg border",
                        plan.highlighted
                          ? "border-fuchsia-400/30 bg-fuchsia-500/10"
                          : "border-white/[0.08] bg-white/[0.04]",
                      )}
                    >
                      <plan.icon
                        className={cn(
                          "size-4",
                          plan.highlighted
                            ? "text-fuchsia-400"
                            : "text-violet-400",
                        )}
                      />
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold tracking-tight text-white">
                      ${price}
                    </span>
                    <span className="text-[10px] text-white/40">/month</span>
                  </div>
                </div>

                <p className="mt-5 text-xs font-medium text-white/80">
                  Start building your insights hub:
                </p>
                <ul className="mt-2.5 flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className={featureItemClass}>
                      <span className={plusIconClass}>
                        <PlusIcon className="size-2.5 text-white/60" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    "mt-6 flex h-10 w-full items-center justify-between rounded-lg px-4 text-xs font-medium transition-colors",
                    plan.highlighted
                      ? "bg-white text-[#131316] hover:bg-white/90"
                      : "border border-white/[0.08] bg-white/[0.04] text-white hover:bg-white/[0.08]",
                  )}
                >
                  Choose This Plan
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
