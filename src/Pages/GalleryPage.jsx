import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Camera, 
  ArrowRight, 
  X, 
  CheckCircle2,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import ServicesCTA from "./ServicePages/ServicesCTA";

const GalleryPage = ({ setCurrentPage }) => {
  const [lightboxProject, setLightboxProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setCurrentPage("gallery");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const projects = [
    {
      id: 1,
      src: "/images/tile-slate-lead.png",
      images: ["/images/tile-slate-lead.png"],
      title: "Plain Clay Tiling & Skylights",
      location: "Brighton",
      desc: "Detailed view of plain clay tile tracking on a steep pitch, featuring precision custom lead structural flashing along the brickwork junction and flawless triple skylight integration.",
      specs: ["Plain Clay Tiles", "Lead Abutment Flashing", "Skylight Integration"]
    },
    {
      id: 2,
      src: "/images/grey-tiled-roof-1.jpg",
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
      title: "Modern Interlocking Tiling",
      location: "Hove",
      desc: "Complete overhaul using high-performance interlocking grey concrete tiles, meticulously aligned for maximum coastal weather defense with ridge lines securely bedded in traditional black pug mortar.",
      specs: ["Grey Concrete Tiles", "Black Pug Mortar Bedding", "Coastal Weather Seals"]
    },
    {
      id: 3,
      src: "/images/bungalow.png",
      images: ["/images/bungalow.png"],
      title: "Clay Pantile Overhaul",
      location: "Sussex",
      desc: "A vibrant complete roof replacement utilizing traditional profile clay pantiles, updating the structural alignment and lower felt details for robust, long-term drainage.",
      specs: ["Clay Pantiles", "Eaves Protection Systems", "Timber Realignment"]
    },
    {
      id: 4,
      src: "/images/brighton-job.jpg",
      images: ["/images/brighton-job.jpg"],
      title: "Vertical Tile Hanging & Gables",
      location: "Brighton",
      desc: "Flawless vertical tile hanging installation configured across multi-tiered residential gable walls to deliver uniform clean lines and premium external structural protection.",
      specs: ["Vertical Tile Hanging", "Gable Detailing", "UPVC Roofline Accents"]
    }
  ];

  const scrollProjects = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

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
    <div className="bg-white w-full overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[url('/images/brighton-job.jpg')] bg-center bg-cover text-white">
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-10 relative z-10 text-center">
          <div className="py-12 flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs 3xl:text-sm mb-6 shadow-lg">
              <Camera size={16} />
              Our Workmanship Portfolio
            </div>

            <h1 className="text-3xl md:text-4xl 3xl:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
              Our Completed <br />
              <span className="text-[#F9D759]">Recent Projects</span>
            </h1>

            <p className="text-lg md:text-xl 3xl:text-2xl text-slate-100 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              Real photos from real jobs across Brighton & Hove. We take pride in clean lines, honest techniques, and doing the job properly.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact-us"
                  className="px-10 py-4 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#F9D759] hover:bg-[#F7CB28] text-[#243453] font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 sm:hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:07768981913"
                  className="px-10 py-4 3xl:px-10 3xl:py-5 3xl:text-xl bg-[#243453] hover:bg-slate-800 text-white border border-slate-600 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 sm:hover:scale-105"
                >
                  <Phone size={20} className="text-[#F9D759]" />
                  Call Now<span className="max-sm:hidden">: 07768 981913</span>
                </a>
              </div>

              <p className="mt-6 text-xs sm:text-sm 3xl:text-base text-slate-300 italic">
                Free inspections · Transparent advice · Honest pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT CAROUSEL SECTION (3-Wide on Laptops & Above, Entire Tile Clickable) */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 relative">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#d1ad2b]">Showcase</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-[#243453]">Explore All Works</h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollProjects("left")}
                aria-label="Previous Projects"
                className="p-3 rounded-full border border-slate-200 text-[#243453] hover:bg-[#243453] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollProjects("right")}
                aria-label="Next Projects"
                className="p-3 rounded-full border border-slate-200 text-[#243453] hover:bg-[#243453] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Track */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => openLightbox(project)}
                className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Wrap Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.src}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />

                  {/* Location Tag */}
                  <div className="absolute top-4 left-4 bg-[#243453] text-white font-black uppercase text-[9px] tracking-widest px-2.5 py-1 rounded-md shadow-md z-10 border border-white/10">
                    {project.location}
                  </div>

                  {/* Multi-Photo Indicator */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-md z-10 flex items-center gap-1.5 border border-white/10">
                      <Camera size={12} className="text-[#F9D759]" />
                      {project.images.length} Photos
                    </div>
                  )}
                </div>

                {/* Content Descriptions */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-black text-lg text-[#243453] uppercase tracking-tight mb-2 leading-tight group-hover:text-[#d1ad2b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mt-auto">
                    {project.specs.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[8px] font-black uppercase tracking-wider px-2 py-1 bg-slate-50 border border-slate-200 text-slate-500 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRANSPARENCY PROMISE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="bg-[#243453] rounded-[2.5rem] p-8 md:p-16 text-white text-left relative overflow-hidden shadow-2xl border-b-8 border-[#F9D759]">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#F9D759] text-[#243453] px-3 py-1 rounded-md font-black uppercase tracking-widest text-[10px]">
                Our Standard
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tight">
                Honest Photography. <br />
                <span className="text-[#F9D759]">Real Brighton Workmanship.</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                We believe in transparency. We don't download glossy manufacturer catalogs or use manipulated stock images. Every photo in our portfolio showcases genuine roofing systems completed by our family team on real homes across Sussex.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "100% In-house family installations",
                  "Photo progress updates provided to clients",
                  "Built strictly to current roofing standards",
                  "Honest, zero-pressure structural diagnostics"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-slate-200">
                    <CheckCircle2 size={18} className="text-[#F9D759] shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {lightboxProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-sm select-none pt-[104px] sm:pt-[126px] md:pt-[140px]"
          onClick={() => setLightboxProject(null)}
        >
          <div 
            className="max-w-3xl w-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto relative my-auto max-h-[92vh] sm:max-h-[78vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Close Button */}
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

            {/* Thumbnail Navigation Row */}
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

            {/* Metadata Text Details */}
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

      {/* 5. SERVICES CTA MODULE */}
      <ServicesCTA />

      {/* BRAND FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-16 bg-[#F9D759] mb-6"></div>
          <p className="font-black text-[#243453] uppercase tracking-widest text-xs">
            Action Roofing Services | Portfolio Showcase
          </p>
        </div>
      </footer>

    </div>
  );
};

export default GalleryPage;