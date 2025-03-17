
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
                  src="https://t4.ftcdn.net/jpg/09/00/46/95/360_F_900469541_5Dwzw2bWohU2C69hln3opfDsmoRVPCPC.jpg"
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
              A.W.A Maju Jaya is a leading provider of premium catering services, known for quality, reliability, and customer satisfaction. Since 1995, we have delivered exceptional catering solutions, ensuring high standards of food quality and hygiene. Offering 24/7 catering services, we create customized menus to meet diverse tastes and dietary needs, enhancing the dining experience.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">To be the premier choice for catering services in Penang, renowned for our excellence in quality, taste, and customer satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">To serve the best and most delicious cuisine with every meal crafted to tell a story, catering to diverse tastes and dietary needs through personalized menu options.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Strengths</h3>
                  <p className="text-muted-foreground">Versatile solutions for daily meals and special events, commitment to quality with fresh ingredients, and reliable, timely, and efficient service.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="outline" asChild>
              <a href="#organization">View Our Team</a>
            </Button>
          </div>
        </div>

        {/* Managing Director Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left order-2 md:order-1">
            <div className="rounded-lg p-6 relative bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-2">Abdul Wahab Bin Abdul Razak</h3>
              <p className="text-primary font-medium mb-4">Managing Director</p>
              <p className="text-muted-foreground mb-6">
                With over 25 years of experience in the food industry, Abdul Wahab has been the driving force behind 
                A.W.A Maju Jaya's success. His vision, leadership, and commitment to excellence have established 
                the company as a leader in catering services throughout Penang.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Visionary Leadership</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Culinary Expert</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Business Innovator</span>
              </div>
            </div>
          </div>
          <div className="reveal-right order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                {/* Updated founder photo */}
                <AnimatedImage
                  src="/lovable-uploads/3499d130-f2d0-4916-95da-b08d725c6260.png"
                  alt="Abdul Wahab Bin Abdul Razak - Managing Director"
                  className="w-full h-[400px] object-cover object-center"
                  animation="fade-in"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="animate-float">
                    <h4 className="text-white font-bold text-xl">Abdul Wahab Bin Abdul Razak</h4>
                    <p className="text-white/90">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
