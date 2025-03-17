
import { useEffect } from "react";
import AnimatedImage from "../ui/AnimatedImage";

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  delay: number;
}

const TeamMember = ({ name, position, imageSrc, delay }: TeamMemberProps) => {
  return (
    <div 
      className="reveal-scale" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10">
          <div className="h-64 overflow-hidden">
            <AnimatedImage
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              animation="fade-in"
            />
          </div>
          <div className="p-4 text-center bg-gradient-to-r from-white to-primary/5">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-primary">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrganizationChart = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-scale");

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
    <section id="organization" className="py-20 md:py-28 bg-[url('https://www.transparenttextures.com/patterns/batik.png')] bg-white bg-opacity-95">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium text-sm">Our Team</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Organization Chart
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated professionals behind A.W.A Maju Jaya's success. Our diverse team brings together culinary expertise, 
            operational excellence, and customer service focus to deliver exceptional catering experiences.
          </p>
        </div>

        {/* Organization Chart - Top Level */}
        <div className="mb-16 flex justify-center reveal">
          <div className="relative max-w-sm">
            <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-md"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg border border-primary/30">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Abdul Wahab Bin Abdul Razak"
                    className="w-full h-full object-cover"
                    animation="scale-in"
                  />
                </div>
                <h3 className="font-bold text-xl">Abdul Wahab Bin Abdul Razak</h3>
                <p className="text-primary font-medium">Managing Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Chart - Second Level */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-1 bg-primary/50"></div>
          <div className="absolute left-1/4 right-1/4 top-16 h-1 bg-primary/50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            <div className="reveal" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 h-20 w-1 bg-primary/50"></div>
                <div className="p-5 rounded-lg shadow-md bg-white border border-primary/20 text-center hover:shadow-lg transition-all">
                  <h3 className="font-bold">Nur Aisyah Binti Kamal</h3>
                  <p className="text-primary">Operations Director</p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 h-20 w-1 bg-primary/50"></div>
                <div className="p-5 rounded-lg shadow-md bg-white border border-primary/20 text-center hover:shadow-lg transition-all">
                  <h3 className="font-bold">Muhammad Hafiz Bin Ibrahim</h3>
                  <p className="text-primary">Finance Director</p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ animationDelay: "300ms" }}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 h-20 w-1 bg-primary/50"></div>
                <div className="p-5 rounded-lg shadow-md bg-white border border-primary/20 text-center hover:shadow-lg transition-all">
                  <h3 className="font-bold">Lee Mei Ling</h3>
                  <p className="text-primary">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12 reveal">Department Heads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Raj Kumar A/L Vijay" 
              position="Executive Chef"
              imageSrc="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              delay={100}
            />
            <TeamMember 
              name="Tan Li Wei" 
              position="Logistics Manager"
              imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              delay={200}
            />
            <TeamMember 
              name="Nurul Hana Binti Azman" 
              position="Client Relations"
              imageSrc="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              delay={300}
            />
            <TeamMember 
              name="Ahmad Zulkifli Bin Hassan" 
              position="Quality Control"
              imageSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              delay={400}
            />
          </div>
        </div>

        {/* Malaysian Batik Pattern Decorative Element */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
          <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground">
                We're always looking for talented and passionate individuals to join our growing team. 
                If you're interested in a career with A.W.A Maju Jaya, please send your resume to careers@awamajujaya.com.my
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/batik.png')] bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-primary">We're Hiring!</h4>
                    <p className="text-sm text-muted-foreground">Explore opportunities with us</p>
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

export default OrganizationChart;
