
import { useEffect } from "react";
import ServiceCard from "../ui/ServiceCard";
import { Chef, Coffee, Utensils, UtensilsCrossed, Clock, Users } from "lucide-react";

const Services = () => {
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
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium text-sm">Our Services</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Food Contract Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily cafeteria operations to executive dining, we provide tailored food service solutions for multinational corporations in Penang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Utensils className="w-6 h-6" />}
            title="Corporate Cafeteria Management"
            description="Full-service cafeteria operations providing nutritious and diverse meal options for employees daily."
            delay={100}
          />
          <ServiceCard
            icon={<Chef className="w-6 h-6" />}
            title="Executive Dining Services"
            description="Premium catering for executive meetings, client visits, and special corporate events."
            delay={200}
          />
          <ServiceCard
            icon={<Coffee className="w-6 h-6" />}
            title="Coffee Corners & Snack Bars"
            description="Convenient refreshment stations throughout your facility with quality beverages and healthy snacks."
            delay={300}
          />
          <ServiceCard
            icon={<UtensilsCrossed className="w-6 h-6" />}
            title="Special Event Catering"
            description="Customized catering services for corporate celebrations, product launches, and team-building events."
            delay={400}
          />
          <ServiceCard
            icon={<Clock className="w-6 h-6" />}
            title="Meal Planning & Nutrition"
            description="Balanced meal programs designed by nutritionists to support employee health and productivity."
            delay={500}
          />
          <ServiceCard
            icon={<Users className="w-6 h-6" />}
            title="Food Service Consulting"
            description="Expert guidance on optimizing your corporate food service operations for efficiency and satisfaction."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
