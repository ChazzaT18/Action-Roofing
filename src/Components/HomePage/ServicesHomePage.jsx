import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Emergency Roof Repairs",
    desc: "Urgent 24/7 call-outs for leaks, storm damage, and structural issues. We prioritize rapid stabilizing to prevent internal damp and timber rot.",
    image: "/images/roof-repairs.jpg",
    path: "/services/emergency-repairs",
    features: ["24/7 Response", "Storm Damage", "Structural Fixes"],
  },
  {
    title: "Slate & Tile Roofing",
    desc: "Expert installation of traditional natural slate and modern concrete tiles. Built for Brighton’s coastal weather with high-performance underlays.",
    image: "/images/slate-roofing.png",
    path: "/services/slate-tile-roofing",
    features: ["New Roofs", "Strip & Retile", "Conservation Work"],
  },
  {
    title: "Leadwork & Flashing",
    desc: "Precision lead welding and bossing for chimneys and valleys. We ensure a lifetime of waterproofing where others often fail.",
    image: "/images/leadwork.jpg",
    path: "/services/leadwork",
    features: ["Chimney Lead", "Roof Valleys", "Bay Window Tops"],
  },
  {
    title: "Chimney Repairs",
    desc: "Comprehensive repointing, lead replacement, and structural repairs to prevent damp from entering through neglected masonry.",
    image: "/images/Chimney-repairs.jpg",
    path: "/services/chimney-repairs",
    features: ["Repointing", "Lead Flashing", "Capping & Cowls"],
  },
  {
    title: "Fascias, Soffits & Gutters",
    desc: "Full roofline protection. We replace rotting timbers with high-quality uPVC systems that provide essential ventilation to your roof void.",
    image: "/images/fascias-soffits-gutters.png",
    path: "/services/fascias-soffits",
    features: ["Gutter Replacement", "Soffit Vents", "uPVC Fascias"],
  },
  {
    title: "Moss Removal & Gutter Cleaning",
    desc: "Professional cleaning to protect longevity. We remove moisture-holding moss that can lead to frost damage and cracked tiles.",
    image: "/images/gutter-cleaning.jpg",
    path: "/services/moss-removal",
    features: ["Safe Scrapers", "Anti-Fungal Wash", "Gutter Flushes"],
  },
];

const ServicesHomePage = ({currentPage}) => {
  return (
    <>
    <section className="py-18 px-4 md:px-10 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        { currentPage === 'home'? <div className="max-w-3xl mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
            Our Roofing Services
          </h2>
          <p className="text-md md:text-lg text-slate-600 leading-relaxed">
            We provide a full range of roofing services for homeowners and landlords across 
            Brighton & Hove, from urgent repairs to planned maintenance and inspections.
          </p>
        </div> : <></>}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-44 2xl:h-56 overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-50"
                />

                <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="bg-[#F9D759] text-[#243453] px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    See More <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 2xl:p-8 flex flex-col flex-grow text-left">
                {/* 1. TOP SECTION: Title and Description (Wrapped in flex-grow) */}
                <div className="flex-grow">
                  <h3 className="text-lg font-black text-[#243453] mb-3 uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm 2xl:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* 2. BOTTOM SECTION: Technical Vertical List */}
                <div className="space-y-2.5 mt-auto pt-5">
                  {service.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 bg-[#F9D759] rounded-full shrink-0"></div>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* 3. MOBILE FOOTER: Only visible on small screens */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex md:hidden items-center justify-between text-[#243453] font-black text-[10px] uppercase tracking-[0.15em]">
                  <span>View Service Details</span>
                  <ArrowRight size={16} className="text-[#F9D759]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
      {/* Bottom Legacy Note */}
      <div className="bg-white text-center border-t border-slate-200 py-18">
        <p className="text-[#243453] font-bold uppercase tracking-widest text-xs">
          100% In-House Team <span className="text-[#F9D759]">|</span> Fully
          Insured
        </p>
      </div>
    </>
  );
};

export default ServicesHomePage;
