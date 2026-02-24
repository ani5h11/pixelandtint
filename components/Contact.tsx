import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-brightBlue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-lightAqua/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-white">
            <span className="text-brightBlue font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-8 italic uppercase tracking-tight">
              Let's Upgrade Your <br /> Windows Today.
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
              Have a question about our services or need an accurate quote? Fill out the form and our Launceston team will get back to you within 24 hours.
            </p>

            {<div className="space-y-6">
              <a href="tel:+61312345678" className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-white">0450 216 892</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-white">hello@pixelandtint.com.au</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Car Drop Off</p>
                  <p className="text-lg font-bold text-white">Melbourne Street, Launceston TAS 7249</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Hours</p>
                  <p className="text-lg font-bold text-white">Appointments Only</p>
                </div>
              </div>
            </div>}

            {<div className="mt-12 rounded-[2rem] overflow-hidden h-64 shadow-2xl border border-white/10 bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://maps.google.com/maps?q=Melbourne%20Street,%20Launceston&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>}
          </div>

          <div className="bg-white/5 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brightBlue/10 blur-[80px] rounded-full pointer-events-none" />

            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="0412 345 678"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Service Required</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all appearance-none cursor-pointer">
                  <option className="bg-navy">Automotive Tinting</option>
                  <option className="bg-navy">Residential Tinting</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Vehicle Make</label>
                <input
                  type="text"
                  placeholder="Toyota"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Vehicle Model and Year</label>
                <input
                  type="text"
                  placeholder="Camry 2022"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brightBlue hover:bg-white hover:text-navy text-white font-black py-5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-xl group/submit overflow-hidden relative"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Request Free Quote</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-white/20 text-[10px] uppercase tracking-widest mt-6 font-mono">
                Secure SSL Encrypted • Privacy Guaranteed
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;