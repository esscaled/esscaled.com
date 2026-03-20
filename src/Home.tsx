import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import RoiCalculator from "./components/RoiCalculator";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-white selection:bg-white/30">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <RoiCalculator />
        <Services />
        <HowItWorks />
        <About />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
