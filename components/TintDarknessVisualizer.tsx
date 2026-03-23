import React, { useState } from 'react';
import { Eye, EyeOff, Info } from 'lucide-react';

// You can edit this path if the mask shape needs adjustment.
// Traced on a 800x450 canvas.
export const WINDOW_MASK_PATH = "M378,169 L377,169 L388,185 L389,184 L427,184 L483,181 L492,148 L453,144 L440,145 L428,146 L415,148 L406,150 L398,154 L391,158 L382,163 L377,168 Z M495,149 L496,149 L488,181 L573,175 L571,170 L565,166 L553,162 L533,156 L514,151 L497,148";

const getMaskEncoded = (path: string) => {
    const rawSvg = `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><path d="${path}" fill="black" /></svg>`;
    return `url('data:image/svg+xml,${encodeURIComponent(rawSvg)}')`;
};

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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic mb-8">
                            Choose Your <br />
                            <span className="text-brightBlue">Darkness</span>
                        </h2>

                        <p className="text-navy/80 text-lg mb-10 leading-relaxed font-medium">
                            Window tint is measured by Visible Light Transmission (VLT). The lower the percentage, the darker the tint. Select a level to see the difference.
                        </p>

                        <div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:gap-4 mb-6 lg:mb-10">
                            {DARKNESS_LEVELS.map((level) => (
                                <button
                                    key={level.vlt}
                                    onClick={() => setSelectedVlt(level.vlt)}
                                    className={`group relative flex flex-col lg:flex-row items-center justify-center lg:justify-between p-3 lg:p-6 rounded-xl lg:rounded-2xl border-2 transition-all duration-500 overflow-hidden ${selectedVlt === level.vlt
                                        ? 'bg-navy/90 border-navy/70 text-white shadow-2xl scale-[1.02]'
                                        : 'bg-white border-navy/5 text-navy hover:border-navy/20'
                                        }`}
                                >
                                    <div className="relative z-10 text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                                            <span className={`text-xl lg:text-4xl font-black italic ${selectedVlt === level.vlt ? 'text-white' : 'text-navy'}`}>
                                                {level.vlt}%
                                            </span>
                                            <span className={`text-[8px] lg:text-sm font-bold uppercase tracking-widest ${selectedVlt === level.vlt ? 'text-white' : 'text-navy/90'}`}>
                                                {level.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative z-10 hidden lg:block">
                                        {selectedVlt === level.vlt ? (
                                            <Eye className="text-navy animate-pulse" size={24} />
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
                        <div className="relative aspect-[16/9] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-navy/5 bg-gray-200">
                            {/* Daytime Road Background */}
                            <img
                                src="/assets/porsche tint visualiser.webp"
                                alt="Porsche 911 tint visualizer"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Brand Overlay */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 flex items-center gap-3 bg-navy/20 backdrop-blur-sm py-2 px-4 rounded-full border border-white/10">
                                <img src="/assets/mainLogo.webp" alt="Pixel & Tint Logo" className="h-5 md:h-6 w-auto" />
                                <span className="text-white font-black tracking-[0.2em] uppercase text-xs md:text-sm">Pixel & Tint</span>
                            </div>

                            {/* Car Window Overlay (Static Structure) */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <svg viewBox="0 0 800 450" className="w-full h-full">
                                    <defs>
                                        <mask id="windowMask">
                                            <rect x="0" y="0" width="800" height="450" fill="white" />
                                            {/* Dynamic window area that gets tinted */}
                                            <path d={WINDOW_MASK_PATH} fill="black" />
                                        </mask>
                                    </defs>
                                    {/* The Frame of the window */}
                                    <path d={WINDOW_MASK_PATH}
                                        fill="none"
                                        stroke="#131a23ff"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </div>

                            {/* The Dynamic Tint Layer */}
                            <div
                                className="absolute inset-0 z-10 transition-all duration-1000 ease-in-out"
                                style={{
                                    backgroundColor: 'rgba(10, 25, 47, ' + selectedData.opacity + ')',
                                    maskImage: getMaskEncoded(WINDOW_MASK_PATH),
                                    WebkitMaskImage: getMaskEncoded(WINDOW_MASK_PATH),
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
