import { Hammer, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const LandingHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="relative w-full mt-[-30px] sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px]">
      <div className="relative w-full flex flex-col min-h-[calc(100vh-126px)] sm:min-h-[calc(100vh-106px)] md:min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-[15%_40%] lg:object-center"
          src="/images/Landing Page Roof.png"
          alt="Action Roofing Brighton - Specialists Since 2007"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 lg:bg-black/50 bg-black/70" />

        {/* Main Content Grid */}
        <div className="relative z-10 w-full max-w-screen-2xl px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 max-sm:mt-[30px] gap-8 items-center">
            {/* Center Column: Primary Content */}
            <div className="lg:col-span-8 lg:col-start-3 max-sm:my-10 text-white flex flex-col justify-center gap-6 items-center text-center">
              <div className="space-y-4">
                {/* Bumped to 2xl:text-xl */}
                <p className="text-[#F9D759] font-bold tracking-widest uppercase 2xl:text-xl text-xs sm:text-base">
                  Brighton & Hove's Trusted Choice
                </p>
                {/* Bumped to 2xl:text-6xl */}
                <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-6xl font-extrabold leading-tight max-w-4xl">
                  Family-Run Roofing Specialists in{" "}
                  <span className="text-[#F9D759]">Brighton & Hove</span> Since
                  2007
                </h1>
              </div>

              {/* Bumped to 2xl:text-2xl */}
              <p className="2xl:text-2xl lg:text-base md:text-lg text-slate-100 max-w-3xl leading-relaxed">
                Founded in 2007 and built on decades of hands-on experience,
                Action Roofing is committed to doing the job properly, providing
                tile and slate roofing, repairs, leadwork and maintenance across
                Brighton & Hove.
              </p>

              {/* Feature Badges - Bumped text to 2xl:text-base */}
              <div className="flex flex-wrap justify-center gap-3 text-sm 2xl:text-base font-medium">
                <span className="bg-black/20 2xl:px-8 2xl:py-3 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Fully insured
                </span>
                <span className="bg-black/20 2xl:px-8 2xl:py-3 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Family-run
                </span>
                <span className="bg-black/20 2xl:px-8 2xl:py-3 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Local roofers
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center pt-2">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  {/* Bumped to 2xl:text-xl */}
                  <Link
                    to="contact-us"
                    className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105"
                  >
                    Get a Free Quote
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <button className="px-8 py-4 2xl:px-10 2xl:py-5 2xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105">
                    <Hammer size={20} className="text-[#F9D759]" />
                    Emergency Repairs
                  </button>
                </div>
                {/* Bumped to 2xl:text-base */}
                <p className="mt-4 text-xs sm:text-sm 2xl:text-base text-slate-300 italic">
                  Free inspections · No obligation
                </p>
              </div>
            </div>

            {/* Right Side: Guarantee Badge */}
            <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
              <div
                onClick={() => scrollToSection("trust-section")}
                className="bg-white cursor-pointer p-6 2xl:p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center space-y-2 border-t-4 border-[#F9D759] transform rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <ShieldCheck size={56} className="text-[#243453]" />
                {/* Bumped to 2xl:text-3xl */}
                <span className="text-2xl 2xl:text-3xl font-black text-[#243453]">
                  10-YEAR
                </span>
                {/* Bumped to 2xl:text-xl */}
                <span className="text-sm 2xl:text-xl font-bold uppercase tracking-wider text-slate-600 leading-tight">
                  Workmanship <br /> Guarantee
                </span>
                <div className="h-[1px] w-12 bg-slate-200 my-1" />
                {/* Bumped to 2xl:text-base */}
                <span className="text-[10px] 2xl:text-base font-bold text-[#F48120] uppercase">
                  All work guaranteed on full roof installations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE AREA LINE - Bumped to 2xl:text-sm */}
        <div className="absolute bottom-6 z-10 w-full text-center hidden sm:block">
          <p className="text-white/60 text-[10px] sm:text-xs 2xl:text-sm font-medium tracking-wide">
            Serving Brighton, Hove, Portslade, Patcham, Rottingdean &
            surrounding areas.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingHero;