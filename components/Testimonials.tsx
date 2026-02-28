
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-lightAqua/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy uppercase italic tracking-tighter leading-none mb-12">
            Trusted by Drivers and Homeowners <br /> Across Tasmania
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-12 -left-12 text-navy/5">
            <Quote size={160} />
          </div>

          <div className="relative bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-lightAqua/30 overflow-hidden">
            <div className="transition-all duration-500">
              <p className="text-xl md:text-2xl italic text-navy/80 leading-relaxed mb-10 text-center">
                "{TESTIMONIALS[current].content}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={TESTIMONIALS[current].avatar}
                  alt={TESTIMONIALS[current].name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full mb-4 border-2 border-brightBlue"
                />
                <h4 className="font-bold text-lg text-navy">{TESTIMONIALS[current].name}</h4>
                <p className="text-brightBlue font-semibold text-sm uppercase tracking-widest">{TESTIMONIALS[current].role}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                aria-label="Previous Testimonial"
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-navy/5 hover:bg-brightBlue hover:text-white transition-all pointer-events-auto shadow-sm"
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Next Testimonial"
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-navy/5 hover:bg-brightBlue hover:text-white transition-all pointer-events-auto shadow-sm"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className="w-12 h-12 flex items-center justify-center transition-all focus:outline-none"
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all ${current === idx ? 'bg-brightBlue w-8' : 'bg-navy/20'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
