import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Info,
  Hammer,
  Layers,
  Camera,
  Wind,
  CheckCircle,
  FileText,
  HardHat,
  Ruler,
  Award,
  CornerDownRight,
  Sun,
  CheckCircle2,
  Droplets,
  ArrowRight,
  History,
  Truck
} from "lucide-react";

const SlateTilePage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION (Kept as is per instructions) */}
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
              Expert replacements in Brighton & Hove. Built for durability and
              aesthetics using 23+ years of combined experience.
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
                <span className="text-xs font-bold uppercase tracking-widest">
                  Fully Insured • Local Experts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE "WHY REPLACE?" SECTION */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight">
                When is a Repair <br />
                <span className="text-[#F9D759]">No Longer Enough?</span>
              </h2>
              <p className="text-slate-200 text-lg 2xl:text-xl mb-8 leading-relaxed">
                Ongoing repairs can become a "money pit." A full replacement is
                often the more cost-effective move if you notice these warning
                signs:
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-base leading-relaxed">
                <Info size={24} className="text-[#F9D759] shrink-0" />
                Protecting timbers early saves thousands in structural repairs
                later.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Repeated Leaks",
                  desc: "Multiple patches that still drip despite regular attention.",
                  icon: Droplets,
                },
                {
                  title: "Daylight In Loft",
                  desc: "Visible holes or evidence of rotting structural timbers.",
                  icon: Sun,
                },
                {
                  title: "Shedding Debris",
                  desc: "Finding mortar or snapped tile fragments in your gutters.",
                  icon: Layers,
                },
                {
                  title: "Roof Age",
                  desc: "Over 50 years old where the original fixings are failing.",
                  icon: History,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <item.icon
                    className="text-[#F9D759] mb-4 group-hover:scale-110 transition-transform duration-300"
                    size={32}
                  />
                  <h4 className="text-lg font-black uppercase mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm 2xl:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMY OF A QUALITY ROOF - Text size increased */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            What’s Included in a{" "}
            <span className="text-[#F9D759]">Complete Build?</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#F9D759] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-base 2xl:text-lg font-medium">
            We follow a strict structural checklist to ensure your home is
            watertight for decades.
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Hammer,
              title: "Strip & Prep",
              text: "Careful removal of old materials and structural timber inspection.",
            },
            {
              icon: Wind,
              title: "Modern Protection",
              text: "High-performance breathable membranes to prevent damp.",
            },
            {
              icon: Ruler,
              title: "Precision Battening",
              text: "Treated timber laths installed with laser-straight alignment.",
            },
            {
              icon: Layers,
              title: "Premium Materials",
              text: "Your choice of Welsh Slate, Clay, or Concrete tiles.",
            },
            {
              icon: CornerDownRight,
              title: "Expert Leadwork",
              text: "Custom-fitted flashing around chimneys and valleys.",
            },
            {
              icon: Truck,
              title: "The Clean-up",
              text: "We treat your property like our own. Full waste removal included.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-slate-100 rounded-3xl shadow-lg hover:shadow-xl duration-300 transition-all group"
            >
              <item.icon
                className="text-[#243453] bg-[#F9D759] rounded-xl p-3 mb-6 group-hover:scale-110 transition-transform"
                size={44}
              />
              <h3 className="text-lg font-black uppercase mb-3 text-[#243453]">
                {item.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TILE vs. SLATE - Text size increased */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-md border-b-4 border-slate-200">
              <h3 className="text-2xl font-black uppercase mb-6">
                Concrete & Clay <span className="text-slate-400">Tiles</span>
              </h3>
              <ul className="space-y-4 text-base font-medium text-slate-700">
                <li className="flex  gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={22} />{" "}
                  Best for modern homes & budget builds.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={22} />{" "}
                  Huge range of colors and profiles.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={22} />{" "}
                  Efficient interlocking installation.
                </li>
              </ul>
            </div>
            <div className="bg-[#243453] p-10 rounded-3xl shadow-md border-b-4 border-[#F9D759] text-white">
              <h3 className="text-2xl font-black uppercase mb-6">
                Natural & Man-made <span className="text-[#F9D759]">Slate</span>
              </h3>
              <ul className="space-y-4 text-base font-medium text-slate-200">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={22} />{" "}
                  Best for period properties & premium aesthetics.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={22} />{" "}
                  Incredible lifespan (up to 100 years).
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={22} />{" "}
                  Adds significant resale value to your home.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 10 YEAR WARRANTY - Text size increased */}
      <section className="bg-[#243453] py-24 2xl:py-32 px-4 md:px-10 text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl mb-6 font-black border-l-8 border-[#F9D759] pl-8 uppercase tracking-tight leading-tight">
                A 10-Year Guarantee <br /> On Every Full Installation
              </h2>
              <p className="text-xl 2xl:text-2xl text-[#F9D759] font-bold">
                Protecting your investment with premium materials and
                accountable craftsmanship.
              </p>
            </div>

            <div className="space-y-8 text-slate-200 text-lg 2xl:text-xl leading-relaxed">
              <p>
                A new slate or tile roof is a 50+ year investment. We ensure
                that investment is protected from day one. Unlike
                "patch-and-run" contractors, we provide a
                <span className="text-white font-bold">
                  {" "}
                  formal written workmanship guarantee
                </span>{" "}
                on every full replacement we undertake.
              </p>
              <p>
                From the initial strip-back to the final ridge tile, we document
                the structural health of your timbers and the precision of our
                lathing via
                <span className="text-white font-bold"> photo evidence</span>,
                giving you a complete record of the quality beneath the surface.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {[
                {
                  text: "10-Year Written Workmanship Guarantee",
                  icon: ShieldCheck,
                },
                { text: "Detailed Photo Documentation of Build", icon: Camera },
                {
                  text: "Treated Timber & Breathable Membranes",
                  icon: CheckCircle,
                },
                { text: "Fixed-Price Itemised Quotations", icon: FileText },
                { text: "Fully Insured for High-Level Work", icon: HardHat },
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

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#F9D759 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white w-80 h-80 2xl:w-[450px] 2xl:h-[450px] rounded-[50px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center p-10 2xl:p-16 border-t-[16px] border-[#F9D759] rotate-2 cursor-default">
                <div className="p-6 mb-6">
                  <ShieldCheck
                    size={72}
                    className="text-[#243453]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <span className="text-6xl 2xl:text-7xl font-black text-[#243453] leading-none tracking-tighter">
                    10-YEAR
                  </span>
                  <span className="text-sm 2xl:text-base font-black uppercase tracking-[0.3em] text-slate-500 mt-3">
                    Workmanship
                  </span>
                </div>
                <div className="h-[3px] w-32 bg-slate-100 mb-6" />
                <div className="bg-[#243453] text-[#F9D759] px-8 py-4 rounded-2xl text-sm 2xl:text-base font-black uppercase tracking-widest shadow-lg">
                  Full Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE ACTION ROOFING PROMISE - Text size increased */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-10 leading-tight">
                No Surprises. <br />
                <span className="text-[#F9D759]">Straight Talk.</span>
              </h2>
              <div className="space-y-10">
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-widest text-sm mb-2">
                    Fixed Quotes
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Once agreed, the price is fixed. No hidden mid-project
                    "extras".
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-widest text-sm mb-2">
                    Active Communication
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    If we find hidden issues, we provide photo evidence and
                    discuss fixes immediately.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-black uppercase tracking-widest text-sm mb-2">
                    Zero Pressure
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    We provide the facts and a fair price. You make the final
                    decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('/images/installation-detail.jpg')] bg-cover bg-center min-h-[400px]" />
          </div>
        </div>
      </section>

      {/* FINAL CTA - Text size increased */}
      <section className="py-24 bg-[#F9D759] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-6 leading-tight">
            Ready to Protect Your Home?
          </h2>
          <p className="text-sm md:text-base text-[#243453] font-bold uppercase tracking-widest mb-10">
            Schedule your free roof replacement inspection today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact-us"
              className="bg-[#243453] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider duration-300 hover:scale-105 transition-all shadow-2xl text-base"
            >
              Get My Free Quote
            </Link>
            <a
              href="tel:07768981913"
              className="border-4 border-[#243453] text-[#243453] px-10 py-4.5 rounded-2xl font-black uppercase tracking-wider duration-300 hover:scale-105 shadow-2xl transition-all text-base"
            >
              Call Now: 07768 981913
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlateTilePage;
