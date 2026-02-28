import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACTS } from '@/constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Automotive Tinting',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    filmType: 'Ceramic',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace with your Web3Forms Access Key
    const accessKey = "2c925ff3-9999-4404-ad32-f4a932913ccc";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New Lead from ${formData.name} - Pixel & Tint`,
          from_name: "Pixel & Tint Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Automotive Tinting',
          vehicleMake: '',
          vehicleModel: '',
          vehicleYear: '',
          filmType: 'Ceramic',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-4 mb-8 italic uppercase tracking-tight">
              Let's Upgrade Your <br /> Windows Today.
            </h3>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
              Have a question about our services or need an accurate quote? Fill out the form and our Launceston team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <a href="tel:0450216892" className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-white">{CONTACTS.phone}</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-white">{CONTACTS.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Car Drop Off</p>
                  <p className="text-lg font-bold text-white">{CONTACTS.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="bg-brightBlue p-3 rounded-xl text-white shadow-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Hours</p>
                  <p className="text-lg font-bold text-white">{CONTACTS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] overflow-hidden h-64 shadow-2xl border border-white/10 bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://maps.google.com/maps?q=Melbourne%20Street,%20Launceston&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brightBlue/10 blur-[80px] rounded-full pointer-events-none" />

            {submitStatus === 'success' ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
                <div className="bg-brightBlue/20 p-6 rounded-full">
                  <CheckCircle2 size={64} className="text-brightBlue animate-bounce" />
                </div>
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Quote Request Sent!</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will review your details and get back to you shortly with an accurate quote.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-white text-navy font-black px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-brightBlue hover:text-white transition-all shadow-xl"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Phone Number</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0412 345 678"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all appearance-none cursor-pointer"
                  >
                    <option value="Automotive Tinting" className="bg-navy">Automotive Tinting</option>
                    <option value="Residential Tinting" className="bg-navy">Residential Tinting</option>
                  </select>
                </div>
                {formData.service === 'Automotive Tinting' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="vehicleMake" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Vehicle Make</label>
                        <input
                          id="vehicleMake"
                          required
                          type="text"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          placeholder="Toyota"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="vehicleModel" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Model</label>
                        <input
                          id="vehicleModel"
                          required
                          type="text"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="Camry"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="vehicleYear" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Vehicle Year</label>
                        <input
                          id="vehicleYear"
                          required
                          type="text"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="2022"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="filmType" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Film Type</label>
                        <select
                          id="filmType"
                          required
                          name="filmType"
                          value={formData.filmType}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                        >
                          <option value="Carbon" className="bg-navy">Carbon</option>
                          <option value="Ceramic" className="bg-navy">Ceramic</option>
                          <option value="Nano Ceramic" className="bg-navy">Nano Ceramic</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="message" className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Additional details</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brightBlue transition-all placeholder:text-white/20"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-brightBlue hover:bg-white hover:text-navy text-white font-black py-5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-xl group/submit overflow-hidden relative ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Request Free Quote</span>
                      <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-white/20 text-[10px] uppercase tracking-widest mt-6 font-mono">
                  Secure SSL Encrypted • Privacy Guaranteed
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;