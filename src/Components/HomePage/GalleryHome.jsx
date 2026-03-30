import { useState, useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const projects = [
    { 
      title: "Full Property Tile-Hanging & Roof Replacement", 
      location: "Brighton", 
      image: "/images/brighton-job.jpg" 
    },
    { 
      title: "New Tiled Roof with Velux Windows", 
      location: "Lewes", 
      image: "/images/tile-slate-lead.png" 
    },
    { 
      title: "Partial Bungalow Reroof: New Concrete Interlocking Tiles", 
      location: "Brighton", 
      image: "/images/bungalow.png" 
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = scrollRef.current.firstChild.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-18 2xl:py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 2xl:mb-16">
          <div className="max-w-2xl 2xl:max-w-4xl">
            {/* Bumped to 2xl:text-4xl */}
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase border-l-8 border-[#F9D759] pl-6 mb-4">
              Recent Projects
            </h2>
            {/* Bumped to 2xl:text-xl */}
            <p className="text-slate-600 2xl:text-xl">
              Real roofing projects we’ve completed across Brighton & Hove.
            </p>
          </div>
          
          {/* Bumped to 2xl:text-xl */}
          <Link 
            to="/gallery" 
            className="hidden md:flex items-center gap-2 text-[#243453] 2xl:text-xl font-bold hover:text-[#d1ad2b] transition-colors group"
          >
            View Full Gallery 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Grid vs Carousel Container */}
      <div className="relative max-w-screen-2xl mx-auto">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex md:grid md:grid-cols-2 lg:grid-cols-3 
            gap-6 2xl:gap-10 overflow-x-auto w-full max-w-screen-2xl md:overflow-visible 
            pb-2 md:pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide 
            md:px-0
          "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((job, i) => (
            <div 
              key={i} 
              className={`
                min-w-full md:min-w-full snap-center 
                bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 
                transition-all duration-300
                ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""} 
              `}
            >
              {/* Increased height for 2xl to h-96 */}
              <div className={`
                overflow-hidden
                ${i === 2 ? "md:h-80 lg:h-64 2xl:h-96 h-75" : "h-75 lg:h-64 2xl:h-96"}
              `}>
                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 2xl:p-10">
                {/* Bumped to 2xl:text-xl */}
                <h3 className="font-extrabold text-[#243453] text-base lg:text-lg 2xl:text-xl uppercase tracking-tight">
                  {job.title}
                </h3>
                {/* Bumped to 2xl:text-base */}
                <p className="text-xs lg:text-sm 2xl:text-base text-slate-500 flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin size={16} className="text-[#F9D759]" /> 
                  {job.location}, East Sussex
                </p>
              </div>
            </div>
          ))}
          
          <div className="min-w-[10vw] md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile-only logic remains similar but with scaled button sizing for accessibility */}
      <div className="flex justify-center gap-3 mt-6 md:hidden">
          {projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {
                  const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
                  scrollRef.current.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-8 bg-[#F9D759]" : "w-2 bg-slate-300"
                }`} 
              />
          ))}
      </div>

      <div className="mt-6 md:hidden text-center">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-[#243453] font-bold border-b-2 border-[#F9D759] pb-1">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};

export default GalleryHome;