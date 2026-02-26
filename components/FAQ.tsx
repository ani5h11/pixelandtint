import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl md:text-8xl font-black text-navy mb-4 tracking-tight italic">
                    FREQUENTLY ASKED <span className="text-brightBlue">QUESTIONS</span>
                </h1>
                <p className="text-xl text-navy/60 mb-16 max-w-2xl font-light">
                    Everything you need to know about our premium tinting services, processes, and aftercare.
                </p>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-navy/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-navy/5 shadow-lg' : 'bg-white hover:border-brightBlue/30'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? 'text-brightBlue' : 'text-navy'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brightBlue text-white rotate-180' : 'bg-navy/5 text-navy group-hover:bg-brightBlue/10'}`}>
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-navy/70 text-lg leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-navy rounded-3xl text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brightBlue/20 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-white/60 mb-8 max-w-lg mx-auto">
                            Our team is ready to help with any specific queries you might have about your vehicle or home.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block px-8 py-4 bg-white text-navy font-black tracking-widest uppercase rounded-xl hover:scale-105 transition-transform"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
