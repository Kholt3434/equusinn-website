/**
 * EQUUS INN FOOTER
 * Deep Navy #1C2B4A | Champagne #D4AF6A | Ivory #FAF7F2 | Saddle #8B5E3C
 */

import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equus_logo_white_02b7b265.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111B30] text-[#FAF7F2]">
      {/* Champagne top strip */}
      <div className="bg-[#D4AF6A] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body font-700 text-[0.6rem] tracking-[0.2em] uppercase text-[#111B30]">
            Ocala's Premier Equestrian Boutique Hotel
          </p>
          <a
            href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-700 text-[0.6rem] tracking-[0.2em] uppercase text-[#111B30] hover:underline flex items-center gap-1"
          >
            Book Your Stay <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Equus Inn"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="font-body text-xs text-[#FAF7F2]/50 leading-relaxed mb-5">
              Where the Spirit of the Horse Meets Southern Comfort. Ocala, Florida's most distinctive boutique hotel.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/EquusInn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#D4AF6A] hover:text-[#D4AF6A] transition-colors duration-200"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/equusinn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#D4AF6A] hover:text-[#D4AF6A] transition-colors duration-200"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-700 text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF6A] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/rooms", label: "Rooms & Suites" },
                { href: "/amenities", label: "Amenities" },
                { href: "/meetings", label: "Meetings & Events" },
                { href: "/groups", label: "Groups" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/reviews", label: "Guest Reviews" },
                { href: "/location", label: "Location & Ocala" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="font-body text-xs text-[#FAF7F2]/55 hover:text-[#D4AF6A] transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-700 text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF6A] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF6A] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-[#FAF7F2]/55 leading-relaxed">
                  3434 SW College Road<br />Ocala, FL 34474
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                <a href="tel:+13528543200" className="font-body text-xs text-[#FAF7F2]/55 hover:text-[#D4AF6A] transition-colors">
                  (352) 854-3200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                <a href="mailto:OcalaFD@paxproperties.com" className="font-body text-xs text-[#FAF7F2]/55 hover:text-[#D4AF6A] transition-colors">
                  OcalaFD@paxproperties.com
                </a>
              </li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-body font-700 text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF6A] mb-5">
              Reserve
            </h4>
            <p className="font-body text-xs text-[#FAF7F2]/50 leading-relaxed mb-5">
              Rooms fill quickly during WEC and HITS show seasons. Book early to secure your preferred dates.
            </p>
            <a
              href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[0.6rem] px-6 py-3 inline-block"
            >
              Book Now
            </a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-[#FAF7F2]/30 mb-2">Also on</p>
              <div className="flex flex-col gap-1.5">
                <a href="https://www.tripadvisor.com/Hotel_Review-g34496-d86798-Reviews-Equus_Inn-Ocala_Florida.html" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-[#FAF7F2]/40 hover:text-[#D4AF6A] transition-colors flex items-center gap-1">TripAdvisor <ExternalLink className="w-2.5 h-2.5" /></a>
                <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-[#FAF7F2]/40 hover:text-[#D4AF6A] transition-colors flex items-center gap-1">Expedia <ExternalLink className="w-2.5 h-2.5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[0.6rem] text-[#FAF7F2]/30">
            © {currentYear} Equus Inn. All rights reserved. Managed by Pax Properties.
          </p>
          <p className="font-body text-[0.6rem] text-[#FAF7F2]/20">
            Pet-Friendly · Trailer Parking · Free Breakfast · 24/7 Front Desk
          </p>
        </div>
      </div>
    </footer>
  );
}
