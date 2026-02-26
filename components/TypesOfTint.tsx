import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ThermometerSnowflake, Eye, Sun, Gauge, Flame } from 'lucide-react';

const TINT_DATA = {
  classic: {
    name: "Classic Series",
    tagline: "Standard Protection",
    vlt: 35,
    uv: 98,
    heat: 38, // TSER
    ir: 45,   // IRR
    clarity: "Good",
    description: "Our high-quality dyed film offers great looks and basic heat rejection. Perfect for style-conscious owners looking for privacy on a budget.",
    color: "#1e293b",
    id: "01",
    price: "$249"
  },
  ceramic: {
    name: "Ceramic Pro",
    tagline: "Advanced Performance",
    vlt: 80,
    uv: 99.9,
    heat: 58, // TSER
    ir: 92,   // IRR
    clarity: "Ultra-High",
    description: "Utilizing nano-ceramic particles, this film provides extreme heat rejection and 100% UV protection without interfering with signal reception.",
    color: "#0077b6",
    id: "02",
    price: "$399"
  },
  nanoCeramic: {
    name: "Nano Ceramic IR",
    tagline: "The Absolute Pinnacle",
    vlt: 70,
    uv: 99.9,
    heat: 66, // TSER
    ir: 98,   // IRR
    clarity: "Infinite",
    description: "Our most advanced multi-layer film. It rejects virtually all infrared heat (IR) while maintaining maximum legal visibility and clarity.",
    color: "#90e0ef",
    id: "03",
    price: "$449"
  }
};

type TintKey = keyof typeof TINT_DATA;

