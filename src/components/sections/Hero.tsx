
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AnimatedImage from "../ui/AnimatedImage";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-6 bg-primary/10 px-4 py-2 rounded-full">
              <p className="text-primary font-medium text-sm">Trusted Food Contract Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevating Corporate <br className="hidden md:block" />
              <span className="text-primary">Dining Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Providing exceptional food contract services to multinational companies across Penang, Malaysia. Quality ingredients, diverse menus, and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Corporate dining experience"
                className="w-full h-[500px] object-cover rounded-2xl"
                animation="scale-in"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a 
            href="#services" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary animate-float"
          >
            <ChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
