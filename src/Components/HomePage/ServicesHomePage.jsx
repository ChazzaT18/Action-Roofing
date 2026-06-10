import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Emergency Roof Repairs",
    desc: "Urgent 24/7 call-outs for leaks, storm damage and structural roofing issues. We prioritise rapid stabilisation and temporary protection measures to help prevent further internal damage, damp and timber rot.",
    image: "/images/roof-repairs.jpg",
    path: "/services/emergency-repairs",
    features: ["24/7 Response", "Rapid Stabilisation", "Leak Prevention"],
  },
  {
    title: "Slate & Tile Roofing",
    desc: "Expert installation of slate and tiled roofing systems using high-quality materials and modern breathable underlays, built to perform in Brighton’s demanding coastal weather conditions.",
    image: "/images/slate-roofing.png",
    path: "/services/slate-tile-roofing",
    features: ["Breathable Underlays", "Coastal Durability", "Full Replacements"],
  },
  {
    title: "Leadwork & Flashing",
    desc: "Precision leadwork and flashing repairs for chimneys, valleys, abutments and roof junctions, completed using traditional bossing and welding techniques for long-lasting weather protection.",
    image: "/images/leadwork.jpg",
    path: "/services/leadwork",
    features: ["Traditional Bossing", "Lead Welding", "LSA Guidelines"],
  },
  {
    title: "Chimney Repairs",
    desc: "Comprehensive chimney repair services including repointing, flashing repairs, chimney cowls, cappings, reductions and removals where required.",
    image: "/images/Chimney-repairs.jpg",
    path: "/services/chimney-repairs",
    features: ["Repointing & Masonry", "Cappings & Cowls", "Stack Reductions"],
  },
  {
    title: "Fascias, Soffits & Gutters",
    desc: "Complete roofline services including fascias, soffits and guttering, replacing damaged or rotting timber with durable, low-maintenance uPVC systems designed to protect and ventilate your roof space.",
    image: "/images/fascia-soffits-guttering.jpg",
    path: "/services/fascias-soffits-guttering",
    features: ["uPVC Replacements", "Eave Ventilation", "Gutter Alignment"],
  },
  {
    title: "Roof Moss Removal & Cleaning",
    desc: "Professional scraping and softwash biocide applications designed to clear thick moss accumulation safely, protect surface finishes, and curb vegetation regrowth without pressure damage.",
    image: "/images/moss-removal.jpg",
    path: "/services/moss-removal-roof-cleaning",
    features: ["Manual Scraping", "Biocide Softwash", "Preventative Care"],
  },
  {
    title: "Gutter Clearance & Cleaning",
    desc: "Commercial-grade wet/dry gutter vacuuming to extract silt, leaves, and moss sludge completely. Includes full structural downpipe flushes and bracket alignment verification checks.",
    image: "/images/gutter-vac.jpg",
    path: "/services/guttering",
    features: ["Vacuum Extraction", "Downpipe Flushing", "Joint & Seal Audits"],
  },
  {
    title: "Book A Free Inspection",
    desc: "Don't see your specific roofing concern listed? We provide comprehensive structural diagnostics across all Sussex setups entirely hassle-free.",
    image: "/images/drone-roof-inspection.jpg",
    path: "/contact-us",
    features: ["Honest Advice", "Photo Evidence Provided", "No Obligation"],
    isCTA: true,
  },
];

const ServicesHomePage = ({ currentPage }) => {
  return (
    <>
      <section className="py-18 px-4 md:px-10 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header Section */}
          {currentPage === "home" ? (
            <div className="max-w-3xl mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
                Our Roofing Services
              </h2>
              <p className="text-md md:text-lg text-slate-600 leading-relaxed">
                We provide a full range of roofing services for homeowners and landlords across 
                Brighton & Hove, from urgent repairs to planned maintenance and inspections.
              </p>
            </div>
          ) : (
            <></>
          )}

          {/* Core grid configuration (Locked to 2 or 4 columns) */}
          <div className="grid grid-cols-1 max-sm:grid-cols-1 grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 2xl:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={`group relative flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border ${
                  service.isCTA
                    ? "bg-[#F9D759] border-transparent hover:bg-[#F7CB28]"
                    : "bg-white border-slate-100"
                }`}
              >
                {/* Unified Image Section */}
                <div className="relative h-64 md:h-44 2xl:h-56 overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-50"
                  />

                  <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="bg-[#F9D759] text-[#243453] px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {service.isCTA ? "Book Now" : "See More"} <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  {/* 1. TOP SECTION: Title and Description */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-black text-[#243453] mb-3 uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>

                    <p className={`text-sm leading-relaxed ${
                      service.isCTA ? "text-[#243453]/90 font-semibold" : "text-slate-600"
                    }`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* 2. BOTTOM SECTION: Technical Vertical List */}
                  <div className="space-y-2.5 mt-auto pt-5">
                    {service.features.map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest ${
                          service.isCTA ? "text-[#243453]/70" : "text-slate-400"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          service.isCTA ? "bg-[#243453]" : "bg-[#F9D759]"
                        }`}></div>
                        {feat}
                      </div>
                    ))}
                  </div>

                  {/* 3. FOOTER ROW ACTION INTERFACE */}
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between font-black text-[10px] uppercase tracking-[0.15em] ${
                    service.isCTA 
                      ? "border-[#243453]/10 text-[#243453]" 
                      : "border-slate-100 text-[#243453] md:hidden"
                  }`}>
                    <span>{service.isCTA ? "Get In Touch" : "View Details"}</span>
                    <ArrowRight size={16} className={service.isCTA ? "text-[#243453]" : "text-[#F9D759]"} />
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
          Family Run <span className="text-[#F9D759]">|</span> Fully Insured
        </p>
      </div>
    </>
  );
};

export default ServicesHomePage;