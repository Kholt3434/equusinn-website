/**
 * EQUUS INN NAVIGATION
 * Deep Navy #1C2B4A | Champagne #D4AF6A | Ivory #FAF7F2 | Saddle #8B5E3C
 * Cormorant Garamond (display) + Lato (body)
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equus_logo_white_02b7b265.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/meetings", label: "Meetings" },
  { href: "/groups", label: "Groups" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
            ? "bg-gradient-to-b from-[#111B30]/85 to-transparent"
            : "bg-[#1C2B4A] shadow-lg"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo — fixed width so it doesn't shrink */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer flex-shrink-0">
                <img
                  src={LOGO_URL}
                  alt="Equus Inn"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav — nowrap on every item, tighter gap on smaller screens */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink min-w-0">
              {navLinks.map((link) => (
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
              ))}
            </div>

            {/* CTA + Phone + Mobile Toggle — flex-shrink-0 so they never compress */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+13528543200"
                className="hidden xl:flex items-center gap-1.5 font-body font-700 text-[0.65rem] tracking-[0.12em] uppercase text-white/60 hover:text-[#D4AF6A] transition-colors duration-200 whitespace-nowrap"
              >
                <Phone className="w-3 h-3 flex-shrink-0" />
                (352) 854-3200
              </a>
              <a
                href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
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
          <div className="lg:hidden bg-[#111B30] border-t border-[#D4AF6A]/20">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
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
              ))}
              <div className="pt-4 border-t border-[#D4AF6A]/20 space-y-3">
                <a
                  href="tel:+13528543200"
                  className="flex items-center gap-2 text-[#D4AF6A] font-body text-sm whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (352) 854-3200
                </a>
                <a
                  href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
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
