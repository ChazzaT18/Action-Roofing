import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  House,
  Hammer,
  Trash2,
  Layers,
  Camera,
  CheckCircle,
  FileText,
  HardHat,
  Award,
  Search,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Info,
  Calendar,
  Sparkles
} from "lucide-react";

const SlateTilePage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-[url('/images/slate-roofing.png')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex flex-col justify-center relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider text-[10px] mb-4 shadow-md">
              <ShieldCheck size={14} />
              10-Year Workmanship Guarantee
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
              New Slate & Tile <br />
              <span className="text-[#F9D759]">Roof Installations</span>
            </h1>
            <p className="text-lg text-slate-100 leading-relaxed mb-8 font-medium">
              Expert replacements in Brighton & Hove. Built for durability and aesthetics using 23+ years of combined experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact-us"
                className="px-6 py-3.5 bg-[#F9D759] text-[#243453] font-black rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 hover:bg-[#f7cf40] hover:scale-105 duration-300 uppercase tracking-wider text-sm"
              >
                Request an Inspection
                <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-3 px-5 py-3 bg-[#243453]/90 rounded-lg ">
                <span className="text-xs font-bold uppercase tracking-widest">Fully Insured • Local Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE "WHY REPLACE?" SECTION */}
      <section className="py-16 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-tight">
                When is a Repair <br />
                <span className="text-[#F9D759]">No Longer Enough?</span>
              </h2>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                Ongoing repairs can become a "money pit." A full replacement is often 
                the more cost-effective move if you notice these warning signs:
              </p>
              <div className="inline-flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 italic text-slate-400 text-sm">
                <Info size={18} className="text-[#F9D759]" />
                Protecting timbers early saves thousands in structural repairs later.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Repeated Leaks", desc: "Multiple patches that still drip.", icon: AlertCircle },
                { title: "Daylight In Loft", desc: "Visible holes or rotting timbers.", icon: Search },
                { title: "Shedding Debris", desc: "Mortar or snapped tiles in gutters.", icon: Trash2 },
                { title: "Roof Age", desc: "Over 50 years with failing fixings.", icon: Calendar }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <item.icon className="text-[#F9D759] mb-3" size={24} />
                  <h4 className="text-sm font-black uppercase mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMY OF A QUALITY ROOF */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-[#243453] mb-3">
            What’s Included in a <span className="text-[#F9D759]">Complete Build?</span>
          </h2>
          <div className="h-1 w-16 bg-[#F9D759] mx-auto mb-4"></div>
          <p className="max-w-xl mx-auto text-slate-600 text-sm font-medium">
            We follow a strict structural checklist to ensure your home is watertight for decades.
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Hammer, title: "Strip & Prep", text: "Careful removal of old materials and structural timber inspection." },
            { icon: Layers, title: "Modern Protection", text: "High-performance breathable membranes to prevent damp." },
            { icon: ShieldCheck, title: "Precision Battening", text: "Treated timber laths installed with laser-straight alignment." },
            { icon: House, title: "Premium Materials", text: "Your choice of Welsh Slate, Clay, or Concrete tiles." },
            { icon: CheckCircle2, title: "Expert Leadwork", text: "Custom-fitted flashing around chimneys and valleys." },
            { icon: Sparkles, title: "The Clean-up", text: "We treat your property like our own. Full waste removal included." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow group">
              <item.icon className="text-[#243453] bg-[#F9D759] rounded-lg p-2 mb-4" size={36} />
              <h3 className="text-base font-black uppercase mb-2 text-[#243453]">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TILE vs. SLATE */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-slate-200">
              <h3 className="text-xl font-black uppercase mb-4">Concrete & Clay <span className="text-slate-400">Tiles</span></h3>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Best for modern homes & budget builds.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Huge range of colors and profiles.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Efficient interlocking installation.</li>
              </ul>
            </div>
            <div className="bg-[#243453] p-8 rounded-2xl shadow-sm border-b-4 border-[#F9D759] text-white">
              <h3 className="text-xl font-black uppercase mb-4">Natural & Man-made <span className="text-[#F9D759]">Slate</span></h3>
              <ul className="space-y-3 text-sm font-medium text-slate-300">
                <li className="flex gap-2"><CheckCircle2 className="text-[#F9D759] shrink-0" size={18} /> Best for period properties & premium aesthetics.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-[#F9D759] shrink-0" size={18} /> Incredible lifespan (up to 100 years).</li>
                <li className="flex gap-2"><CheckCircle2 className="text-[#F9D759] shrink-0" size={18} /> Adds significant resale value to your home.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     
      {/* 5. 10 Year Warranty */}
      <section className="bg-[#243453] py-20 2xl:py-24 px-4 md:px-10 text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl mb-4 font-black border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
              A 10-Year Guarantee <br/> On Every Full Installation
            </h2>
            <p className="text-lg 2xl:text-xl text-[#F9D759] font-bold">
              Protecting your investment with premium materials and accountable craftsmanship.
            </p>
          </div>

          <div className="space-y-6 text-slate-300 text-base 2xl:text-xl leading-relaxed">
            <p>
              A new slate or tile roof is a 50+ year investment. We ensure that investment is protected from day one. Unlike "patch-and-run" contractors, we provide a 
              <span className="text-white font-bold"> formal written workmanship guarantee</span> on every full replacement we undertake.
            </p>
            <p>
              From the initial strip-back to the final ridge tile, we document the structural health of your timbers and the precision of our lathing via 
              <span className="text-white font-bold"> photo evidence</span>, giving you a complete record of the quality beneath the surface.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 2xl:gap-6 pt-4">
            {[
              { text: "10-Year Written Workmanship Guarantee", icon: ShieldCheck },
              { text: "Detailed Photo Documentation of Build", icon: Camera },
              { text: "Treated Timber & Breathable Membranes", icon: CheckCircle },
              { text: "Fixed-Price Itemised Quotations", icon: FileText },
              { text: "Fully Insured for High-Level Work", icon: HardHat },
              { text: "Heritage & Modern Material Experts", icon: Award }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <item.icon className="text-[#F9D759]" size={20} />
                </div>
                <span className="font-bold text-slate-200 text-sm 2xl:text-base leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The Master Badge */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#F9D759 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            {/* The Badge Container */}
            <div className="bg-white w-72 h-72 md:w-80 md:h-80 2xl:w-96 2xl:h-96 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center p-8 2xl:p-12 border-t-[12px] border-[#F9D759] rotate-2 cursor-default">
              
              <div className="bg-[#243453]/5 p-5 rounded-full mb-4">
                <ShieldCheck size={60} className="text-[#243453]" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col mb-4">
                <span className="text-5xl 2xl:text-6xl font-black text-[#243453] leading-none tracking-tighter">10-YEAR</span>
                <span className="text-xs 2xl:text-sm font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Workmanship</span>
              </div>

              <div className="h-[2px] w-24 bg-slate-100 mb-4" />

              <div className="bg-[#243453] text-[#F9D759] px-6 py-2.5 2xl:px-8 2xl:py-3 rounded-xl text-xs 2xl:text-sm font-black uppercase tracking-widest shadow-lg">
                Full Guarantee
              </div>
            </div>

            {/* Sub-badge: Brighton Local */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#F9D759] text-[#243453] p-5 2xl:p-7 rounded-full shadow-xl flex flex-col items-center justify-center -rotate-12 border-4 border-white">
               <span className="text-[10px] 2xl:text-xs font-black uppercase leading-none">Established</span>
               <span className="text-lg 2xl:text-xl font-black leading-none">2007</span>
               <span className="text-[10px] 2xl:text-xs font-black uppercase leading-none mt-1">Brighton</span>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* 5. THE ACTION ROOFING PROMISE */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl">
            <div className="lg:w-1/2 p-10 md:p-14 text-white">
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 leading-tight">No Surprises. <br /><span className="text-[#F9D759]">Straight Talk.</span></h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-wider text-xs mb-1">Fixed Quotes</h4>
                  <p className="text-slate-400 text-sm">Once agreed, the price is fixed. No hidden mid-project "extras".</p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-wider text-xs mb-1">Active Communication</h4>
                  <p className="text-slate-400 text-sm">If we find hidden issues, we provide photo evidence and discuss fixes immediately.</p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-wider text-xs mb-1">Zero Pressure</h4>
                  <p className="text-slate-400 text-sm">We provide the facts and a fair price. You make the final decision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('/images/installation-detail.jpg')] bg-cover bg-center min-h-[300px]" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[#F9D759] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-4 leading-tight">
            Ready to Protect Your Home?
          </h2>
          <p className="text-xs md:text-sm text-[#243453] font-bold uppercase tracking-widest mb-8">
            Schedule your free roof replacement inspection today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="bg-[#243453] text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider duration-300 hover:scale-105 transition-all shadow-xl text-sm shadow-lg">
              Get My Free Quote
            </Link>
            <a href="tel:07768981913" className="border-2 border-[#243453] text-[#243453] px-8 py-3.5 rounded-xl font-black uppercase tracking-wider duration-300 hover:scale-105 shadow-xl transition-all text-sm">
              Call Now: 07768 981913
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SlateTilePage;