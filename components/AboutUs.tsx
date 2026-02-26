import React from 'react';
import { Home, ShieldCheck, Truck, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-canvas py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brightBlue/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/assets/seaport.jpg"
                                alt="Seaport Launceston"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            {/* Overlay tag */}
                            <div className="absolute top-8 left-8 bg-navy text-white px-6 py-3 rounded-full shadow-xl border border-white/10 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-brightBlue animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Local Operation</span>
                            </div>

                            {/* Highlight card */}
                            {/* <div className="absolute bottom-10 -right-4 lg:-right-12 bg-white p-8 rounded-[2rem] shadow-2xl border border-navy/5 max-w-[280px] hidden sm:block">
                                <h4 className="text-navy font-black italic uppercase text-xl mb-2">Startup Spirit</h4>
                                <p className="text-navy/60 text-sm leading-relaxed font-medium">
                                    Freshly launched and local-first. We put extra care into every single car that enters our garage.
                                </p>
                            </div> */}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-brightBlue font-black uppercase tracking-[0.4em] text-[10px] mb-4 inline-block">
                            Our Story & Values
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-navy leading-[0.9] tracking-tighter uppercase italic mb-8">
                            High Quality. <br />
                            <span className="text-brightBlue">Home Grown.</span>
                        </h2>

                        <div className="space-y-8">
                            <p className="text-navy/70 text-lg leading-relaxed font-medium">
                                We've reimagined the mobile tinting model. Instead of excessive overhead costs for a fancy showroom, we operate directly from my home based location. This strategic choice allows us to pass 100% of those savings directly to you.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brightBlue/10 rounded-xl flex items-center justify-center mb-4">
                                        <Home className="text-brightBlue" size={24} />
                                    </div>
                                    <h3 className="text-navy font-black uppercase tracking-tight italic mb-2">Home based location</h3>
                                    <p className="text-navy/50 text-sm leading-relaxed">
                                        Customers bring their vehicles to us at our residential site, where we provide the same standard of workmanship and attention to detail as a dedicated workshop.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brightBlue/10 rounded-xl flex items-center justify-center mb-4">
                                        <Truck className="text-brightBlue" size={24} />
                                    </div>
                                    <h3 className="text-navy font-black uppercase tracking-tight italic mb-2">Pickup Available</h3>
                                    <p className="text-navy/50 text-sm leading-relaxed">
                                        Too busy? We can arrange a local pickup and drop-off for your vehicle.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brightBlue/10 rounded-xl flex items-center justify-center mb-4">
                                        <ShieldCheck className="text-brightBlue" size={24} />
                                    </div>
                                    <h3 className="text-navy font-black uppercase tracking-tight italic mb-2">Maximum Value</h3>
                                    <p className="text-navy/50 text-sm leading-relaxed">
                                        Professional grade films and finish without the dealership price tag.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brightBlue/10 rounded-xl flex items-center justify-center mb-4">
                                        <Users className="text-brightBlue" size={24} />
                                    </div>
                                    <h3 className="text-navy font-black uppercase tracking-tight italic mb-2">Local Support</h3>
                                    <p className="text-navy/50 text-sm leading-relaxed">
                                        As a new local business, every client becomes part of our founding story.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-navy/5">
                                <p className="text-navy/40 font-bold uppercase tracking-widest text-[10px]">
                                    Thank you for supporting local startups
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
