
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import OrganizationChart from "@/components/sections/OrganizationChart";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const initializeObservers = () => {
      const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    };

    initializeObservers();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      <Services />
      <About />
      <OrganizationChart />
      <WhyUs />
      <Testimonials />
      <Contact />
      
      <Footer />
    </main>
  );
};

export default Index;
