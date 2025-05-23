
import { useEffect } from "react";
import FeatureCard from "../ui/FeatureCard";
import { BadgeCheck, Medal, Clock, Sparkles, Heart, Leaf } from "lucide-react";

const WhyUs = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

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
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium text-sm">Why Choose Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the unique advantages that make Awa Maju Jaya (M) Sdn Bhd the preferred food service partner for leading multinational companies in Penang.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BadgeCheck className="w-5 h-5" />}
              title="Quality Assurance"
              description="Rigorous quality control processes ensuring the highest standards of food preparation, safety, and hygiene."
              delay={100}
            />
            <FeatureCard
              icon={<Medal className="w-5 h-5" />}
              title="Industry Experience"
              description="Over a decade of experience serving multinational companies across various industries in Penang."
              delay={200}
            />
            <FeatureCard
              icon={<Clock className="w-5 h-5" />}
              title="Reliability"
              description="Consistent, punctual service delivery you can depend on, day after day, year after year."
              delay={300}
            />
            <FeatureCard
              icon={<Sparkles className="w-5 h-5" />}
              title="Menu Innovation"
              description="Regularly updated menus featuring both local and international cuisines to provide variety and excitement."
              delay={400}
            />
            <FeatureCard
              icon={<Heart className="w-5 h-5" />}
              title="Client-Centric Approach"
              description="Tailored solutions designed specifically for your organization's unique needs and preferences."
              delay={500}
            />
            <FeatureCard
              icon={<Leaf className="w-5 h-5" />}
              title="Sustainability Focus"
              description="Commitment to sustainable practices, local sourcing, and reducing environmental impact."
              delay={600}
            />
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-xl font-medium mb-8">Trusted by Leading Companies in Penang</p>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
            
            <div className="client-logo reveal" style={{animationDelay: "200ms"}}>
              <img 
                src="https://1000logos.net/wp-content/uploads/2020/05/Micron-Logo.png" 
                alt="Micron" 
                className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="client-logo reveal" style={{animationDelay: "400ms"}}>
              <img 
                src="https://amcham.com.my/wp-content/uploads/640px-Flex_logo_2015.svg_.png" 
                alt="Flex" 
                className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="client-logo reveal" style={{animationDelay: "100ms"}}>
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/mad-mini-project-c822d.appspot.com/o/Test%2FUCT%20Logo.png?alt=media&token=254cd3a6-014f-4196-9af2-7f3d786487b7" 
                alt="Intel" 
                className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
