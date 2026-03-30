import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Clock,
  ShieldAlert,
  ArrowRight,
  Zap,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Search,
  Camera,
  Hammer,
  Banknote,
  Info
} from "lucide-react";

const EmergencyRepairsPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-[url('/images/roof-repairs-hero.png')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/25 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex flex-col justify-center items-center relative z-10 text-center">
          <div className="mt-[30px] w-full sm:mt-[40px] lg:mt-[30px] xl:mt-[20px]">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6">
              <Clock size={18} />
              24/7 Brighton & Hove Response
            </div>
            <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
              Emergency <br />
              <span className="text-[#F9D759]">Roof Repairs</span>
            </h1>
            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              Direct access to qualified roofers when you need us most. We
              provide rapid structural stabilizing and leak prevention across
              Brighton & Hove.
            </p>
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="contact-us"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now: 07768 981913
                </a>
              </div>
              <p className="mt-4 text-xs sm:text-sm 2xl:text-base text-slate-300 italic">
                Free inspections · No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BROTHER'S ADVICE */}
      <section className="py-6 bg-[#F9D759] shadow-lg border-[#243453]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-row items-center gap-6">
            <div className="shrink-0 bg-[#243453] p-4 rounded-2xl text-[#F9D759]">
              <AlertTriangle size={48} />
            </div>
            <div>
              <h3 className="text-xl font-black max-md:hidden uppercase mb-2">
                Immediate Steps to Take:
              </h3>
              <p className="text-[#243453] font-bold">
                If you have an active leak: Clear the area, use buckets to catch
                water, and{" "}
                <span className="underline italic">
                  do not attempt to go onto the roof yourself
                </span>
                . We are on the way to handle the height and structural risks
                safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTHORITY GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            Common Emergency Repairs
          </h2>
          <div className="h-2 w-24 bg-[#F9D759] mx-auto"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Active Leaks", desc: "Finding the source and stopping water ingress immediately." },
            { title: "Storm Damage", desc: "Replacing slipped tiles, slates, and ridge caps post-gale." },
            { title: "Lead & Chimneys", desc: "Repairing failed flashing and leaking chimney stacks." },
            { title: "Temporary Measures", desc: "Professional tarping if weather prevents a permanent fix." },
            { title: "Structural Timber", desc: "Expert repair of snapped battens or rotted supports." },
            { title: "Gutter Failures", desc: "Clearing blocks causing internal damp or overflow." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#243253] rounded-2xl hover:border-[#F9D759] transition-all group hover:shadow-xl">
              <CheckCircle2 className="text-[#F9D759] mb-4" />
              <h3 className="text-xl font-black text-white uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STRUCTURAL EXPERTISE & SPEED */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
                More Than Just A Quick Fix
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
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
                  <div key={i} className="flex items-center gap-3 font-bold uppercase text-sm">
                    <CheckCircle2 className="text-[#F9D759]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#243453] p-10 rounded-3xl text-white border-b-8 border-[#F9D759] shadow-2xl">
              <Search className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-2xl font-black uppercase mb-6">Why Speed Matters</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">Prevent Mold & Damp</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Trapped moisture in the roof void can lead to black mold within 48 hours.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">Avoid Timber Rot</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Exposed roof batons can soak up water, leading to expensive dry rot.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">Protect Electronics</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Water often follows electrical conduits, creating fire hazards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <h2 className="text-3xl font-black uppercase text-center mb-16">
            What Happens When You Call?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, step: "01", title: "Phone Assessment", text: "We give you immediate advice to minimize damage." },
              { icon: Clock, step: "02", title: "Rapid Arrival", text: "Our Brighton-based team arrives with the right tools." },
              { icon: Camera, step: "03", title: "Photo Evidence", text: "We show you exactly what’s wrong before we start." },
              { icon: Hammer, step: "04", title: "The Fix", text: "Professional repair with a clear price upfront." },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-20 h-20 bg-[#243453] rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#F9D759] shadow-xl">
                  <item.icon size={32} />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-12 bg-[#F9D759] text-[#243453] font-black px-2 rounded-md shadow-sm">
                  {item.step}
                </span>
                <h3 className="font-black uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium px-4">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: EMERGENCY CALL-OUT RATES */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col justify-center lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 my-auto">
              <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-lg font-black uppercase tracking-widest text-xs mb-6">
                <Banknote size={18} />
                Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-black uppercase mb-6 leading-tight">
                Emergency <br/><span className="text-[#F9D759]">Call-Out Rates</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-medium">
                We believe in fair, local pricing. There are no hidden "emergency" surprises—just honest rates for professional work.
              </p>
              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <Info className="text-[#F9D759] shrink-0" size={24} />
                <p className="text-sm text-slate-300 italic">
                  "All costs are explained in full by our lead roofer before any additional work is carried out. You remain in complete control of the budget."
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid gap-4">
              <div className="bg-white rounded-2xl p-8 flex justify-between items-center group">
                <div>
                  <h3 className="text-[#243453] font-black uppercase text-lg">Daytime Call-Out</h3>
                  <p className="text-slate-500 font-bold">Includes first hour on site</p>
                </div>
                <div className="text-3xl font-black text-[#243453]">From £150</div>
              </div>

              <div className="bg-white rounded-2xl p-8 flex justify-between items-center">
                <div>
                  <h3 className="text-[#243453] font-black uppercase text-lg">Out-of-Hours</h3>
                  <p className="text-slate-500 group-hover:text-[#243453]/70 font-bold">Evenings & Weekends</p>
                </div>
                <div className="text-3xl font-black text-[#243453]">From £250</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 flex justify-between items-center">
                <div>
                  <h3 className="text-white font-black uppercase text-lg">Additional Time</h3>
                  <p className="text-slate-400 font-bold italic text-sm">Charged per hour thereafter</p>
                </div>
                <div className="text-2xl font-black text-[#F9D759]">£80–£110/hr</div>
              </div>
              <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                Materials & Specialist Access Equipment charged as required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCAL/FAMILY SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              A Trusted Family Response
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-4">
              Founded in 2007 by Jai Tahsin and now led by the next generation,
              Action Roofing brings 23 years of combined experience to every
              Brighton roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <HardHat size={48} strokeWidth={2} className="text-[#F9D759] bg-[#243453] rounded-xl p-3 mb-4" />
              <h3 className="text-xl font-extrabold uppercase mb-2">Qualified In-House Team</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We don't subcontract our reputation. We arrive with the right tools to solve the problem immediately.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <ShieldAlert size={48} strokeWidth={2} className="text-[#F9D759] bg-[#243453] rounded-xl p-3 mb-4" />
              <h3 className="text-xl font-extrabold uppercase mb-2">Fully Insured & Guaranteed</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We are fully insured for all height-work and provide clear 10-year guarantees on the work we perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-24 bg-[#243453] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl 2xl:5xl font-black uppercase mb-8 tracking-tight">
            Need an Honest <span className="text-[#F9D759]">Assessment?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:07768981913" className="bg-[#F9D759] text-[#243453] px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Call Now: 07768 981913
            </a>
            <a href="mailto:actionroofingservices@outlook.com" className="border-2 border-white text-white px-10 py-5 rounded-2xl hover:scale-105 transition-transform font-black uppercase tracking-widest">
              Emergency Email
            </a>
          </div>
        </div>
      </section>

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