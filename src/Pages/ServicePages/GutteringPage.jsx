import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Search,
  Droplets,
  Trash2,
  Sparkles,
  ShieldCheck,
  Info,
  Layers,
  FileText
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const GutteringPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/gutter-vac.jpg')] bg-center bg-cover text-white">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <Trash2 size={16} />
              Professional Property Maintenance
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Gutter Clearance <br />
              <span className="text-[#F9D759]">& Gutter Cleaning</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-100 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              Professional gutter clearing services across Brighton and surrounding areas.
            </p>

            {/* CTA Buttons */}
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
            
            {/* Left Narrative Column */}
            <div className="lg:w-3/5 w-full text-center lg:text-left">
              <h2 className="text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Protect Your Property <br />
                <span className="text-[#F9D759]">From Water Damage</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  At Action Roofing Services, we provide professional gutter cleaning and clearance services designed to keep rainwater flowing correctly and help protect your property from unnecessary water damage.
                </p>
                <p>
                  Regular gutter maintenance helps ensure rainwater is able to drain properly and reduces the likelihood of avoidable water-related issues.
                </p>
                <p className="border-l-4 lg:border-l-4 max-lg:border-l-0 max-lg:border-t-4 max-lg:pt-4 border-[#F9D759] pl-6 max-lg:pl-0 italic text-[#243453] font-bold">
                  "Gutters play an important role in directing rainwater safely away from your property. When blocked with moss, leaves and debris, water can begin overflowing onto walls, fascias, soffits and surrounding areas."
                </p>
              </div>
            </div>

            {/* Right Presentation Image Block (Static) */}
            <div className="lg:w-2/5 w-full self-stretch min-h-[350px] lg:min-h-0 relative">
              <div className="relative h-full min-h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-900">
                <img
                  src="/images/fascia-soffits-guttering.jpg"
                  alt="Action Roofing Gutter Inspection and Cleaning"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY IS GUTTER CLEARANCE IMPORTANT GRID (Perfect Balanced 3x2 Matrix Grid) */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Header Info */}
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight">
                Why Is Gutter <br />
                <span className="text-[#F9D759]">Clearance Important?</span>
              </h2>
              <div className="space-y-6 text-slate-200 text-lg mb-8 leading-relaxed font-medium">
                <p>
                  Roof drainage lines frequently fill with loose tree materials, sand sediment, and heavy roofing debris washed off the pitches by rain storms over time.
                </p>
                <p>
                  When blockages build up, standing pools can freeze, crack plastic joints, back-feed beneath lower edge slates, and completely destroy your property's exterior performance framework if left unmanaged.
                </p>
              </div>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-sm font-semibold text-left">
                <Info size={24} className="text-[#F9D759] shrink-0" />
                Catching leaks early blocks water tracks completely before internal structures decay.
              </div>
            </div>

            {/* Right 2-Column Square Grid (Static Tiles) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Damp & Moisture Issues",
                  desc: "Trapped rain builds up, soaking external walls and creating severe internal damp zones.",
                  icon: AlertTriangle,
                },
                {
                  title: "Heavy Overflowing",
                  desc: "Water cascades continuously over external faces during intense local cloudbursts.",
                  icon: Droplets,
                },
                {
                  title: "Wall & Render Staining",
                  desc: "Dirty sludge channels pour down external faces, leaving deep mineral streaks on render.",
                  icon: Sparkles,
                },
                {
                  title: "Fascia & Soffit Damage",
                  desc: "Sustained damp rot attacks timber support components behind brackets.",
                  icon: Search,
                },
                {
                  title: "System Back-Feeding",
                  desc: "Water breaks direction entirely, running backwards into wall cavites.",
                  icon: Trash2,
                },
                {
                  title: "Poor Ground Drainage",
                  desc: "Uncontrolled water pooling shifts or erodes pathways near base foundations.",
                  icon: ShieldCheck,
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

      {/* 4. OUR GUTTER CLEARING PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            Our Gutter <span className="text-[#F9D759]">Clearing Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base 2xl:text-lg font-medium">
            We operate transparently with an end-to-end extraction framework designed to keep your home protected.
          </p>
        </div>

        {/* Perfect 3-Column Grid Layout (4 items total require careful layout or balancing to avoid odd rows - let's expand seamlessly to 6 tiles or align uniformly) */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "Gutter Inspection",
              text: "We begin by assessing the condition of the guttering and identifying any visible blockages or drainage issues before any work begins.",
            },
            {
              icon: Trash2,
              title: "Professional Gutter Clearance",
              text: "Using professional gutter vacuum systems and access equipment where required, we safely remove moss, leaves, silt and debris from the guttering system.",
            },
            {
              icon: Droplets,
              title: "Downpipe Checks",
              text: "Downpipes are checked to ensure water is flowing correctly and minor blockages are cleared directly where possible.",
            },
            {
              icon: Sparkles,
              title: "Site Clean-Up",
              text: "Any debris removed during the vacuum extraction process is cleared away completely, leaving the surrounding property clean and tidy upon completion.",
            },
            {
              icon: HardHat,
              title: "Fixing Inspections",
              text: "Our technicians run alignment tests across brackets to make sure the tracking slopes match factory specifications.",
            },
            {
              icon: ShieldCheck,
              title: "Final Flow Pass",
              text: "A thorough visual drainage confirmation check is signed off to ensure that your collection system handles high volumes cleanly.",
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

      {/* 5. PREVENTATIVE ROOF & PROPERTY MAINTENANCE */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
                Preventative Roof & <br />Property Maintenance
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Blocked gutters are often one of the earliest signs that roof maintenance may be required, particularly where moss growth is present on the roof.
              </p>
              <p className="text-base text-slate-500 font-medium leading-relaxed">
                Where minor roofing defects, overflow points, or structural misalignments are identified, we provide honest advice and clear photo evidence so you can make informed decisions completely without pressure.
              </p>
              
              <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-6 space-y-4">
                <h4 className="text-amber-800 font-black uppercase text-xs tracking-wider flex items-center gap-2">
                  <AlertTriangle size={16} /> During routine clearances, we look out for:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Thick moss and vegetation build-up",
                    "Slipped, loose or damaged tiles",
                    "Critical framework overflow points",
                    "Failing, warped, or split gutter brackets",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-amber-900/80">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Optional Extra Features Side */}
            <div className="lg:col-span-5 bg-[#243453] p-8 rounded-3xl text-white border-b-8 border-[#F9D759] shadow-xl text-left">
              <HardHat className="text-[#F9D759] mb-4" size={36} />
              <h3 className="text-lg sm:text-xl font-black uppercase mb-4 tracking-tight">
                Complementary Add-ons
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                Where requested, we can arrange multi-tier exterior valeting combinations to keep your property infrastructure performing optimally:
              </p>
              <div className="space-y-3">
                {[
                  "Roof Moss Removal & Treatment",
                  "Fascia and Soffit Face Wash",
                  "Comprehensive Window Cleaning",
                  "Minor Roof System Repairs",
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

      {/* 6. TRUST SUMMARY HOOK BAR */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex gap-4 max-sm:flex-col justify-center items-center text-[#243453] font-black uppercase tracking-widest text-xs">
            <div className="flex items-center gap-1.5"><Search size={16} className="text-[#F9D759]" /> Precision Inspections</div>
            <span className="max-sm:hidden opacity-30">|</span>
            <div className="flex items-center gap-1.5"><Layers size={16} className="text-[#F9D759]" /> Photo Documentation</div>
            <span className="max-sm:hidden opacity-30">|</span>
            <div className="flex items-center gap-1.5"><FileText size={16} className="text-[#F9D759]" /> Fixed Quotations</div>
          </div>
          <p className="text-xl font-medium italic leading-relaxed text-slate-600">
            "If severe downpipe or structural drainage blocks are located inside your perimeter lines, we map out transparent pathways before taking action, putting you in full budgetary control."
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
            Action Roofing Services | Gutter Clearance & Cleaning
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GutteringPage;