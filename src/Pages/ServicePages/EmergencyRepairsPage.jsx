import React, { useEffect } from "react";
import {
  Phone,
  Clock,
  ShieldAlert,
  Zap,
  CloudRain,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Search,
} from "lucide-react";
import WhyChoseUs from "../../Components/HomePage/WhyChoseUs";

const EmergencyRepairsPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] bg-[url('/images/roof-repairs-hero.png')] bg-center bg-cover bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/15 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex flex-col justify-center items-center relative z-10 text-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6">
              <Clock size={18} />
              24/7 Brighton Response
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
              Emergency <span className="text-[#F9D759]">Roof Repairs</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-10 font-medium">
              Direct access to qualified roofers when you need us most. We
              provide rapid structural stabilizing and leak prevention across
              Brighton & Hove.
            </p>
            <a
              href="tel:07768981913"
              className="inline-flex hover:scale-105 items-center gap-3 bg-[#243453] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300
               text-lg shadow-2xl"
            >
              <Phone size={24} />
              Call Now: 07768 981913
            </a>
          </div>
        </div>
      </section>

      {/* 2. BROTHER'S ADVICE: WHAT TO DO NOW */}
      <section className="py-12 bg-[#F9D759]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <AlertTriangle size={48} className="text-[#243453]" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-2">
                Immediate Steps to Take:
              </h3>
              <p className="text-[#243453]/80 font-medium">
                If you have an active leak: Clear the area, use buckets to catch
                water, and{" "}
                <strong>do not attempt to go onto the roof yourself</strong>{" "}
                during a storm. We are on the way to handle the height and
                structural risks safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURAL EXPERTISE (Restored) */}
      <section className="py-24 bg-white">
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
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team doesn't just "patch" holes. We assess the underlying
                damage to ensure your roof remains safe and load-bearing.
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
                    className="flex items-center gap-3 font-bold uppercase text-sm"
                  >
                    <CheckCircle2 className="text-[#F9D759]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* The "Why Speed Matters" Technical Box */}
            <div className="bg-[#243453] p-10 rounded-3xl text-white border-b-8 border-[#F9D759] shadow-2xl">
              <Search className="text-[#F9D759] mb-6" size={40} />
              <h3 className="text-2xl font-black uppercase mb-6">
                Why Speed Matters
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">
                    Prevent Mold & Damp
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Trapped moisture in the roof void can lead to black mold
                    within 48 hours, posing health risks to your family.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">
                    Avoid Timber Rot
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Exposed roof batons and rafters can soak up water, leading
                    to dry rot which is incredibly expensive to remediate.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F9D759] font-bold uppercase text-sm mb-2">
                    Protect Electronics
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Leaking water often follows electrical conduits, creating
                    fire hazards and destroying household appliances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALIFIED SERVICE (Legacy Focus) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              A Trusted Family Response
            </h2>
            <p className="text-lg text-slate-600">
              When you call us, you aren't talking to a national call center.
              You are talking to local specialists who have been protecting
              Brighton homes since 2007.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <HardHat className="text-[#243453] mb-4" size={32} />
              <h3 className="text-xl font-extrabold uppercase mb-2">
                Qualified In-House Team
              </h3>
              <p className="text-slate-600 text-sm">
                Every emergency call-out is handled by our own experienced team.
                We don't subcontract our reputation. We arrive with the right
                tools and the right materials to solve the problem immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <ShieldAlert className="text-[#243453] mb-4" size={32} />
              <h3 className="text-xl font-extrabold uppercase mb-2">
                Fully Insured & Guaranteed
              </h3>
              <p className="text-slate-600 text-sm">
                Even in an emergency, we don't cut corners on safety or
                liability. We are fully insured for all height-work and provide
                clear guarantees on the work we perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-[#243453] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tight">
            Need an Honest <span className="text-[#F9D759]">Assessment?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 italic">
            "We’ll always recommend the most cost-effective solution for your
            roof—not the most expensive."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:01273XXXXXX"
              className="bg-[#F9D759] text-[#243453] px-10 py-5 rounded-2xl font-black uppercase tracking-widest"
            >
              Call 01273 XXXXXX
            </a>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest">
              Emergency Email
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-center">
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
