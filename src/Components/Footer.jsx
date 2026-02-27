import { useState } from "react";
import { Phone, Clock, Mail, MapPin, ArrowUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState({
    explore: true,
    areas: false,
    contact: false
  });

  const toggleSection = (sectionKey) => {
    // UPDATED: Now allows toggling on anything smaller than 'lg' (1024px)
    if (window.innerWidth < 1024) {
      setOpenSections(prev => ({
        ...prev,
        [sectionKey]: !prev[sectionKey]
      }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SectionHeader = ({ title, sectionKey }) => (
    <button 
      onClick={() => toggleSection(sectionKey)}
      // UPDATED: border-b removed only at lg:
      className="w-full flex items-center justify-between mb-4 lg:mb-6 border-b border-white/10 lg:border-none pb-4 lg:pb-0 group"
    >
      <h4 className="text-[#F9D759] font-bold uppercase tracking-widest text-sm text-left">
        {title}
      </h4>
      <ChevronDown 
        size={18} 
        // UPDATED: chevron hidden only at lg:
        className={`lg:hidden transition-transform duration-300 text-slate-400 ${openSections[sectionKey] ? 'rotate-180' : ''}`} 
      />
    </button>
  );

  return (
    <footer className="bg-[#243453] text-white pt-12 pb-12 sm:pb-8 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mb-12 items-start">
          
          {/* Column 1: Brand & Bio - No accordion needed here */}
          <div className="flex flex-col h-full lg:items-center">
            <div className="space-y-6 flex items-center justify-center flex-col h-full">
              <Link to="/" className="flex items-center gap-2">
                <img src="/images/action roofing text.png" className="w-[80%] mx-auto" alt="Text" />
              </Link>
              <p className="text-slate-300 max-sm:text-sm text-base text-center leading-relaxed">
                Specialist roofing contractors serving Brighton & Hove since 2007. 
                Family-run and dedicated to quality.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:items-center">
            <div className="w-full lg:w-fit text-left">
              <SectionHeader title="Explore" sectionKey="explore" />
              {/* UPDATED: max-h-full logic moved to lg: */}
              <div className={`overflow-hidden transition-all duration-300 ${openSections.explore ? 'max-h-60' : 'max-h-0 lg:max-h-full'}`}>
                <ul className="space-y-4 text-slate-300 text-sm pb-6 lg:pb-0">
                  <li><Link to="/" className="hover:text-[#F9D759] transition-all inline-block">Home</Link></li>
                  <li><Link to="/about-us" className="hover:text-[#F9D759] transition-all inline-block">About Our Team</Link></li>
                  <li><Link to="/services" className="hover:text-[#F9D759] transition-all inline-block">Roofing Services</Link></li>
                  <li><Link to="/gallery" className="hover:text-[#F9D759] transition-all inline-block">Project Gallery</Link></li>
                  <li><Link to="/contact-us" className="hover:text-[#F9D759] transition-all inline-block">Get a Quote</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Service Areas */}
          <div className="flex flex-col lg:items-center">
            <div className="w-full lg:w-fit text-left">
              <SectionHeader title="Service Areas" sectionKey="areas" />
              <div className={`overflow-hidden transition-all duration-300 ${openSections.areas ? 'max-h-[500px]' : 'max-h-0 lg:max-h-full'}`}>
                <ul className="grid grid-cols-2 gap-y-3 text-slate-300 text-sm pb-6 lg:pb-0">
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Brighton</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Hove</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Sussex</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Portslade</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Patcham</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Rottingdean</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Saltdean</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Falmer</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Lancing</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-[#F9D759]" /> Newhaven</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col lg:items-center">
            <div className="w-full lg:w-fit text-left">
              <SectionHeader title="Contact Us" sectionKey="contact" />
              <div className={`overflow-hidden transition-all duration-300 ${openSections.contact ? 'max-h-80' : 'max-h-0 lg:max-h-full'}`}>
                <div className="space-y-4 pb-6 lg:pb-0">
                  <a href="tel:07768981913" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="bg-white/10 p-2 rounded group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Call for a quote</p>
                      <p className="text-sm font-bold">07768 981913</p>
                    </div>
                  </a>
                  <a href="mailto:info@actionroofingbrighton.co.uk" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="bg-white/10 p-2 rounded group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Email us</p>
                      <p className="text-sm font-bold truncate max-w-[200px] xl:max-w-none">info@actionroofingbrighton.co.uk</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="bg-white/10 p-2 rounded shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Hours</p>
                      <p className="text-sm font-bold">Mon-Sat: 8am-6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Action Roofing Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors group">
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;