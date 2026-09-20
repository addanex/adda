import Approach from "../components/approach";
import BuildingSoftware from "../components/build-software";
import CaseStudies from "../components/case-study";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HireCTA from "../components/hire-cta";
import HowItWorks from "../components/how-it-works";
import Partners from "../components/partners";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Trust from "../components/trust-section";

export default function Home() {
  return (
    <div className="flex-1 space-y-24">
      <Hero />
      <Services />
      <Trust />
      <Partners />
      <Testimonials />
      <CaseStudies />
      <BuildingSoftware />
      <Approach />
      <HowItWorks />
      <HireCTA />
      <Footer />
    </div>
  );
}
