import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Layers,
  Search,
  Hammer,
  Droplets,
  HelpCircle,
  ChevronDown,
  Flame,
  CheckCircle2,
  CornerDownRight,
  Compass,
  FileText,
  ShieldAlert
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const FlatRoofingPage = ({ setCurrentPage }) => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const systemCheckpoints = [
    "Roof falls and correct drainage",
    "Condition of the existing deck",
    "Timber joists and underlying substrate",
    "Roof perimeter edges and trims",
    "Fascia details and drip lines",
    "Wall abutments and upstands",
    "Internal roof outlets and drainage pipes",
    "Custom lead flashings and apron junctions",
    "Junctions tied into adjoining pitched roofs",
    "Skylights and roof penetrations",
    "Previous repair patches and deck defects",
    "Vapour barriers and insulation levels"
  ];

  const repairItems = [
    {
      title: "Localised Membrane Fixes",
      desc: "Targeted repairs to split, blistered, punctured, or torn waterproofing areas.",
      icon: Hammer,
    },
    {
      title: "Leadwork & Flashings",
      desc: "Repairing or replacing cracked abutment lead and chimney flashings.",
      icon: Droplets,
    },
    {
      title: "Edge Trims & Upstands",
      desc: "Re-securing lifted drip trims, corner details, and perimeter boundary lines.",
      icon: CornerDownRight,
    },
    {
      title: "Defective Junctions",
      desc: "Resolving water tracking where flat membranes integrate into pitched slate or tile.",
      icon: Layers,
    },
    {
      title: "Outlet Leaks & Drainage",
      desc: "Re-sealing internal drainage sumps, outlets, and downpipe discharge points.",
      icon: Droplets,
    },
    {
      title: "Penetration Details",
      desc: "Sealing around skylights, soil vent pipes, roof vents, and flue collars.",
      icon: Search,
    },
  ];

  const faqs = [
    {
      q: "How long does a flat roof last?",
      a: "The lifespan of a flat roof depends on the system used, the quality of installation, the underlying construction, exposure, and maintenance. Modern EPDM rubber, GRP, and multi-layer felt systems installed properly can last 25 to 50 years.",
    },
    {
      q: "Can you repair a leaking flat roof?",
      a: "Yes. Depending on the condition and cause of the leak, a targeted repair may be appropriate. We assess the roof before recommending whether a repair or renewal is the better option.",
    },
    {
      q: "What is the difference between Felt, GRP, and EPDM Rubber?",
      a: "Torch-on felt uses multi-layer reinforced bituminous membranes heat-welded together. GRP fibreglass forms a rigid, seamless resin skin. EPDM rubber is a single-sheet synthetic elastomeric membrane that offers exceptional flexibility and UV resistance with minimal joins.",
    },
    {
      q: "Do flat roofs need a fall?",
      a: "Yes. Effective drainage is an essential consideration. The roof must be designed and constructed with a subtle gradient (fall) so that rainwater discharges cleanly rather than ponding on the surface.",
    },
    {
      q: "Can you replace the leadwork around a flat roof?",
      a: "Yes. We specialize in bespoke leadwork and regularly repair or replace step flashing, cover aprons, and lead junctions around flat roofs.",
    },
    {
      q: "Do you replace the whole roof if there is a leak?",
      a: "Not necessarily. If the existing roof deck and surrounding layers are fundamentally sound, a targeted repair is often suitable. Where the covering or timber substrate has deteriorated significantly, we advise on full renewal.",
    },
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/flat-roof-landing-hero.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 3xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Torch-On Felt • GRP • EPDM Rubber
            </div>

            <h1 className="text-3xl lg:text-4xl 3xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Flat Roofing in <br />
              <span className="text-[#F9D759]">Brighton & Sussex</span>
            </h1>

            <p className="text-lg md:text-xl 3xl:text-2xl text-slate-100 leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
              Professional torch-on felt, GRP fibreglass, and EPDM rubber flat roofing systems designed to provide durable, weather-resistant protection for your property.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Request a Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-10 py-4.5 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 3xl:text-base text-slate-300 italic">
                Free inspections · 10-Year Guarantee · Clear honest advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="text-3xl 3xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Specialist Flat Roofing <br />
                <span className="text-[#F9D759]">Felt, GRP & EPDM Rubber</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  From repairs and maintenance to complete flat roof renewals, we take a detailed approach to every project. We don't just focus on the waterproofing layer — we consider the condition of the roof structure, falls, drainage, edges, abutments, flashings, and other details that are essential to achieving a long-lasting result.
                </p>
                <p>
                  Whether working with traditional torch-on felt, seamless GRP fibreglass, or flexible single-ply EPDM rubber membranes, we look beyond the visible surface to diagnose the complete roof assembly and resolve underlying root causes.
                </p>
                <p className="border-l-4 max-lg:border-l-0 max-lg:border-t-4 max-lg:pt-4 border-[#F9D759] pl-6 max-lg:pl-0 italic text-[#243453] font-bold">
                  "Every flat roof project is completed with rigorous attention to substrate preparation, falls, and surrounding lead flashings for complete peace of mind."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 w-full self-stretch min-h-[350px] lg:min-h-0 relative">
              <div className="relative h-full min-h-[350px] shadow-2xl w-full rounded-[2.5rem] overflow-hidden border border-slate-100 bg-slate-900">
                <img
                  src="/images/flat-roof-felt.jpg"
                  alt="Flat Roofing Detailing and Leadwork"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC MATRIX: BEYOND THE SURFACE */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px] mb-4">
              Structural Diagnosis
            </div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight">
              Looking Beyond The <span className="text-[#F9D759]">Visible Membrane</span>
            </h2>
            <p className="text-slate-300 text-lg font-medium leading-relaxed">
              A flat roof is an engineered system. We conduct a multi-point evaluation across all critical junctions and components to ensure long-term durability:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 3xl:gap-6">
            {systemCheckpoints.map((point, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3.5 text-left"
              >
                <CheckCircle2 size={20} className="text-[#F9D759] shrink-0" />
                <span className="text-white font-bold text-sm 3xl:text-base leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REPAIRS & TARGETED SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
                Flat Roof Repairs
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Not every leaking flat roof requires a complete replacement. Where appropriate, we investigate the underlying cause of water ingress and carry out targeted, high-specification repairs across Felt, GRP, and Rubber systems to extend the serviceable life of your roof.
              </p>
              <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                If the roof deck or existing layers have reached the end of their operational life, we provide transparent, itemised recommendations for a modern renewal.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#243453] hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Book a Roof Inspection
                  <ArrowRight size={18} className="text-[#F9D759]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repairItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 text-left shadow-sm"
                >
                  <div className="bg-[#243453] p-3 rounded-xl text-[#F9D759] shrink-0 mt-0.5">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-black uppercase tracking-tight mb-1 text-[#243453]">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. SYSTEM COMPARISON (3 OPTIONS: FELT vs GRP vs RUBBER) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase text-[#243453] mb-4">
              Which Flat Roofing System <br />
              <span className="text-[#d1ad2b]">Is Right For Your Property?</span>
            </h2>
            <p className="text-slate-600 text-base 3xl:text-lg font-medium">
              There isn't a single system that suits every roof. We evaluate size, substrate, movement, detailing, and foot traffic before recommending the best approach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {/* 1. Torch-on Felt Card */}
            <div className="bg-white p-8 rounded-3xl shadow-md border-b-8 border-[#243453] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-xl flex items-center justify-center shrink-0">
                    <Flame size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#243453]">
                    Torch-On Felt
                  </h3>
                </div>
                <p className="text-slate-600 text-xs font-medium mb-6 leading-relaxed">
                  High-performance multi-layer SBS/APP elastomeric bituminous membranes heat-welded to create a thick, flexible, and robust waterproof barrier.
                </p>
                <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Temperature flexibility
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Great for large decks
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> UV mineral cap protection
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Time-tested coastal resilience
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. GRP Fibreglass Card */}
            <div className="bg-[#243453] p-8 rounded-3xl shadow-xl border-b-8 border-[#F9D759] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 text-[#F9D759] rounded-xl flex items-center justify-center shrink-0">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white">
                    GRP Fibreglass
                  </h3>
                </div>
                <p className="text-slate-300 text-xs font-medium mb-6 leading-relaxed">
                  Cold-applied glass-reinforced polyester resin cured with a hard-wearing topcoat, forming a completely seamless, joint-free membrane.
                </p>
                <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#F9D759]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="shrink-0" size={15} /> 100% seamless finish
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="shrink-0" size={15} /> High impact resistance
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="shrink-0" size={15} /> Crisp architectural edge trims
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="shrink-0" size={15} /> Zero seams or heat welds
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. EPDM Rubber Roofing Card */}
            <div className="bg-white p-8 rounded-3xl shadow-md border-b-8 border-[#243453] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-xl flex items-center justify-center shrink-0">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#243453]">
                    EPDM Rubber
                  </h3>
                </div>
                <p className="text-slate-600 text-xs font-medium mb-6 leading-relaxed">
                  Single-ply synthetic rubber membrane installed in seamless large sheets, delivering incredible elongation, tear resistance, and UV stability.
                </p>
                <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Single-sheet continuous coverage
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Over 300% thermal elasticity
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> Flame-free cold installation
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#F9D759] shrink-0" size={15} /> 40+ year life expectancy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR 4-STEP METHODICAL APPROACH */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-left">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              Our Professional Approach
            </h2>
            <p className="text-slate-600 text-lg 3xl:text-xl font-medium leading-relaxed">
              We keep the process transparent and methodical from initial survey through to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inspect",
                desc: "We assess the existing roof deck, investigating visible defects, falls, and potential causes of water ingress.",
                icon: Search,
              },
              {
                step: "02",
                title: "Identify",
                desc: "We determine whether a targeted repair is viable or whether a full renewal is the more cost-effective long-term path.",
                icon: Compass,
              },
              {
                step: "03",
                title: "Recommend",
                desc: "We provide an itemised, fixed-price quotation explaining the options and best system for your property.",
                icon: FileText,
              },
              {
                step: "04",
                title: "Install",
                desc: "Work is carried out with meticulous preparation, timber checks, waterproofing, and custom lead detailing.",
                icon: Hammer,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-xl flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#243453] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US TRUST BANNER */}
      <section className="bg-[#243453] py-20 px-4 md:px-10 text-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px]">
              Why Choose Action Roofing
            </div>
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase tracking-tight leading-tight">
              Experienced Flat Roofing <br />
              <span className="text-[#F9D759]">With In-House Standards</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              We combine decades of roofing experience with deep specialist knowledge of lead flashings, structural deck alignment, and coastal waterproofing.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Experienced In-House Team",
              "Specialist Leadwork & Detailing",
              "Felt, GRP & EPDM Rubber Experts",
              "10-Year Workmanship Guarantee",
              "Honest Diagnostic Assessments",
              "Serving Brighton, Hove & Sussex"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle2 size={18} className="text-[#F9D759] shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase text-[#243453] mb-4">
              Frequently Asked <span className="text-[#F9D759]">Questions</span>
            </h2>
            <p className="text-slate-600 text-base font-medium">
              Clear answers to common questions regarding flat roof repairs, replacements, and maintenance.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-center justify-between gap-4 font-black uppercase text-sm md:text-base text-[#243453] cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#F9D759] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-[#d1ad2b]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base font-medium leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICES CTA MODULE */}
      <ServicesCTA />

      {/* BRAND FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Flat Roofing Specialists
          </p>
        </div>
      </footer>

    </div>
  );
};

export default FlatRoofingPage;