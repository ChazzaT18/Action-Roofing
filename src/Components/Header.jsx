import { useState, useEffect } from "react";
import { Hammer, Phone, X, Menu, Send, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ currentPage, setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For Mobile dropdown
  const [isHoveringServices, setIsHoveringServices] = useState(false); // For Desktop hover

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsHoveringServices(false);
  }, [location]);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 640;

      if (!isMobile && currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "All Services", path: "/services" },
        { name: "Emergency Roof Repairs", path: "/services/emergency-repairs" },
        { name: "Slate & Tile Roofing", path: "/services/slate-tile-roofing" },
        { name: "Leadwork & Flashing", path: "/services/leadwork" },
        { name: "Chimney Repairs", path: "/services/chimney-repairs" },
        {
          name: "Fascias, Soffits & Gutters",
          path: "/services/fascias-soffits-guttering",
        },
        {
          name: "Moss Removal & Gutter Cleaning",
          path: "/services/moss-removal",
        },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <div className="fixed w-full z-20 top-0 start-0">
        {/* 1. Main Navigation Bar (Navy) */}
        <nav
          className={`bg-[#243453] text-[#F9D759] w-full relative z-40 transition-all duration-500 ease-in-out ${
            isScrolled ? "py-5 shadow-lg" : "py-5.5 sm:py-7"
          }`}
        >
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-2">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/images/action roofing logo roof.png"
                className={`hidden lg:block transition-all duration-500 ease-in-out object-contain ${
                  isScrolled
                    ? "xl:h-12 lg:h-10 2xl:h-14"
                    : "2xl:h-16 xl:h-14 lg:h-12"
                }`}
                alt="Action Roofing Logo"
              />
              <img
                src="/images/action roofing text.png"
                className="hidden lg:block transition-all mt-2 duration-500 ease-in-out object-contain lg:h-6 xl:h-7 2xl:h-9"
                alt="Action Roofing Logo Text"
              />
              <img
                src="/images/Action Roofing logo mobile.jpg"
                className="block sm:hidden h-12"
                alt="Action Roofing Logo"
              />
              <img
                src="/images/Action Roofing logo.jpg"
                className="block max-sm:hidden lg:hidden h-12"
                alt="Action Roofing Logo"
              />
            </Link>

            <div className="flex md:order-2 space-x-3">
              <a
                href="tel:07768981913"
                className="group sm:hidden flex items-center gap-2 text-[#243453] bg-[#F9D759] hover:bg-[#F7CB28] cursor-pointer font-bold rounded-md text-xs lg:text-sm px-5 py-2.5 transition-all active:scale-95 shadow-md"
              >
                <Phone size={14} fill="currentColor" />
                <span>Call Now</span>
              </a>
              <Link
                to="/contact-us"
                className="group flex max-sm:hidden items-center gap-2 text-[#243453] bg-[#F9D759] hover:bg-[#F7CB28] cursor-pointer font-bold 2xl:text-lg rounded-md text-xs lg:text-sm px-5 py-2.5 transition-all hover:scale-105 shadow-md"
              >
                <Send size={14} fill="currentColor" />
                <span>Enquire Now</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-slate-800 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-3 md:flex-row md:mt-0 md:border-0">
                {navLinks.map((item) => (
                  <li
                    key={item.name}
                    className="relative flex justify-center 2xl:text-xl items-center group/nav"
                    onMouseEnter={() =>
                      item.dropdown && setIsHoveringServices(true)
                    }
                    onMouseLeave={() =>
                      item.dropdown && setIsHoveringServices(false)
                    }
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 transition-colors duration-200 ${
                        currentPage === item.name.toLowerCase()
                          ? "text-yellow"
                          : "text-white nav-link-hover"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ml-1 mt-0.5 duration-300 ${isHoveringServices ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* DESKTOP DROPDOWN */}
                    {item.dropdown && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-72 bg-[#F9D759] shadow-2xl transition-all duration-300 transform ${
                          isHoveringServices
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}
                      >
                        <ul className="border-t-4 border-[#243453]">
                          {item.dropdown.map((sub) => (
                            <li
                              key={sub.name}
                              className="border-b border-[#243453]/10 last:border-0"
                            >
                              <Link
                                to={sub.path}
                                className="block px-4 py-3 hover:bg-[#243453] hover:text-white text-[#243453] transition-colors font-bold uppercase tracking-wider text-xs 2xl:text-sm"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* 2. MOBILE MENU */}
        <div
          className={`absolute w-full bg-[url('/images/tiles_background.jpg')] border-y-2 border-[#F9D759] transition-all duration-500 ease-in-out z-30 md:hidden ${
            isMenuOpen
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none shadow-xl"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-2 font-bold text-center">
            {navLinks.map((item) => (
              <li key={item.name}>
                {!item.dropdown ? (
                  <Link
                    to={item.path}
                    className={`block text-xl ${
                      currentPage === item.name.toLowerCase()
                        ? "text-[#F9D759]"
                        : "text-white"
                    } py-2`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="w-full">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`w-full ml-3.5 flex items-center justify-center gap-2 py-2 text-xl ${
                        currentPage === item.name.toLowerCase()
                          ? "text-[#F9D759]"
                          : "text-white"
                      }`}
                    >
                      {/* Standard span without width force or margins */}
                      <span>{item.name}</span>

                      {/* Chevron is now naturally spaced by 'gap-2' */}
                      <ChevronDown
                        size={24}
                        className={`transition-transform text-white duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* MOBILE DROPDOWN CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-black/40 rounded-lg ${
                        isServicesOpen
                          ? "max-h-[500px] mb-4 opacity-100 py-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block py-4 text-[#F9D759] uppercase tracking-widest text-xs font-black border-b border-white/5 last:border-0 active:bg-[#F9D759] active:text-[#243453]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Sub-Header Utility Bar (Yellow) */}
        <div
          className={`w-full flex justify-center items-center text-[12px] sm:text-xs py-1.5 font-bold bg-[#F9D759] text-[#243453] shadow-md transition-transform duration-500 ease-in-out relative z-10 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } sm:translate-y-0`}
        >
          <div className="w-full max-w-screen-2xl flex justify-around 2xl:text-lg items-center px-6">
            <a
              href="tel:07768981913"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone
                className="max-sm:hidden w-3.5 h-3.5 2xl:w-5 2xl:h-5"
                size={20}
              />
              <span>07768 981913</span>
            </a>
            <div className="opacity-40">|</div>
            <div className="flex items-center gap-2">
              <img
                src="/images/Pavillion.png"
                alt="Brighton"
                className="h-4 w-auto mb-1 max-sm:hidden 2xl:h-6"
              />
              <span>Brighton & Hove</span>
            </div>
            <div className="opacity-40">|</div>
            <Link
              to="/services/emergency-repairs"
              className="flex hover:underline items-center gap-2"
            >
              <Hammer
                className="max-sm:hidden w-3.5 h-3.5 2xl:w-5 2xl:h-5"
                size={20}
              />
              <span className="xs:hidden">Emergency Repairs</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          isScrolled && window.innerWidth >= 640
            ? "h-[90px] sm:h-[100px] md:h-[120px]"
            : "h-[104px] sm:h-[126px] md:h-[140px]"
        }`}
      ></div>
    </>
  );
};

export default Header;
