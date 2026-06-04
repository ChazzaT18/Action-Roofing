import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  X,
  CheckCircle,
  Loader2,
  ShieldCheck,
  FileText,
  Camera
} from "lucide-react";

const ContactUsPage = ({ setCurrentPage }) => {
  // Sync page tracking state and force layout to scroll to top on mount
  useEffect(() => {
    setCurrentPage("contact");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Check your internet connection and try again.");
      });
  };

  return (
    <div className="w-full bg-white mt-[-30px] sm:mt-[-40px] lg:mt-[-30px] xl:mt-[-20px] overflow-x-hidden text-[#243453]">
      
      {/* 1. HERO INTRODUCTION HEADER SECTION */}
      <section className="bg-[#243453] text-white pt-[140px] pb-16 sm:pt-24 lg:pt-20 px-4 md:px-10 border-b-4 border-[#F9D759]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block bg-[#F9D759] text-[#243453] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              Brighton & Hove Estimates
            </span>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-black uppercase tracking-tight leading-tight">
              Get a Free <span className="text-[#F9D759]">Roof Inspection</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
              Whether you need an urgent leak tracked down, a quick slate replaced, or advice on a full roof installation framework, reaching out is entirely straightforward.
            </p>
          </div>
          
          {/* Subtle Trust Indicators filling out the right side of the hero header */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 w-full">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <ShieldCheck className="text-[#F9D759] shrink-0" size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-slate-200">10-Yr Workmanship Guarantee</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <Camera className="text-[#F9D759] shrink-0" size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-slate-200">Photo Evidence Provided</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <FileText className="text-[#F9D759] shrink-0" size={20} />
              <span className="text-xs font-black uppercase tracking-wider text-slate-200">Clear Itemised Fixed Quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT AND FORM LAYOUT SECTION */}
      <section
        className="py-20 px-4 md:px-10 relative text-[#243453]"
        id="contact-form"
      >
        {/* SUCCESS OVERLAY */}
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#243453]/90 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 2xl:p-12 max-w-sm 2xl:max-w-md w-full text-center shadow-2xl relative">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 cursor-pointer hover:text-[#243453]"
              >
                <X size={24} />
              </button>
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 rounded-full p-4 flex items-center justify-center shadow-inner">
                  <CheckCircle
                    size={60}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-2xl 2xl:text-3xl font-black text-[#243453] mb-2 uppercase">
                Message Sent!
              </h3>
              <p className="text-slate-600 2xl:text-xl mb-6">
                We've received your request and will call you back shortly.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="w-full bg-[#F9D759] text-[#243453] cursor-pointer 2xl:text-xl font-black py-3 2xl:py-5 rounded-xl hover:bg-[#F7CB28] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* MAIN CONTAINER */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 2xl:gap-16 items-center">
          
          {/* CONTACT INFO COLUMN */}
          <div className="lg:col-span-6 space-y-8 lg:px-6 text-left">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-4 leading-tight">
                Trusted Brighton & Hove Roofers
              </h2>
              <p className="text-slate-600 mb-4 text-base md:text-lg 2xl:text-xl font-medium">
                If you’re concerned about your roof or need professional advice,
                we’re here to help.
              </p>
              <p className="text-[#243453] font-bold underline decoration-[#F9D759] decoration-4 text-base md:text-lg 2xl:text-xl">
                Reliable roofing services for repairs, maintenance and emergency
                work.
              </p>
            </div>

            {/* Direct Communications Info Cards (Footer-Inspired Structure) */}
            <div className="space-y-4 max-w-md">
              <a 
                href="tel:07768981913" 
                className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-700 hover:text-[#243453] hover:bg-slate-100/50 transition-colors group"
              >
                <div className="bg-[#243453] p-2.5 2xl:p-3 rounded-xl text-[#F9D759] group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all shrink-0 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] 2xl:text-xs uppercase font-black text-slate-400 tracking-wide mb-0.5">Call for a quote</p>
                  <p className="text-base font-black text-[#243453]">07768 981913</p>
                </div>
              </a>

              <a 
                href="mailto:actionroofingservices@outlook.com" 
                className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-700 hover:text-[#243453] hover:bg-slate-100/50 transition-colors group"
              >
                <div className="bg-[#243453] p-2.5 2xl:p-3 rounded-xl text-[#F9D759] group-hover:bg-[#F9D759] group-hover:text-[#243453] transition-all shrink-0 shadow-sm">
                  <Mail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] 2xl:text-xs uppercase font-black text-slate-400 tracking-wide mb-0.5">Email us</p>
                  <p className="text-base font-black text-[#243453] truncate">actionroofingservices@outlook.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-700">
                <div className="bg-[#243453] p-2.5 2xl:p-3 rounded-xl text-[#F9D759] shrink-0 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] 2xl:text-xs uppercase font-black text-slate-400 tracking-wide mb-0.5">Hours</p>
                  <p className="text-base font-black text-[#243453]">Mon-Sat: 8am-6pm</p>
                </div>
              </div>
            </div>
            
            <p className="text-[10px] 2xl:text-sm max-sm:w-full max-sm:text-center text-slate-400 italic pt-2">
              We aim to respond as quickly as possible.
            </p>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-6 bg-[#243453] p-8 md:px-12 2xl:p-16 rounded-3xl shadow-2xl text-white">
            <h3 className="text-xl md:text-2xl 2xl:text-3xl font-black uppercase mb-1 text-left">
              Free Inspection
            </h3>
            <p className="text-slate-300 text-xs 2xl:text-base mb-6 text-left">
              No-obligation roof check.
            </p>

            <form name="contact" onSubmit={handleSubmit} className="space-y-3 2xl:space-y-5">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xl:gap-5 text-left">
                <input
                  name="full-name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none text-white font-semibold placeholder-slate-400"
                  required
                />
                <input
                  name="phone-number"
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none text-white font-semibold placeholder-slate-400"
                  required
                />
              </div>
              
              <div className="text-left">
                <input
                  name="postcode"
                  type="text"
                  placeholder="Postcode"
                  className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none text-white font-semibold placeholder-slate-400"
                  required
                />
              </div>

              <div className="text-left">
                <textarea
                  name="message"
                  placeholder="Issue..."
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none resize-none text-white font-semibold placeholder-slate-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F9D759] text-[#243453] font-black py-4 2xl:py-6 2xl:text-xl rounded-xl hover:bg-[#F7CB28] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24} /> SENDING...
                  </>
                ) : (
                  "GET MY FREE QUOTE"
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;