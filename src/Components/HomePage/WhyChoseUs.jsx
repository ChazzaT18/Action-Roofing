import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "24/7 emergency call-outs — ready when you need us",
    "Fully insured with a 10-year workmanship guarantee on all new installs",
    "Free, no-obligation quotes and roof inspections",
    "No-pressure, honest advicClear, honest advice with no pressure",
    "Emergency timber repairs handled correctly",
    "Local Brighton roofers with 20+ years of combined experience"
  ];

  return (
    <section className="bg-slate-50 py-18 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#243453] uppercase mb-6">Why Choose Us?</h2>
          <p className="text-slate-600 2xl:text-xl text-lg italic">
            "We focus on doing the job properly — no shortcuts, no pressure, just honest roofing you can trust."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border-b-4 border-[#F9D759]">
              <div className="bg-[#243453] p-1 rounded-full mt-1">
                <CheckCircle className="text-[#F9D759]" size={16} />
              </div>
              <p className="font-bold 2xl:text-lg text-[#243453] leading-snug">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs