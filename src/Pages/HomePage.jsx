import { Hammer, ArrowRight, ShieldCheck } from "lucide-react";

const HomePage = () => {
  return (
    <main className="relative h-[calc(100vh-110px)] mt-[-20px] w-full">
      {/* Hero Section Container */}
      <div className="relative w-full overflow-hidden h-full flex items-center justify-center">
        <img
          className="h-full w-full object-cover object-center"
          src="/images/Frame 2.png"
          alt="Action Roofing Brighton - Specialists Since 2007"
        />

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 h-full bg-black/10" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex h-full items-center justify-center px-4">
          <div className="max-w-screen-xl h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-8 ">
            {/* Center Column: Primary Content */}
            <div className="lg:col-span-8 lg:col-start-3 text-white flex h-full flex-col justify-center gap-4 items-center text-center">
              <div className="">
                <p className="text-[#F9D759] font-bold mb-4 tracking-widest uppercase text-sm">
                  Brighton & Hove's Trusted Choice
                </p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-4xl">
                  Trusted Roofing Specialists in{" "}
                  <span className="text-[#F9D759]">Brighton & Hove</span> Since
                  2007
                </h1>
              </div>

              <p className="text-base md:text-lg text-slate-100 max-w-2xl leading-relaxed">
                Tile & slate roofing specialists offering repairs, leadwork,
                maintenance & moss removal across Brighton & Hove.
              </p>

              {/* Centered Feature Badges */}
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Fully insured
                </span>
                <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Family-run
                </span>
                <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Local roofers
                </span>
              </div>

              {/* CTA Buttons Group */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="px-10 py-4 bg-[#F48120] hover:bg-[#D97010] text-white font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105">
                    Get a Free Quote
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="px-10 py-4 bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105">
                    <Hammer size={16} className="text-[#F9D759]" />
                    Emergency Repairs
                  </button>
                </div>
                {/* Microcopy */}
                <p className="mt-4 text-sm text-slate-300 italic">
                  Free inspections · No obligation
                </p>
              </div>
            </div>

            {/* Right Side: Guarantee Badge (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center space-y-2 border-t-4 border-[#F9D759] transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
                <ShieldCheck size={48} className="text-[#243453]" />
                <span className="text-2xl font-black text-[#243453]">
                  10-YEAR
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-slate-600 leading-tight">
                  Workmanship <br /> Guarantee
                </span>
                <div className="h-[1px] w-12 bg-slate-200 my-1" />
                <span className="text-[10px] font-bold text-[#F48120] uppercase">
                  All work guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Line - Positioned at bottom of viewport */}
        <div className="absolute bottom-6 w-full text-center">
          <p className="text-white/60 text-xs font-medium tracking-wide">
            Serving Brighton, Hove, Portslade, Patcham, Rottingdean &
            surrounding areas.
          </p>
        </div>
      </div>

      {/* Content Below the Fold */}
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#243453] border-l-4 border-[#F9D759] pl-4">
            Our Professional Roofing Services
          </h2>
          {/* Add your service cards here */}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
