import React, { useEffect, useState } from "react";
import { 
  FileText, 
  ShieldCheck, 
  Hammer, 
  HelpCircle, 
  Scale, 
  ChevronRight,
  AlertTriangle
} from "lucide-react";

const TermsPage = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState("definitions");

  useEffect(() => {
    setCurrentPage("terms");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  // Section configuration for the interactive sidebar index lookup
  const sections = [
    { id: "definitions", label: "1. Definitions", icon: HelpCircle },
    { id: "quotations", label: "2. Quotations & Scope", icon: FileText },
    { id: "access", label: "3. Access & Boundaries", icon: Hammer },
    { id: "defects", label: "4. Unforeseen Defects", icon: AlertTriangle },
    { id: "protection", label: "5. Property Protection", icon: ShieldCheck },
    { id: "weather", label: "6. Weather & Delays", icon: Scale },
    { id: "payments", label: "7. Pricing & Payments", icon: FileText },
    { id: "guarantees", label: "8. Guarantees & Liability", icon: ShieldCheck },
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
              <Scale size={14} />
              Action Roofing Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Terms & <span className="text-[#F9D759]">Conditions</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium max-w-xl mx-auto mt-2">
              Please review our standard business thresholds, responsibilities, and workmanship guarantee structures below.
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
                  Document Index
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

            {/* LEGAL TERMS SPECIFICATION DOCUMENT */}
            <article className="flex-grow bg-white p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm space-y-12 text-left leading-relaxed">
              
              {/* SECTION 1 */}
              <div id="definitions" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <HelpCircle className="text-[#F9D759]" size={22} />
                  1. Definitions
                </h2>
                <ul className="space-y-3 text-slate-600 text-sm md:text-base font-medium">
                  <li>• <strong className="text-[#243453]">"Contractor"</strong> refers strictly to Action Roofing Services.</li>
                  <li>• <strong className="text-[#243453]">"Customer"</strong> refers to the individual property owner, business, or organisation accepting the quotation.</li>
                  <li>• <strong className="text-[#243453]">"Works"</strong> refers to the slate, tile, leadwork, line clearance, or emergency services outlined within the quotation.</li>
                  <li>• <strong className="text-[#243453]">"Quotation"</strong> refers to the fixed-price calculation, itemised scope, or estimated trade breakdown provided to the Customer.</li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div id="quotations" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <FileText className="text-[#F9D759]" size={22} />
                  2. Quotations & Variations
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>All quotations are formulated following a visual, non-destructive surface inspection and represent information accessible at that specific time.</p>
                  <p>Quotations are valid for exactly <strong>30 days</strong> from the date of issue unless stated otherwise in writing.</p>
                  <p>The contract covers strictly the works itemised in the quotation document. Any additions or modifications requested by the customer during construction will be treated as a <strong>Variation</strong>. No variation works will be executed without explicit customer approval, which can be given verbally, via electronic text messaging, or in writing, and will serve as validation for updated fees and modified timescales.</p>
                </div>
              </div>

              {/* SECTION 3 */}
              <div id="access" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Hammer className="text-[#F9D759]" size={22} />
                  3. Access, Scaffolding & Boundaries
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>The Customer agrees to provide safe, unobstructed access to the property perimeter, alongside reasonable access to domestic electricity and water mains where required.</p>
                  <p><strong>Boundary Access Permissions:</strong> If the setup of scaffolding, high-reach staging, or edge protection requires positioning poles or framework across adjacent boundary lines, it is the <strong>Customer’s sole responsibility</strong> to secure all necessary neighbor agreements prior to our start date.</p>
                  <p><strong>Party Wall Compliance:</strong> Where structural installations or structural slicing intersect shared building elements, the Customer confirms all relevant legal notices under the <strong>Party Wall etc. Act 1996</strong> have been formally processed and completed.</p>
                </div>
              </div>

              {/* SECTION 4 */}
              <div id="defects" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <AlertTriangle className="text-[#F9D759]" size={22} />
                  4. Unforeseen Structural Defects
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>Stripping away weathered tiles frequently uncovers underlying structural problems that were entirely hidden during initial inspection. The Contractor shall not be held responsible for existing defects not reasonably visible from ground or ladder checks, including but not limited to:</p>
                  <ul className="pl-4 space-y-1 text-slate-500 font-semibold text-xs md:text-sm">
                    <li>• Rotted structural rafters, purlins, or timber wall plates</li>
                    <li>• Ruptured or completely degraded historical underlying felt</li>
                    <li>• Decayed chimney masonry or fractured stack bricks</li>
                    <li>• Faulty previous trade applications or internal sagging rafter frames</li>
                  </ul>
                  <p>Upon discovering these issues, the Contractor will halt operations in that layout zone, notify the Customer immediately, capture photographic records, and provide a transparent variation cost estimate to perform the fix correctly.</p>
                </div>
              </div>

              {/* SECTION 5 */}
              <div id="protection" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="text-[#F9D759]" size={22} />
                  5. Internal & External Property Protection
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p><strong>Vibration Warnings:</strong> Stripping tiles, hammering timber batten lines, and moving heavy bundles will inevitably generate structural vibrations that travel through the property. The Customer assumes full responsibility for securing or removing delicate light fixtures, wall clocks, or unstable decorations from walls and ceilings immediately beneath the workspace.</p>
                  <p><strong>Loft Spaces:</strong> The Contractor cannot prevent residual dust or ancient brittle mortar chips from filtering through old joints into loft storage voids during stripping, and recommends using protective plastic sheeting internally.</p>
                  <p><strong>Vehicles & Gardens:</strong> The Customer must relocate vehicles, patio items, and delicate plant pots away from direct scaffold drop zones. While we apply ground tarps, we are not liable for minor incidental markings on lawns or bushes within active falling-debris boundaries.</p>
                  <p><strong>Signal Lines:</strong> We accept no liability for television signal drops or satellite dish alignment slips caused by scaffolding poles or tile staging weight lines, nor do we handle subsequent alignment fine-tuning costs.</p>
                </div>
              </div>

              {/* SECTION 6 */}
              <div id="weather" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <Scale className="text-[#F9D759]" size={22} />
                  6. Weather dependence & Ceasing Operations
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>All project timeline estimates are provisional and subject to adjustment. Delays caused by heavy rain, coastal frost, high gales, or supplier stock shortfalls do not constitute a breach of contract.</p>
                  <p>The Contractor reserves the right to suspend or cease operations immediately if weather variables pose a threat to worker safety or structural waterproofing integrity.</p>
                  <p><strong>Temporary Weatherproofing:</strong> If a project is paused, we will install standard trade tarps or temporary plastic sheeting where practical. However, because these are temporary procedures, <strong>we cannot provide a absolute guarantee</strong> against tracking water ingress under severe or storm-level conditions. If the Customer chooses to halt a critical structural fix or variation, all ongoing tracking leak risks transfer entirely to the Customer.</p>
                </div>
              </div>

              {/* SECTION 7 */}
              <div id="payments" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <FileText className="text-[#F9D759]" size={22} />
                  7. Pricing, Deposits & Payments
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p>Our explicit payment structures are specified inside each quotation document. Commitment deposits are applied to secure labour slots, order materials, and finalize equipment staging dates.</p>
                  <p>If a customer cancels after custom materials have been finalized and ordered, they remain liable for the expenses of non-returnable stock or costs already incurred by the Contractor.</p>
                  <p>The final balance payment is due immediately upon structural completion. We reserve the right to charge interest and recovery tracking fees on all overdue invoices as permitted by law.</p>
                </div>
              </div>

              {/* SECTION 8 */}
              <div id="guarantees" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#243453] pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="text-[#F9D759]" size={22} />
                  8. Workmanship Guarantees & Liability
                </h2>
                <div className="text-slate-600 text-sm md:text-base font-medium space-y-3">
                  <p><strong>New Roof Installations:</strong> Complete new roof installations come with a comprehensive <strong>10-year workmanship guarantee</strong> starting from the completion date.</p>
                  <p><strong>Repairs:</strong> Minor patching, component repairs, and temporary maintenance fixes target localized problems only and carry no warranty unless explicitly written inside the quotation paperwork.</p>
                  <p><strong>Exclusions:</strong> Our guarantees apply strictly to the Contractor's directly executed workmanship and completely exclude issues arising from weather damage, structural movement, lack of property maintenance, or pre-existing uncorrected faults.</p>
                  <p><strong>Payment Condition:</strong> Workmanship guarantees become valid and enforceable <strong>only after the contract account balance has been paid in full</strong>.</p>
                  <p><strong>Drone Use:</strong> We reserve the right to operate drone technology over the work site for roof surveys, progress tracking, and media capture in absolute compliance with UK drone laws. No private identifier fields will ever be misused.</p>
                  <p><strong>Liability Cap:</strong> Except for cases of personal injury or death caused directly by proven operational negligence, our maximum liability for any structural claim is strictly limited to the total value of the contract paid by the Customer.</p>
                </div>
              </div>

              {/* ACCEPTANCE VALUE FOOTER */}
              <div className="mt-12 bg-slate-50 rounded-2xl p-6 md:p-8 border-l-4 border-[#F9D759] text-[#243453]">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Installation Standard Validation Notice
                </p>
                <p className="text-xs md:text-sm text-slate-600 font-semibold mb-4 leading-relaxed">
                  These terms and conditions apply strictly to all of our domestic repairs, general property roofline maintenance, and **new roof installations**.
                </p>
                <p className="font-extrabold text-sm md:text-base italic leading-relaxed">
                  "By accepting this quotation, the Customer confirms that they have read and understood these Terms & Conditions."
                </p>
              </div>

            </article>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsPage;