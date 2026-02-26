
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollDistance = -rect.top;
      const totalScrollableDistance = sectionHeight - viewHeight;
      const progress = Math.min(Math.max(scrollDistance / totalScrollableDistance, 0), 1);

      // Divide into segments for the services
      const segmentSize = 1 / SERVICES.length;
      const currentIdx = Math.min(Math.floor(progress / segmentSize), SERVICES.length - 1);
      setActiveIdx(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-navy overflow-visible min-h-[300vh]"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg" style={{ backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brightBlue blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lightAqua blur-[150px] rounded-full" />
      </div>

      <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
        {/* Adjusted padding and layout for mobile visibility */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20 md:pt-24 pb-8 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-24 items-center h-full">

            {/* Left: Heading & Dynamic Content */}
            <div className="text-white text-center lg:text-left">
              <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[8px] lg:text-[10px] mb-2 lg:mb-4 inline-block">
                Available Services
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-black leading-[0.9] mb-4 md:mb-12 tracking-tighter uppercase italic">
                Our <br />
                <span className="text-lightAqua">Solutions</span>
              </h2>

              {/* Dynamic Service Content - Compact height for mobile */}
              <div className="relative h-[110px] md:h-[250px] mb-4 md:mb-12">
                {SERVICES.map((service, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${activeIdx === idx
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-8 pointer-events-none'
                      }`}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-3 mb-2 md:mb-6">
                      <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-xl md:rounded-2xl border border-white/20 hidden lg:block">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24, className: 'text-white' })}
                      </div>
                      <h3 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm md:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0 line-clamp-3 md:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center lg:justify-start gap-2 md:gap-3 mb-6 lg:mb-0">
                {SERVICES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const target = sectionRef.current;
                      if (target) {
                        const scrollStep = (target.offsetHeight - window.innerHeight) / SERVICES.length;
                        window.scrollTo({ top: target.offsetTop + (scrollStep * i) + 50, behavior: 'smooth' });
                      }
                    }}
                    aria-label={`Go to service ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-12 md:w-16 bg-white' : 'w-3 md:w-4 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Card Stack - Pure Imagery + Bottom Center Button */}
            <div className="relative h-[240px] md:h-[650px] flex items-center justify-center">
              {SERVICES.map((service, idx) => {
                const isActive = activeIdx === idx;
                const isPast = activeIdx > idx;

                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isActive
                      ? 'opacity-100 translate-y-0 scale-100 rotate-0 z-30'
                      : isPast
                        ? 'opacity-0 -translate-y-12 scale-90 rotate-2 z-10 pointer-events-none'
                        : 'opacity-0 translate-y-12 scale-110 -rotate-2 z-10 pointer-events-none'
                      }`}
                  >
                    {/* Outer card with border wrap - reduced size for mobile */}
                    <div className="bg-white p-1.5 md:p-3 rounded-[2rem] md:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(5,14,60,0.5)] w-full max-w-[240px] md:max-w-lg border border-white/20 group overflow-hidden relative aspect-square">

                      {/* Inner image container */}
                      <div className="absolute inset-1.5 md:inset-3 overflow-hidden rounded-[1.5rem] md:rounded-[3.5rem]">
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Vignette for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      </div>

                      {/* Card Interaction Layer - Smaller button for mobile */}
                      <div className="absolute bottom-4 md:bottom-14 left-0 w-full flex flex-col items-center justify-end z-10">
                        <a
                          href="#contact"
                          className="px-6 py-3 md:px-14 md:py-6 bg-brightBlue hover:bg-navy hover:text-white text-white rounded-full text-[9px] md:text-[12px] font-black uppercase tracking-[0.15em] md:tracking-[0.4em] transition-all shadow-xl flex items-center gap-2 group/btn active:scale-95 border border-transparent hover:border-white/10"
                        >
                          Get Quote
                        </a>

                        {/* Decorative reference tag */}
                        <span className="mt-1.5 md:mt-4 text-[7px] md:text-[9px] font-mono text-white/50 font-bold uppercase tracking-widest hidden md:block">
                          0{idx + 1} // IMG_PRCS
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
