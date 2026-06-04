import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "Family-run roofing company",
    "Fully insured",
    "Honest, no-pressure advice",
    "Clear quotations and photo evidence",
    "Reliable communication throughout",
    "Work carried out with care and attention to detail"
  ];

  return (
    <section className="bg-slate-50 py-18 2xl:py-24 px-4 md:px-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mx-auto mb-10 2xl:mb-16">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-6">
            Why Choose Us?
          </h2>
          <p className="text-slate-600 text-lg 2xl:text-2xl italic max-w-4xl mx-auto">
            "We focus on doing the job properly — no shortcuts, no pressure, just honest roofing you can trust."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-4 2xl:px-10 bg-white rounded-xl border-b-4 border-[#F9D759] shadow-sm">
              <div className="bg-[#243453] p-1 2xl:p-1.5 rounded-full flex-shrink-0">
                <CheckCircle className="text-[#F9D759]" size={16} />
              </div>
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