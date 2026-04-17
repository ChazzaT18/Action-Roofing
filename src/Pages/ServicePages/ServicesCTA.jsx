import { Link } from "react-router-dom";
import { Phone, FileText, Mail } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-[#243453] text-white text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black uppercase mb-12 tracking-tight">
          Need an Honest <span className="text-[#F9D759]">Assessment?</span>
        </h2>

        <div className="grid grid-cols-1 md:flex text-sm md:flex-row justify-center gap-4 md:gap-6">
          {/* 1. CALL BUTTON */}
          <a
            href="tel:07768981913"
            className="bg-[#F9D759] text-[#243453] px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Phone size={20} />
            <span>
              Call Now<span className="hidden sm:inline">: 07768 981913</span>
            </span>
          </a>

          {/* 2. GET A QUOTE BUTTON */}
          <Link
            to="/contact-us"
            className="bg-white text-[#243453] px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <FileText size={20} />
            <span>Get A Quote</span>
          </Link>

          {/* 3. EMAIL BUTTON */}
          <a
            href="mailto:actionroofingservices@outlook.com"
            className="border-2 border-white text-white px-8 py-5 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all font-black uppercase tracking-widest flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            <span>
              Email Us<span className="hidden sm:inline"> Today</span>
            </span>
          </a>
        </div>

        <p className="mt-8 text-slate-400 text-xs 2xl:text-sm md:text-base font-bold uppercase tracking-[0.2em]">
          Rapid Response across Brighton & Hove
        </p>
      </div>
    </section>
  );
};

export default ServicesCTA;
