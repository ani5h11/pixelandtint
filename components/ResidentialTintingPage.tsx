import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, ThermometerSnowflake, Eye, Zap, ShieldCheck, Home } from 'lucide-react';
import { usePageMeta } from './seo';

const RESIDENTIAL_BENEFITS = [
    {
        title: 'Energy Cost Savings',
        desc: 'Reduce solar heat gain through your windows by up to 60%. Your home stays cooler in summer and warmer in winter, cutting energy bills significantly.',
        icon: <Zap className="w-6 h-6" />,
        metric: 'Up to 30% Savings',
    },
    {
        title: 'UV Protection',
        desc: 'Block 99.9% of harmful UV rays that cause furniture fading, flooring damage, and skin cancer risk — even through your windows.',
        icon: <Sun className="w-6 h-6" />,
        metric: '99.9% UV Block',
    },
    {
        title: 'Privacy Enhancement',
        desc: 'Enjoy natural daylight without sacrificing your privacy. Our films provide one-way visibility during the day so you can see out without being seen.',
        icon: <Home className="w-6 h-6" />,
        metric: 'Daytime Privacy',
    },
    {
        title: 'Glare Reduction',
        desc: 'Eliminate harsh glare on screens and living spaces. Work from home comfortably with reduced eye strain and improved screen visibility.',
        icon: <Eye className="w-6 h-6" />,
        metric: '80% Less Glare',
    },
    {
        title: 'Anti-Shatter Safety',
        desc: 'Window film holds shattered glass together during storms, accidents, or break-in attempts — adding an extra layer of home security.',
        icon: <ShieldCheck className="w-6 h-6" />,
        metric: 'Safety Barrier',
    },
    {
        title: 'Heat Rejection',
        desc: 'Keep rooms cool without heavy curtains or blinds. Our films reject infrared heat while maintaining your view and natural light.',
        icon: <ThermometerSnowflake className="w-6 h-6" />,
        metric: '92% Heat Block',
    },
];

const ResidentialTintingPage: React.FC = () => {
    usePageMeta({
        title: 'Residential Window Tinting Launceston | Home Tint — Pixel & Tint',
        description: 'Professional residential window tinting in Launceston, Tasmania. Reduce heat, block UV rays, enhance privacy and cut energy costs. Lifetime warranty on all installations.',
        canonical: 'https://pixelandtint.com.au/services/residential-tinting',
    });
    useEffect(() => {

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Residential Window Tinting",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Pixel and Tint",
                "url": "https://pixelandtint.com.au"
            },
            "areaServed": {
                "@type": "City",
                "name": "Launceston"
            },
            "description": "Professional residential window tinting services in Launceston, Tasmania. Energy-efficient solutions for homes with lifetime warranty."
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/window.avif"
                        alt="Residential window tinting for modern homes"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
                    <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                        Home & Living
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
                        Residential <br />
                        <span className="text-lightAqua">Window Tinting</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mb-10">
                        Keep your home cool in summer and warm in winter. Enhance privacy without sacrificing your view. Professional installation with a lifetime warranty.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-brightBlue hover:bg-lightAqua text-white hover:text-navy rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                        >
                            Get a Free Quote
                        </Link>
                        <a
                            href="#benefits"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all border border-white/20"
                        >
                            See Benefits
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brightBlue font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">
                            Why Tint Your Home
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic">
                            Comfort <span className="text-brightBlue">& Protection</span>
                        </h2>

                        <p className="text-lg text-navy/80 leading-relaxed transition-colors px-10 mt-10 text-left">
                            Protect your Launceston home with professional residential window tinting that blocks up to 99% of harmful UV rays, reduces heat buildup during hot Tasmanian summers, and helps lower energy bills by minimising reliance on air conditioning.

                            <br />Our high-quality films enhance privacy, deter glare on screens and furniture, and provide a subtle aesthetic upgrade that complements any home style—from modern apartments in the CBD to family houses in Prospect or Kings Meadows.

                            <br />Installed quickly and cleanly by local experts, residential tinting offers long-term protection meeting Australian standards for light transmission and safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {RESIDENTIAL_BENEFITS.map((benefit, i) => (
                            <div
                                key={i}
                                className="group bg-navy/[0.03] hover:bg-navy rounded-3xl p-8 transition-all duration-500 border border-navy/5 hover:border-navy"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-brightBlue/10 group-hover:bg-brightBlue/20 p-3 rounded-xl transition-colors">
                                        {React.cloneElement(benefit.icon as React.ReactElement<any>, {
                                            className: 'text-brightBlue'
                                        })}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-navy/30 group-hover:text-white/40 transition-colors">
                                        {benefit.metric}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black text-navy group-hover:text-white uppercase italic tracking-tight mb-2 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-navy/60 group-hover:text-white/70 leading-relaxed transition-colors">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-navy/[0.03] py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brightBlue font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">
                            Simple Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic">
                            How It <span className="text-brightBlue">Works</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { step: '01', title: 'Free Consultation', desc: 'We assess your windows, discuss your goals (privacy, heat, UV), and recommend the best film.' },
                            { step: '02', title: 'Professional Install', desc: 'Our trained technicians install the film with precision. Most homes are completed in a single visit.' },
                            { step: '03', title: 'Enjoy the Results', desc: 'Immediate comfort improvement. Lower bills, better privacy, and a lifetime warranty for peace of mind.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-brightBlue/10 rounded-2xl flex items-center justify-center">
                                    <span className="text-brightBlue font-black text-2xl italic">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-black text-navy uppercase italic tracking-tight mb-3">{item.title}</h3>
                                <p className="text-navy/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-navy py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                        Lifetime Warranty Included
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
                        Transform Your <span className="text-lightAqua">Home</span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        Get a free, no-obligation quote for your home. We service Launceston, northern Tasmania, and surrounding areas with professional residential window tinting.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-brightBlue hover:bg-lightAqua text-white hover:text-navy rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            to="/faq"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all border border-white/20"
                        >
                            View FAQ
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
                        <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
                            <img src="/assets/warrantylogo.webp" alt="Lifetime Warranty" loading="lazy" className="w-full h-full object-fit rounded-xl" />
                        </div>
                        <div className="w-12 h-14 bg-white/5 rounded-full flex items-center justify-center">
                            <img src="/assets/blackarmour.webp" alt="Black Armour Films" loading="lazy" className="w-full h-full object-fit rounded-xl" />
                        </div>
                        <div className="w-12 h-14 bg-white/5 rounded-full flex items-center justify-center">
                            <img src="/assets/Skincaref.webp" alt="Skin Cancer Foundation" loading="lazy" className="w-full h-full object-fit rounded-xl" />
                        </div>
                        <div className="w-36 h-10 bg-white/5 rounded-full flex items-center justify-center">
                            <img src="/assets/arpansa.webp" alt="ARPANSA Certified" loading="lazy" className="w-full h-full object-fit rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ResidentialTintingPage;
