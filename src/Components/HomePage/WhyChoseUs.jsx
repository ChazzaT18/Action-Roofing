import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "24/7 emergency call-outs — ready when you need us",
    "Fully insured with a 10-year workmanship guarantee on all new installs",
    "Free, no-obligation quotes and roof inspections",
    "Clear, honest advice with no pressure",
    "Emergency timber repairs handled correctly",
    "Local Brighton roofers with 20+ years of combined experience"
  ];

  return (
    <section className="bg-slate-50 py-18 2xl:py-24 px-4 md:px-10">
      {/* Increased max-width to allow larger text to breathe */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mx-auto mb-10 2xl:mb-16">
          {/* Bumped to 2xl:text-4xl */}
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-6">
            Why Choose Us?
          </h2>
          {/* Bumped to 2xl:text-2xl */}
          <p className="text-slate-600 text-lg 2xl:text-2xl italic max-w-4xl mx-auto">
            "We focus on doing the job properly — no shortcuts, no pressure, just honest roofing you can trust."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 p-4 2xl:p-10 bg-white rounded-xl border-b-4 border-[#F9D759] shadow-sm">
              <div className="bg-[#243453] p-1 2xl:p-1.5 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="text-[#F9D759]" size={16} />
              </div>
              {/* Bumped to 2xl:text-xl */}
              <p className="font-bold text-[#243453] text-base 2xl:text-xl leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;