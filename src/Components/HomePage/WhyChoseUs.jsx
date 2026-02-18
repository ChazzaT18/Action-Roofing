import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "Rapid emergency response available (24/7, subject to availability)",
    "Fully insured with a 10-year workmanship guarantee",
    "Free, no-obligation roof inspections",
    "No-pressure, honest advice",
    "Structural timber repairs carried out correctly",
    "20+ years’ combined roofing experience"
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl font-black text-[#243453] uppercase mb-6">Why Choose Us?</h2>
          <p className="text-slate-600 text-lg italic">
            "When it comes to your home, you want a roofer you can trust to turn up on time, give honest 
            advice, and carry out the work correctly."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border-b-4 border-[#F9D759]">
              <div className="bg-[#243453] p-1 rounded-full mt-1">
                <CheckCircle className="text-[#F9D759]" size={16} />
              </div>
              <p className="font-bold text-[#243453] leading-snug">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs