
import { useEffect, useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Awa Maju has transformed our corporate dining experience. Their attention to detail and flexible menu options have received outstanding feedback from our employees.",
    author: "Sarah Chen",
    role: "Facility Manager",
    company: "Tech Solutions Inc."
  },
  {
    quote: "Working with Awa Maju has been seamless. Their team consistently delivers high-quality food services that accommodate our diverse workforce's dietary preferences.",
    author: "Michael Wong",
    role: "HR Director",
    company: "Global Manufacturing Co."
  },
  {
    quote: "The quality and variety of food provided by Awa Maju has significantly improved employee satisfaction. Their team is responsive and always ready to accommodate special requests.",
    author: "Lisa Tan",
    role: "Operations Manager",
    company: "Precision Electronics"
  },
  {
    quote: "We've partnered with Awa Maju for our executive dining needs for over 5 years. Their professionalism and ability to deliver exceptional service consistently has made them an invaluable partner.",
    author: "David Lim",
    role: "CEO",
    company: "Innovate Solutions"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium text-sm">Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the multinational companies that trust us with their food service needs across Penang.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={`${testimonial.role}, ${testimonial.company}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-primary scale-125" : "bg-muted"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background shadow-subtle hover:bg-background/90"
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12">
            <Button
              variant="ghost" 
              size="icon"
              className="rounded-full bg-background shadow-subtle hover:bg-background/90"
              onClick={handleNext}
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
