/**
 * EQUUS INN NAVIGATION
 * Deep Navy #1C2B4A | Inkwell #2B3F4E | Lunar Eclipse #3D5A6B
 * Champagne #D4AF6A | Creme Brulee #A27B5B | Au Lait #DCD7C9 | Ivory #FAF7F2
 * Cormorant Garamond (display) + Lato (body)
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equus_logo_white_02b7b265.webp";
const BOOKING_URL = "https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1";

type NavItem =
  | { href: string; label: string; dropdown?: undefined }
  | { href: string; label: string; dropdown: { href: string; label: string; description: string }[] };

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/rooms",
    label: "Accommodations",
    dropdown: [
      { href: "/rooms", label: "Rooms & Suites", description: "Browse our room types" },
      { href: "/amenities", label: "Amenities", description: "Hotel facilities & services" },
    ],
  },
  {
    href: "/gallery",
    label: "Experiences",
    dropdown: [
      { href: "/meetings", label: "Meetings & Events", description: "Host your event" },
      { href: "/groups", label: "Groups", description: "Group accommodations" },
      { href: "/gallery", label: "Gallery", description: "Photo gallery" },
      { href: "/things-to-do", label: "Things to Do", description: "Local attractions" },
    ],
  },
  {
    href: "/reviews",
    label: "Guest Resources",
    dropdown: [
      { href: "/reviews", label: "Reviews", description: "Guest testimonials" },
      { href: "/awards", label: "Awards", description: "Our accolades" },
      { href: "/rewards", label: "Rewards Program", description: "Loyalty rewards" },
      { href: "/faq", label: "FAQ", description: "Frequently asked questions" },
    ],
  },
  {
    href: "/location",
    label: "Explore",
    dropdown: [
      { href: "/location", label: "Location & Directions", description: "Find us in Ocala, FL" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  const isActiveParent = (item: NavItem) => {
    if (item.dropdown) {
      return item.dropdown.some((child) => location === child.href);
    }
    return location === item.href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-gradient-to-b from-[#111B30]/85 to-transparent"
            : "bg-[#1C2B4A] shadow-lg"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer flex-shrink-0">
                <img
                  src={LOGO_URL}
                  alt="Equus Inn Ocala"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink min-w-0">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isActive = isActiveParent(link);
                  const isOpen = openDropdown === link.label;
                  return (
                    <div key={link.label} className="relative">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        className={`flex items-center gap-1 whitespace-nowrap font-body font-700 text-[0.65rem] xl:text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 ${
                          isActive || isOpen ? "text-[#D4AF6A]" : "text-white/80 hover:text-[#D4AF6A]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Panel */}
                      {isOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#2B3F4E] border border-[#A27B5B]/30 rounded-sm shadow-2xl overflow-hidden">
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2B3F4E] border-l border-t border-[#A27B5B]/30 rotate-45" />
                          {link.dropdown.map((child) => (
                            <Link key={child.href} href={child.href}>
                              <div
                                className={`px-5 py-4 border-b border-[#A27B5B]/20 last:border-0 hover:bg-[#3D5A6B] transition-colors duration-150 cursor-pointer ${
                                  location === child.href ? "bg-[#3D5A6B]" : ""
                                }`}
                              >
                                <div className={`font-body font-700 text-[0.65rem] tracking-[0.14em] uppercase mb-0.5 ${
                                  location === child.href ? "text-[#D4AF6A]" : "text-white"
                                }`}>
                                  {child.label}
                                </div>
                                <div className="text-[#DCD7C9]/70 text-[0.6rem] font-body">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`whitespace-nowrap font-body font-700 text-[0.65rem] xl:text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 ${
                        location === link.href
                          ? "text-[#D4AF6A]"
                          : "text-white/80 hover:text-[#D4AF6A]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA + Phone + Mobile Toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+13528543200"
                className="hidden xl:flex items-center gap-1.5 font-body font-700 text-[0.65rem] tracking-[0.12em] uppercase text-white/60 hover:text-[#D4AF6A] transition-colors duration-200 whitespace-nowrap"
              >
                <Phone className="w-3 h-3 flex-shrink-0" />
                (352) 854-3200
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block btn-gold whitespace-nowrap text-[0.68rem] px-5 py-2.5"
              >
                Book Now
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle mobile menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-[#2B3F4E] border-t border-[#A27B5B]/30">
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <div className="py-2 font-body font-700 text-xs tracking-widest uppercase text-[#DCD7C9]/60">
                        {link.label}
                      </div>
                      {link.dropdown.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <div
                            className={`block py-2 pl-4 font-body font-700 text-sm tracking-widest uppercase transition-colors duration-200 border-l-2 mb-1 ${
                              location === child.href
                                ? "text-[#D4AF6A] border-[#D4AF6A]"
                                : "text-white/80 hover:text-[#D4AF6A] border-[#A27B5B]/30"
                            }`}
                          >
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link key={link.href} href={link.href}>
                    <div
                      className={`block py-2 font-body font-700 text-sm tracking-widest uppercase transition-colors duration-200 ${
                        location === link.href
                          ? "text-[#D4AF6A]"
                          : "text-white/80 hover:text-[#D4AF6A]"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#A27B5B]/30 space-y-3">
                <a
                  href="tel:+13528543200"
                  className="flex items-center gap-2 text-[#D4AF6A] font-body text-sm whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (352) 854-3200
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-gold text-center text-xs px-5 py-3"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
