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
      <section className="relative flex justify-center items-center w-full min-h-[calc(100vh-126px)] sm:min-h-[calc(100vh-106px)] md:min-h-[calc(100vh-120px)] bg-[url('/images/services-bg.png')] bg-center bg-cover text-white overflow-hidden">
        {/* 1. Grid Dots Graphic */}
        <div
          className="absolute inset-0 z-0 opacity-20 block"
          style={{
            backgroundImage: "radial-gradient(#F9D759 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* 2. Black Overlay */}
        <div className="absolute inset-0 bg-black/10 z-1" />

        {/* 3. Main Content */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 relative z-10 w-full text-center">
          <div className="mt-[30px] w-full sm:mt-[40px] lg:mt-[30px] xl:mt-[20px]">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              The Action Roofing Standard
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Our Roofing <br />
              <span className="text-[#F9D759]">Services</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:textxl 2xl:text-2xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Since 2007, Action Roofing has set the standard for professional
              services across Brighton & Hove. We combine two decades of
              experience with a dedicated focus on structural integrity.
            </p>

            {/* Buttons & Sub-info */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-3/4 sm:w-auto">
                <Link
                  to="/contact-us"
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
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453]/80 backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic font-medium">
                Free inspections · No obligation · Expert Advice
              </p>
            </div>
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
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-xl flex items-center justify-center">
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
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-xl flex items-center justify-center">
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
              <div className="w-12 h-12 bg-[#F9D759] text-[#243453] rounded-xl flex items-center justify-center">
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
            {/* Text Column */}
            <div className="lg:w-1/2 text-left space-y-8">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl border-l-8 pl-6 border-[#F9D759] 2xl:text-4xl font-black uppercase text-[#243453] tracking-tight">
                Beyond the Surface
              </h2>
              <p className="2xl:text-lg text-slate-600 leading-relaxed font-medium">
                A quality roof is defined by the precision of its hidden layers.
                We look deeper into the **timbers, underlays, and leadwork** to
                ensure structural longevity and prevent future ingress issues.
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
                    className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-[#F9D759]/50"
                  >
                    <Search className="text-[#F9D759] shrink-0" size={24} />
                    <div>
                      <h5 className="font-black uppercase text-sm text-[#243453]">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 w-full">
              <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-2xl">
                <img
                  src="/images/diagram.jpg"
                  alt="Technical Roof Structure Diagram showing slates, battens, underlay and insulation"
                  className="w-full h-auto object-contain"
                />
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
