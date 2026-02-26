
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Progress: 0 to 1 over the first 1200px of scroll
  const progress = Math.min(scrollY / 1200, 1);

  // 1. Background Zoom Out: Starts at 1.5x and recedes to 1.0x
  const bgScale = 1.5 - (progress * 0.5);

  // 2. Section Transition: Receding Flipped Tab
  const recedeStart = 0.05;
  const recedeProgress = Math.max(0, (progress - recedeStart) / (1 - recedeStart));

  // Entire container shrinks to ~85% size to look like a flipped tab
  const containerScale = 1 - (recedeProgress * 0.15);
  const borderRadius = recedeProgress * 48;
  const translateY = recedeProgress * 80;
  const rotateX = recedeProgress * -6; // Perspective tilt for the "flipped" look

  // 3. Content Scaling
  const contentScale = 1 - (recedeProgress * 0.4);
  const contentOpacity = 1 - (recedeProgress * 1.6);

  return (
    <section id="hero" className="relative h-[200vh] bg-transparent">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden z-20 pointer-events-none" style={{ perspective: '1000px' }}>
        <div
          className="flipped-tab relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] bg-navy pointer-events-auto"
          style={{
            transform: `scale(${containerScale}) translateY(${translateY}px) rotateX(${rotateX}deg)`,
            borderRadius: `${borderRadius}px`,
            width: '100%',
            maxWidth: '100vw',
            height: '100dvh',
            transformOrigin: 'top center',
            willChange: 'transform, border-radius',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Receding Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `scale(${bgScale})`,
              backgroundImage: `url('/assets/heroimage.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-navy/90" />
          </div>

          {/* Receding Content Overlay */}
          <div
            className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col justify-center h-full pt-20 md:pt-32 transition-all duration-150"
            style={{
              transform: `scale(${contentScale})`,
              // opacity: Math.max(0, contentOpacity),
              transformOrigin: 'center center'
            }}
          >
            <h1 className="text-[20vw] sm:text-[15vw] md:text-[11.4rem] font-black text-white leading-[0.85] md:leading-[0.8] mb-8 md:mb-12 tracking-tighter uppercase italic">
              Get <br />
              <span className="text-brightBlue">Tinted.</span>
            </h1>
            <span className="text-white font-black uppercase tracking-[0.5em] text-[12px] mb-4 md:mb-6 inline-block">
              Pixel Perfect Tinting
            </span>
            <p className="text-base md:text-3xl text-white/90 max-w-3xl mx-auto mb-10 md:mb-16 font-medium tracking-tight leading-snug">
              Specialized window films for Australia's highest standards. Premium automotive window tinting for ultimate privacy, UV protection, and a cooler ride.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto group relative px-8 py-5 md:px-14 md:py-7 bg-brightBlue text-white font-black rounded-full overflow-hidden transition-all text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
              >
                <span className="relative z-10">Request Quote</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              <a
                href="#benefits"
                className="w-full sm:w-auto px-8 py-5 md:px-14 md:py-7 bg-white/5 backdrop-blur-lg text-white border border-white/20 font-black rounded-full transition-all text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white/10 text-center"
              >
                Why Tint?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
