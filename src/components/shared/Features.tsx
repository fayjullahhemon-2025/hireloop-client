import {
  BookmarkIcon,
  BuildingIcon,
  ChartLineIcon,
  CircleIcon,
  FileTextIcon,
  SearchIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "lucide-react";

const FEATURES = [
  {
    id: "smart-search",
    icon: SearchIcon,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    id: "salary-insights",
    icon: ChartLineIcon,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    id: "top-companies",
    icon: BuildingIcon,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    id: "saved-jobs",
    icon: BookmarkIcon,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    id: "one-click-apply",
    icon: SparklesIcon,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    id: "resume-builder",
    icon: FileTextIcon,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    id: "skill-based-matching",
    icon: CircleIcon,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    id: "career-growth-resources",
    icon: TrendingUpIcon,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

const itemClass = "flex items-start gap-3";

const iconTileClass =
  "flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]";

function Features() {
  return (
    <section className="relative w-full bg-[#131316] px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-violet-400 uppercase">
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
            Features Job
            <span aria-hidden="true" className="size-1.5 bg-violet-500" />
          </span>
          <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.id} className={itemClass}>
              <span className={iconTileClass}>
                <feature.icon className="size-4 text-violet-400" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
