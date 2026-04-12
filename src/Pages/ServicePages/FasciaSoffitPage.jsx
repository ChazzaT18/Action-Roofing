import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  AlertTriangle,
  Construction,
  CheckCircle2,
  Wind,
  Droplets,
  Bird,
  Trash2,
  Hammer,
  Eye,
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const FasciaSoffitPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-[url('/images/fascia-soffits-guttering.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex flex-col justify-center items-center relative z-10 text-center">
          <div className="mt-[30px] w-full sm:mt-[40px] lg:mt-[30px] xl:mt-[20px]">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Maintenance-Free uPVC • 10-Year Guarantee
            </div>

            <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Fascia, Soffit & <br />
              <span className="text-[#F9D759]">Guttering Specialists</span>
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Protect your roofline and improve your home’s appearance with
              professionally installed fascias, soffits, and guttering in
              Brighton & Hove.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  Request a Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453]/80 backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>
              <p className="mt-4 text-xs sm:text-sm 2xl:text-base text-slate-300 italic font-medium">
                Fully insured • Clear advice • Clean, tidy workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE (Brother's wording + Visual Checklist) */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column: Brother's Wording */}
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                A Properly Installed{" "}
                <span className="text-[#F9D759]">Roofline Matters</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Your fascias, soffits, and guttering work together as a{" "}
                  <strong>single system</strong> that protects the edge of your
                  roof and controls how rainwater is directed away from your
                  property.
                </p>
                <p>
                  When everything is installed correctly, this system helps
                  prevent water damage, supports the roof structure, and keeps
                  your home looking clean and well maintained. When it begins to
                  fail, problems can develop gradually — from small leaks and
                  overflow to more serious issues such as timber decay and damp.
                </p>
                <p className="border-l-4 border-[#F9D759] pl-6 italic text-[#243453]">
                  "We approach every roofline job with this in mind, focusing on
                  doing the work properly so it performs reliably over time."
                </p>
              </div>
            </div>

            {/* Right Column: Visual Highlights (Punchy & Icon-driven) */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2.5rem] relative overflow-hidden">
                {/* Subtle Background Icon Decoration */}
                <ShieldCheck
                  className="absolute -right-4 -bottom-4 text-slate-200/50"
                  size={120}
                />

                <h4 className="text-[#243453] font-black uppercase tracking-widest text-sm mb-8 border-b border-slate-200 pb-4">
                  System Integrity Checklist
                </h4>

                <ul className="space-y-6 relative z-10">
                  {[
                    {
                      title: "Structural Support",
                      desc: "Rigid fascia boards to support heavy gutter loads.",
                      icon: Construction,
                    },
                    {
                      title: "Timber Protection",
                      desc: "Full seal to prevent rafter-end rot and decay.",
                      icon: ShieldCheck,
                    },
                    {
                      title: "Moisture Control",
                      desc: "Precision alignment for 100% effective drainage.",
                      icon: Droplets,
                    },
                    {
                      title: "Curb Appeal",
                      desc: "Clean, consistent lines and maintenance-free finish.",
                      icon: CheckCircle2,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                        <item.icon className="text-[#F9D759]" size={20} />
                      </div>
                      <div>
                        <p className="text-[#243453] font-black uppercase text-xs tracking-wide mb-1">
                          {item.title}
                        </p>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WARNING SIGNS GRID */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-black uppercase mb-8 leading-tight">
                Signs Your Roofline <br />
                <span className="text-[#F9D759]">Needs Attention</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium">
                Roofline issues often develop slowly, and it’s not always
                obvious there’s a problem until damage has already started to
                occur. Dealing with it early can prevent more extensive and
                costly work later on.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-base">
                <AlertTriangle size={24} className="text-[#F9D759] shrink-0" />
                Leaking gutters often indicate failed seals or incorrect "fall."
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Visible Wear",
                  desc: "Peeling paint, cracked boards, or sagging guttering lines.",
                  icon: Eye,
                },
                {
                  title: "Water Spillage",
                  desc: "Water marks on brickwork or overspill during rainfall.",
                  icon: Droplets,
                },
                {
                  title: "Pest Entry",
                  desc: "Gaps in soffits allowing birds or rodents into your loft.",
                  icon: Bird,
                },
                {
                  title: "Damp Patches",
                  desc: "Signs of moisture inside the home near the roofline.",
                  icon: AlertTriangle,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <item.icon
                    className="text-[#F9D759] mb-4 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h4 className="text-lg font-black uppercase mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE COMPONENT BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Construction,
              title: "Fascia Installation",
              text: "We remove worn fascias, check the condition of underlying rafters, and install new boards that are securely aligned.",
            },
            {
              icon: Wind,
              title: "Soffits & Ventilation",
              text: "Neat finishes that incorporate essential airflow where required to help maintain a healthy, dry roof space.",
            },
            {
              icon: Droplets,
              title: "Guttering Systems",
              text: "Correctly positioned and aligned with the proper fall to ensure rainwater is directed away effectively.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 bg-slate-50 rounded-[2rem] border-b-8 border-[#f9d759]"
            >
              <item.icon
                className="bg-[#243453] text-[#F9D759] rounded-xl p-3 mb-6"
                size={48}
              />
              <h3 className="text-xl font-black uppercase mb-4 text-[#243453]">
                {item.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE "PROPERLY" PROMISE */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-[#243453] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-b-8 border-[#F9D759]">
            <div className="lg:w-1/2 py-10 px-8 md:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl max-lg:text-center font-black uppercase mb-8 leading-tight">
                Doing the Job <br />
                <span className="text-[#F9D759]">Properly</span>
              </h2>
              <p className="text-slate-300 max-lg:text-center text-lg mb-10">
                Most "cheap" quotes involve pinning new plastic over old,
                rotting wood (capping). We refuse to do that. It traps moisture
                and accelerates rot.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Hammer,
                    title: "Full Strip-Back",
                    text: "We remove all old timber to expose the rafter ends for inspection.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Timber Health Check",
                    text: "If we find rot in the rafters, we fix it properly before installation.",
                  },
                  {
                    icon: Bird,
                    title: "Eave Guards",
                    text: "We install professional protection to stop birds nesting under your tiles.",
                  },
                  {
                    icon: Trash2,
                    title: "Zero-Mess Guarantee",
                    text: "All old debris is hauled away; your property is left spotless.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex max-lg:justify-center items-center gap-4"
                  >
                    <item.icon
                      className="text-[#F9D759] max-lg:hidden shrink-0"
                      size={24}
                    />
                    <div>
                      <div className="flex flex-col max-lg:items-center justify-center md:text-sm gap-4">
                        <item.icon
                          className="text-[#F9D759] lg:hidden shrink-0"
                          size={20}
                        />
                        <h4 className="font-black max-lg:text-center uppercase mb-1">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-slate-400 max-lg:text-center text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('/images/fascia-soffit-replacement.jpg')] bg-cover bg-center min-h-[400px]" />
          </div>
        </div>
      </section>

      {/* 6. MATERIALS & NARRATIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Durable, Low-Maintenance <br />
                <span className="text-[#F9D759]">Modern Materials</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed mb-10">
                <p>
                  We install modern uPVC roofline systems designed to be
                  durable, weather-resistant, and low maintenance.
                </p>
                <p>
                  Unlike traditional timber, these materials do not require
                  regular painting and are less prone to rot or deterioration.
                  When fitted correctly, they provide long-lasting protection
                  while maintaining a clean and consistent appearance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    color: "bg-white border border-slate-200",
                    title: "Classic White",
                  },
                  { color: "bg-[#35393C]", title: "Anthracite Grey" },
                  { color: "bg-[#1A1A1A]", title: "Black Ash" },
                ].map((style, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 border-b-4 border-[#243453]"
                  >
                    <div
                      className={`${style.color} w-10 h-10 rounded-full shadow-sm`}
                    />
                    <h4 className="font-black uppercase text-[#243453] text-[10px] tracking-widest">
                      {style.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-xl lg:max-w-none">
              <div className="relative p-3 bg-[#243453] rounded-[2rem] shadow-xl">
                <img
                  src="/images/SFG-diagram.webp"
                  alt="uPVC Roofline Colors"
                  className="rounded-[1.5rem] w-full md:max-h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* 7. FINAL WORD (Brother's Closing Statement) */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-black uppercase text-[#243453] mb-6 tracking-tight">
              Clear Advice. Reliable Workmanship.
            </h3>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-10">
              "We understand that work on your home is an investment. From worn
              timber and leaking gutters to full roofline replacements, we
              provide clean, reliable installations carried out with care and
              attention to detail."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services | Fascias, Soffits & Guttering
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FasciaSoffitPage;
