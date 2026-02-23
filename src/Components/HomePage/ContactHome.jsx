import React, { useState } from "react";
import { Phone, MessageSquareMore, X, CheckCircle, Loader2 } from "lucide-react";

const ContactHome = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading
    
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitting(false); // Stop loading
        setShowSuccess(true);
        e.target.reset(); // Clear the form
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Check your internet connection and try again.");
      });
  };

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-10 relative" id="contact-form">
      
      {/* SUCCESS OVERLAY */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#243453]/90 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative">
            <button 
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#243453]"
            >
              <X size={24} />
            </button>
            <div className="flex justify-center mb-4 text-green-500">
              <CheckCircle size={60} fill="currentColor" className="text-white fill-green-500" />
            </div>
            <h3 className="text-2xl font-black text-[#243453] mb-2 uppercase">Message Sent!</h3>
            <p className="text-slate-600 mb-6">We've received your request and will call you back shortly.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#F9D759] text-[#243453] font-black py-3 rounded-xl hover:bg-[#F7CB28] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* CONTACT INFO COLUMN */}
        <div className="lg:col-span-6 space-y-6 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#243453] uppercase mb-4">Trusted Brighton Roofers</h2>
          <p className="text-slate-600 text-base md:text-lg">Need professional roofing advice? We’re here to help.</p>
          <div className="flex flex-col gap-3">
             <a href="tel:07768981913" className="flex items-center justify-center gap-3 w-64 bg-[#F9D759] text-[#243453] font-black py-3.5 rounded-lg shadow-lg hover:-translate-y-1 transition-all">
                <Phone size={18} /> CALL NOW
             </a>
             <a href="mailto:info@actionroofingbrighton.co.uk" className="flex items-center justify-center gap-3 w-64 bg-slate-100 text-[#243453] font-black py-3.5 rounded-lg shadow-md hover:-translate-y-1 transition-all">
                <MessageSquareMore size={18} /> MESSAGE US
             </a>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className="lg:col-span-6 bg-[#243453] p-8 md:px-12 rounded-3xl shadow-2xl text-white">
          <h3 className="text-xl md:text-2xl font-black uppercase mb-1">Free Inspection</h3>
          <p className="text-slate-300 text-xs mb-6">No-obligation roof check.</p>
          
          <form name="contact" onSubmit={handleSubmit} className="space-y-3">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="full-name" type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:border-[#F9D759] outline-none" required />
              <input name="phone-number" type="tel" placeholder="Phone" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:border-[#F9D759] outline-none" required />
            </div>
            <input name="postcode" type="text" placeholder="Postcode" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:border-[#F9D759] outline-none" required />
            <textarea name="message" placeholder="Issue..." rows="4" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:border-[#F9D759] outline-none resize-none" required></textarea>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#F9D759] text-[#243453] font-black py-4 rounded-xl hover:bg-[#F7CB28] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> SENDING...
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