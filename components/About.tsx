
import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate scroll progress within the 500vh container
      const scrollDistance = -rect.top;
      const totalScrollableDistance = sectionHeight - viewHeight;

      const progress = Math.min(Math.max(scrollDistance / totalScrollableDistance, 0), 1);

      if (progress < 0.25) {
        setActiveStep(0);
      } else if (progress < 0.50) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Consultation & Preparation",
      description: "We help you choose the right film type, heat rejection & privacy level. Before installation, we thoroughly clean and prep each window to remove dust, debris, and contaminants. Proper preparation ensures a smooth, bubble-free finish that lasts for years."
    },
    {
      id: 2,
      title: "Precision Hand Cutting & Custom Fit",
      description: "We specialize in precision hand cutting, carefully shaping the film to match the exact contours of your windows. Our attention to detail ensures every window is perfectly fitted — not rushed."
    },
    {
      id: 3,
      title: "Expert Installation & Final Inspection",
      description: "Once the film is cut, we professionally install it using advanced techniques to remove air and moisture, heat-shape curved glass, and secure clean edges. Our team ensures a perfect fit every time."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-canvas overflow-visible min-h-[500vh]"
    >
      {/* Background Grid & Decorative Elements */}
      <div className="absolute top-0 left-1/4 h-full dashed-line-v opacity-20" />
      <div className="absolute top-0 left-3/4 h-full dashed-line-v opacity-20" />
      <div className="absolute top-0 w-full dashed-line-h opacity-20" />
      <div className="absolute bottom-0 w-full dashed-line-h opacity-20" />

      {/* Sticky container remains in viewport, offset by navbar height */}
      <div className="sticky top-20 h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Adjusted padding: Added more top padding to prevent nav bar overlap */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center">

            {/* Left Column: The Story/Accordion */}
            <div className="w-full md:w-6/12">
              <div className="space-y-6 md:space-y-12">

                <div className="text-center md:text-left">

                  <h2 className="text-4xl md:text-7xl font-black text-navy leading-[0.85] mb-2 md:mb-4 tracking-tighter uppercase italic">
                    Process <br />
                    <span className="text-brightBlue">Perfection</span>
                  </h2>

                </div>

                {/* Technical Accordion List */}
                <div className="space-y-3 md:space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`group transition-all duration-700 ease-in-out border-l-4 overflow-hidden ${activeStep === index
                        ? 'border-brightBlue bg-brightBlue/[0.04] pl-5 md:pl-8 py-4 md:py-8'
                        : 'border-transparent pl-5 md:pl-8 py-2 opacity-20 grayscale'
                        }`}
                    >
                      <div className="flex gap-4 items-baseline mb-2 md:mb-3">
                        <h3 className={`text-base md:text-3xl font-black tracking-tight transition-all duration-500 uppercase italic ${activeStep === index ? 'text-navy translate-x-2' : 'text-navy/60 translate-x-0'
                          }`}>
                          {step.title}
                        </h3>
                      </div>

                      <div
                        className={`transition-all duration-700 ease-in-out overflow-hidden ${activeStep === index ? 'max-h-[400px] opacity-100 mt-2 md:mt-6' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <p className="text-navy/60 text-xs md:text-lg leading-relaxed font-medium max-w-full">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Layout: High-End Technical Visuals */}
            <div className="flex-1 relative h-[600px] md:h-[700px] w-full hidden md:block">
              {/* Visual 1: Pattern Mapping */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${activeStep === 0 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 translate-y-12 rotate-3 pointer-events-none'
                  }`}
              >
                <div className="relative group w-[500px]">
                  <div className="bg-white p-3 shadow-[0_50px_100px_-20px_rgba(5,14,60,0.15)] border border-navy/5 rounded-lg overflow-hidden">
                    <img
                      src="./assets/consultation.jpg"
                      alt="Consultation and preparation of tint"
                      className="w-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brightBlue/5 mix-blend-overlay" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-navy text-white px-4 py-2 text-[9px] font-mono font-bold rounded-md shadow-xl border border-white/10 uppercase tracking-widest">
                    Asset: TINT_FILMS
                  </div>
                </div>
              </div>

              {/* Visual 2: Thermal Rendering */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${activeStep === 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 -translate-y-12 -rotate-3 pointer-events-none'
                  }`}
              >
                <div className="relative group w-[500px]">
                  <div className="bg-white p-3 shadow-[0_50px_100px_-20px_rgba(5,14,60,0.15)] border border-navy/5 rounded-lg overflow-hidden">
                    <img
                      src="./assets/custom.jpg"
                      alt="Custom tint"
                      className="w-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-lightAqua/10 mix-blend-overlay" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-brightBlue text-white px-4 py-2 text-[9px] font-mono font-bold rounded-md shadow-xl border border-white/10 uppercase tracking-widest">
                    Var: Custom_Tint
                  </div>
                </div>
              </div>

              {/* Visual 3: Secure Logs */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${activeStep === 2 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 translate-x-12 rotate-2 pointer-events-none'
                  }`}
              >
                <div className="relative group w-[550px]">
                  <div className="bg-white p-3 shadow-[0_50px_100px_-20px_rgba(5,14,60,0.15)] border border-navy/5 rounded-lg overflow-hidden">
                    <img
                      src="./assets/inspection.jpg"
                      alt="Inspection of tint"
                      className="w-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-navy text-white px-6 py-3 text-[9px] font-mono font-bold rounded-md shadow-xl border border-white/10 uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brightBlue animate-pulse" />
                    INSPECTING_WORK
                  </div>
                </div>
              </div>

              {/* Structural Decorations */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px border-t border-navy/5 dashed-line-h" />
                <div className="absolute left-1/2 top-0 h-full w-px border-l border-navy/5 dashed-line-v" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-brightBlue rounded-full bg-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
