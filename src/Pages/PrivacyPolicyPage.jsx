import React, { useEffect, useState } from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Database, 
  Camera,
  ChevronRight,
  Info
} from "lucide-react";

const PrivacyPolicyPage = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState("collection");

  useEffect(() => {
    setCurrentPage("privacy");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  // Section configuration for the interactive sidebar index lookup
  const sections = [
    { id: "collection", label: "1. Information We Collect", icon: Database },
    { id: "usage", label: "2. How We Use Your Data", icon: Eye },
    { id: "drone-media", label: "3. Drone Surveys & Media", icon: Camera },
    { id: "sharing", label: "4. Data Sharing & Security", icon: Lock },
    { id: "rights", label: "5. Your Legal Rights", icon: UserCheck },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navigation bars
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full py-20 bg-[#243453] text-white">
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-4 shadow-lg">
              <Shield size={14} className="text-[#243453]" />
              Privacy Protection Promise
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Privacy <span className="text-[#F9D759]">Policy</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium max-w-xl mx-auto mt-2">
              Action Roofing Services is committed to protecting your personal data in strict compliance with UK GDPR standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE CONTENT WRAPPER */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* STICKY SIDEBAR INDEX NAVIGATION (Desktop Viewports) */}
            <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-28 max-lg:hidden">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 px-3">
                  Policy Index
                </span>
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full px-4 py-3 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-between transition-all group ${
                      activeSection === sec.id
                        ? "bg-[#243453] text-white shadow-md font-black translate-x-1"
                        : "text-[#243453] hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <sec.icon size={14} className={activeSection === sec.id ? "text-[#F9D759]" : "text-slate-400"} />
                      <span>{sec.label.split(". ")[1]}</span>
                    </div>
                    <ChevronRight size={14} className={`transition-transform ${activeSection === sec.id ? "text-[#F9D759] translate-x-0.5" : "text-slate-300 group-hover:translate-x-0.5"}`} />
                  </button>
                ))}
              </div>
            </aside>

            {/* PRIVACY POLICY CLAUSES DOCUMENT */}
            <article className="flex-grow bg-white p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm space-y-12 text-left leading-relaxed">
              
              {/* SECTION 1 */}
              <div id="collection" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Database className="text-[#F9D759]" size={22} />
                  1. Information We Collect
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>We only collect personal data that is strictly necessary to supply accurate estimates, execute structural site works, or process invoices. This includes:</p>
                  <ul className="pl-4 space-y-2 text-slate-500 font-semibold text-xs md:text-sm">
                    <li>• <strong className="text-[#243453]">Identity & Contact Data:</strong> Your full name, telephone number, and email address provided via quote request forms.</li>
                    <li>• <strong className="text-[#243453]">Property Data:</strong> The physical installation address where site surveys, drone diagnostics, or structural roofing works are requested.</li>
                    <li>• <strong className="text-[#243453]">Financial Data:</strong> Bank account payment references used entirely to log balance completions or process deposit receipts.</li>
                  </ul>
                </div>
              </div>

              {/* SECTION 2 */}
              <div id="usage" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Eye className="text-[#F9D759]" size={22} />
                  2. How We Use Your Data
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>Your personal data is legally processed under the provisions of performance of a contract and legitimate interest thresholds. We use this information to:</p>
                  <ul className="pl-4 space-y-1 text-slate-500 font-semibold text-xs md:text-sm">
                    <li>• Formulate accurate roofing calculations, estimates, and variations.</li>
                    <li>• Schedule in-house teams, equipment logistics, and scaffold staging deliveries.</li>
                    <li>• Issue workmanship guarantees and process financial completion receipts.</li>
                    <li>• Respond directly to emergency contact queries or diagnostic customer service updates.</li>
                  </ul>
                  <p>We do not track, profile, or use cold-marketing automation templates to push promotional emails, nor do we run aggressive sales sequences.</p>
                </div>
              </div>

              {/* SECTION 3 */}
              <div id="drone-media" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Camera className="text-[#F9D759]" size={22} />
                  3. Drone Surveys & Structural Photography
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>As part of our commitment to transparent diagnostics, we use standard photography and high-definition drone surveying technology to map structural roof components, verify batten spacing, evaluate chimneys, and document workmanship milestones.</p>
                  <p><strong>Privacy Protections:</strong> All drone flight paths and roof captures are handled in strict alignment with UK Civil Aviation Authority (CAA) rules. We consciously crop out surrounding properties, obscure neighboring gardens, and blur street-level identifying indices (such as house numbers or car registrations) before displaying any completed asset on our public portfolio showcase or digital trade spaces.</p>
                </div>
              </div>

              {/* SECTION 4 */}
              <div id="sharing" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Lock className="text-[#F9D759]" size={22} />
                  4. Data Sharing & Security Safeguards
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p><strong>Zero Third-Party Sales:</strong> We do not sell, rent, trade, or distribute your customer data to tracking marketing networks or lead-generation directories under any circumstances.</p>
                  <p><strong>Trusted Subcontractors:</strong> Your contact name and project address will be shared with vetted, professional partners (such as independent scaffolding erectors or skip suppliers) strictly where required to complete specific operational stages of your build.</p>
                  <p><strong>Data Security:</strong> Your data is stored on encrypted local devices behind password-protected systems to safeguard against unauthenticated tracking or data loss breaches. We retain structural records and matching contact paperwork only as long as necessary to satisfy legal accounting requirements and manage your active 10-year workmanship guarantee timelines.</p>
                </div>
              </div>

              {/* SECTION 5 */}
              <div id="rights" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <UserCheck className="text-[#F9D759]" size={22} />
                  5. Your Legal Rights
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>Under UK data protection laws, you possess absolute control over your personal records. You have the right to:</p>
                  <ul className="pl-4 space-y-1 text-slate-500 font-semibold text-xs md:text-sm">
                    <li>• Request a copy of the personal contact records we hold on file for you.</li>
                    <li>• Rectify incorrect address lines, typos, or out-of-date telephone numbers.</li>
                    <li>• Request the erasure of your data ("right to be forgotten"), provided it does not conflict with active financial auditing data or nullify active 10-year workmanship warranty validations.</li>
                    <li>• Object to or restrict specific processing paths regarding structural media assets.</li>
                  </ul>
                  <p>To invoke any of your legal privileges, or if you have questions regarding our privacy promise, please contact us directly at <span className="font-bold text-[#243453]">07768 981913</span>.</p>
                </div>
              </div>

              {/* CLOSING NOTICE */}
              <div className="mt-12 bg-slate-50 rounded-2xl p-6 md:p-8 border-l-4 border-[#243453] text-[#243453] flex gap-4 items-start">
                <Info size={20} className="text-[#243453] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                    Policy Update Verification
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                    This privacy notice applies directly to user engagement on this digital site and information compiled during our physical Brighton & Hove roofing projects. We reserve the right to refine these parameters over time to align with updated trade data frameworks.
                  </p>
                </div>
              </div>

            </article>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;