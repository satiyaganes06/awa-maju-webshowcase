
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import AnimatedImage from "@/components/ui/AnimatedImage";

export function TimelineDemo() {
  const data = [
    {
      title: "1995 - 2001",
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Tongkah Moulding Technologies Sdn Bhd
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* <AnimatedImage
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
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "2002-2003",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          GKN Driveshafts(Malaysia) Sdn Bhd
          </p>
        </div>
      ),
    },
    {
      title: "2004 - 2005",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            University Sains Malaysia(USM) & PLKN
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://1120688276.rsc.cdn77.org/admin/uploads/images/getadvice/16464/59d6195ddd7f2.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://apicms.thestar.com.my/uploads/images/2020/10/02/882975.webp"
              alt="Small business beginnings"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2005 - 2006",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            SMK(P)St.George, Pulau Pinang.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/St._Georges_Girls%27_School.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "2007 - 2009",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Uchi Optoelectronic(M)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://lh3.googleusercontent.com/p/AF1QipMK8cZ8Vku2aQxfQXuKBDtQeZIfMFC6Kx2CQerS=s680-w680-h510"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "2010 - 2011",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Spansion Sdn Bhd
          </p>
         
        </div>
      ),
    },
    {
      title: "2011 - 2013",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Western Digital & Nissei Technology (Malaysia)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://investpenang.gov.my/wp-content/uploads/2019/08/image_1531892875_1.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://nisseitm.com.my/wp-content/uploads/2023/07/nisseiHeadOffice.jpg"
              alt="Small business beginnings"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2012 - 2014",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Nippon Steel & Sumikin Eletronic Device (M)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://malaysiagazette.com/wp-content/uploads/2024/12/AFP__20241203__36P696T__v1__HighRes__FilesUsJapanCommoditiesMergerTrump-scaled.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014 - 2015",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Elna PCB Malaysia
          </p>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://lh3.googleusercontent.com/p/AF1QipOhS7wncSzGn0MrHU2AYW6l5lL2LAZwYmCzT2Sj=s680-w680-h510"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014 - 2015",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Teleplan Technology Service Sdn Bhd P1 & P2
          </p>
          
        </div>
      ),
    },
    {
      title: "2018 - 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Flextronic Technology Penang
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            UCT Batu Kawan
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Iriichi(Malaysia)Sdn Bhd
          </p>

          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://flex.com/wp-content/uploads/2023/01/APAC-Malaysia-800x450-Building.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
            />
            <AnimatedImage
              src="https://www.blt-archi.com/application/files/9916/9517/9344/UCT_Phase_1.jpg"
              alt="Small business beginnings"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={200}
            />
            
            <AnimatedImage
              src="https://iriichi.com.my/wp-content/uploads/2023/08/Iriichi-Building-1-jpg.webp"
              alt="Small business beginnings"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
              delay={400}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Flextronic Technology Penang
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            UCT Batu Kawan
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Micron Memory Malaysia Sdn. Bhd.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <AnimatedImage
              src="https://img.digitimes.com/newsshow/20231016vl204_files/1_b.jpg"
              alt="Traditional food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              animation="fade-in"
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
