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
    <section className="bg-slate-50 py-24 px-0 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-[#243453] uppercase border-l-8 border-[#F9D759] pl-6 mb-4">
              Our Recent Roofing Work
            </h2>
            <p className="text-slate-600">
              Real roofing projects we’ve completed across Brighton & Hove.
            </p>
          </div>
          
          <Link 
            to="/gallery" 
            className="hidden md:flex items-center gap-2 text-[#243453] font-bold hover:text-[#d1ad2b] transition-colors group"
          >
            View Full Gallery 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Grid vs Carousel Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex md:grid md:grid-cols-2 lg:grid-cols-3 
            gap-6 overflow-x-auto md:overflow-visible 
            pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide 
            px-[10vw] md:px-10
          "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((job, i) => (
            <div 
              key={i} 
              className={`
                min-w-[80vw] md:min-w-full snap-center 
                bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 
                transition-all duration-300
                ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""} 
              `}
            >
              <div className={`
                overflow-hidden
                ${i === 2 ? "md:h-80 lg:h-72 h-60" : "h-60 lg:h-72"}
              `}>
                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-extrabold text-[#243453] text-base lg:text-lg uppercase tracking-tight">
                  {job.title}
                </h3>
                <p className="text-xs lg:text-sm text-slate-500 flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin size={14} className="text-[#F9D759]" /> 
                  {job.location}, East Sussex
                </p>
              </div>
            </div>
          ))}
          
          {/* Spacer only for mobile */}
          <div className="min-w-[10vw] md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Dots: STRICTLY Mobile Only */}
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

      <div className="mt-10 md:hidden text-center">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-[#243453] font-bold border-b-2 border-[#F9D759] pb-1">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};

export default GalleryHome;