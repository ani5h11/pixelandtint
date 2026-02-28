
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACTS } from '@/constants';


const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/assets/mainLogo.webp" alt="Logo" className="w-12 h-12 object-fit rounded-sm flex-shrink-0" />
              <span className="text-2xl font-bold tracking-tight uppercase">
                PIXEL & <span className="text-brightBlue">TINT</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Tasmania’s premier window tinting service. We combine precision craftsmanship with the latest film technology for unparalleled results. Affordable and professional window tinting services across Launceston and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACTS.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brightBlue transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CONTACTS.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brightBlue transition-colors">
                <Instagram size={20} />
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-lightAqua uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Automotive Tinting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Residential Tinting</a></li>
              {/* <li><a href="#services" className="hover:text-white transition-colors">Commercial Tinting</a></li> */}
              <li><a href="/terms" className="hover:text-white transition-colors">Warranty Information</a></li>
              {/* <li><a href="#services" className="hover:text-white transition-colors">Safety & Security</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-lightAqua uppercase tracking-widest text-sm">Contact Details</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center space-x-3">
                <span className="text-brightBlue font-bold">P:</span>
                <span>{CONTACTS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brightBlue font-bold">E:</span>
                <span>{CONTACTS.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brightBlue font-bold">A:</span>
                <span>{CONTACTS.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest space-y-4 md:space-y-0">
          <p>© 2026 Pixel & Tint. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
