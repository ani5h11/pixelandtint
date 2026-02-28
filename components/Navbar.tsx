
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('01');

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();

    if (!isHomePage) {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky navbar
        behavior: 'smooth'
      });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, [isHomePage, navigate]);

  useEffect(() => {
    if (isHomePage && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [isHomePage, location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHomePage) return;

      const sections = [
        { id: 'hero', label: '01' },
        { id: 'benefits', label: '02' },
        { id: 'types', label: '03' },
        { id: 'about', label: '04' },
        { id: 'services', label: '05' },
        { id: 'testimonials', label: '06' },
        { id: 'contact', label: '07' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].label);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const steps = ['01', '02', '03', '04', '05', '06', '07'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || !isHomePage ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-10 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Step Indicator Logo */}
        <div className="flex items-center">

          <a
            href="/#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            className={`flex items-center space-x-4 transition-all hover:opacity-80 group ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`}
          >

            <div className="w-14 h-14 flex items-center justify-center font-black text-sm bg-white/5 backdrop-blur-md group-hover:scale-110 transition-transform">
              {/* {isHomePage ? activeSection : 'FAQ'} */}
              <img src="/assets/mainLogo.webp" alt="Logo" className="w-12 h-12 object-fit rounded-sm flex-shrink-0" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight uppercase italic">Pixel & Tint</span>
                {isHomePage && (
                  <div className="flex gap-0.5">
                    {steps.map(s => (
                      <div key={s} className={`w-2 h-1 bg-current transition-opacity ${parseInt(activeSection) >= parseInt(s) ? 'opacity-100' : 'opacity-20'}`} />
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-80 mt-1">
                {isHomePage ? `Phase ${activeSection}` : 'Info Center'} • Launceston
              </span>
            </div>
          </a>
        </div>

        {/* Floating Navigation Menu */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-1.5 shadow-2xl">
          <div className="flex items-center bg-white/90 rounded-xl px-1.5 py-1 shadow-sm border border-navy/5">
            <a
              href="/#benefits"
              onClick={(e) => scrollTo(e, 'benefits')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${isHomePage && activeSection === '02' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Benefits
            </a>
            <a
              href="/#types"
              onClick={(e) => scrollTo(e, 'types')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${isHomePage && activeSection === '03' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Tech
            </a>
            <a
              href="/#about"
              onClick={(e) => scrollTo(e, 'about')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${activeSection === '04' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Process
            </a>
            <a
              href="/#services"
              onClick={(e) => scrollTo(e, 'services')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${isHomePage && activeSection === '05' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Services
            </a>
            <a
              href="/#testimonials"
              onClick={(e) => scrollTo(e, 'testimonials')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${isHomePage && activeSection === '06' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Reviews
            </a>
            <a
              href="/#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-lg ${isHomePage && activeSection === '07' ? 'text-brightBlue bg-brightBlue/5' : 'text-navy/40 hover:text-navy hover:bg-navy/5'
                }`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full h-[calc(100vh-5rem)] bg-navy z-[150] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <a href="/#hero" onClick={(e) => scrollTo(e, 'hero')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">HOME</a>
          <a href="/#benefits" onClick={(e) => scrollTo(e, 'benefits')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">BENEFITS</a>
          <a href="/#types" onClick={(e) => scrollTo(e, 'types')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">TECH</a>
          <a href="/#about" onClick={(e) => scrollTo(e, 'about')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">PROCESS</a>
          <a href="/#services" onClick={(e) => scrollTo(e, 'services')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">SERVICES</a>
          <a href="/#testimonials" onClick={(e) => scrollTo(e, 'testimonials')} className="text-3xl font-black text-white italic tracking-tighter uppercase hover:text-brightBlue transition-colors">REVIEWS</a>
          <div className="h-px w-20 bg-brightBlue/30" />
          <a href="/#contact" onClick={(e) => scrollTo(e, 'contact')} className="text-2xl font-black text-brightBlue uppercase tracking-widest hover:text-white transition-colors">GET QUOTE</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
