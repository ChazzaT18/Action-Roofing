import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Droplets,
  Hammer,
  Trash2,
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
  ShieldAlert,
  Eye,
  Leaf
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const MossGutteringPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/gutter-cleaning.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 pt-[140px] sm:pt-20 lg:pt-10 flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <Sparkles size={18} />
              No Pressure Washing • Safe Manual Methods
            </div>

            <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Roof Moss Removal & <br />
              <span className="text-[#F9D759]">Gutter Cleaning</span>
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Professional moss removal with optional biocide treatment to slow regrowth, 
              plus full gutter clearing to keep your roof and drainage system working properly.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Book a Cleaning Service
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453]/80 backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>
              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic font-medium">
                No mess left behind • Safe methods • Clear, honest advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE - More Than Just a Clean */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                More Than Just <span className="text-[#F9D759]">A Quick Clean</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Not all roof cleaning is the same. Simply brushing moss away without treating 
                  the roof can lead to rapid regrowth.
                </p>
                <p>
                  That’s why we offer a more complete approach — removing moss properly and 
                  applying treatment where required to help keep your roof cleaner for longer. 
                  We also ensure your gutters and downpipes are clear, so water can flow freely 
                  away from your property.
                </p>
                <p className="border-l-4 border-[#F9D759] pl-6 italic text-[#243453]">
                  "Clean, effective, and carried out with care to protect your roof — 
                  with all debris removed from site."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2.5rem] relative overflow-hidden shadow-sm">
                <ShieldCheck className="absolute -right-4 -bottom-4 text-slate-200/50" size={120} />
                <h4 className="text-[#243453] font-black uppercase tracking-widest text-sm mb-8 border-b border-slate-200 pb-4 text-center">
                  Cleaning Standards
                </h4>
                <ul className="space-y-6 relative z-10">
                  {[
                    { title: "Manual Scraping", desc: "Gentle removal by hand to protect tile surfaces.", icon: Hammer },
                    { title: "Biocide Option", desc: "Chemical treatment to kill spores and slow regrowth.", icon: Droplets },
                    { title: "Gutter Flush", desc: "Testing water flow through downpipes after clearing.", icon: Droplets },
                    { title: "Debris Control", desc: "Managing falling moss to keep patios and plants clean.", icon: Trash2 }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                        <item.icon className="text-[#F9D759]" size={20} />
                      </div>
                      <div>
                        <p className="text-[#243453] font-black uppercase text-xs tracking-wide mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE BREAKDOWN */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight">
              Specialist <span className="text-[#F9D759]">Service Breakdown</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto font-medium">
              We provide a methodical cleaning process that protects your home’s structural 
              integrity while restoring its appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Moss Removal */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Hammer className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-xl font-black uppercase mb-4">Manual Moss Removal</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We carefully remove moss from the roof surface using controlled manual methods (scraping), 
                ensuring debris is collected and not left in your gutters.
              </p>
              <ul className="space-y-2 text-xs font-bold uppercase text-[#F9D759]">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Shovel/Scraper Method</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Damage Prevention</li>
              </ul>
            </div>

            {/* Biocide */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Droplets className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-xl font-black uppercase mb-4">Biocide Treatment</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Recommended for longer-lasting results. This kills remaining spores to help keep 
                the roof cleaner for longer and reduces future maintenance.
              </p>
              <ul className="space-y-2 text-xs font-bold uppercase text-[#F9D759]">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Kills Moss Roots</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Optional Add-on</li>
              </ul>
            </div>

            {/* Gutters */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Trash2 className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-xl font-black uppercase mb-4">Gutter Clearing</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We clear all gutters and downpipes of moss, leaves, and debris to ensure 
                proper drainage and prevent water damage to your walls.
              </p>
              <ul className="space-y-2 text-xs font-bold uppercase text-[#F9D759]">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Downpipe Unblocking</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Final Flow Check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE VALUE BUNDLE */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border-b-8 border-[#F9D759] flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-[#243453]">
                Complete Roof & <br /><span className="text-[#F9D759]">Gutter Clean</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                For the best results, many customers choose to combine moss removal, biocide 
                treatment, and gutter clearing. This ensures moss is removed properly, 
                regrowth is slowed, and gutters are left clear and working.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Moss scraped properly",
                  "Regrowth is slowed",
                  "Gutters clear & tested",
                  "Full site clean-up"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-[#243453] uppercase text-xs">
                    <CheckCircle2 className="text-[#F9D759]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="relative p-3 bg-[#243453] rounded-[2rem] shadow-xl">
                  <img src="/images/moss-clean.jpg" alt="Roof Cleaning Service" className="rounded-[1.5rem] w-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ADD-ONS SECTION */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#243453] mb-4">
              Optional <span className="text-[#F9D759]">Add-Ons</span>
            </h2>
            <p className="text-slate-600 font-medium">Additional services to help maintain your roof and reduce future issues.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldAlert, title: "Gutter Guards", desc: "Helps reduce debris build-up and keeps gutters flowing for longer." },
              { icon: Clock, title: "Maintenance Advice", desc: "We can recommend cleaning intervals based on your property surroundings." },
              { icon: Search, title: "Minor Repairs", desc: "If we spot slipped tiles or defects, we can quote while on site." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border-b-4 border-slate-200 text-center">
                <item.icon className="mx-auto text-[#243453] mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENCY & EXPECTATIONS */}
      <section className="py-24 bg-white px-4 md:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-[#F9D759] border-6 border-[#243453] rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl items-stretch">
            
            <div className="lg:w-3/5 p-8 md:p-12 text-[#243453]">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 leading-tight tracking-tight text-[#243453]">
                Clear Pricing. <br />
                <span className="opacity-70 italic font-medium">Spotless Finish.</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Clear, Fair Pricing",
                    desc: "Quotes depend on roof size, access, and moss build-up. No hidden costs.",
                  },
                  {
                    icon: Trash2,
                    title: "The No-Mess Promise",
                    desc: "Moss removal can be messy — we take care to control debris and leave your property clean.",
                  },
                  {
                    icon: Eye,
                    title: "What to Expect",
                    desc: "Some moss fall is normal during removal; results improve further over time after biocide treatment.",
                  },
                ].map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="bg-[#243453] p-2.5 rounded-xl shrink-0 shadow-md">
                      <promise.icon className="text-[#F9D759]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase mb-1 tracking-wider">
                        {promise.title}
                      </h4>
                      <p className="text-[#243453]/80 text-sm md:text-base leading-relaxed font-bold">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 w-full self-stretch overflow-hidden">
              <div 
                className="h-full min-h-[400px] bg-[url('/images/clean-roof.jpg')] bg-cover bg-center border-t-6 lg:border-t-0 lg:border-l-6 border-[#243453]"
                aria-label="Action Roofing Spotless Finish"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* 7. FINAL WORD */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-black uppercase text-[#243453] mb-6 tracking-tight">
              Clear Advice. Reliable Workmanship.
            </h3>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-10">
              "We understand that roofing issues can be difficult to assess from the ground. Our aim is to 
              carry out work properly, without overcomplicating things or suggesting unnecessary repairs. 
              You’ll always know what’s being done and why."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services | Cleaning & Maintenance
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MossGutteringPage;