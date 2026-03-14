/**
 * EQUUS INN FOOTER
 * Design: Dark hunter green background, gold accents, ivory text
 * Includes: address, phone, email, social links, quick nav, booking CTA
 */

import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3328] text-[#FDFBF7]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
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
                <div className="font-display font-bold text-xl text-[#FDFBF7]">Equus Inn</div>
                <div className="text-[10px] font-body tracking-[0.2em] uppercase text-[#C9A84C]">Ocala, Florida</div>
              </div>
            </div>
            <p className="text-[#FDFBF7]/70 font-body text-sm leading-relaxed mb-6">
              Ocala's premier equestrian-themed boutique hotel. Where Southern hospitality meets the spirit of the Horse Capital of the World.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/EquusInn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#2C4C3B] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/equusinn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#2C4C3B] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-600 text-base text-[#C9A84C] mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/rooms", label: "Rooms & Suites" },
                { href: "/amenities", label: "Amenities" },
                { href: "/location", label: "Location & Ocala" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-[#FDFBF7]/70 hover:text-[#C9A84C] font-body text-sm transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-600 text-base text-[#C9A84C] mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#FDFBF7]/70 font-body text-sm leading-relaxed">
                    3434 SW College Road<br />
                    Ocala, FL 34474
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href="tel:+13528543200" className="text-[#FDFBF7]/70 hover:text-[#C9A84C] font-body text-sm transition-colors duration-200">
                  (352) 854-3200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href="mailto:OcalaFD@paxproperties.com" className="text-[#FDFBF7]/70 hover:text-[#C9A84C] font-body text-sm transition-colors duration-200">
                  OcalaFD@paxproperties.com
                </a>
              </li>
            </ul>
          </div>

          {/* Book Now CTA */}
          <div>
            <h4 className="font-display font-600 text-base text-[#C9A84C] mb-6 tracking-wide">Reserve Your Stay</h4>
            <p className="text-[#FDFBF7]/70 font-body text-sm leading-relaxed mb-6">
              Book directly for the best rates. Open 24 hours, 7 days a week.
            </p>
            <a
              href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold text-xs px-6 py-3 font-body font-600 tracking-widest uppercase"
            >
              Book Now
              <ExternalLink className="w-3 h-3" />
            </a>
            <div className="mt-6 pt-6 border-t border-[#C9A84C]/20">
              <p className="text-[#FDFBF7]/50 font-body text-xs leading-relaxed">
                <span className="text-[#C9A84C] font-600">20 min</span> to World Equestrian Center<br />
                <span className="text-[#C9A84C] font-600">Minutes</span> from I-75 Exit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#FDFBF7]/40 font-body text-xs">
            © {currentYear} Equus Inn. All rights reserved. | Ocala, Florida
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#FDFBF7]/40 font-body text-xs">Pet-Friendly · Trailer Parking · Free Breakfast</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