const TypesOfTint: React.FC = () => {
  const [active, setActive] = useState<TintKey>('classic');
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

      // Determine active series based on scroll progress (3 segments)
      if (progress < 0.33) {
        setActive('classic');
      } else if (progress < 0.66) {
        setActive('ceramic');
      } else {
        setActive('nanoCeramic');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = TINT_DATA[active];

  return (
    <section
      id="types"
      ref={sectionRef}
      className="relative bg-navy overflow-visible min-h-[300vh] lg:min-h-[350vh]"
    >
      {/* Decorative tech background */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brightBlue/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brightBlue/50 to-transparent" />

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Adjusted padding to help with centering and visibility on mobile */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">

            {/* Left: Info & Indicators */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <div className="text-center lg:text-left mb-4 lg:mb-8">
                <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[8px] lg:text-[10px] mb-2 lg:mb-4 inline-block">
                  Technology Tier Comparison
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                  Levels of <br />
                  <span className="text-lightAqua">Shielding</span>
                </h2>
              </div>

              {/* Status indicators - HORIZONTAL ON MOBILE */}
              <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-4 mb-6 lg:mb-12">
                {(Object.keys(TINT_DATA) as TintKey[]).map((key) => (
                  <div key={key} className="relative">
                    <div
                      onClick={() => setActive(key)}
                      className={`cursor-pointer flex flex-col lg:flex-row items-center justify-center lg:justify-between p-2 lg:p-5 rounded-xl lg:rounded-2xl border transition-all duration-700 ${active === key
                        ? 'bg-white border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] scale-105 z-20'
                        : 'bg-white/5 border-white/10 opacity-30 scale-95 z-10'
                        }`}
                    >
                      <div className="text-center lg:text-left">
                        <h3 className={`text-[16px] sm:text-[14px] lg:text-lg font-black uppercase italic tracking-tight ${active === key ? 'text-navy' : 'text-white'}`}>
                          {TINT_DATA[key].name.split(' ')[0]} <span className="hidden sm:inline">{TINT_DATA[key].name.split(' ')[1]}</span>
                        </h3>
                        <p className={`text-[6px] lg:text-[9px] font-bold uppercase tracking-widest lg:block ${active === key ? 'text-navy/40' : 'text-white/40'}`}>
                          {TINT_DATA[key].tagline}
                        </p>
                      </div>
                      {active === key && (
                        <div className="hidden lg:flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full animate-ping ${key === 'ceramic' ? 'bg-brightBlue' : key === 'nanoCeramic' ? 'bg-lightAqua' : 'bg-navy'}`} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description box - Hidden on very small screens to save space */}
              <div className="h-20 lg:h-28 relative overflow-hidden md:block">
                {(Object.keys(TINT_DATA) as TintKey[]).map((key) => (
                  <p
                    key={key}
                    className={`absolute inset-0 text-white/60 text-base lg:text-lg leading-relaxed font-medium transition-all duration-700 ${active === key ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                      }`}
                  >
                    {TINT_DATA[key].description}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: The Visual Chart / Dashboard */}
            <div className="flex-1 w-full lg:pl-12">
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] lg:rounded-[3rem] p-5 lg:p-12 shadow-2xl relative overflow-hidden group min-h-[300px] lg:min-h-[500px] flex flex-col justify-center">
                {/* Dynamic light effect based on selection */}
                <div className={`absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 blur-[100px] lg:blur-[120px] rounded-full transition-all duration-1000 ${active === 'nanoCeramic' ? 'bg-lightAqua/20' : active === 'ceramic' ? 'bg-brightBlue/20' : 'bg-white/10'
                  }`} />

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-6 lg:gap-y-12 relative z-10">

                  {/* Visual Metric: Total Heat (TSER) */}
                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-4">
                      <div className="bg-white/10 p-1.5 lg:p-2.5 rounded-lg lg:rounded-xl hidden sm:block">
                        <Flame className="text-brightBlue" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[7px] lg:text-[10px] opacity-40">Total Heat (TSER)</h4>
                        <p className="text-base lg:text-2xl font-black text-white italic tabular-nums">{data.heat}%</p>
                      </div>
                    </div>
                    <div className="h-1 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${active === 'nanoCeramic' ? 'bg-lightAqua' : active === 'ceramic' ? 'bg-brightBlue' : 'bg-white/40'
                          }`}
                        style={{ width: `${data.heat}%` }}
                      />
                    </div>
                  </div>

                  {/* Visual Metric: Infrared (IRR) */}
                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-4">
                      <div className="bg-white/10 p-1.5 lg:p-2.5 rounded-lg lg:rounded-xl hidden sm:block">
                        <ThermometerSnowflake className="text-brightBlue" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[7px] lg:text-[10px] opacity-40">Infrared (IRR)</h4>
                        <p className="text-base lg:text-2xl font-black text-white italic tabular-nums">{data.ir}%</p>
                      </div>
                    </div>
                    <div className="h-1 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${active === 'nanoCeramic' ? 'bg-lightAqua' : active === 'ceramic' ? 'bg-brightBlue' : 'bg-white/40'
                          }`}
                        style={{ width: `${data.ir}%` }}
                      />
                    </div>
                  </div>

                  {/* Visual Metric: UV Protection */}
                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-4">
                      <div className="bg-white/10 p-1.5 lg:p-2.5 rounded-lg lg:rounded-xl hidden sm:block">
                        <ShieldCheck className="text-brightBlue" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[7px] lg:text-[10px] opacity-40">UV Protection</h4>
                        <p className="text-base lg:text-2xl font-black text-white italic tabular-nums">{data.uv}%</p>
                      </div>
                    </div>
                    <div className="h-1 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${active === 'nanoCeramic' ? 'bg-lightAqua' : active === 'ceramic' ? 'bg-brightBlue' : 'bg-white/40'
                          }`}
                        style={{ width: `${data.uv}%` }}
                      />
                    </div>
                  </div>

                  {/* Visual Metric: VLT (Visible Light) */}
                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-4">
                      <div className="bg-white/10 p-1.5 lg:p-2.5 rounded-lg lg:rounded-xl hidden sm:block">
                        <Sun className="text-brightBlue" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[7px] lg:text-[10px] opacity-40">Light (VLT)</h4>
                        <p className="text-base lg:text-2xl font-black text-white italic">{data.vlt}%</p>
                      </div>
                    </div>
                    <div className="h-1 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${active === 'nanoCeramic' ? 'bg-lightAqua' : active === 'ceramic' ? 'bg-brightBlue' : 'bg-white/40'
                          }`}
                        style={{ width: `${data.vlt}%` }}
                      />
                    </div>
                  </div>

                  {/* Visual Metric: Clarity */}
                  <div className="space-y-2 lg:space-y-4 col-span-2">
                    <div className="flex items-center gap-2 lg:gap-4">
                      <div className="bg-white/10 p-1.5 lg:p-2.5 rounded-lg lg:rounded-xl hidden sm:block">
                        <Gauge className="text-brightBlue" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[7px] lg:text-[10px] opacity-40">Optical Clarity</h4>
                        <p className="text-base lg:text-2xl font-black text-white italic">{data.clarity}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-10 gap-0.5 lg:gap-1.5 h-1 lg:h-2">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-full transition-all duration-700 ${(i < (active === 'nanoCeramic' ? 10 : active === 'ceramic' ? 9 : 6))
                            ? (active === 'nanoCeramic' ? 'bg-lightAqua' : 'bg-brightBlue')
                            : 'bg-white/10'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Central Comparison Divider / Highlight */}
                <div className="mt-8 lg:mt-12 pt-4 lg:pt-8 border-t border-white/10 flex flex-row items-center justify-between gap-4 lg:gap-8">
                  <div className="flex flex-col items-start">
                    <span className="text-white/40 font-mono text-[7px] lg:text-[9px] uppercase tracking-widest mb-0.5">Active Tier</span>
                    <span className={`text-xs lg:text-2xl font-black italic uppercase tracking-tighter transition-colors duration-700 ${active === 'nanoCeramic' ? 'text-lightAqua' : active === 'ceramic' ? 'text-brightBlue' : 'text-white'
                      }`}>
                      {data.name}
                    </span>
                    <span className="text-white/40 font-mono text-[12px] lg:text-[14px] uppercase tracking-widest">Starts from ${data.price}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-6">
                    <div className="h-1 w-16 lg:w-32 bg-white/10 rounded-full relative overflow-hidden">
                      <div
                        className={`absolute h-full transition-all duration-700 ${active === 'nanoCeramic' ? 'bg-lightAqua w-full' : active === 'ceramic' ? 'bg-brightBlue w-[66%]' : 'bg-white/40 w-[33%]'
                          }`}
                      />
                    </div>
                    <span className="text-[7px] lg:text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      {data.id}/03
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
};

export default TypesOfTint;