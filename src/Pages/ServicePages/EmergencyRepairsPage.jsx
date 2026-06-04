import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Clock,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Search,
  Camera,
  Hammer,
  Banknote,
  Info,
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const EmergencyRepairsPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/roof-repairs.jpg')] bg-center bg-cover text-white">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          {/* Main Content Wrapper - Safe zone for fixed header on mobile */}
          <div className="py-12 pt-[140px] sm:pt-20 lg:pt-10 flex flex-col justify-center items-center">
            
            {/* Top Badge - Specific to Emergency */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <Clock size={18} />
              24/7 Brighton & Hove Response
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Emergency <br />
              <span className="text-[#F9D759]">Roof Repairs</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-100 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              Direct access to qualified roofers when you need us most. We
              provide rapid structural stabilizing and leak prevention across
              Brighton & Hove.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-black rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-black rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic">
                Free inspections · No obligation · Rapid Local Response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMMEDIATE ACTION STEPS INFOBAR */}
      <section className="py-8 bg-[#F9D759] shadow-lg border-y-4 border-[#243453]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="shrink-0 bg-[#243453] p-4 rounded-2xl text-[#F9D759] shadow-md">
              <AlertTriangle size={40} className="sm:w-12 sm:h-12" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase mb-1 text-[#243453]">
                Immediate Steps to Take:
              </h3>
              <p className="text-[#243453] font-bold text-sm sm:text-base xl:text-lg leading-relaxed">
                If you have an active leak: Clear the area and use buckets to catch
                water. <span className="underline italic decoration-2">Do not attempt to go onto the roof yourself</span>. 
                We are on the way to handle the height and structural risks safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED RESPONSIVE TEXT COPY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:w-3/5 w-full text-center lg:text-left">
              <h2 className="text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Straightforward <br />
                <span className="text-[#F9D759]">Leak Solutions</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Noticing water entering your property can be a stressful and worrying experience. At Action Roofing Services, our aim is to make the situation as straightforward and stress-free as possible.
                </p>
                <p>
                  Our first priority is to safely minimise further water ingress where practical and conditions allow. We will then carry out a free roof inspection, explain the issue clearly, and advise you on what we believe is the most sensible course of action.
                </p>
                <p className="border-l-4 lg:border-l-4 max-lg:border-l-0 max-lg:border-t-4 max-lg:pt-4 border-[#F9D759] pl-6 max-lg:pl-0 italic text-[#243453] font-bold">
                  "Where work is recommended, we provide honest, no-pressure quotations along with clear explanations and photo evidence so you can make informed decisions with confidence."
                </p>
              </div>
            </div>

            {/* Right Static Presentation Block */}
            <div className="lg:w-2/5 w-full self-stretch min-h-[350px] lg:min-h-0 relative">
              <div className="relative h-full min-h-[350px] shadow-2xl w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-900">
                <img
                  src="/images/roof-repairs-2.jpg"
                  alt="Action Roofing Rapid Leak Stabilisation"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. AUTHORITY GRID */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            Common Emergency Repairs
          </h2>
          <div className="h-1.5 w-24 bg-[#F9D759] mx-auto"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Active Leaks",
              desc: "Finding the source and stopping water ingress immediately.",
            },
            {
              title: "Storm Damage",
              desc: "Replacing slipped tiles, slates, and ridge caps post-gale.",
            },
            {
              title: "Lead & Chimneys",
              desc: "Repairing failed flashing and leaking chimney stacks.",
            },
            {
              title: "Temporary Measures",
              desc: "Professional tarping if weather prevents a permanent fix.",
            },
            {
              title: "Structural Timber",
              desc: "Expert repair of snapped battens or rotted supports.",
            },
            {
              title: "Gutter Failures",
              desc: "Clearing blocks causing internal damp or overflow.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[#243453] rounded-3xl border-b-4 border-transparent shadow-md text-left"
            >
              <CheckCircle2 className="text-[#F9D759] mb-4" size={28} />
              <h3 className="text-xl font-black text-white uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 font-semibold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STRUCTURAL EXPERTISE & SPEED */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-left">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
                More Than Just A Quick Fix
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                A roofing emergency isn't just about the tiles you can see—it's
                about the <strong>structural integrity</strong> of your home.
                When water enters, it compromises insulation, ceiling plaster,
                and timber rafters.
              </p>
              <div className="space-y-4">
                {[
                  "Rapid Tarping & Temporary Waterproofing",
                  "Structural Timber Reinforcement",
                  "Chimney & Flashing Stabilization",
                  "Debris Removal & Gutter Clearance",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-black uppercase text-xs tracking-wider"
                  >
                    <CheckCircle2 className="text-[#F9D759]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#243453] p-10 rounded-3xl text-white border-b-8 border-[#F9D759] shadow-2xl text-left">
              <Search className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-black uppercase mb-6">
                Why Speed Matters
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2 tracking-wide">
                    Prevent Mold & Damp
                  </h4>
                  <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                    Trapped moisture in the roof void can lead to black mold
                    within 48 hours.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2 tracking-wide">
                    Avoid Timber Rot
                  </h4>
                  <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                    Exposed roof batons can soak up water, leading to expensive
                    dry rot.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2 tracking-wide">
                    Protect Electronics
                  </h4>
                  <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                    Water often follows electrical conduits, creating fire
                    hazards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE PROCESS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-center mb-16">
            What Happens When You Call?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Phone Assessment",
                text: "We give you immediate advice to minimize damage.",
              },
              {
                icon: Clock,
                step: "02",
                title: "Rapid Arrival",
                text: "Our Brighton-based team arrives with the right tools.",
              },
              {
                icon: Camera,
                step: "03",
                title: "Photo Evidence",
                text: "We show you exactly what’s wrong before we start.",
              },
              {
                icon: Hammer,
                step: "04",
                title: "The Fix",
                text: "Professional repair with a clear price upfront.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 bg-[#243453] rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                  <item.icon size={32} />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-12 bg-[#F9D759] text-[#243453] font-black px-2 rounded-md shadow-sm">
                  {item.step}
                </span>
                <h3 className="font-black uppercase mb-2 text-sm tracking-wide">{item.title}</h3>
                <p className="text-xs text-slate-500 font-bold px-4 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EMERGENCY CALL-OUT RATES */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col justify-center lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 my-auto text-left">
              <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-lg font-black uppercase tracking-widest text-xs mb-6">
                <Banknote size={18} />
                Transparent Pricing
              </div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-6 leading-tight">
                Emergency <br />
                <span className="text-[#F9D759]">Call-Out Rates</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-medium">
                We believe in fair, local pricing. There are no hidden
                "emergency" surprises—just honest rates for professional work.
              </p>
              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <Info className="text-[#F9D759] shrink-0" size={24} />
                <p className="text-sm text-slate-300 italic font-semibold leading-relaxed">
                  "All costs are explained in full by our lead roofer before any
                  additional work is carried out. You remain in complete control
                  of the budget."
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid gap-4 text-left">
              <div className="bg-white rounded-2xl p-8 flex justify-between items-center shadow-md text-[#243453]">
                <div>
                  <h3 className="font-black uppercase text-base sm:text-xl tracking-tight">
                    Daytime Call-Out
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-bold mt-0.5">
                    Includes first hour on site
                  </p>
                </div>
                <div className="text-xl sm:text-2xl font-black">
                  From £150
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 flex justify-between items-center shadow-md text-[#243453]">
                <div>
                  <h3 className="font-black uppercase text-base sm:text-xl tracking-tight">
                    Out-of-Hours
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-bold mt-0.5">
                    Evenings & Weekends
                  </p>
                </div>
                <div className="text-xl sm:text-2xl font-black">
                  From £250
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 flex justify-between items-center">
                <div>
                  <h3 className="text-white font-black uppercase text-base sm:text-xl tracking-tight">
                    Additional Time
                  </h3>
                  <p className="text-slate-400 font-bold italic text-xs sm:text-sm mt-0.5">
                    Charged per hour thereafter
                  </p>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#F9D759]">
                  £80 – £110/hr
                </div>
              </div>
              <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-black pt-2">
                Materials & Specialist Access Equipment charged as required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCAL/FAMILY SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-left">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              A Trusted Family Response
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-4 leading-relaxed">
              Founded in 2007 by Jai Tahsin and now led by the next generation,
              Action Roofing brings 23 years of combined experience to every
              Brighton roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-md border-b-4 border-slate-200">
              <HardHat
                size={48}
                strokeWidth={2}
                className="text-[#F9D759] bg-[#243453] rounded-xl p-3 mb-4"
              />
              <h3 className="text-lg font-black uppercase mb-2">
                Qualified In-House Team
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                We don't subcontract our reputation. We arrive with the right
                tools to solve the problem immediately.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-md border-b-4 border-slate-200">
              <ShieldAlert
                size={48}
                strokeWidth={2}
                className="text-[#F9D759] bg-[#243453] rounded-xl p-3 mb-4"
              />
              <h3 className="text-lg font-black uppercase mb-2">
                Fully Insured & Guaranteed
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-bold">
                We are fully insured for all height-work and provide clear
                10-year guarantees on the work we perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Emergency Repairs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EmergencyRepairsPage;