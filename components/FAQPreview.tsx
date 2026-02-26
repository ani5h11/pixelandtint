import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FAQS } from '../constants';

const FAQPreview: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    // Take only the first 3 FAQs
    const previewFaqs = FAQS.slice(0, 3);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-preview" className="py-24 bg-white relative overflow-hidden">
            {/* Background Matrix/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <span className="text-brightBlue font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 inline-block">
                            Info Center
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4 md:mb-12 tracking-tighter uppercase italic">
                            Common <br />
                            <span className="text-brightBlue">Questions</span>
                        </h2>

                        <p className="mt-6 md:mt-8 text-navy/60 text-base md:text-xl font-medium leading-relaxed max-w-xl">
                            Curious about our process? Here are the top questions we get asked by our customers.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/faq')}
                        className="group flex items-center space-x-2 px-6 py-3 bg-navy/5 hover:bg-navy/10 rounded-xl transition-all font-bold text-navy uppercase tracking-wider mb-2 md:mb-0"
                    >
                        <span>View All Questions</span>
                        <ArrowRight className="w-5 mb-0.5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        {previewFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border border-navy/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-navy/5 shadow-lg' : 'bg-white hover:border-brightBlue/30'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brightBlue' : 'text-navy'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`p-1.5 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brightBlue text-white rotate-180' : 'bg-navy/5 text-navy group-hover:bg-brightBlue/10'}`}>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-navy/70 text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group">
                        <img
                            src="/assets/whitecar.png"
                            alt="Window Tinting Process"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Pure Protection</h3>
                            <p className="text-white/70">Expert window tinting delivered with precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQPreview;
