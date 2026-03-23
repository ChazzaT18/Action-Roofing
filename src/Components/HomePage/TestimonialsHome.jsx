import { useState, useRef } from "react";
import { Star, Quote, MapPin } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Hove",
      text: "Fast, reliable and professional from start to finish. They fixed a persistent leak that others couldn't find. Highly recommend for any roofing needs.",
      rating: 5,
    },
    {
      name: "Mark Thompson",
      location: "Brighton",
      text: "Had a full reroof done. The team was tidy, polite, and kept me informed throughout. The 10-year guarantee gave us real peace of mind.",
      rating: 5,
    },
    {
      name: "David Lawson",
      location: "Portslade",
      text: "Excellent leadwork on our chimney stack. You can tell these guys take pride in their craft. Transparent pricing and no hidden costs.",
      rating: 5,
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.8));
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-[#243453] py-18 2xl:py-24 md:px-10 overflow-hidden text-white">
      <div className="mx-auto px-4 max-w-screen-2xl md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 2xl:mb-20">
          <div className="max-w-2xl 2xl:max-w-4xl">
            {/* Bumped to 2xl:text-4xl */}
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl border-l-8 border-[#F9D759] pl-6 font-black uppercase tracking-tight">
              Customer <br /> Testimonials
            </h2>
            {/* Bumped to 2xl:text-xl */}
            <p className="text-slate-300 mt-4 text-lg 2xl:text-xl">
              Don't just take our word for it. Here is what homeowners across Brighton & Hove say about our work.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel / Grid Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid max-w-screen-2xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide px-[10vw] md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className={`
                min-w-[85vw] md:min-w-full snap-center 
                bg-white p-6 md:p-10 2xl:p-14 rounded-[2rem] shadow-2xl 
                relative transition-all duration-300
                ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""} 
              `}
            >
              {/* Scaled Quote Icon for 2xl */}
              <Quote className="absolute top-6 right-8 2xl:top-10 2xl:right-12 text-slate-100" size={60} strokeWidth={3} />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#F9D759] fill-[#F9D759]" />
                  ))}
                </div>

                {/* Bumped to 2xl:text-2xl */}
                <p className="text-[#243453] text-base 2xl:text-2xl font-medium leading-relaxed italic mb-8">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  {/* Scaled Initial Avatar */}
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-[#243453] rounded-full flex items-center justify-center text-[#F9D759] font-black text-xl 2xl:text-2xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    {/* Bumped to 2xl:text-lg */}
                    <h4 className="text-[#243453] font-black uppercase text-sm 2xl:text-lg tracking-widest">{review.name}</h4>
                    {/* Bumped to 2xl:text-base */}
                    <div className="flex items-center gap-1 text-slate-400 text-xs 2xl:text-base font-bold mt-1">
                      <MapPin size={14} className="text-[#F9D759]" /> {review.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="min-w-[10vw] md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile Dots */}
      <div className="flex justify-center gap-3 mt-4 md:hidden">
          {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {
                  const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
                  scrollRef.current.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-8 bg-[#F9D759]" : "w-2 bg-white/20"
                }`} 
              />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;