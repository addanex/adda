import ContactUs from "../components/contact-us";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Services from "../components/services";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div className="flex-1 space-y-24">
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <ContactUs />
    </div>
  );
}
