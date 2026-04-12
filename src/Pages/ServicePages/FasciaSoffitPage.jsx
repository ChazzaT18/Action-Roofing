import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  AlertTriangle,
  CheckCircle2,
  Construction,
  Wind,
  Droplets,
  Bird,
  Trash2,
  Palette,
  Hammer
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const FasciaSoffitPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION (Curb Appeal Header) */}
      <section className="relative w-full h-[85vh] bg-[url('/images/fascia-soffit-hero.png')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-screen-2xl h-full mx-auto px-4 md:px-10 flex flex-col justify-center items-center relative z-10 text-center">
          <div className="mt-[30px] w-full sm:mt-[40px] lg:mt-[30px] xl:mt-[20px]">
            
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Maintenance-Free uPVC • 10-Year Guarantee
            </div>

            <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
              Fascia, Soffit & <br />
              <span className="text-[#F9D759]">Guttering Specialists</span>
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              High-performance roofline installations that protect your timber, 
              prevent damp, and instantly transform your home’s curb appeal.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453]/80 backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>
              <p className="mt-4 text-xs sm:text-sm 2xl:text-base text-slate-300 italic font-medium">
                Full Timber Inspection Included · No Over-Capping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WARNING SIGNS SECTION */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
                Is Your Roofline <br />
                <span className="text-[#F9D759]">Failing?</span>
              </h2>
              <p className="text-slate-200 text-lg 2xl:text-xl mb-8 leading-relaxed">
                Your fascias and gutters are your home's first line of defense against Brighton’s coastal weather. 
                Leaving timber to rot can lead to structural damage and damp lofts.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 italic text-slate-300 text-base">
                <AlertTriangle size={24} className="text-[#F9D759] shrink-0" />
                Dripping gutters are often a sign of failed seals or incorrect "fall."
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Rotting Timber", desc: "Soft spots or peeling paint on old wooden boards.", icon: Hammer },
                { title: "Gutter Overspill", desc: "Water marks on brickwork or internal damp patches.", icon: Droplets },
                { title: "Pest Entry", desc: "Gaps in soffits that allow birds or rodents into your loft.", icon: Bird },
                { title: "Sagging Lines", desc: "Gutters that have lost their fall and hold standing water.", icon: Construction }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors">
                  <item.icon className="text-[#F9D759] mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="text-lg font-black uppercase mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "FULL SYSTEM" UPGRADE */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#243453] mb-4">
            Complete <span className="text-[#F9D759]">Roofline Replacement</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#F9D759] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium">
            We don't just "cover up" old rot. We provide a full-system refresh using 
            premium, low-maintenance uPVC designed for the South Coast.
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">
          {[
            { icon: Construction, title: "Fascias & Soffits", text: "Thick-core uPVC boards that never need painting and won't rot, flake, or crack." },
            { icon: Droplets, title: "High-Flow Guttering", text: "Deep-flow systems designed to handle heavy coastal rainfall without overflowing." },
            { icon: Wind, title: "Hidden Ventilation", text: "Discrete airflow strips that prevent loft condensation and timber decay." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[2rem] border-b-8 border-slate-200 hover:border-[#F9D759] transition-all group">
              <item.icon className="text-[#243453] bg-[#F9D759] rounded-xl p-3 mb-6 group-hover:rotate-6 transition-transform" size={48} />
              <h3 className="text-xl font-black uppercase mb-4 text-[#243453]">{item.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE "HIDDEN TIMBER" PROMISE (Crucial Trust Section) */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-[#243453] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-b-8 border-[#F9D759]">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
                Doing the Job <br /><span className="text-[#F9D759]">Properly</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Most "cheap" quotes involve pinning new plastic over old, rotting wood (capping). 
                We refuse to do that. It traps moisture and accelerates rot.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Hammer, title: "Full Strip-Back", text: "We remove all old timber to expose the rafter ends for inspection." },
                  { icon: ShieldCheck, title: "Timber Health Check", text: "If we find rot in the rafters, we fix it properly before installation." },
                  { icon: Bird, title: "Eave Guards", text: "We install professional protection to stop birds nesting under your tiles." },
                  { icon: Trash2, title: "Zero-Mess Guarantee", text: "All old debris is hauled away; your property is left spotless." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <item.icon className="text-[#F9D759] shrink-0" size={24} />
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('/images/roofline-detail.jpg')] bg-cover bg-center min-h-[400px]" />
          </div>
        </div>
      </section>

      {/* 5. MATERIALS & FINISH (Style Options) */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 text-[#243453]">
                Styles to Suit <br /><span className="text-[#F9D759]">Your Home</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 font-medium">
                Our high-quality uPVC systems are available in a variety of finishes 
                to perfectly match your existing windows and doors.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { color: "bg-white border-2 border-slate-100", title: "Classic White", desc: "Clean, bright, and cost-effective for any property." },
                  { color: "bg-[#35393C]", title: "Anthracite Grey", desc: "The modern choice for contemporary Brighton homes." },
                  { color: "bg-[#1A1A1A]", title: "Black Ash", desc: "A high-contrast, premium woodgrain finish." }
                ].map((style, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50 border-l-8 border-[#243453]">
                    <div className={`${style.color} w-16 h-16 rounded-xl shrink-0 shadow-inner`} />
                    <div>
                      <h4 className="font-black uppercase text-[#243453]">{style.title}</h4>
                      <p className="text-sm text-slate-500">{style.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-4 bg-[#243453] rounded-[2.5rem] shadow-2xl">
                <img 
                  src="/images/upvc-color-samples.png" 
                  alt="uPVC Roofline Colors" 
                  className="rounded-[2rem] w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#F9D759] p-6 rounded-2xl shadow-xl rotate-3">
                  <Palette className="text-[#243453] mx-auto mb-2" size={32} />
                  <span className="text-xs font-black uppercase text-[#243453]">Colour Fast <br/>Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Fascias, Soffits & Gutters
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FasciaSoffitPage;