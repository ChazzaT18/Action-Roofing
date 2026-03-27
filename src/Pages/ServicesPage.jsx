import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Hammer,
  ShieldCheck,
  Search,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";
import ServicesHomePage from "../Components/HomePage/ServicesHomePage";
import WhyChoseUs from "../Components/HomePage/WhyChoseUs";

const ServicesPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const services = [
    {
      title: "Emergency Roof Repairs",
      desc: "Urgent 24/7 call-outs for leaks, storm damage, and structural issues. We prioritize rapid stabilizing to prevent internal damp and timber rot.",
      image: "/images/roof-repairs.jpg",
      path: "/services/emergency-repairs",
      features: ["24/7 Response", "Storm Damage", "Structural Fixes"],
    },
    {
      title: "Slate & Tile Roofing",
      desc: "Expert installation of traditional natural slate and modern concrete tiles. Built for Brighton’s coastal weather with high-performance underlays.",
      image: "/images/slate-roofing.png",
      path: "/services/slate-tile-roofing",
      features: ["New Roofs", "Strip & Retile", "Conservation Work"],
    },
    {
      title: "Leadwork & Flashing",
      desc: "Precision lead welding and bossing for chimneys and valleys. We ensure a lifetime of waterproofing where others often fail.",
      image: "/images/leadwork.jpg",
      path: "/services/leadwork",
      features: ["Chimney Lead", "Roof Valleys", "Bay Window Tops"],
    },
    {
      title: "Chimney Repairs",
      desc: "Comprehensive repointing, lead replacement, and structural repairs to prevent damp from entering through neglected masonry.",
      image: "/images/Chimney-repairs.jpg",
      path: "/services/chimney-repairs",
      features: ["Repointing", "Lead Flashing", "Capping & Cowls"],
    },
    {
      title: "Fascias, Soffits & Gutters",
      desc: "Full roofline protection. We replace rotting timbers with high-quality uPVC systems that provide essential ventilation to your roof void.",
      image: "/images/fascias-soffits-gutters.png",
      path: "/services/fascias-soffits",
      features: ["Gutter Replacement", "Soffit Vents", "uPVC Fascias"],
    },
    {
      title: "Moss Removal & Gutter Cleaning",
      desc: "Professional cleaning to protect longevity. We remove moisture-holding moss that can lead to frost damage and cracked tiles.",
      image: "/images/gutter-cleaning.jpg",
      path: "/services/moss-removal",
      features: ["Safe Scrapers", "Anti-Fungal Wash", "Gutter Flushes"],
    },
  ];

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-28 2xl:py-36 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#F9D759] font-black uppercase tracking-[0.2em] text-sm">
              The Action Roofing Standard
            </span>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mt-6 mb-8 leading-tight uppercase tracking-tight">
              Our <span className="text-[#F9D759]">Roofing Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-3xl">
              Since 2007, Action Roofing has set the standard for professional roofing services throughout the South Coast. We combine nearly two decades of operational experience with a dedicated focus on structural integrity, honest expertise, and reliable results.
            </p>
          </div>
        </div>
      </section>

    <ServicesHomePage />

      {/* 3. OUR APPROACH (Process Restored) */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16 text-left">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-white border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              Our Professional Approach
            </h2>
            <p className="text-slate-300 text-lg">
              We keep the process straightforward and well-communicated from the
              first inspection through to the final installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-lg flex items-center justify-center">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                Clear Quotations
              </h3>
              <p className="text-slate-400 leading-relaxed">
                After inspecting your roof, we explain exactly what needs to be
                done and provide a clear quotation. You'll understand the "why"
                behind every recommendation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-lg flex items-center justify-center">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                Expert Workmanship
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Work is carried out carefully and methodically. We focus on
                maintaining a consistent standard throughout the job, rather
                than rushing to complete it.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-lg flex items-center justify-center">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                Clean & Tidy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We take pride in our workspace. Old materials are removed,
                surrounding areas are kept tidy, and we take every care to
                minimize disruption to your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUCTURAL AWARENESS (The Technical "How") */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-left space-y-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#243453] tracking-tight">
                Beyond the Surface
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Most roofing failures aren't just about the tiles; they are
                about the **timbers, underlays, and leadwork** beneath them. Our
                structural expertise means we look deeper to prevent future
                issues.
              </p>
              <div className="grid gap-4">
                {[
                  {
                    title: "Breathable Underlays",
                    desc: "Preventing condensation and timber rot in the roof void.",
                  },
                  {
                    title: "Soffit Ventilation",
                    desc: "Ensuring proper airflow to maintain roof longevity.",
                  },
                  {
                    title: "Code-Specific Leadwork",
                    desc: "Using the correct weight of lead for thermal movement.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <Search className="text-[#F9D759] shrink-0" size={24} />
                    <div>
                      <h5 className="font-black uppercase text-sm">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-100 rounded-[2.5rem] aspect-video flex items-center justify-center italic text-slate-400 border border-slate-200 shadow-inner">
                Technical Detail Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChoseUs />

      {/* 6. FINAL VALUE FOOTER */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 italic leading-relaxed mb-10">
              "Each job is completed by our in-house team, and every project is
              backed by our guarantee for complete peace of mind."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
