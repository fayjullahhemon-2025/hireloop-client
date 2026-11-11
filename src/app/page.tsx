import CtaBanner from "@/components/shared/CtaBanner";
import FeaturedJobs from "@/components/shared/FeaturedJobs";
import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Pricing from "@/components/shared/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <Features />
      <Pricing />
      <CtaBanner />
    </>
  );
}
