import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  AlertTriangle,
  Construction,
  Hammer,
  Droplets,
  Wind,
  Camera,
  FileText,
  Search,
  History,
  Eye,
  CheckCircle2,
} from "lucide-react";
import ServicesCTA from "./ServicesCTA";

const LeadworkPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <div className="bg-white mt-[-30px] w-full sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/leadwork.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 sm:pt-20 lg:pt-22 flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 2xl:text-sm mb-6 shadow-lg">
              <ShieldCheck size={18} />
              Precision Lead Installations
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Leadwork & Roof <br />
              <span className="text-[#F9D759]">Flashing in Brighton</span>
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Professional leadwork and flashing installations designed to keep your roof watertight 
              and protect vulnerable areas from long-term damage.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Request a Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] backdrop-blur-sm hover:bg-[#243453] text-white border border-slate-500 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>
              <p className="mt-6 text-xs sm:text-sm 2xl:text-base text-slate-300 italic font-medium">
                Fully insured • Clear advice • Clean, professional workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SYSTEM NARRATIVE - Specialist Work */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-8 leading-tight text-[#243453]">
                Specialist Work That <span className="text-[#F9D759]">Protects Your Roof</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Leadwork plays a critical role in keeping your roof watertight. It is used in key areas where 
                  different parts of the roof meet, such as around chimneys, valleys, and abutments.
                </p>
                <p>
                  If these areas are not installed or maintained properly, they can quickly become a source of 
                  leaks and ongoing problems. We focus on neat detailing, correct fitting, and a finish that 
                  is built to perform reliably over time.
                </p>
                <p className="border-l-4 border-[#F9D759] pl-6 italic text-[#243453]">
                  "We approach every leadwork job with care, ensuring each detail is formed and fitted methodically 
                  for long-term structural protection."
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-50 border-2 flex items-center justify-center flex-col border-slate-100 p-8 rounded-[2.5rem] relative overflow-hidden shadow-sm">
                <h4 className="text-[#243453] font-black uppercase tracking-widest mb-8 border-b border-slate-200 pb-4">
                  Leadwork Integrity
                </h4>
                <ul className="space-y-6 z-10">
                  {[
                    { title: "Precision Fitting", desc: "Expert bossing and dressing for a perfect, secure fit.", icon: Hammer },
                    { title: "Watertight Joints", desc: "Correct expansion laps to prevent thermal cracking.", icon: Droplets },
                    { title: "Traditional Mortar", desc: "Pointed correctly into brickwork to ensure no lifting.", icon: Construction },
                    { title: "Protective Finish", desc: "Patination oil applied to prevent staining and corrosion.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col lg:mr-[3.75vw] items-center justify-start lg:flex-row gap-4">
                      <div className="bg-[#243453] p-2 rounded-lg shadow-sm border border-slate-100">
                        <item.icon className="text-[#F9D759]" size={20} />
                      </div>
                      <div>
                        <p className="text-[#243453] text-center font-black uppercase text-sm tracking-wide mb-1">{item.title}</p>
                        <p className="text-slate-500 text-center text-xs font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON PROBLEMS - Clean Dark Grid */}
      <section className="py-24 bg-[#243453] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-4 leading-tight">
              Common Leadwork <span className="text-[#F9D759]">& Flashing Problems</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto font-medium">
              Issues with leadwork are often behind persistent or hard-to-trace leaks. 
              In many cases, problems develop due to age, movement, or poor previous installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Cracked Sheets", d: "Lead that has split over time due to expansion and contraction.", i: AlertTriangle },
              { t: "Lifted Edges", d: "Flashing that has pulled away from the wall or chimney stack.", i: Wind },
              { t: "Damp Patches", d: "Internal staining on ceilings caused by failing roof junctions.", i: Droplets },
              { t: "Poor Detailing", d: "Issues caused by 'cheap' previous repairs like mastic or tape.", i: Eye }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <item.i className="text-[#F9D759] mb-4" size={32} />
                <h4 className="text-lg font-black uppercase mb-2 tracking-wide">{item.t}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-bold">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES - Two Wide Boxes */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-10 bg-slate-50 text-[#243453] rounded-[3rem] border-b-8 border-[#F9D759]">
              <Hammer className="text-[#243453] mb-6" size={48} />
              <h3 className="text-2xl font-black uppercase mb-4 text-[#243453]">Chimney Flashing</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                When installed correctly, lead creates a secure seal between the roof and the chimney stack. 
                We install and repair step flashing, soakers, and front/back gutters with careful attention to detail.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#F9D759]" size={16} /> Step & Cover Flashing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#F9D759]" size={16} /> Front & Back Aprons</li>
              </ul>
            </div>

            <div className="p-10 bg-[#243453] text-white rounded-[3rem]">
              <Droplets className="text-[#F9D759] mb-6" size={48} />
              <h3 className="text-2xl font-black uppercase mb-4">Roof Valleys & Junctions</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                Valleys carry large volumes of water and need to be formed correctly to prevent pooling. 
                We focus on proper alignment so rainwater is directed safely off the roof without overflow.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-[#F9D759]">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Main Roof Valleys</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Abutment Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REPAIR VS REPLACE - The Transparency Promise */}
      <section className="py-24 bg-white px-4 md:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-[#F9D759] border-6 border-[#243453] rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl items-stretch">
            
            <div className="lg:w-3/5 p-8 md:p-12 text-[#243453]">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 leading-tight tracking-tight text-[#243453]">
                Straight Talk. <br />
                <span className="opacity-70 italic font-medium">Careful Workmanship.</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Search,
                    title: "Accurate Assessment",
                    desc: "We assess the roof to identify the specific source of the issue and provide a clear quotation.",
                  },
                  {
                    icon: Hammer,
                    title: "Leadwork Repairs",
                    desc: "Where appropriate, we carry out careful repairs like re-dressing lifted lead to extend the material's life.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Long-Term Advice",
                    desc: "If replacement is the better long-term option, we will explain this clearly rather than suggesting unnecessary patches.",
                  },
                ].map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="bg-[#243453] p-2.5 rounded-xl shrink-0 shadow-md">
                      <promise.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase mb-1 tracking-wider">{promise.title}</h4>
                      <p className="text-[#243453]/80 text-sm md:text-base leading-relaxed font-bold">{promise.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 w-full self-stretch overflow-hidden">
              <div 
                className="h-full min-h-[400px] bg-[url('/images/leadwork-detail.jpg')] bg-cover bg-center border-t-6 lg:border-t-0 lg:border-l-6 border-[#243453]"
                aria-label="Action Roofing Leadwork Detail"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* 6. FINAL WORD */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-black uppercase text-[#243453] mb-6 tracking-tight">
              Clear Advice. Reliable Workmanship.
            </h3>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-10">
              "Leadwork is a skilled part of roofing that requires precision. We understanding that roofing issues can 
              be difficult to assess from the ground, which is why we focus on clear explanations and carry out 
              work properly, without overcomplicating things."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
              <p className="font-black text-[#243453] uppercase tracking-widest text-sm">
                Action Roofing Services | Leadwork Specialists
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadworkPage;