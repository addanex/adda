import HeroDisplay from "../components/hero-display";
import ServicesDisplay from "../components/services-display";
import TrustSection from "../components/trust-section";

export default function Home() {
  return (
    <div className="flex-1">
      <HeroDisplay />
      <ServicesDisplay />
      <TrustSection />
    </div>
  );
}
