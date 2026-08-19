import React, { useEffect } from "react";
import {
  Clock,
  Phone,
  Sparkles,
  Hammer,
  ClipboardCheck,
  ShieldCheck,
  ArrowRight,
  Shield,
  HeartHandshake,
  CheckCircle2,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyChoseUs from "../Components/HomePage/WhyChoseUs";

const AboutUsPage = ({ setCurrentPage, currentPage }) => {
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
      desc: "Expert installation and repair of traditional slate and tiled roofs.",
      path: "/services/slate-tile-roofing",
    },
    {
      title: "Flat Roofing",
      desc: "Torch-on felt, GRP fibreglass, and single-ply EPDM rubber flat roof installations and repairs.",
      path: "/services/flat-roofing",
    },
    {
      title: "Lead Roofing & Leadwork",
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
      path: "/services/fascias-soffits-guttering",
    },
    {
      title: "Roof Moss Removal & Cleaning",
      desc: "Protect your roof longevity and prevent surface wear with professional scraping and biocide washes.",
      path: "/services/moss-removal-roof-cleaning",
    },
    {
      title: "Gutter Clearance & Cleaning",
      desc: "Deep vacuum sludge extraction and downpipe flushing to guarantee free-flowing rainwater paths.",
      path: "/services/guttering",
    },
    {
      title: "Book A Free Inspection",
      desc: "Don't see your specific roofing concern listed? We provide comprehensive structural diagnostics across all Sussex setups entirely hassle-free.",
      path: "/contact-us",
      isCTA: true,
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/brighton-job.jpg')] bg-center bg-cover text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 3xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Family-Run Since 2007
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl 3xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Protecting Brighton Homes <br />
              <span className="text-[#F9D759]">With Expert Roofing</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed mb-8 font-medium max-w-4xl mx-auto">
              Action Roofing was built on a legacy of integrity established by
              our founder, Jai Tahsin, in 2007. Today, we carry that mission
              forward—pairing nearly two decades of family expertise with a
              commitment to honest advice and superior roofing craftsmanship.
            </p>

            {/* Buttons & Sub-info */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Get a Free Quote
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

              <p className="mt-6 text-xs sm:text-sm 3xl:text-base text-slate-300 italic font-medium">
                Free inspections · No obligation · Proudly Local
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY & LEGACY */}
      <section className="py-20 3xl:py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 3xl:gap-24 items-center">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-2xl max-h-[500px] max-w-[500px] shadow-2xl"
                src="/images/jai-roofing.png"
                alt="Jai Tahsin - Action Roofing Founder"
              />
            </div>

            <div className="space-y-6 max-w-2xl 3xl:max-w-3xl text-left">
              <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
                Our Story
              </h2>
              <p className="text-lg 3xl:text-xl text-slate-600 leading-relaxed font-medium">
                Action Roofing Services was founded in 2007 by my father, Jai
                Tahsin, who built a strong reputation across Brighton & Hove for
                reliable, high-quality roofing.
              </p>
              <p className="text-lg 3xl:text-xl text-slate-600 leading-relaxed font-medium">
                Today, I proudly continue his legacy—ensuring every project is
                completed with the same commitment to craftsmanship, honesty,
                and customer care that he started nearly two decades ago.
              </p>
              <p className="text-lg 3xl:text-2xl font-semibold text-[#243453] italic border-l-4 border-[#243453] pl-6 py-4 bg-slate-50 rounded-r-xl leading-relaxed">
                "We don't just fix roofs; we protect the families beneath them.
                That’s the standard my father set, and it's the standard we meet
                every day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WORKMANSHIP PILLARS */}
      <section className="py-24 3xl:py-32 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 3xl:gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3.5 py-1 rounded-md font-black uppercase tracking-widest text-[11px] 3xl:text-xs">
                Guaranteed Workmanship
              </div>
              <h2 className="text-2xl md:text-3xl 3xl:text-4xl text-white font-black uppercase tracking-tight leading-tight">
                How We Deliver <br />
                <span className="text-[#F9D759]">Complete Peace of Mind</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg 3xl:text-xl leading-relaxed font-medium">
                We operate with complete accountability on every job. When you hire Action Roofing, you deal directly with experienced roofers who take personal responsibility for every single detail of your project.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold px-7 py-3.5 3xl:px-8 3xl:py-4 rounded-xl shadow-lg transition-all"
                >
                  Request a Free Inspection
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 3xl:gap-6">
              {[
                {
                  icon: <HeartHandshake size={28} className="text-[#F9D759]" />,
                  title: "Direct Owner Care",
                  desc: "Clear communication with no sales reps or middlemen. You speak directly with the roofing specialists managing the work."
                },
                {
                  icon: <Shield size={28} className="text-[#F9D759]" />,
                  title: "Zero Subcontractors",
                  desc: "All works are completed strictly in-house to protect standards, consistency, and structural accountability on site."
                },
                {
                  icon: <Award size={28} className="text-[#F9D759]" />,
                  title: "Coastal-Grade Spec",
                  desc: "Materials, lead flashings, and mortar blends selected specifically to withstand harsh Sussex and South Coast weather cycles."
                },
                {
                  icon: <CheckCircle2 size={28} className="text-[#F9D759]" />,
                  title: "Honest Diagnostics",
                  desc: "We only ever quote for what your roof actually needs. No inflated assessments, pressure tactics, or artificial upsells."
                }
              ].map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 p-6 3xl:p-8 rounded-2xl text-left"
                >
                  <div className="w-12 h-12 3xl:w-14 3xl:h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg 3xl:text-xl font-black uppercase text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm 3xl:text-base leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="py-24 3xl:py-32 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-left">
          <div className="max-w-3xl 3xl:max-w-4xl mb-16">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
              Our Professional Approach
            </h2>
            <p className="text-slate-600 text-lg 3xl:text-xl font-medium leading-relaxed">
              We keep the process straightforward and well-communicated from the
              first inspection through to the final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-12">
            {[
              {
                icon: <ClipboardCheck size={32} />,
                title: "Clear Quotations",
                desc: "After inspecting your roof, we explain exactly what needs to be done and provide a clear quotation. You'll understand the 'why' behind every recommendation.",
              },
              {
                icon: <Hammer size={32} />,
                title: "Expert Workmanship",
                desc: "Work is carried out carefully and methodically. We focus on maintaining a consistent standard throughout the job, rather than rushing to complete it.",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Clean & Tidy",
                desc: "We take pride in our workspace. Old materials are removed, surrounding areas are kept tidy, and we take every care to minimize disruption to your property.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md text-left space-y-4"
              >
                <div className="w-14 h-14 3xl:w-16 3xl:h-16 bg-[#243453] text-[#F9D759] rounded-2xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <h3 className="text-xl 3xl:text-2xl font-black uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm 3xl:text-base font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES GRID (3-cols on lg+, 2-cols on tablet, CTA card hidden on 2-col) */}
      <section className="py-24 3xl:py-32 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="max-w-3xl 3xl:max-w-4xl mb-16 mx-auto text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-black text-white border-b-8 border-[#F9D759] pb-4 mb-6 uppercase tracking-tight inline-block">
              Our Services
            </h2>
            <p className="text-slate-300 text-lg 3xl:text-xl font-medium">
              We provide a full range of roofing services for homeowners across
              Brighton & Hove, maintaining the high standards established by our
              family since 2007.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={`group p-8 rounded-3xl shadow-md border flex flex-col h-full transition-all duration-300 ${
                  service.isCTA
                    ? "bg-[#F9D759] border-transparent hover:bg-[#F7CB28] text-[#243453] hover:shadow-2xl sm:hidden lg:flex"
                    : "bg-white border-transparent hover:border-[#F9D759]/50 hover:shadow-2xl"
                }`}
              >
                <div className="flex-grow text-left">
                  <h3 className="font-black text-lg uppercase tracking-tight leading-tight mb-3 text-[#243453]">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 font-semibold ${
                      service.isCTA ? "text-[#243453]/90" : "text-slate-600"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  className={`flex items-center font-black text-xs uppercase tracking-widest pt-4 w-full justify-between mt-auto border-t transition-colors ${
                    service.isCTA
                      ? "border-[#243453]/10 text-[#243453]"
                      : "border-slate-100 text-[#243453] group-hover:text-[#d1ad2b]"
                  }`}
                >
                  <span>{service.isCTA ? "Contact Us" : "Learn More"}</span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-1 ${
                      service.isCTA ? "text-[#243453]" : "text-[#F9D759]"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChoseUs />

      {/* 6. FINAL VALUE STATEMENT */}
      <footer className="py-20 3xl:py-32 bg-white border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <p className="text-lg 3xl:text-2xl text-slate-600 italic leading-relaxed max-w-4xl mx-auto font-medium">
            "Each job is completed by our in-house team, and every project is
            backed by our guarantee for complete peace of mind."
          </p>
          <div className="mt-10 flex flex-col items-center">
            <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
            <p className="font-black text-[#243453] uppercase tracking-widest text-sm 3xl:text-lg">
              Action Roofing Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;