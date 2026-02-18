import { Phone, Clock, Mail, MapPin, Hammer, Facebook, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* Changed pb-8 to pb-28 on mobile (sm:pb-8) to make room for the Get Quote bar */
    <footer className="bg-[#243453] text-white pt-12 pb-12 sm:pb-8 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/images/Action Roofing logo.jpg" 
                alt="Action Roofing Logo" 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialist roofing contractors serving Brighton & Hove since 2007. 
              Family-run, fully insured, and dedicated to high-quality workmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#F9D759] hover:text-[#243453] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#F9D759] hover:text-[#243453] transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#F9D759] font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Our Team</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Roofing Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white hover:translate-x-1 transition-all inline-block">Project Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-white hover:translate-x-1 transition-all inline-block">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-[#F9D759] font-bold uppercase tracking-widest text-sm mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Brighton</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Hove</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Portslade</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Patcham</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Rottingdean</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Saltdean</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Woodingdean</li>
              <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Falmer</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[#F9D759] font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:07768981913" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="bg-white/10 p-2 rounded group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Call for a quote</p>
                  <p className="text-sm font-bold">07768 981913</p>
                </div>
              </a>
              <a href="mailto:info@actionroofingbrighton.co.uk" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="bg-white/10 p-2 rounded group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Email us</p>
                  <p className="text-sm font-bold">Contact Team</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/10 p-2 rounded">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Operating Hours</p>
                  <p className="text-sm font-bold">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Action Roofing Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;