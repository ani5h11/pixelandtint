
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-navy py-24 md:py-32 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brightBlue blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lightAqua blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brightBlue font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">
            Our Solutions
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            Services <br />
            <span className="text-lightAqua">Simplified.</span>
          </h2>
        </div>

        {/* Services Cards Container */}
        <div className="space-y-12 md:space-y-24">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group"
            >
              <div
                className="bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(5,14,60,0.12)] border border-navy/5 flex flex-col md:flex-row items-stretch min-h-[500px] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent md:hidden" />
                  <div className="absolute top-8 left-8 bg-navy/90 backdrop-blur-md text-white px-4 py-2 text-[10px] font-black rounded-full border border-white/10 uppercase tracking-widest">
                    SERVICE_0{index + 1}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
                  <div className="mb-6 md:mb-8 text-center md:text-left">
                    {/* <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                      <div className="bg-brightBlue/10 p-3 rounded-xl">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32, className: 'text-brightBlue' })}
                      </div>
                      <span className="text-brightBlue font-bold text-lg md:text-2xl">
                        0{index + 1}.
                      </span>
                    </div> */}
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy leading-none uppercase italic tracking-tighter">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-navy/70 text-base md:text-xl leading-relaxed font-medium text-center md:text-left">
                    {service.description}
                  </p>

                  <div className="mt-10 md:mt-16 flex items-center justify-center md:justify-start">
                    <a
                      href="#contact"
                      className="px-8 py-4 bg-brightBlue hover:bg-navy text-white rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                    >
                      Get a Quote
                    </a>
                  </div>

                  <div className="mt-10 md:mt-16 flex items-center gap-4 text-navy/50 group-hover:text-brightBlue transition-colors duration-500">
                    <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/assets/warrantylogo.webp" alt="Lifetime Warranty Logo" loading="lazy" className="w-full h-full object-fit rounded-xl" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase">Lifetime Warranty</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
