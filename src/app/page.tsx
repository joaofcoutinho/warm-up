import CountdownBanner from "@/components/ui/CountdownBanner";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";
import Experience from "@/components/sections/Experience";
import Mentors from "@/components/sections/Mentors";
import WhyParticipate from "@/components/sections/WhyParticipate";
import Disruption from "@/components/sections/Disruption";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <CountdownBanner />
      <main>
        <Hero />
        <Ecosystem />
        <Experience />
        <Mentors />
        <WhyParticipate />
        <Disruption />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
