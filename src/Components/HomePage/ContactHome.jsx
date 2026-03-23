import React, { useState } from "react";
import {
  Phone,
  MessageSquareMore,
  X,
  CheckCircle,
  Loader2,
} from "lucide-react";

const ContactHome = () => {
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
    <section
      className="bg-white py-12 md:py-16 2xl:py-24 px-4 md:px-10 relative"
      id="contact-form"
    >
      {/* SUCCESS OVERLAY - Scaled up for 2xl */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#243453]/90 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 2xl:p-12 max-w-sm 2xl:max-w-md w-full text-center shadow-2xl relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#243453]"
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
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#F9D759] text-[#243453] 2xl:text-xl font-black py-3 2xl:py-5 rounded-xl hover:bg-[#F7CB28] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 2xl:gap-16 items-center">
        {/* CONTACT INFO COLUMN */}
        <div className="lg:col-span-6 space-y-6 lg:px-6">
          <div>
            {/* Bumped to 2xl:text-4xl */}
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-[#243453] uppercase mb-4 leading-tight">
              Trusted Brighton & Hove Roofers
            </h2>
            {/* Bumped to 2xl:text-xl */}
            <p className="text-slate-600 mb-4 text-base md:text-lg 2xl:text-xl">
              If you’re concerned about your roof or need professional advice,
              we’re here to help.
            </p>
            {/* Bumped to 2xl:text-xl */}
            <p className="text-[#243453] font-bold underline decoration-[#F9D759] decoration-4 text-base md:text-lg 2xl:text-xl">
              Reliable roofing services for repairs, maintenance and emergency
              work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            {/* Bumped button text to 2xl:text-xl and sizing to 2xl:w-80 */}
            <a
              href="tel:07768981913"
              className="flex items-center justify-center gap-3 w-full sm:w-64 2xl:w-80 2xl:text-xl 2xl:py-5 bg-[#F9D759] text-[#243453] font-black py-3.5 rounded-lg shadow-lg hover:bg-[#243453] hover:text-white transition-all transform hover:-translate-y-1"
            >
              <Phone size={20} /> CALL NOW
            </a>

            <a
              href="mailto:info@actionroofingbrighton.co.uk"
              className="flex items-center justify-center gap-3 w-full sm:w-64 2xl:w-80 2xl:text-xl 2xl:py-5 bg-slate-100 text-[#243453] font-black py-3.5 rounded-lg shadow-md hover:bg-slate-200 transition-all transform hover:-translate-y-1"
            >
              <MessageSquareMore size={20} /> MESSAGE US
            </a>
          </div>
          {/* Bumped helper text to 2xl:text-sm */}
          <p className="text-[10px] 2xl:text-sm max-sm:w-full max-sm:text-center text-slate-400 italic">
            We aim to respond as quickly as possible.
          </p>
        </div>

        {/* FORM COLUMN */}
        <div className="lg:col-span-6 bg-[#243453] p-8 md:px-12 2xl:p-16 rounded-3xl shadow-2xl text-white">
          {/* Bumped to 2xl:text-3xl */}
          <h3 className="text-xl md:text-2xl 2xl:text-3xl font-black uppercase mb-1">
            Free Inspection
          </h3>
          {/* Bumped to 2xl:text-base */}
          <p className="text-slate-300 text-xs 2xl:text-base mb-6">
            No-obligation roof check.
          </p>

          <form name="contact" onSubmit={handleSubmit} className="space-y-3 2xl:space-y-5">
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xl:gap-5">
              <input
                name="full-name"
                type="text"
                placeholder="Name"
                className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none"
                required
              />
              <input
                name="phone-number"
                type="tel"
                placeholder="Phone"
                className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none"
                required
              />
            </div>
            <input
              name="postcode"
              type="text"
              placeholder="Postcode"
              className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Issue..."
              rows="4"
              className="w-full bg-white/10 border border-white/20 p-3 2xl:p-5 2xl:text-xl rounded-xl focus:border-[#F9D759] outline-none resize-none"
              required
            ></textarea>

            {/* Bumped submit button to 2xl:text-xl and taller padding */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F9D759] text-[#243453] font-black py-4 2xl:py-6 2xl:text-xl rounded-xl hover:bg-[#F7CB28] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
  );
};

export default ContactHome;