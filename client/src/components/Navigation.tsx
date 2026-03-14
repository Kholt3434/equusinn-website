/**
 * EQUUS INN NAVIGATION
 * Design: Transparent on hero, solid hunter green on scroll
 * Typography: Raleway 500 uppercase for nav links, Playfair Display for logo
 * Colors: Ivory text on green background, gold accent on hover
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-[#2C4C3B] shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 40 40" className="w-7 h-7 fill-[#2C4C3B]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4C20 4 12 10 10 18C8 26 14 32 20 32C26 32 32 26 30 18C28 10 20 4 20 4Z" opacity="0.3"/>
                    <path d="M15 20C15 20 13 16 16 13C19 10 23 12 24 15C25 18 22 22 20 22C18 22 15 20 15 20Z"/>
                    <path d="M20 22L18 30L20 28L22 30L20 22Z"/>
                    <path d="M16 18L12 20L14 22L16 18Z"/>
                    <path d="M24 18L28 20L26 22L24 18Z"/>
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-display font-bold text-xl leading-tight transition-colors duration-300 ${
                      isTransparent ? "text-white" : "text-[#FDFBF7]"
                    }`}
                  >
                    Equus Inn
                  </div>
                  <div
                    className={`text-[10px] font-body font-300 tracking-[0.2em] uppercase transition-colors duration-300 ${
                      isTransparent ? "text-white/70" : "text-[#C9A84C]"
                    }`}
                  >
                    Ocala, Florida
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`nav-link text-sm font-body font-500 tracking-widest uppercase transition-colors duration-300 ${
                      location === link.href
                        ? "text-[#C9A84C]"
                        : isTransparent
                        ? "text-white hover:text-[#C9A84C]"
                        : "text-[#FDFBF7] hover:text-[#C9A84C]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+13528543200"
                className={`hidden md:flex items-center gap-2 text-sm font-body font-500 transition-colors duration-300 ${
                  isTransparent ? "text-white/80 hover:text-[#C9A84C]" : "text-[#C9A84C] hover:text-[#FDFBF7]"
                }`}
              >
                <Phone className="w-4 h-4" />
                (352) 854-3200
              </a>
              <a
                href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block btn-gold text-xs px-5 py-2.5 rounded-none font-body font-600 tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              >
                Book Now
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  isTransparent ? "text-white" : "text-[#FDFBF7]"
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-[#2C4C3B] border-t border-[#C9A84C]/20">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`block py-2 font-body font-500 text-sm tracking-widest uppercase transition-colors duration-200 ${
                      location === link.href
                        ? "text-[#C9A84C]"
                        : "text-[#FDFBF7] hover:text-[#C9A84C]"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-[#C9A84C]/20 space-y-3">
                <a
                  href="tel:+13528543200"
                  className="flex items-center gap-2 text-[#C9A84C] font-body text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (352) 854-3200
                </a>
                <a
                  href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-gold text-center text-xs px-5 py-3 font-body font-600 tracking-widest uppercase"
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
