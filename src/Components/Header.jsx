import { Hammer, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed w-full z-20 top-0 start-0">
      {/* 1. Main Navigation Bar (Navy) */}
      <nav className="bg-[#243453] text-[#F9D759] w-full border-b border-slate-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            {/* Desktop/Tablet Logo: Hidden on mobile, shown from 'sm' up */}
            <img
              src="/images/Action Roofing logo.jpg"
              className="hidden sm:block xl:h-20 lg:h-16 md:h-14 sm:h-12"
              alt="Action Roofing Logo"
            />

            {/* Mobile Logo: Shown on mobile, hidden from 'sm' up */}
            <img
              src="/images/Action Roofing logo mobile.jpg"
              className="block sm:hidden h-12"
              alt="Action Roofing Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3">
            <button
              type="button"
              className="group flex items-center gap-2 text-[#243453] bg-[#F9D759] hover:bg-[#F7CB28] cursor-pointer font-bold rounded-md text-xs lg:text-sm px-5 py-2.5 transition-all active:scale-95"
            >
              <Phone size={14} fill="" />
              Call Now
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 nav-link-hover xl:text-lg lg:text-base md:text-sm text-[#F9D759] md:p-0 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block nav-link-hover py-2 px-3 xl:text-lg lg:text-base md:text-sm text-[#F9D759] md:p-0 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block nav-link-hover py-2 px-3 xl:text-lg lg:text-base md:text-sm text-[#F9D759] md:p-0 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="block nav-link-hover py-2 px-3 xl:text-lg lg:text-base md:text-sm text-[#F9D759] md:p-0 hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block nav-link-hover py-2 px-3 xl:text-lg lg:text-base md:text-sm text-[#F9D759] md:p-0 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2. Sub-Header Utility Bar (Yellow) */}
      <div className="w-full flex justify-center items-center text-[12px] sm:text-xs py-1.5 font-bold bg-[#F7CB28] text-[#243453] shadow-md">
        <div className="w-full max-w-screen-xl flex justify-between items-center px-6">
          {/* Emergency Repairs */}
          <div className="flex items-center gap-2">
            <Hammer className="max-sm:hidden" size={14} />
            <span className="hidden xs:inline">
              Emergency Roof Repairs Available
            </span>
            <span className="xs:hidden">Emergency Repairs</span>
          </div>

          <div className="opacity-80">|</div>

          {/* Brighton & Hove with your PNG */}
          <div className="flex items-center gap-2">
            <img
              src="/images/Pavillion.png"
              alt="Brighton Pavilion"
              className="h-4 mb-0.5 w-auto object-contain max-sm:hidden"
            />
            <span>Brighton & Hove</span>
          </div>

          <div className="opacity-80">|</div>

          {/* Call Number */}
          <a
            href="tel:07768981913"
            className="flex items-center gap-2 hover:underline transition-all"
          >
            <Phone className="max-sm:hidden" size={14} fill="none" />
            <span>07768 981913</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
