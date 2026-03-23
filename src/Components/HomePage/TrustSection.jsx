import { ShieldCheck, CheckCircle, Award, HardHat } from "lucide-react";

const TrustSection = () => {
  return (
    <section id="trust-section" className="bg-[#243453] py-18 px-4 md:px-10 text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl mb-4 font-black border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
              Roofing Done Properly <br/> With Accountability
            </h2>
            <p className="max-2xl:text-lg text-[#F9D759] font-bold">
              Family-run roofing specialists serving Brighton & Hove since 2007.
            </p>
          </div>

          <div className="space-y-6 text-slate-300 2xl:text-lg leading-relaxed">
            <p>
              We provide clear, honest advice supported by photographed inspections, explaining what needs to be done and why. All work is documented before, during and after completion so you can see exactly what has been carried out.
            </p>
            <p>
              Written <span class="text-white font-bold">workmanship guarantees</span> are provided on full roof installations, and we are fully insured for your peace of mind.
            </p>
          </div>
          
          {/* Detailed Trust List */}
          <div className="md:grid md:cols-2 gap-4">
            <div className="flex items-center max-md:py-1 gap-4 group">
              <div className="bg-white/10 p-2 rounded-full col-1 transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Family-run and locally accountable</span>
            </div>
            <div className="flex items-center gap-4 max-md:py-1 col-2 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Transparent, itemised quotations</span>
            </div>
            <div className="flex items-center gap-4 max-md:py-1 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Photographed inspections and documented work</span>
            </div>
            <div className="flex items-center gap-4 max-md:py-1 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Written guarantees on full installations</span>
            </div>
            <div className="flex items-center gap-4 max-md:py-1 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Health & Safety Compliant</span>
            </div>
            <div className="flex items-center gap-4 max-md:py-1 group">
              <div className="bg-white/10 p-2 rounded-full  transition-colors">
                <CheckCircle className="text-[#F9D759]" size={18} />
              </div>
              <span className="font-bold text-slate-200 max-2xl:text-sm max-2xl:text-sm">Fully insured</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Master Badge (5 columns) */}
        <div className="lg:col-span-5 max-lg:hidden flex justify-center lg:justify-end relative">
          {/* Abstract Grid Background to replace image space */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#F9D759 1px, transparent 1px)', size: '20px 20px' }}>
          </div>

          <div className="relative z-10">
            {/* The Badge Container */}
            <div className="bg-white w-72 h-72 md:w-80 md:h-80 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-8 border-t-[12px] border-[#F9D759] transform rotate-3 cursor-default">
              
              <div className="bg-[#243453]/5 p-6 rounded-full mb-4">
                <ShieldCheck size={64} className="text-[#243453]" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col mb-4">
                <span className="text-5xl font-black text-[#243453] leading-none tracking-tighter">10-YEAR</span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Workmanship</span>
              </div>

              <div className="h-[2px] w-24 bg-slate-100 mb-4" />

              <div className="bg-[#F48120] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Full Guarantee
              </div>

              {/* Decorative Corner Icon */}
              <Award className="absolute top-6 right-6 text-slate-200" size={32} />
            </div>

            {/* Sub-badge: Fully Insured Circle */}
            <div className="absolute -top-6 -left-6 md:-left-12 bg-[#F9D759] text-[#243453] p-6 rounded-full shadow-xl flex flex-col items-center justify-center rotate-12 border-4 border-white">
               <HardHat size={28} />
               <span className="text-[10px] font-black uppercase leading-none mt-1">Fully</span>
               <span className="text-[10px] font-black uppercase leading-none">Insured</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;