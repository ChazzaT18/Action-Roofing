import { ShieldCheck, CheckCircle, Award, HardHat } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-[#243453] py-24 px-4 md:px-10 text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-black border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
              Fully Insured Roofers <br /> You Can Rely On
            </h2>
            <p className="text-xl text-[#F9D759] font-bold">
              Family-run roofing specialists with over 20 years’ combined experience.
            </p>
          </div>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Choosing the right roofer matters. We take pride in doing the job properly, using the correct 
              materials and proven methods on every project, no matter the size.
            </p>
            <p>
              Whether it's a minor leak or a full re-roof, all our work is completed to a high standard 
              and backed by our <span className="text-white font-bold">10-year workmanship guarantee</span>. 
              We are fully covered for your peace of mind.
            </p>
          </div>
          
          {/* Detailed Trust List */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={20} />
              </div>
              <span className="font-bold text-slate-200">Public Liability & Employer Insurance</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-2 rounded-full transition-colors">
                <CheckCircle className="text-[#F9D759]" size={20} />
              </div>
              <span className="font-bold text-slate-200">Health & Safety Compliant</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-2 rounded-full  transition-colors">
                <CheckCircle className="text-[#F9D759]" size={20} />
              </div>
              <span className="font-bold text-slate-200">Expert Structural Timber Knowledge</span>
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
            <div className="bg-white w-72 h-72 md:w-80 md:h-80 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-8 border-t-[12px] border-[#F9D759] transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
              
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
            <div className="absolute -top-6 -left-6 md:-left-12 bg-[#F9D759] text-[#243453] p-6 rounded-full shadow-xl flex flex-col items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300 border-4 border-white">
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