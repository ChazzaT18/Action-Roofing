import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Search,
  Brush,
  Droplets,
  Trash2,
  Sparkles,
  ShieldCheck,
  Info,
  Scale,
  ClipboardCheck
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const MossRemovalRoofCleaningPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/moss-removal.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <Sparkles size={16} />
              Professional Roof Maintenance
            </div>

            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Roof Moss Removal <br />
              <span className="text-[#F9D759]">& Roof Cleaning</span>
            </h1>

            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-100 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              Professional roof moss removal and biocide treatments across Brighton and surrounding areas.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Get a Free Quote
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
                Free inspections · Honest advice · No pressure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-3/5 w-full text-center lg:text-left">
              <h2 className="text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Careful Maintenance, <br />
                <span className="text-[#F9D759]">Long-Term Protection</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  At Action Roofing Services, we provide careful roof cleaning and moss removal services designed to improve drainage, reduce moss regrowth and help protect your roof from unnecessary wear and moisture retention.
                </p>
                <p>
                  Not every moss-covered roof requires major work. In many cases, proper maintenance and preventative treatment may be enough to help protect the roof long-term.
                </p>
                <p className="border-l-4 lg:border-l-4 max-lg:border-l-0 max-lg:border-t-4 max-lg:pt-4 border-[#F9D759] pl-6 max-lg:pl-0 italic text-[#243453] font-bold">
                  "Whether moss is seen as aesthetically pleasing or not, excessive moss growth can contribute to several roofing issues over time depending on the type, age and condition of the roof."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 w-full self-stretch min-h-[350px] lg:min-h-0 relative">
              <div className="relative h-full min-h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-900">
                <img
                  src="/images/roof-cleaning.jpg"
                  alt="Roof Cleaning"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY IS MOSS BAD FOR ROOFS GRID (Updated to 6 balanced tiles) */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight">
                Why Is Moss <br />
                <span className="text-[#F9D759]">Bad For Roofs?</span>
              </h2>
              <div className="space-y-6 text-slate-200 text-lg mb-8 leading-relaxed font-medium">
                <p>
                  Over time, failing to manage thick vegetation can severely shorten the lifespan of building structures. Moss thrives on moisture, retaining rainwater like a sponge directly on the tile surfaces.
                </p>
                <p>
                  As the moisture builds up, cold winter temperatures freeze the trapped water. This expansion weakens the tiles, causing them to crack and open up, which lets structural water tracking inside the property go unnoticed.
                </p>
              </div>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-sm font-semibold text-left">
                <Info size={24} className="text-[#F9D759] shrink-0" />
                Heavy growth hides damaged areas, making routine structural updates difficult.
              </div>
            </div>

            {/* Perfect 3x2 Grid Matrix (6 items total) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Trap Moisture",
                  desc: "Traps raw structural moisture continuously against vulnerable roofing materials.",
                  icon: Droplets,
                },
                {
                  title: "Lift Tiles",
                  desc: "Forces tile configurations upward, letting wind-driven rain sweep underneath.",
                  icon: ShieldCheck,
                },
                {
                  title: "Block Drainage",
                  desc: "Fills gutters, structural valleys, and downpipe pathways causing overflows.",
                  icon: Trash2,
                },
                {
                  title: "Hide Structural Defects",
                  desc: "Conceals cracked tiles, slipped slates, and deteriorating junction flashing.",
                  icon: Search,
                },
                {
                  title: "Frost Damage",
                  desc: "Causes micro-cracks when trapped sponge moisture expands during freezing weather.",
                  icon: AlertTriangle,
                },
                {
                  title: "Weight Strain",
                  desc: "Adds considerable dead-weight structural load onto battens and rafters when soaked.",
                  icon: Scale,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 h-full text-left"
                >
                  <div className="bg-white/10 p-3 rounded-xl text-[#F9D759] shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-black uppercase tracking-wide mb-1 text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR MOSS REMOVAL PROCESS (Updated to 6 balanced tiles) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            Our Moss <span className="text-[#F9D759]">Removal Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base 2xl:text-lg font-medium">
            We operate transparently with an end-to-end cleaning framework designed to keep your home protected.
          </p>
        </div>

        {/* Perfect 3-Column Grid Layout (6 items total = 2 rows of 3) */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "Roof Inspection",
              text: "We begin by assessing the condition of the roof and identifying any visible roofing issues before work begins.",
            },
            {
              icon: Brush,
              title: "Manual Moss Removal",
              text: "The bulk of moss growth is carefully removed using telescopic brushes and scraping tools designed to minimise unnecessary damage to the roof surface.",
            },
            {
              icon: Droplets,
              title: "Biocide Treatment",
              text: "Once cleared, a professional biocide treatment is applied using a softwash applicator to help kill remaining spores and reduce future moss regrowth over time.",
            },
            {
              icon: Trash2,
              title: "Gutter Clearance",
              text: "Following moss removal, all gutters are cleared and downpipes checked to ensure water is draining correctly.",
            },
            {
              icon: Sparkles,
              title: "Site Clean-Up",
              text: "We ensure the surrounding property is left completely clean, clear, and tidy once works are complete.",
            },
            {
              icon: ClipboardCheck,
              title: "Final Inspection",
              text: "A comprehensive structural walkthrough to ensure all tile faces are secure and downpipes are free-flowing.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-3xl shadow-md border-b-4 border-[#243453] text-left flex items-center gap-4"
            >
              <div className="bg-[#F9D759] p-3 rounded-xl shrink-0 text-[#243453]">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-base font-black uppercase mb-1.5 text-[#243453] tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. A CAREFUL APPROACH TO ROOF CLEANING */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
                A Careful Approach <br />To Roof Cleaning
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We avoid aggressive high-pressure cleaning methods which can damage tiles and shorten the lifespan of the roof. Our approach is designed to provide careful roof maintenance while helping protect both the appearance and condition of the roof long-term.
              </p>
              
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 space-y-4">
                <h4 className="text-red-800 font-black uppercase text-xs tracking-wider flex items-center gap-2">
                  <AlertTriangle size={16} /> Incorrect pressure washing methods can:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Strip protective surface finishes",
                    "Damage tiles and slates",
                    "Force water beneath roofing materials",
                    "Create avoidable roofing problems",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-red-900/80">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#243453] p-8 rounded-3xl text-white border-b-8 border-[#F9D759] shadow-xl text-left">
              <HardHat className="text-[#F9D759] mb-4" size={36} />
              <h3 className="text-lg sm:text-xl font-black uppercase mb-4 tracking-tight">
                Optional Valeting Add-ons
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                Where required, we can also arrange complementary exterior cleaning alongside your moss treatment to leave the entire property looking beautifully presented:
              </p>
              <div className="space-y-3">
                {[
                  "Full External Gutter Valeting",
                  "Fascia and Soffit Cleaning",
                  "Comprehensive Window Cleaning",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-black uppercase text-xs tracking-wide">
                    <CheckCircle2 className="text-[#F9D759]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SUMMARY TRUST BAR */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex gap-4 max-sm:flex-col justify-center items-center text-[#243453] font-black uppercase tracking-widest text-xs">
            <div className="flex items-center gap-1.5"><Search size={16} className="text-[#F9D759]" /> Safe Hand Scrapers</div>
            <span className="max-sm:hidden opacity-30">|</span>
            <div className="flex items-center gap-1.5"><Droplets size={16} className="text-[#F9D759]" /> Anti-Fungal Treatments</div>
            <span className="max-sm:hidden opacity-30">|</span>
            <div className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#F9D759]" /> Zero Pressure Damage</div>
          </div>
          <p className="text-xl font-medium italic leading-relaxed text-slate-600">
            "We focus on mechanical clearance and residual soft-wash layers that work gradually over the following months, meaning your roof continues to clean itself safely long after we pack down."
          </p>
        </div>
      </section>

      {/* 7. SERVICES CTA */}
      <ServicesCTA />

      {/* BRAND FOOTER SIGN-OFF */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Moss Removal & Cleaning
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MossRemovalRoofCleaningPage;