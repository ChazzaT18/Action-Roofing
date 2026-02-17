import { Phone, MessageSquareMore } from "lucide-react";

const ContactHome = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-10" id="contact-form">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Final CTA Text - Slightly more compact */}
        <div className="lg:col-span-6 space-y-6 lg:px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#243453] uppercase mb-4 leading-tight">
              Trusted Brighton & Hove Roofers
            </h2>
            <p className="text-slate-600 mb-4 text-base md:text-lg">
              If you’re concerned about your roof or need professional advice, we’re here to help.
            </p>
            <p className="text-[#243453] font-bold underline decoration-[#F9D759] decoration-4 text-base md:text-lg">
              Reliable roofing services for repairs, maintenance and emergency work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
             <a href="tel:07768981913" className="flex items-center justify-center gap-3 w-full sm:w-64 bg-[#F9D759] text-[#243453] font-black py-3.5 rounded-lg shadow-lg hover:bg-[#243453] hover:text-white transition-all transform hover:-translate-y-1">
                <Phone size={18} /> CALL NOW
             </a>

             <a href="mailto:info@actionroofingbrighton.co.uk" className="flex items-center justify-center gap-3 w-full sm:w-64 bg-slate-100 text-[#243453] font-black py-3.5 rounded-lg shadow-md hover:bg-slate-200 transition-all transform hover:-translate-y-1">
                <MessageSquareMore size={18} /> MESSAGE US
             </a>
          </div>
          <p className="text-[10px] text-slate-400 italic">We aim to respond as quickly as possible.</p>
        </div>

        {/* Form Container - Reduced Padding and Gap */}
        <div className="lg:col-span-6 bg-[#243453] p-8 md:px-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-1">Request a Free Inspection</h3>
            <p className="text-slate-300 text-xs mb-6">
              Arrange a free, no-obligation roof check.
            </p>
            
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-[#F9D759] text-sm placeholder:text-slate-400" 
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-[#F9D759] text-sm placeholder:text-slate-400" 
                  required
                />
              </div>
              
              <input 
                type="text" 
                placeholder="Postcode" 
                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-[#F9D759] text-sm placeholder:text-slate-400" 
                required
              />
              
              <textarea 
                placeholder="Briefly describe the issue..." 
                rows="8" 
                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:border-[#F9D759] text-sm placeholder:text-slate-400 resize-none"
                required
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-[#F9D759] text-[#243453] font-black py-4 rounded-xl hover:bg-[#F7CB28] transition-all shadow-lg active:scale-[0.98] uppercase tracking-wider text-sm"
              >
                Get My Free Quote
              </button>
              
              <p className="text-center text-[9px] text-slate-500 mt-2 uppercase">
                Privacy Guaranteed • Response within 24 hours
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHome;