import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCTA from "./ServicesCTA";
import {
  ShieldCheck,
  Info,
  Hammer,
  Layers,
  Camera,
  Wind,
  CheckCircle,
  Construction,
  FileText,
  HardHat,
  Ruler,
  Award,
  Banknote,
  Phone,
  CornerDownRight,
  Sun,
  CheckCircle2,
  Droplets,
  ArrowRight,
  History,
  Truck,
  Search,
} from "lucide-react";

const SlateTilePage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/slate-roofing.png')] bg-center bg-cover text-white">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          {/* Main Content Wrapper - Safe zone for fixed header on mobile */}
          <div className="py-12 flex flex-col justify-center items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              10-Year Workmanship Guarantee
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              New Slate & Tile <br />
              <span className="text-[#F9D759]">Roof Installations</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-100 leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
              Expert replacements in Brighton & Hove. Built for durability and
              aesthetics with a focus on doing the job properly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Book a Free Inspection
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-10 py-4.5 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic">
                No pressure · Clear advice · Professional workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE */}

      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <h2 className="text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Slate & Tile{" "}
                <span className="text-[#F9D759]">Roof Installations</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  A new roof is not only a major investment, but also a leap of
                  faith in the tradespeople you choose to carry out the work. If
                  you choose Action Roofing Services, we can promise two things:
                </p>

                <ul className="space-y-3 font-bold text-[#243453] text-base">
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#F9D759] shrink-0 mt-1"
                      size={18}
                    />

                    <span>
                      We will only recommend work that genuinely needs to be
                      done.
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#F9D759] shrink-0 mt-1"
                      size={18}
                    />

                    <span>
                      Any work we carry out will be completed with the same care
                      and attention we would expect on our own property.
                    </span>
                  </li>
                </ul>

                <p>
                  Every project begins with a detailed inspection where we
                  provide honest advice, clear explanations and photo evidence
                  showing the condition of the roof and why work may be
                  required.
                </p>

                <p>
                  If you decide to proceed, we will discuss both the practical
                  and aesthetic considerations of the property before preparing
                  a clear, itemised fixed quotation. There is never any
                  pressure, and we are always happy to talk you through any
                  questions or concerns you may have.
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 flex max-h-[350px] items-center justify-center shadow-2xl rounded-4xl justify-center w-full">
              <img
                src="/images/red-tiling.jpg"
                alt="Action Roofing Slate and Tile Installation Detail"
                className="w-full aspect-square rounded-3xl max-h-[350px] object-cover opacity-90"
              />
            </div>
          </div>
          <p className="border-l-4 text-xl mt-24 font-semibold border-[#F9D759] pl-6 italic text-[#243453]">
            "Once work begins, we manage the project from start to finish —
            arranging scaffolding, carefully stripping the existing roof,
            inspecting the underlying timbers, and installing the new roofing
            system in line with manufacturer guidance and current roofing
            standards."
          </p>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED IN A FULL REPLACEMENT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase text-[#243453] mb-4">
            What’s Included In A{" "}
            <span className="text-[#F9D759]">Full Roof Installation?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base 2xl:text-lg font-medium">
            We operate transparently with an end-to-end framework that covers
            all components of structural water management.
          </p>
        </div>

        {/* Reverted to 3 Columns on Large Screens with side-by-side icons */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Hammer,
              title: "Full Strip-Back",
              text: "Full strip-back of existing roofing materials from the building structure.",
            },
            {
              icon: Search,
              title: "Timber Inspection",
              text: "Comprehensive inspection of the underlying roof timbers and structural frameworks.",
            },
            {
              icon: Wind,
              title: "Breathable Membrane",
              text: "Precision installation of a high-performance breathable roofing membrane.",
            },
            {
              icon: Ruler,
              title: "Battens & Fixings",
              text: "New treated counter-battens, roofing battens, and modern heavy-gauge fixings.",
            },
            {
              icon: Layers,
              title: "Slate or Tile Install",
              text: "Expert configuration of your chosen slate or tile finish arranged to strict tolerances.",
            },
            {
              icon: CornerDownRight,
              title: "Valleys, Ridges & Hips",
              text: "Structural implementation and fixing of high-volume water valleys, ridges, and hip tiles.",
            },
            {
              icon: ShieldCheck,
              title: "Leadwork & Flashings",
              text: "Hand-formed custom leadwork details and flashings applied carefully to structural junctions.",
            },
            {
              icon: Construction,
              title: "Ventilation Systems",
              text: "Integration of modern roof ventilation systems where required to protect structural voids.",
            },
            {
              icon: Truck,
              title: "Waste & Site Clean-up",
              text: "Full waste removal and complete site clean-up, leaving the surrounding property tidy.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-md group border-b-4 border-[#243453] text-left flex items-center gap-4"
            >
              {/* Pinned Left Icon */}
              <div className="bg-[#F9D759] p-3 rounded-xl shrink-0 text-[#243453]">
                <item.icon size={30} />
              </div>

              {/* Content Column */}
              <div>
                <h3 className="text-base font-black uppercase mb-1.5 text-[#243453] tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHEN IS A REPAIR NO LONGER ENOUGH? */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight">
                When Is A Repair <br />
                <span className="text-[#F9D759]">No Longer Enough?</span>
              </h2>
              <div className="space-y-6 text-slate-200 text-lg mb-8 leading-relaxed font-medium">
                <p>
                  In some cases, ongoing repairs can become less reliable and
                  more costly long-term than replacing the roof properly once.
                </p>
                <p>
                  Not every ageing roof requires full replacement. In many
                  cases, repairs and maintenance may still be the most sensible
                  option. We provide honest inspections and clear advice based
                  on the actual condition of the roof.
                </p>
              </div>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-sm font-semibold">
                <Info size={24} className="text-[#F9D759] shrink-0" />
                We provide honest structural inspections to evaluate if repairs
                are still viable.
              </div>
            </div>

            {/* 2-Column Square Grid with side-by-side descriptive icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Persistent Leaking",
                  desc: "Persistent leaks despite previous repair works and patching.",
                  icon: Droplets,
                },
                {
                  title: "Widespread Tile Failure",
                  desc: "Widespread slipped, cracked, or failing tiles across the pitches.",
                  icon: Layers,
                },
                {
                  title: "Degraded Structural Fixings",
                  desc: "Advanced roof age leading to deteriorating tile and batten fixings.",
                  icon: History,
                },
                {
                  title: "Failing Insulation Felt",
                  desc: "Failing underfelt or total lack of a modern breathable membrane layer.",
                  icon: Wind,
                },
                {
                  title: "Timber Exposure Rot",
                  desc: "Rotting or damaged roof timbers caused by prolonged moisture exposure.",
                  icon: Hammer,
                },
                {
                  title: "Structural Deviations",
                  desc: "Structural sagging or uneven roof lines developing along the structural framework.",
                  icon: Ruler,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 h-full"
                >
                  {/* Pinned Left Icon - Specific to each issue */}
                  <div className="bg-white/10 p-3 rounded-xl text-[#F9D759] shrink-0">
                    <item.icon size={22} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="text-base font-black uppercase tracking-wide mb-1 text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TILE vs. SLATE */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-md border-b-4 border-slate-200 text-left">
              <h3 className="text-2xl font-black uppercase mb-6 text-[#243453]">
                Concrete & Clay Tiles
              </h3>
              <p className="mb-6 text-slate-600 font-medium">
                Practical and cost-effective solutions in a wide range of
                colours.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wide text-slate-500">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={18} />{" "}
                  Widely used and highly reliable.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={18} />{" "}
                  Versatile range of profiles.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F9D759] shrink-0" size={18} />{" "}
                  Efficient interlocking build.
                </li>
              </ul>
            </div>
            <div className="bg-[#243453] p-10 rounded-3xl shadow-md border-b-4 border-[#F9D759] text-white text-left">
              <h3 className="text-2xl font-black uppercase mb-6">
                Natural & Man-made Slate
              </h3>
              <p className="mb-6 text-slate-300 font-medium">
                Known for distinctive appearance and incredible longevity.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wide text-[#F9D759]">
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0" size={18} /> Best for
                  period property character.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0" size={18} /> Extreme
                  lifespan and durability.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0" size={18} /> Adds
                  significant home value.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 10 YEAR WARRANTY */}
      <section className="bg-[#243453] py-24 2xl:py-32 px-4 md:px-10 text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10 text-left">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl mb-6 font-black border-l-8 border-[#F9D759] pl-8 uppercase tracking-tight leading-tight">
              10-Year Written <br /> Workmanship Guarantee
            </h2>
            <div className="space-y-8 text-slate-200 text-lg 2xl:text-xl leading-relaxed font-medium">
              <p>
                All full roof installations are backed by our 10-year
                workmanship guarantee for added peace of mind.
              </p>
              <p>
                Upon completion, customers receive written installation and
                guarantee documentation confirming the scope of works completed
                and details of the workmanship guarantee provided.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {[
                { text: "10-Year Written Guarantee", icon: ShieldCheck },
                { text: "Detailed Itemised Quotations", icon: FileText },
                { text: "Breathable Membranes Installed", icon: CheckCircle },
                { text: "Photo Documented Inspection", icon: Camera },
                { text: "Fully Insured Professional Team", icon: HardHat },
                { text: "Slate & Tile System Experts", icon: Award },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                    <item.icon className="text-[#F9D759]" size={24} />
                  </div>
                  <span className="font-bold text-slate-100 text-sm 2xl:text-base uppercase tracking-wider">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white w-80 h-80 2xl:w-[450px] 2xl:h-[450px] rounded-[50px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center p-10 border-t-[16px] border-[#F9D759] rotate-2">
                <ShieldCheck
                  size={72}
                  className="text-[#243453] mb-6"
                  strokeWidth={2.5}
                />
                <span className="text-5xl 2xl:text-7xl font-black text-[#243453] leading-none tracking-tighter">
                  10-YEAR
                </span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mt-3">
                  Workmanship
                </span>
                <div className="h-[3px] w-32 bg-slate-100 my-6" />
                <div className="bg-[#243453] text-[#F9D759] px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest">
                  Full Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE ACTION ROOFING PROMISE */}
      <section className="py-16 bg-white px-4 md:px-10">
        <div className="max-w-screen-2xl mx-auto">
          {/* Main container with overflow-hidden to keep the image corners neat */}
          <div className="bg-[#F9D759] border-6 border-[#243453] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl items-stretch">
            {/* Left Content Side */}
            <div className="lg:w-3/5 p-8 md:p-12 text-[#243453] text-left">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 leading-tight tracking-tight text-[#243453]">
                Property Integrity. <br />
                <span className="opacity-70 italic">Done Correctly.</span>
              </h2>

              <div className="space-y-8 text-[#243453]">
                {[
                  {
                    icon: Banknote,
                    title: "Fixed Quotes",
                    desc: "If you decide to proceed, we prepare a clear, itemised fixed quotation. There is never any pressure.",
                  },
                  {
                    icon: Camera,
                    title: "Photo Documentation",
                    desc: "Detailed inspection where we provide honest advice, clear explanations and photo evidence showing structural condition.",
                  },
                  {
                    icon: Truck,
                    title: "Full Site Restoration",
                    desc: "Once complete, the site is thoroughly cleared and your new roof is left fully protected, weather-resistant and built to last.",
                  },
                ].map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="bg-[#243453] p-2.5 rounded-xl shrink-0 shadow-md">
                      <promise.icon className="text-[#F9D759]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-black uppercase mb-1 tracking-wider">
                        {promise.title}
                      </h4>
                      <p className="text-[#243453]/80 text-xs sm:text-sm leading-relaxed font-bold">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Side - Stretches to full native height and width of the half container */}
            <div className="lg:w-2/5 w-full self-stretch min-h-[350px] lg:min-h-0 relative">
              <img
                src="/images/tile-slate-lead.png"
                alt="Action Roofing Brighton Installation"
                className="absolute inset-0 w-full h-full object-cover lg:border-l-6 border-[#243453] max-lg:border-t-6"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* 8. FOOTER STATEMENT */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-black uppercase text-[#243453] mb-6 tracking-tight">
              Straightforward Advice. Reliable Workmanship.
            </h3>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-10">
              "We believe a roofing project should leave your property looking
              better, not worse. Where appropriate, we can also arrange roofline
              cleaning including gutters, fascias, soffits and windows once
              works are complete."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services | Tile & Slate Roofing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlateTilePage;
