import {
  ArrowRightIcon,
  BriefcaseIcon,
  EuroIcon,
  MapPinIcon,
} from "lucide-react";

const JOBS = Array.from({ length: 6 }, (_, id) => ({
  id,
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting iniatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25 - €40/hour",
}));

const badgeClass =
  "flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/70";

const cardClass =
  "flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-5";

function FeaturedJobs() {
  return (
    <section className="relative w-full bg-[#131316] px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-violet-400 uppercase">
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
            Smart Job Discovery
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
          </span>
          <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <article key={job.id} className={cardClass}>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {job.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                {job.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                <span className={badgeClass}>
                  <MapPinIcon className="size-3 text-violet-400" />
                  {job.location}
                </span>
                <span className={badgeClass}>
                  <BriefcaseIcon className="size-3 text-violet-400" />
                  {job.type}
                </span>
              </div>
              <div className="mt-1.5 flex">
                <span className={badgeClass}>
                  <EuroIcon className="size-3 text-violet-400" />
                  {job.salary}
                </span>
              </div>

              <a
                href="/"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white transition-colors hover:text-violet-300"
              >
                Apply Now
                <ArrowRightIcon className="size-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="/"
            className="inline-flex h-10 items-center rounded-lg bg-white px-5 text-sm font-medium text-[#131316] transition-colors hover:bg-white/90"
          >
            View all job open
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
