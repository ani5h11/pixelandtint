import React, { useState } from 'react';
import { Eye, EyeOff, Info } from 'lucide-react';

const DARKNESS_LEVELS = [
    {
        vlt: 35,
        name: "Standard",
        description: "Legal in most states for front windows. Offers good privacy and UV protection while maintaining excellent visibility.",
        opacity: 0.65, // 1 - 0.35
    },
    {
        vlt: 20,
        name: "Dark",
        description: "The classic factory-tint look. excellent heat rejection and high privacy. Often used on rear windows.",
        opacity: 0.8, // 1 - 0.20
    },
    {
        vlt: 5,
        name: "Limo",
        description: "Maximum privacy and heat rejection. Darkest available tint, providing near-complete interior concealment.",
        opacity: 0.95, // 1 - 0.05
    }
];

const TintDarknessVisualizer: React.FC = () => {
    const [selectedVlt, setSelectedVlt] = useState(20);

    const selectedData = DARKNESS_LEVELS.find(d => d.vlt === selectedVlt) || DARKNESS_LEVELS[1];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Text and Controls */}
                    <div className="w-full lg:w-5/12">
                        <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                            Shade Selection Guide
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic mb-8">
                            Choose Your <br />
                            <span className="text-brightBlue">Darkness</span>
                        </h2>

                        <p className="text-navy/60 text-lg mb-10 leading-relaxed font-medium">
                            Window tint is measured by Visible Light Transmission (VLT). The lower the percentage, the darker the tint. Select a level to see the difference.
                        </p>

                        <div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:gap-4 mb-6 lg:mb-10">
                            {DARKNESS_LEVELS.map((level) => (
                                <button
                                    key={level.vlt}
                                    onClick={() => setSelectedVlt(level.vlt)}
                                    className={`group relative flex flex-col lg:flex-row items-center justify-center lg:justify-between p-3 lg:p-6 rounded-xl lg:rounded-2xl border-2 transition-all duration-500 overflow-hidden ${selectedVlt === level.vlt
                                        ? 'bg-navy border-navy text-white shadow-2xl scale-[1.02]'
                                        : 'bg-white border-navy/5 text-navy hover:border-navy/20'
                                        }`}
                                >
                                    <div className="relative z-10 text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                                            <span className={`text-xl lg:text-4xl font-black italic ${selectedVlt === level.vlt ? 'text-white' : 'text-navy'}`}>
                                                {level.vlt}%
                                            </span>
                                            <span className={`text-[8px] lg:text-sm font-bold uppercase tracking-widest ${selectedVlt === level.vlt ? 'text-brightBlue' : 'text-navy/40'}`}>
                                                {level.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative z-10 hidden lg:block">
                                        {selectedVlt === level.vlt ? (
                                            <Eye className="text-brightBlue animate-pulse" size={24} />
                                        ) : (
                                            <EyeOff className="text-navy/20 group-hover:text-navy/40 transition-colors" size={24} />
                                        )}
                                    </div>

                                    {/* Hover/Active background effect */}
                                    {selectedVlt !== level.vlt && (
                                        <div className="absolute inset-0 bg-navy/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* <div className="bg-brightBlue/5 rounded-2xl p-6 border border-brightBlue/10">
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <Info className="text-brightBlue" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy uppercase text-sm tracking-widest mb-2">Expert Tip</h4>
                                    <p className="text-navy/70 text-sm leading-relaxed">
                                        Tinted glass looks darker from the outside than the inside. Our high-performance films maintain exceptional clarity from within, even at {selectedVlt}% VLT.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side: Visualizer */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-6">
                        <div className="relative aspect-[16/9] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-navy/5">
                            {/* Daytime Road Background */}
                            <img
                                src="/assets/launceston.jpg"
                                alt="Scenic road background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Car Window Overlay (Static Structure) */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <svg viewBox="0 0 800 450" className="w-full h-full">
                                    <defs>
                                        <mask id="windowMask">
                                            <rect x="0" y="0" width="800" height="450" fill="white" />
                                            {/* Dynamic window area that gets tinted */}
                                            <path d="M100,50 L700,50 Q750,50 750,100 L750,350 Q750,400 700,400 L100,400 Q50,400 50,350 L50,100 Q50,50 100,50 Z" fill="black" />
                                        </mask>
                                    </defs>
                                    {/* The Frame of the window */}
                                    <path d="M100,50 L700,50 Q750,50 750,100 L750,350 Q750,400 700,400 L100,400 Q50,400 50,350 L50,100 Q50,50 100,50 Z"
                                        fill="none"
                                        stroke="#0a192f"
                                        strokeWidth="12"
                                    />
                                </svg>
                            </div>

                            {/* The Dynamic Tint Layer */}
                            <div
                                className="absolute inset-x-[50px] inset-y-[50px] z-10 transition-all duration-1000 ease-in-out"
                                style={{
                                    backgroundColor: 'rgba(10, 25, 47, ' + selectedData.opacity + ')',
                                    maskImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwLDUwIEw3MDAsNTAgUTc1MCw1MCA3NTAsMTAwIEw3NTAsMzUwIEE3NTAsNDAwIDcwMCw0MDAgTDEwMCw0MDAgUTUwLDQwMCA1MCwzNTAgTDUwLDEwMCBRNTAsNTAgMTAwLDUwIFoiIGZpbGw9ImJsYWNrIiAvPjwvc3ZnPg==")',
                                    WebkitMaskImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwLDUwIEw3MDAsNTAgUTc1MCw1MCA3NTAsMTAwIEw3NTAsMzUwIEA3NTAsNDAwIDcwMCw0MDAgTDEwMCw0MDAgUTUwLDQwMCA1MCwzNTAgTDUwLDEwMCBRNTAsNTAgMTAwLDUwIFoiIGZpbGw9ImJsYWNrIiAvPjwvc3ZnPg==")',
                                    maskSize: '100% 100%',
                                    WebkitMaskSize: '100% 100%'
                                }}
                            >
                                {/* Highlights/Gloss on the tint */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                            </div>

                            {/* Interior reflection or details */}
                            <div className="absolute bottom-10 right-10 z-30 flex flex-col items-end">
                                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white">
                                    <span className="text-navy font-black italic text-xl">{selectedVlt}% VLT</span>
                                </div>
                            </div>
                        </div>

                        {/* Description of current level */}
                        <div className="bg-navy rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
                            {/* Animated grid background */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-1 bg-brightBlue rounded-full" />
                                    <span className="text-brightBlue font-bold uppercase tracking-widest text-xs">Series Feature</span>
                                </div>
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">
                                    {selectedData.name} Grade
                                </h3>
                                <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                                    {selectedData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TintDarknessVisualizer;
