
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-navy py-24 md:py-32 overflow-visible"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg" style={{ backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brightBlue blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lightAqua blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
            Available Services
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            Our <br />
            <span className="text-lightAqua">Solutions</span>
          </h2>
        </div>

        {/* Stacking Pill Cards Container */}
        <div className="relative space-y-[40vh] md:space-y-[60vh] pb-[20vh]">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="sticky top-32 md:top-48 lg:top-60 flex justify-center w-full group"
              style={{ zIndex: 10 + idx }}
            >
              <div className="w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3.5rem] p-3 md:p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] flex items-center gap-4 md:gap-12 transition-all duration-700 ease-out group-hover:-translate-y-2 border border-white/10 overflow-hidden relative">

                {/* Left: Rounded Square Image */}
                <div className="w-24 h-24 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-canvas">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Center: Bold Title & Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-6xl lg:text-7xl font-black text-navy uppercase italic tracking-tighter leading-none mb-2 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-navy/50 text-[10px] md:text-lg font-bold uppercase tracking-[0.2em] hidden md:block">
                    {service.description.split('.')[0]}.
                  </p>
                </div>

                {/* Right: Index Number */}
                <div className="pr-4 md:pr-12">
                  <span className="text-2xl md:text-7xl font-black text-navy/10 md:text-navy/20 uppercase italic tracking-tighter tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                {/* Hover Interaction: Gradient Reveal */}
                <div className="absolute inset-0 bg-gradient-to-r from-brightBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
