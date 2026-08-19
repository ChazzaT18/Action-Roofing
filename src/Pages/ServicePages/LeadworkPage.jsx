import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Hammer,
  Droplets,
  Layers,
  Compass,
  FileText,
  Search,
  CheckCircle2,
  Landmark,
  Wrench
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const LeadworkPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const leadRoofApplications = [
    "Lead-covered flat roofs",
    "Dormer tops and cheeks",
    "Bay window roofs",
    "Porch roof sections",
    "Flat & low-pitched roof sections",
    "Lead-lined box gutters",
    "Roof-to-wall abutments",
    "Main roof valleys and junctions"
  ];

  const flashingDetails = [
    {
      title: "Apron & Cover Flashings",
      desc: "Front and back aprons providing seamless waterproofing against rising walls and brickwork."
    },
    {
      title: "Step Flashings & Soakers",
      desc: "Meticulously stepped lead courses configured to pitch lines along gable walls and chimneys."
    },
    {
      title: "Chimney Leadwork",
      desc: "Complete chimney stack weatherproofing including front aprons, side soakers, and back gutters."
    },
    {
      title: "Valleys & Junctions",
      desc: "Heavy-gauge valley linings engineered to handle high rainwater volume across joined roof pitches."
    },
    {
      title: "Penetrations & Pipes",
      desc: "Custom lead collars and weathering sleeves formed around soil pipes, vents, and flue outlets."
    },
    {
      title: "Lead Repairs & Dressing",
      desc: "Carefully re-dressing, fixing, and repairing serviceable lead to extend its operational lifespan."
    }
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/leadwork.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 3xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Specialist Lead Roofing & Traditional Leadwork
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl 3xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Lead Roofing & Leadwork <br />
              <span className="text-[#F9D759]">in Brighton & Sussex</span>
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Specialist lead roofing, precision flashings, and traditional heritage leadwork for residential properties across Brighton, Hove, and surrounding areas.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-8 py-4 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Request a Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#243453] backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>
              <p className="mt-6 text-xs sm:text-sm 3xl:text-base text-slate-300 italic font-medium">
                10-Year Guarantee • Traditional Detailing • Clean, Professional Workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5 text-left">
              <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Precision Leadwork <br />
                <span className="text-[#F9D759]">Engineered to Last</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Lead is an exceptionally durable roofing material, but its long-term performance depends entirely on correct design, sizing, mechanical fixing, and detailing.
                </p>
                <p>
                  We approach lead roofing with particular attention to the way the material needs to be installed, allowing for natural thermal expansion and contraction while keeping vulnerable junctions completely watertight.
                </p>
                <p className="border-l-4 border-[#F9D759] pl-6 italic text-[#243453] font-bold">
                  "From bespoke bay roof coverings to complex chimney flashings, we ensure every piece of lead is specified, sized, and installed to current industry codes."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 flex max-h-[350px] items-center justify-center shadow-2xl rounded-4xl w-full">
              <img
                src="/images/chimney-leadwork.jpg"
                alt="Action Roofing Specialist Leadwork Detailing"
                className="w-full aspect-square rounded-3xl max-h-[350px] object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEAD ROOFS & APPLICATIONS */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px] mb-4">
              Applications
            </div>
            <h2 className="text-3xl 3xl:text-4xl font-black uppercase mb-4 leading-tight">
              Lead Roofs & <span className="text-[#F9D759]">Structural Coverage</span>
            </h2>
            <p className="text-slate-300 text-lg font-medium leading-relaxed">
              We install and repair lead roofing across a wide range of residential and architectural setups, using appropriate lead codes and traditional installation techniques:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 3xl:gap-6">
            {leadRoofApplications.map((point, index) => (
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

      {/* 4. FLASHINGS & DETAILING */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16 text-left">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 uppercase tracking-tight">
              Lead Flashings & Detailing
            </h2>
            <p className="text-slate-600 text-lg 3xl:text-xl font-medium leading-relaxed mt-4">
              Correct detailing is essential to ensure water is directed away from vulnerable areas and to allow the lead to perform as intended over decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashingDetails.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-slate-50 border border-slate-100 rounded-3xl text-left flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-xl flex items-center justify-center mb-6">
                    <Droplets size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#243453] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HERITAGE & TRADITIONAL ROOFING (WITH RESTORED IMAGE BANNER) */}
      <section className="py-20 bg-slate-50 px-4 md:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-[#F9D759] border-6 border-[#243453] rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl items-stretch">
            
            {/* Left Content Side */}
            <div className="lg:w-3/5 p-8 md:p-12 text-[#243453] text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#243453] text-[#F9D759] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px]">
                Period Architecture
              </div>
              <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase tracking-tight leading-tight">
                Traditional & <br />
                <span className="opacity-70 italic font-medium">Heritage Roofing</span>
              </h2>
              <p className="text-[#243453] text-base 3xl:text-lg font-bold leading-relaxed">
                Lead is commonly found on traditional and period properties across Sussex, where maintaining the architectural character and appearance of the existing building is paramount.
              </p>
              <p className="text-[#243453]/80 text-sm 3xl:text-base font-semibold leading-relaxed">
                Our experience in traditional roofing and heritage leadwork allows us to approach sensitive restorations with particular care for existing building fabric, lime mortar detailing, and historic pitch lines.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 bg-[#243453] text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-md">
                  <Landmark size={16} className="text-[#F9D759]" /> Conservation-Grade Workmanship
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:w-2/5 w-full self-stretch overflow-hidden min-h-[350px] lg:min-h-0 relative">
              <div 
                className="absolute inset-0 w-full h-full bg-[url('/images/slate-leadwork.jpeg')] bg-cover bg-center border-t-6 lg:border-t-0 lg:border-l-6 border-[#243453]"
                aria-label="Action Roofing Traditional Slate and Leadwork Detail"
              />
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
              Inspect → Assess → Specify → Install
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inspect",
                desc: "We examine the existing roof and leadwork, checking for splits, thermal fatigue, and substrate movement.",
                icon: Search,
              },
              {
                step: "02",
                title: "Assess",
                desc: "We evaluate whether the lead can be safely repaired and re-dressed, or if complete replacement is required.",
                icon: Compass,
              },
              {
                step: "03",
                title: "Specify",
                desc: "We determine the correct lead code, panel sizing, expansion laps, and fixing method for the specific area.",
                icon: FileText,
              },
              {
                step: "04",
                title: "Install",
                desc: "Lead is formed, bossed, and mechanically fixed with precision detailing to guarantee durable weathering.",
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

      {/* 7. WHY ACTION ROOFING SERVICES TRUST BANNER */}
      <section className="bg-slate-50 py-20 px-4 md:px-10 text-[#243453] border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#243453] text-[#F9D759] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px]">
              Why Choose Action Roofing
            </div>
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black uppercase tracking-tight leading-tight">
              Specialist Leadwork <br />
              <span className="text-[#d1ad2b]">With In-House Expertise</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              We combine decades of roofing experience with deep specialist knowledge of traditional lead fabrication, heritage standards, and coastal waterproofing.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Specialist Lead Roofing & Leadwork",
              "Traditional & Heritage Experience",
              "Lead Roof Repairs & Full Installs",
              "Chimney, Valley & Abutment Detailing",
              "10-Year Workmanship Guarantee",
              "Serving Brighton, Hove & Sussex"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={18} className="text-[#d1ad2b] shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICES CTA */}
      <ServicesCTA />

      {/* BRAND FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Lead Roofing & Leadwork Specialists
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LeadworkPage;