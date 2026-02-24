import React from 'react';
import { BENEFITS } from '../constants';

const BenefitsOfTint: React.FC = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-canvas relative overflow-hidden">
      {/* Structural backgrounds with sun-ray animation */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brightBlue/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Animated Sunbeam Effect (Simulated Barrier) */}
      <div className="absolute top-20 right-20 w-px h-64 bg-gradient-to-b from-transparent via-brightBlue/30 to-transparent rotate-45 animate-pulse" />
      <div className="absolute top-40 right-40 w-px h-64 bg-gradient-to-b from-transparent via-brightBlue/20 to-transparent rotate-45 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-3xl">
            <span className="text-brightBlue font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 inline-block">
              The Critical Impact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] mb-4 md:mb-12 tracking-tighter uppercase italic">
              Why Care <br />
              <span className="text-brightBlue">About Tint?</span>
            </h2>

            <p className="mt-6 md:mt-8 text-navy/60 text-base md:text-xl font-medium leading-relaxed">
              Window tint isn't just about "the look." In Tasmania's extreme UV climate, it is a functional necessity for your health, your wallet, and your peace of mind. We minimise the cost by working smart and hard to provide the best and affordable window tinting services in Tasmania.
            </p>
          </div>
          <div className="lg:block">
            <div className="flex items-center gap-6 bg-white p-4 rounded-[2rem] border border-navy/5 shadow-xl">
              {/* <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">`
                <div className="w-1.5 h-1.5 rounded-full bg-brightBlue animate-ping" />
              </div> */}
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="./assets/Skincaref.png" alt="Skin Care Foundation Logo" className="w-full h-full object-fit rounded-xl" />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Global Standard</p>
                <p className="text-xs font-bold text-navy uppercase">Skin Cancer Foundation Recommended</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-navy/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 hover:shadow-[0_60px_100px_-30px_rgba(5,14,60,0.12)] transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              {/* Animated reveal bg */}
              <div className="absolute inset-0 bg-brightBlue opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />

              {/* Header: Icon & Impact Badge */}
              <div className="flex justify-between items-start mb-10 md:mb-14">
                <div className="bg-navy text-white p-4 md:p-5 rounded-[1.25rem] md:rounded-[1.5rem] shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brightBlue">
                  {benefit.icon}
                </div>
                <div className="flex flex-col items-end">
                  <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-lightAqua/20 text-brightBlue text-[8px] md:text-[9px] font-black uppercase tracking-widest border border-lightAqua/30 mb-2">
                    {benefit.impact}
                  </div>
                </div>
              </div>

              {/* Text Content: Focusing on "Why care" */}
              <h3 className="text-xl md:text-2xl font-black text-navy uppercase italic tracking-tight mb-4 group-hover:text-brightBlue transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="text-navy/50 font-medium leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
                {benefit.desc}
              </p>

              {/* Footer: Concrete Data Metric */}
              <div className="pt-6 md:pt-8 border-t border-navy/5 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-1 w-8 md:w-10 bg-brightBlue/20 rounded-full overflow-hidden">
                    <div className="h-full bg-brightBlue w-0 group-hover:w-full transition-all duration-1000 delay-300" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-black text-navy uppercase tracking-tighter italic">
                    {benefit.metric}
                  </span>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-navy/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-brightBlue rounded-full" />
                </div>
              </div>

              {/* Background index number */}
              <span className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-4 text-[8rem] md:text-[12rem] font-black text-navy/[0.02] uppercase italic pointer-events-none select-none transition-all duration-1000 group-hover:-translate-x-12 group-hover:-translate-y-4">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* The Final Verdict Box */}
        <div className="mt-16 md:mt-24 p-8 md:p-20 bg-navy rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/20 via-transparent to-transparent opacity-50" />
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brightBlue/30 blur-[150px] rounded-full pointer-events-none animate-pulse" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <h4 className="text-2xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-[1.1] mb-6 md:mb-8">
                The Bottom Line: <br />
                <span className="text-lightAqua">It Protects You and Your Car.</span>
              </h4>
              <p className="text-white/50 text-base md:text-xl font-medium leading-relaxed">
                By investing in high-quality tint today, you're preventing thousands in potential repair costs, energy bills, and protecting your long-term health in the Tasmanian sun.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-brightBlue hover:bg-white hover:text-navy text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 group/btn flex items-center justify-center gap-4"
              >
                Protect My Asset
                <div className="w-2 h-2 rounded-full bg-white group-hover/btn:bg-navy transition-colors animate-pulse" />
              </a>
              <p className="text-[8px] md:text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em] text-center">
                Instant Quote • No Obligations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfTint;