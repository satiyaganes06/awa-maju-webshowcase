
import { useEffect } from "react";
import AnimatedImage from "../ui/AnimatedImage";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");

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
  }, []);

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our team at work"
                  className="w-full h-[500px] object-cover rounded-2xl"
                  animation="fade-in"
                />
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
              <p className="text-primary font-medium text-sm">About Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Story of <span className="text-primary">Awa Maju Jaya</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in Penang, Awa Maju Jaya Enterprise has been delivering exceptional food contract services to multinational companies since 2010. We combine Malaysian culinary traditions with international standards to create memorable dining experiences.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">To be the premier food service provider for corporations in Malaysia, renowned for quality, innovation, and service excellence.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">Delivering exceptional culinary experiences that enhance workplace satisfaction while upholding the highest standards of quality, hygiene, and sustainability.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Values</h3>
                  <p className="text-muted-foreground">Excellence, integrity, innovation, and community - these core values guide every aspect of our service delivery and business relationships.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
