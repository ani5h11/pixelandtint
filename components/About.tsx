
import React from 'react';

const About: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation & Preparation",
      description: "We help you choose the right film type, heat rejection & privacy level. Before installation, we thoroughly clean and prep each window to remove dust, debris, and contaminants. Proper preparation ensures a smooth, bubble-free finish that lasts for years.",
      image: "/assets/consultation.jpg",
      tag: "PHASE_01"
    },
    {
      id: 2,
      title: "Precision Custom Fit",
      description: "We specialize in precision hand cutting, carefully shaping the film to match the exact contours of your windows. Our attention to detail ensures every window is perfectly fitted — not rushed. No pre-cut gaps, just a factory-perfect finish.",
      image: "/assets/custom.jpg",
      tag: "PHASE_02"
    },
    {
      id: 3,
      title: "Quality Installation",
      description: "Once the film is cut, we professionally install it using advanced techniques to remove air and moisture, heat-shape curved glass, and secure clean edges. Our team conducts a final 360° inspection to ensure excellence.",
      image: "/assets/inspection.jpg",
      tag: "PHASE_03"
    }
  ];

  return (
    <section id="about" className="relative bg-canvas py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brightBlue font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">
            Our Workflow
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy leading-[0.85] tracking-tighter uppercase italic">
            Process <br />
            <span className="text-brightBlue">Perfection.</span>
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="space-y-12 md:space-y-24 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="sticky top-20 md:top-32 group"
              style={{
                zIndex: 10 + index,
                marginTop: index === 0 ? '0' : '-10vh', // Slight overlap pull
              }}
            >
              <div
                className="bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(5,14,60,0.12)] border border-navy/5 flex flex-col md:flex-row items-stretch min-h-[500px] transition-all duration-700 ease-out group-hover:-translate-y-2"
                style={{
                  // Subtle scale down for cards being stacked over
                  transform: `scale(${1 - (steps.length - 1 - index) * 0.02})`,
                  transformOrigin: 'top center'
                }}
              >

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent md:hidden" />
                  <div className="absolute top-8 left-8 bg-navy/90 backdrop-blur-md text-white px-4 py-2 text-[10px] font-black rounded-full border border-white/10 uppercase tracking-widest">
                    {step.tag}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
                  <div className="mb-6 md:mb-8">
                    <span className="text-brightBlue font-bold text-lg md:text-2xl mb-2 block">
                      0{step.id}.
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy leading-none uppercase italic tracking-tighter">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-navy/70 text-base md:text-xl leading-relaxed font-medium">
                    {step.description}
                  </p>

                  <div className="mt-10 md:mt-16 flex items-center gap-4 text-navy/30 group-hover:text-brightBlue transition-colors duration-500">
                    <div className="h-px flex-1 bg-current opacity-20" />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold">PIXEL_PRECISION</span>
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

export default About;
