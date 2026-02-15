import { Hammer, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const LandingHero = () => {
  return (
    <main className="relative w-full mt-[-30px] sm:mt-[-40px] lg:mt-[-20px]">
      {/* HERO SECTION CONTAINER 
        - justify-center will now work perfectly because the bottom line is absolute 
      */}
      <div className="relative w-full flex flex-col min-h-[calc(100vh-126px)] sm:min-h-[calc(100vh-106px)] md:min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/Frame 2.png"
          alt="Action Roofing Brighton - Specialists Since 2007"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Main Content Grid */}
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Center Column: Primary Content */}
            <div className="lg:col-span-8 lg:col-start-3 text-white flex flex-col justify-center gap-6 items-center text-center">
              <div className="space-y-4">
                <p className="text-[#F9D759] font-bold tracking-widest uppercase text-xs sm:text-sm">
                  Brighton & Hove's Trusted Choice
                </p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-3xl">
                  Trusted Roofing Specialists in{" "}
                  <span className="text-[#F9D759]">Brighton & Hove</span> Since
                  2007
                </h1>
              </div>

              <p className="text-base md:text-lg text-slate-100 max-w-2xl leading-relaxed">
                Tile & slate roofing specialists offering repairs, leadwork,
                maintenance & moss removal across Brighton & Hove.
              </p>

              {/* Feature Badges */}
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

              {/* CTA Buttons */}
              <div className="flex flex-col items-center pt-2">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link to="contact-us" className="px-8 py-4 bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 group transform hover:scale-105">
                    Get a Free Quote
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <button className="px-8 py-4 bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105">
                    <Hammer size={16} className="text-[#F9D759]" />
                    Emergency Repairs
                  </button>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-300 italic">
                  Free inspections · No obligation
                </p>
              </div>
            </div>

            {/* Right Side: Guarantee Badge */}
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

        {/* SERVICE AREA LINE 
          - Changed to absolute so it doesn't push the flex content up
        */}
        <div className="absolute bottom-6 z-10 w-full text-center hidden sm:block">
          <p className="text-white/60 text-[10px] sm:text-xs font-medium tracking-wide">
            Serving Brighton, Hove, Portslade, Patcham, Rottingdean &
            surrounding areas.
          </p>
        </div>
      </div>
    </main>
  );
};


export default LandingHero