import React, { useState, useRef } from "react";
import { 
  MapPin, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from "lucide-react";
import { Link } from "react-router-dom";

const GalleryHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const scrollRef = useRef(null);

  // Complete project catalog matching the Gallery page
  const projects = [
    {
      id: 1,
      title: "Plain Clay Tiling & Skylights",
      location: "Brighton",
      image: "/images/tile-slate-lead.png",
      images: ["/images/tile-slate-lead.png"],
      desc: "Detailed view of plain clay tile tracking on a steep pitch, featuring precision custom lead structural flashing along the brickwork junction and flawless triple skylight integration."
    },
    {
      id: 2,
      title: "Modern Interlocking Tiling",
      location: "Hove",
      image: "/images/grey-tiled-roof-1.jpg",
      images: [
        "/images/grey-tiled-roof-1.jpg",
        "/images/grey-tiled-roof-2.jpg",
        "/images/grey-tiled-roof-3.jpg",
        "/images/grey-tiled-roof-4.jpg",
        "/images/grey-tiled-roof-5.jpg",
        "/images/grey-tiled-roof-6.jpg",
        "/images/grey-tiled-roof-7.jpg",
        "/images/grey-tiled-roof-8.jpg"
      ],
      desc: "Complete overhaul using high-performance interlocking grey concrete tiles, meticulously aligned for maximum coastal weather defense with ridge lines securely bedded in traditional black pug mortar."
    },
    {
      id: 3,
      title: "Clay Pantile Overhaul",
      location: "Patcham",
      image: "/images/bungalow.png",
      images: ["/images/bungalow.png"],
      desc: "A vibrant complete roof replacement utilizing traditional profile clay pantiles, updating the structural alignment and lower felt details for robust, long-term drainage."
    },
    {
      id: 4,
      title: "Vertical Tile Hanging & Gables",
      location: "Brighton",
      image: "/images/brighton-job.jpg",
      images: ["/images/brighton-job.jpg"],
      desc: "Flawless vertical tile hanging installation configured across multi-tiered residential gable walls to deliver uniform clean lines and premium external structural protection."
    }
  ];

  // Sync active scroll index dynamically
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const card = scrollRef.current.querySelector(".project-card");
      if (card) {
        const cardWidth = card.offsetWidth + 24; // Card width + gap
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };

  // Carousel navigation handlers
  const scrollPrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".project-card");
      const scrollAmount = card ? card.offsetWidth + 24 : 350;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".project-card");
      const scrollAmount = card ? card.offsetWidth + 24 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Lightbox slideshow navigation handlers
  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!lightboxProject) return;
    setCurrentImgIndex((prev) => 
      prev === 0 ? lightboxProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!lightboxProject) return;
    setCurrentImgIndex((prev) => 
      prev === lightboxProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const openLightbox = (project) => {
    setLightboxProject(project);
    setCurrentImgIndex(0);
  };

  return (
    <section className="bg-white py-18 3xl:py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 3xl:mb-16">
          <div className="max-w-3xl 3xl:max-w-4xl text-left">
            <h2 className="text-3xl md:text-3xl 3xl:text-4xl font-black text-[#243453] uppercase border-l-8 border-[#F9D759] pl-6 mb-4">
              Recent Projects
            </h2>
            <p className="text-slate-600 3xl:text-xl">
              Real roofing projects we’ve completed across Brighton & Hove.
            </p>
          </div>

          {/* Desktop Carousel Controls & Gallery Link */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous Project"
                className="p-3 bg-slate-100 hover:bg-[#243453] text-[#243453] hover:text-[#F9D759] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next Project"
                className="p-3 bg-slate-100 hover:bg-[#243453] text-[#243453] hover:text-[#F9D759] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <Link
              to="/gallery"
              className="flex items-center gap-2 text-[#243453] 3xl:text-xl font-bold hover:text-[#d1ad2b] transition-colors group"
            >
              View Full Gallery
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 3-Wide Carousel Container */}
      <div className="relative max-w-screen-2xl mx-auto">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-6 3xl:gap-8 overflow-x-auto w-full max-w-screen-2xl 
            pb-4 snap-x snap-mandatory scrollbar-hide
          "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((job) => (
            <div
              key={job.id}
              onClick={() => openLightbox(job)}
              className="
                project-card min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-16px)] 
                snap-start bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 
                transition-all duration-300 group cursor-pointer hover:shadow-xl shrink-0 flex flex-col
              "
            >
              <div className="relative overflow-hidden bg-slate-900 h-64 sm:h-72 lg:h-64 3xl:h-96">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Location Tag */}
                <div className="absolute top-4 left-4 bg-[#243453] text-white font-black uppercase text-[9px] tracking-widest px-2.5 py-1 rounded-md shadow-md z-10 border border-white/10">
                  {job.location}
                </div>

                {/* Hover Visual Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-[#243453] shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6 3xl:p-10 text-left flex flex-col flex-grow">
                <h3 className="font-extrabold text-[#243453] text-base lg:text-lg 3xl:text-xl uppercase tracking-tight mb-2">
                  {job.title}
                </h3>
                <p className="text-xs lg:text-sm 3xl:text-base text-slate-500 flex items-center gap-1.5 mt-auto font-medium">
                  <MapPin size={16} className="text-[#F9D759]" />
                  {job.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only pagination dots */}
      <div className="flex justify-center gap-2.5 mt-6 md:hidden">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const card = scrollRef.current.querySelector(".project-card");
              const cardWidth = (card ? card.offsetWidth : 0) + 24;
              scrollRef.current.scrollTo({
                left: cardWidth * i,
                behavior: "smooth",
              });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-8 bg-[#F9D759]" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 md:hidden text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-[#243453] font-bold border-b-2 border-[#F9D759] pb-1"
        >
          View Full Gallery
        </Link>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-sm select-none pt-[104px] sm:pt-[126px] md:pt-[140px]"
          onClick={() => setLightboxProject(null)}
        >
          <div 
            className="max-w-3xl w-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto relative my-auto max-h-[92vh] sm:max-h-[78vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right In-Card Exit Button */}
            <button 
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 p-2.5 bg-[#243453] text-white hover:bg-slate-800 rounded-full transition-colors z-50 cursor-pointer shadow-xl border border-white/10"
            >
              <X size={18} />
            </button>

            {/* Expanded Image Panel */}
            <div className="relative h-[48vh] sm:h-[38vh] md:h-[46vh] bg-slate-900 flex items-center justify-center overflow-hidden group shrink-0">
              <img 
                src={lightboxProject.images[currentImgIndex]} 
                alt={`${lightboxProject.title} view ${currentImgIndex + 1}`} 
                className="w-full h-full object-contain"
              />

              {/* Directional Slider Buttons */}
              {lightboxProject.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-xl backdrop-blur-sm transition-all border border-white/15 cursor-pointer transform hover:scale-105 active:scale-95 z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-xl backdrop-blur-sm transition-all border border-white/15 cursor-pointer transform hover:scale-105 active:scale-95 z-10"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white font-black text-[11px] px-2.5 py-1.5 rounded-lg border border-white/10 z-10">
                    {currentImgIndex + 1} / {lightboxProject.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Row - Anti-Aliased & Downsampled */}
            {lightboxProject.images.length > 1 && (
              <div className="bg-slate-900 px-4 pb-3.5 pt-1.5 flex gap-2 overflow-x-auto justify-center max-w-full border-t border-white/10 shrink-0">
                {lightboxProject.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImgIndex(index)}
                    className={`h-10 w-15 rounded-md overflow-hidden shrink-0 transition-all border-2 ${
                      currentImgIndex === index 
                        ? "border-[#F9D759] scale-105 shadow-sm" 
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="Thumbnail lookup" 
                      className="w-full h-full object-cover [image-rendering:auto] transform-gpu backface-hidden" 
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Text Details Area */}
            <div className="p-5 md:p-6 bg-white text-left overflow-y-auto flex-grow pr-16">
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#d1ad2b] bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                  {lightboxProject.location}
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#243453] mb-1.5">
                {lightboxProject.title}
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                {lightboxProject.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryHome;