
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import AnimatedImage from "@/components/ui/AnimatedImage";

export function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A.W.A Maju Jaya expands its catering services to cover more corporate clients in Penang.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              alt="Catering service"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="Food preparation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2010",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The company introduces specialized menus catering to different cultural preferences and dietary requirements.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A.W.A Maju Jaya begins serving major corporate clients in the industrial sector.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1"
              alt="Corporate event"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              alt="Buffet setup"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
          </div>
        </div>
      ),
    },
    {
      title: "1995",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Abdul Wahab Bin Abdul Razak establishes A.W.A Maju Jaya as a small catering business in Penang.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Started with small-scale food service
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Focus on traditional Malaysian cuisine
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Commitment to quality ingredients
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Family recipes passed down through generations
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Personal service and attention to detail
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc"
              alt="Small business beginnings"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section id="history" className="w-full">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium text-sm">Our Journey</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The <span className="text-primary">History</span> of A.W.A Maju Jaya
          </h2>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}
