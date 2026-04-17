import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCTA from "./ServicesCTA";
import {
  ShieldCheck,
  Info,
  Hammer,
  Layers,
  Camera,
  Wind,
  CheckCircle,
  Construction,
  FileText,
  HardHat,
  Ruler,
  Award,
  Banknote,
  Phone,
  CornerDownRight,
  Sun,
  CheckCircle2,
  Droplets,
  ArrowRight,
  History,
  Truck,
  Search
} from "lucide-react";

const SlateTilePage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/slate-roofing.png')] bg-center bg-cover text-white">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          {/* Main Content Wrapper - Safe zone for fixed header on mobile */}
          <div className="py-12 sm:pt-20 lg:pt-10 flex flex-col justify-center items-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              10-Year Workmanship Guarantee
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              New Slate & Tile <br />
              <span className="text-[#F9D759]">Roof Installations</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-100 leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
              Expert replacements in Brighton & Hove. Built for durability and
              aesthetics with a focus on doing the job properly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Book a Free Inspection
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic">
                No pressure · Clear advice · Professional workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE - (Section 2 addition) */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                A New Roof <span className="text-[#F9D759]">Done Properly</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  A new roof is one of the most important investments you can make in your property. It protects the structure beneath it, keeps your home dry, and plays a key role in both appearance and long-term value.
                </p>
                <p>
                  We approach every installation with attention to detail, using correct materials and proven methods to create a roof that performs reliably over time. From the initial strip to the final tile or slate, each stage is completed with care to ensure a watertight finish.
                </p>
                <p className="border-l-4 border-[#F9D759] pl-6 italic text-[#243453]">
                  "Because of this, it’s important that the work is carried out carefully and methodically."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2.5rem] relative overflow-hidden">
                <h4 className="text-[#243453] font-black uppercase tracking-widest text-center mb-8 border-b border-slate-200 pb-4">
                  Installation Standard
                </h4>
                <ul className="space-y-6 relative z-10">
                  {[
                    { title: "Full System Renewal", desc: "Assessing the entire structure, not just the surface tiles.", icon: Construction },
                    { title: "Timber Health", desc: "Rigid inspection and repair of underlying roof rafters.", icon: Hammer },
                    { title: "Breathable Protection", desc: "Premium membranes to eliminate condensation and rot.", icon: Wind },
                    { title: "Laser Alignment", desc: "Precision battening for perfectly consistent roof lines.", icon: Ruler }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                        {item.icon && <item.icon className="text-[#F9D759]" size={20} />}
                      </div>
                      <div>
                        <p className="text-[#243453] font-black uppercase tracking-wide mb-1">{item.title}</p>
                        <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMY OF A QUALITY ROOF */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            What’s Included in a{" "}
            <span className="text-[#F9D759]">Complete Build?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base 2xl:text-lg font-medium">
            We follow a strict structural checklist to ensure your home is
            watertight for decades.
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Hammer, title: "Full Strip-Back", text: "Careful removal of old materials and structural timber inspection." },
            { icon: Wind, title: "Modern Membrane", text: "High-performance breathable membranes to ensure weather-resistance." },
            { icon: Ruler, title: "Precision Battening", text: "New battens and fixings installed with laser-straight alignment." },
            { icon: Layers, title: "Premium Materials", text: "Your choice of high-grade Welsh Slate, Clay, or Concrete tiles." },
            { icon: CornerDownRight, title: "Expert Leadwork", text: "Custom-fitted flashing around chimneys and valleys for a total seal." },
            { icon: Truck, title: "The Clean-up", text: "We treat your property with respect. Full waste removal is always included." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl duration-300 transition-all group border-b-4 border-slate-100">
              <item.icon className="text-[#243453] bg-[#F9D759] rounded-xl p-3 mb-6 group-hover:scale-110 transition-transform" size={44} />
              <h3 className="text-lg font-black uppercase mb-3 text-[#243453]">{item.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE "WHY REPLACE?" SECTION */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight">
                When is a Repair <br />
                <span className="text-[#F9D759]">No Longer Enough?</span>
              </h2>
              <p className="text-slate-200 text-lg 2xl:text-xl mb-8 leading-relaxed font-medium">
                Ongoing repairs can become a "money pit." A full replacement is often the more dependable long-term solution.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-base">
                <Info size={24} className="text-[#F9D759] shrink-0" />
                We can inspect your roof and give clear advice on the best approach.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Recurring Leaks", desc: "Multiple patches that still drip despite regular attention.", icon: Droplets },
                { title: "Widespread Wear", desc: "Widespread signs of failure where repairs are no longer lasting.", icon: Sun },
                { title: "Shedding Debris", desc: "Finding mortar or snapped tile fragments in your gutters.", icon: Layers },
                { title: "Roof Age", desc: "Original fixings failing due to age, often over 50 years old.", icon: History },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <item.icon className="text-[#F9D759] mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-lg font-black uppercase mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TILE vs. SLATE */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-md border-b-4 border-slate-200">
              <h3 className="text-2xl font-black uppercase mb-6 text-[#243453]">Concrete & Clay Tiles</h3>
              <p className="mb-6 text-slate-600 font-medium">Practical and cost-effective solutions in a wide range of colours.</p>
              <ul className="space-y-4 text-base font-medium text-slate-700">
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={22} /> Widely used and highly reliable.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={22} /> Versatile range of profiles.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={22} /> Efficient interlocking build.</li>
              </ul>
            </div>
            <div className="bg-[#243453] p-10 rounded-3xl shadow-md border-b-4 border-[#F9D759] text-white">
              <h3 className="text-2xl font-black uppercase mb-6">Natural & Man-made Slate</h3>
              <p className="mb-6 text-slate-300 font-medium">Known for distinctive appearance and incredible longevity.</p>
              <ul className="space-y-4 text-base font-medium text-slate-200">
                <li className="flex gap-3"><CheckCircle2 className="text-[#F9D759] shrink-0" size={22} /> Best for period property character.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-[#F9D759] shrink-0" size={22} /> Extreme lifespan and durability.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-[#F9D759] shrink-0" size={22} /> Adds significant home value.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 10 YEAR WARRANTY */}
      <section className="bg-[#243453] py-24 2xl:py-32 px-4 md:px-10 text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl mb-6 font-black border-l-8 border-[#F9D759] pl-8 uppercase tracking-tight leading-tight">
              A 10-Year Guarantee <br /> On Every Full Installation
            </h2>
            <div className="space-y-8 text-slate-200 text-lg 2xl:text-xl leading-relaxed">
              <p>
                We focus on clear communication, honest recommendations, and doing the job properly from start to finish. You’ll always understand what is being done and why.
              </p>
              <p>
                From the initial strip-back to the final ridge tile, we provide a
                <span className="text-white font-bold"> formal written workmanship guarantee</span> on every full replacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {[
                { text: "10-Year Written Workmanship Guarantee", icon: ShieldCheck },
                { text: "Detailed Itemised Quotations", icon: FileText },
                { text: "Treated Timber & Breathable Membranes", icon: CheckCircle },
                { text: "No-Pressure Expert Inspections", icon: Search },
                { text: "Fully Insured Professional Team", icon: HardHat },
                { text: "Heritage & Modern Material Experts", icon: Award },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                    <item.icon className="text-[#F9D759]" size={24} />
                  </div>
                  <span className="font-bold text-slate-100 text-base 2xl:text-lg leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white w-80 h-80 2xl:w-[450px] 2xl:h-[450px] rounded-[50px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center p-10 border-t-[16px] border-[#F9D759] rotate-2">
                <ShieldCheck size={72} className="text-[#243453] mb-6" strokeWidth={2.5} />
                <span className="text-5xl 2xl:text-7xl font-black text-[#243453] leading-none tracking-tighter">10-YEAR</span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mt-3">Workmanship</span>
                <div className="h-[3px] w-32 bg-slate-100 my-6" />
                <div className="bg-[#243453] text-[#F9D759] px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest">Full Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE ACTION ROOFING PROMISE */}
      <section className="py-16 bg-white px-4 md:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-[#F9D759] border-6 border-[#243453] rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl items-center">
            <div className="lg:w-3/5 p-8 md:p-12 text-[#243453]">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 leading-tight tracking-tight">
                No Surprises. <br />
                <span className="opacity-70 italic">Straight Talk.</span>
              </h2>

              <div className="space-y-8 text-[#243453]">
                {[
                  { icon: Banknote, title: "Fixed Quotes", desc: "The price we agree is the price you pay. No hidden mid-project 'extras'." },
                  { icon: Camera, title: "Active Communication", desc: "If hidden issues are found, we explain clearly and discuss options before proceeding." },
                  { icon: ShieldCheck, title: "Zero Pressure", desc: "We provide technical facts and a fair price. You decide if we're the right fit." },
                ].map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="bg-[#243453] p-2.5 rounded-xl shrink-0 shadow-md">
                      <promise.icon className="text-[#F9D759]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase mb-1 tracking-wider">{promise.title}</h4>
                      <p className="text-[#243453]/80 text-sm md:text-base leading-relaxed font-bold">{promise.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 p-8 lg:p-12 lg:pl-0 flex items-center justify-center shrink-0 w-full">
              <img
                src="/images/tile-slate-lead.png"
                alt="Action Roofing Brighton Installation"
                className="rounded-xl w-full h-[300px] lg:h-[350px] object-cover shadow-2xl border-6 border-[#243453]/10"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* 8. FOOTER STATEMENT */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-black uppercase text-[#243453] mb-6 tracking-tight">
              Straightforward Advice. Reliable Workmanship.
            </h3>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-10">
              "Replacing a roof is a significant decision. We focus on honest recommendations and doing the job properly from start to finish, ensuring your home is fully protected."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services | Tile & Slate Roofing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlateTilePage;