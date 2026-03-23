import React, { useEffect } from "react";
import {
  ShieldAlert,
  Layers,
  Construction,
  Home,
  Trello,
  Sparkles, 
  Hammer,
  ClipboardCheck,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyChoseUs from "../Components/HomePage/WhyChoseUs";

const AboutUsPage = ({ setCurrentPage, currentPage }) => {
  // Hook to handle page state and scroll position
  useEffect(() => {
    setCurrentPage("about");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const services = [
    {
      title: "Emergency Roof Repairs",
      desc: "Urgent call-outs for leaks, storm damage, and structural issues across Brighton.",
      path: "/services/emergency-repairs",
    },
    {
      title: "Slate & Tile Roofing",
      desc: "Expert installation and repair of traditional slate and modern tiled roofs.",
      path: "/services/slate-tile-roofing",
    },
    {
      title: "Leadwork & Flashing",
      desc: "Precision leadwork to ensure your roof valleys and chimneys stay watertight.",
      path: "/services/leadwork",
    },
    {
      title: "Chimney Repairs",
      desc: "Repointing and structural repairs to keep your chimney safe and functional.",
      path: "/services/chimney-repairs",
    },
    {
      title: "Fascias, Soffits & Gutters",
      desc: "Full installations and repairs of high-quality uPVC roofline components.",
      path: "/services/fascias-soffits",
    },
    {
      title: "Moss Removal & Gutter Cleaning",
      desc: "Protect your roof longevity and prevent blockages with professional cleaning.",
      path: "/services/moss-removal",
    },
  ];

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] bg-[url('/images/roof-repairs-hero.png')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/15 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex justify-center items-center relative z-10 text-left">
          <div className="max-w-3xl lg:w-3/4">
            <span className="text-[#F9D759] font-bold uppercase tracking-widest">
              Family-Run Since 2007
            </span>
            <h1 className="text-4xl md:text-4xl font-black mt-4 mb-6 leading-tight uppercase tracking-tight">
              Protecting Brighton Homes with{" "}
              <span className="text-[#F9D759]">Expert Roofing</span>
            </h1>
            <p className="text-xl text-slate-150 leading-relaxed max-w-2xl font-medium">
              Action Roofing was built on a legacy of integrity established by our founder, Jai Tahsin, in 2007. Today, I am proud to carry my father’s mission forward—pairing nearly two decades of family expertise with a commitment to honest advice and superior roofing craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE STORY & LEGACY */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 aspect-[3/4] rounded-2xl shadow-inner flex items-center justify-center border border-slate-200">
                <p className="text-slate-400 text-xs p-4 text-center italic">
                  Photo: Dad (Founder)
                </p>
              </div>
              <div className="bg-slate-200 aspect-[3/4] rounded-2xl shadow-inner mt-8 flex items-center justify-center border border-slate-200">
                <p className="text-slate-400 text-xs p-4 text-center italic">
                  Photo: Current Team on Site
                </p>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Action Roofing Services was founded in 2007 by my father,{" "}
                <span className="font-bold text-[#243453]">Jai Tahsin</span>,
                who built a strong reputation across Brighton & Hove for
                reliable, high-quality roofing.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, I proudly continue his legacy—ensuring every project is
                completed with the same commitment to craftsmanship, honesty,
                and customer care that he started nearly two decades ago.
              </p>
              <p className="text-lg font-semibold text-[#243453] italic border-l-4 border-[#243453] pl-6 py-4 bg-slate-50 rounded-r-xl leading-relaxed">
                "We don't just fix roofs; we protect the families beneath them.
                That’s the standard my father set, and it's the standard we meet
                every day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM */}
      <section className="py-24 bg-[#243453] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl text-white border-l-8 border-[#F9D759] pl-6 font-black uppercase mb-8 tracking-tight">
                Meet the Team
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Ardy and I bring over 23 years of combined roofing experience
                  to every project, delivering high-quality workmanship with a
                  friendly, approachable service.
                </p>
                <p>
                  We take pride in doing the job properly and treating every
                  home as if it were our own. As an in-house team, we don't
                  believe in shortcuts; we focus on clear communication and
                  honest advice.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 md:-top-10 -right-2 md:-right-4 md:-right-5 z-15 rotate-12">
                <div className="bg-[#F9D759] text-[#243453] p-4 md:p-5 rounded-2xl shadow-2xl border-4 border-[#243453] text-center">
                  <p className="text-2xl md:text-4xl font-black leading-none">23+</p>
                  <p className="text-[8px] md:text-[10px] uppercase font-black tracking-tighter mt-1">
                    Years Combined
                    <br />
                    Experience
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="bg-white p-6 md:p-8 rounded-3xl border-b-8 border-[#F9D759] shadow-2xl flex items-center gap-6 md:gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#243453]/10 rounded-2xl shrink-0 flex items-center justify-center border-2 border-dashed border-[#243453]/20 text-[#243453]/40 text-xs font-bold italic">
                    Photo
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#243453] leading-tight">
                      Sam
                    </h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mt-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#F9D759] rounded-full"></span>
                      Owner
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border-b-8 border-[#F9D759] shadow-2xl flex items-center gap-6 md:gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#243453]/10 rounded-2xl shrink-0 flex items-center justify-center border-2 border-dashed border-[#243453]/20 text-[#243453]/40 text-xs font-bold italic">
                    Photo
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#243453] leading-tight">
                      Ardy
                    </h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mt-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#F9D759] rounded-full"></span>
                      Roofing Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: SECTION 6 & 7 - OUR APPROACH & TIDY WORK */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-left">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              Our Professional Approach
            </h2>
            <p className="text-slate-600 text-lg">
              We keep the process straightforward and well-communicated from the first inspection through to the final installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-lg flex items-center justify-center">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase">Clear Quotations</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                After inspecting your roof, we explain exactly what needs to be done and provide a clear quotation. You'll understand the "why" behind every recommendation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-lg flex items-center justify-center">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase">Expert Workmanship</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Work is carried out carefully and methodically. We focus on maintaining a consistent standard throughout the job, rather than rushing to complete it.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#243453] text-[#F9D759] rounded-lg flex items-center justify-center">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-extrabold uppercase">Clean & Tidy</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We take pride in our workspace. Old materials are removed, surrounding areas are kept tidy, and we take every care to minimize disruption to your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES - Center Aligned & Primary Navy Background */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          
          {/* Header Section - Center Aligned */}
          <div className="max-w-3xl mb-16 mx-auto text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black text-white border-b-8 border-[#F9D759] pb-4 mb-6 uppercase tracking-tight inline-block">
              Our Services
            </h2>
            <p className="text-slate-300 text-lg">
              We provide a full range of roofing services for homeowners across
              Brighton & Hove, maintaining the high standards established by our
              family since 2007.
            </p>
          </div>

          {/* Services Grid - Center Aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group hover:scale-105 p-8 bg-slate-50 rounded-2xl border border-white/10 shadow-sm hover:shadow-xl hover:border-[#F9D759]/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Optional: Icon Support - making them yellow to match brand */}
                <div className="text-[#243453] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* You can map your icons here based on index or title if needed */}
                </div>

                <h3 className="font-extrabold text-lg text-[#243453] mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex items-center text-[#d1ad2b] font-bold text-[10px] uppercase tracking-widest pt-4 border-t border-slate-300 w-full justify-center">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChoseUs />

      {/* 6. FINAL VALUE STATEMENT */}
      <footer className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <p className="text-lg text-slate-600 italic leading-relaxed">
            "Each job is completed by our in-house team, and every project is
            backed by our guarantee for complete peace of mind."
          </p>
          <div className="mt-10 flex flex-col items-center">
            <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
            <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
              Action Roofing Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
