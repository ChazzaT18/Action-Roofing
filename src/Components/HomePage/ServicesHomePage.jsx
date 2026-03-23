import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Emergency Roof Repairs",
    desc: "Urgent call-outs for leaks, storm damage, and structural issues across Brighton.",
    image: "/images/roof-repairs.jpg",
    path: "/services/emergency-repairs"
  },
  {
    title: "Slate & Tile Roofing",
    desc: "Expert installation and repair of traditional slate and modern tiled roofs.",
    image: "/images/slate-roofing.png",
    path: "/services/slate-tile-roofing"
  },
  {
    title: "Leadwork & Flashing",
    desc: "Precision leadwork to ensure your roof valleys and chimneys stay watertight.",
    image: "/images/leadwork.jpg",
    path: "/services/leadwork"
  },
  {
    title: "Chimney Repairs",
    desc: "Repointing and structural repairs to keep your chimney safe and functional.",
    image: "/images/Chimney-repairs.jpg",
    path: "/services/chimney-repairs"
  },
  {
    title: "Fascias, Soffits & Gutters",
    desc: "Full installations and repairs of high-quality uPVC roofline components.",
    image: "/images/fascias-soffits-gutters.png",
    path: "/services/fascias-soffits"
  },
  {
    title: "Moss Removal & Gutter Cleaning",
    desc: "Protect your roof longevity and prevent blockages with professional cleaning.",
    image: "/images/gutter-cleaning.jpg",
    path: "/services/moss-removal"
  }
];

const ServicesHomePage = () => {
  return (
    <section className="bg-slate-50 py-18 2xl:py-24 px-4 md:px-10">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl 2xl:max-w-4xl mb-16 2xl:mb-20">
          {/* Bumped to 2xl:text-4xl */}
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] border-l-8 border-[#F9D759] pl-6 mb-6 uppercase tracking-tight">
            Our Roofing Services
          </h2>
          {/* Bumped to 2xl:text-xl */}
          <p className="text-md md:text-lg 2xl:text-xl text-slate-600 leading-relaxed">
            We provide a full range of roofing services for homeowners and landlords across 
            Brighton & Hove, from urgent repairs to planned maintenance and inspections.
          </p>
        </div>

        {/* Services Grid - Increased gap for larger text flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Section - Increased height slightly for 2xl */}
              <div className="relative h-64 2xl:h-80 overflow-hidden bg-[#243453]">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243453]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Content Section */}
              <div className="p-8 2xl:p-10 flex flex-col flex-grow">
                {/* Bumped to 2xl:text-2xl */}
                <h3 className="text-xl 2xl:text-2xl font-extrabold text-[#243453] mb-3 group-hover:text-[#d1ad2b] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Bumped to 2xl:text-base */}
                <p className="text-slate-600 text-sm 2xl:text-base leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                {/* Footer Link - Bumped to 2xl:text-sm */}
                <div className="pt-4 border-t border-slate-100 flex items-center text-[#243453] font-bold text-xs 2xl:text-sm uppercase tracking-widest">
                  View Service Details
                  <ArrowRight 
                    size={16} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHomePage;