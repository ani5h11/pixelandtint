import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sun, ThermometerSnowflake, UserCheck, Eye, Zap } from 'lucide-react';
import { usePageMeta } from './seo';

const TypesOfTint = lazy(() => import('./TypesOfTint'));
const TintDarknessVisualizer = lazy(() => import('./TintDarknessVisualizer'));

const SectionLoader = () => (
    <div className="flex h-64 w-full items-center justify-center bg-navy">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-brightBlue"></div>
    </div>
);

const AUTO_BENEFITS = [
    {
        title: 'Skin Cancer Defense',
        desc: 'With Australia\'s harsh UV levels, our films provide SPF 1000+ protection, blocking 99.9% of rays that cause skin aging and cancer.',
        icon: <Sun className="w-6 h-6" />,
        metric: 'SPF 1000+ Rating',
    },
    {
        title: 'Total Heat Rejection',
        desc: 'Block the "burning" sensation of direct sunlight. Ceramic particles filter out infrared heat without making the glass dark.',
        icon: <ThermometerSnowflake className="w-6 h-6" />,
        metric: '92% Heat Block',
    },
    {
        title: 'Interior Preservation',
        desc: 'Stop your leather from cracking and dash from warping. Our film pays for itself by maintaining your vehicle\'s resale value.',
        icon: <UserCheck className="w-6 h-6" />,
        metric: '90% Fade Reduction',
    },
    {
        title: 'Anti-Shatter Security',
        desc: 'In an accident or attempted break-in, the film holds broken glass together, preventing flying shards from injuring passengers.',
        icon: <ShieldCheck className="w-6 h-6" />,
        metric: 'Safety Barrier',
    },
    {
        title: 'Instant Eye Relief',
        desc: 'Eliminate blinding glare from the sun and oncoming LED headlights. Drive safer with significantly reduced eye fatigue.',
        icon: <Eye className="w-6 h-6" />,
        metric: '80% Less Glare',
    },
    {
        title: 'EV Range Extension',
        desc: 'Reduce AC load on EVs by keeping the cabin naturally cool. Our ceramic films help preserve battery for extra kilometres on the road.',
        icon: <Zap className="w-6 h-6" />,
        metric: 'Up to 30% Savings',
    },
];

const AutomotiveTintingPage: React.FC = () => {
    usePageMeta({
        title: 'Automotive Window Tinting Launceston | Car Tint from $249 — Pixel & Tint',
        description: 'Professional automotive window tinting in Launceston, Tasmania. Classic, Ceramic & Nano Ceramic car tint films starting from $249. UV protection, heat rejection & lifetime warranty.',
        canonical: 'https://pixelandtint.com.au/services/automotive-tinting',
    });
    useEffect(() => {

        // JSON-LD structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Automotive Window Tinting",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Pixel and Tint",
                "url": "https://pixelandtint.com.au"
            },
            "areaServed": {
                "@type": "City",
                "name": "Launceston"
            },
            "description": "Professional automotive window tinting services in Launceston, Tasmania. Offering Classic, Ceramic, and Nano Ceramic tint films with lifetime warranty.",
            "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "249",
                "highPrice": "449",
                "priceCurrency": "AUD"
            }
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
                        src="/assets/whitesuv.jpg"
                        alt="Professional automotive window tinting on a white SUV"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
                    <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                        Premium Auto Film
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
                        Automotive <br />
                        <span className="text-lightAqua">Window Tinting</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mb-10">
                        Ultra-clear, heat-rejecting film designed for Tasmania's roads. Car tinting starts from <strong className="text-white">$249</strong> for Classic, <strong className="text-white">$399</strong> for Ceramic, and <strong className="text-white">$449</strong> for Nano Ceramic.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-brightBlue hover:bg-lightAqua text-white hover:text-navy rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                        >
                            Get a Free Quote
                        </Link>
                        <a
                            href="#tint-tiers"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all border border-white/20"
                        >
                            Compare Films
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brightBlue font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block">
                            Why Tint Your Vehicle
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic">
                            Built for <span className="text-brightBlue">Australian Roads</span>
                        </h2>
                    </div>

                    <div className="mb-16">
                        <p className="text-lg text-navy/80 leading-relaxed transition-colors px-10">
                            <span className="font-black text-navy italic">
                                We provide a full range of automotive window tinting services for drivers in Launceston and surrounding suburbs:</span>

                            <br />1. Sedans, hatchbacks, SUVs, utes, 4x4s, vans, and light commercial vehicles.
                            <br />2. Standard dyed films through to premium ceramic and nano-ceramic tints.
                            <br />3. Tint options for privacy, performance, and aesthetic styling.
                            <br />4. Removal of old, bubbled, or purple window tint and full re-tint packages.
                            <br />5. Fleet and trade vehicle tinting with consistent finish and fast turnaround.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AUTO_BENEFITS.map((benefit, i) => (
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

            {/* Types of Tint Section */}
            <div id="tint-tiers">
                <Suspense fallback={<SectionLoader />}>
                    <TypesOfTint />
                </Suspense>
            </div>

            {/* Darkness Visualizer */}
            <Suspense fallback={<SectionLoader />}>
                <TintDarknessVisualizer />
            </Suspense>

            {/* Pricing CTA */}
            <section className="bg-navy py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                        Lifetime Warranty Included
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
                        Ready to <span className="text-lightAqua">Upgrade?</span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        Book your appointment today. Same-day service available for most sedans and hatchbacks. All installations include a lifetime warranty on materials and workmanship.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-brightBlue hover:bg-lightAqua text-white hover:text-navy rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                        >
                            Book Now
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

export default AutomotiveTintingPage;
