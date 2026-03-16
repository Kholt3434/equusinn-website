/**
 * EQUUS INN AMENITIES PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Coffee, Waves, Wine, Dumbbell, PawPrint,
  Truck, Wifi, Check, Users, Flame,
} from "lucide-react";

// Real hotel images — updated
const POOL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const POOL_AREA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const DINING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/diningarea(2)_d0bc3ff8.jpg";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/LoungeandFireplace_471e8721.webp";
const EXTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior_578913ce.webp";
const BEER_WINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/BeerNWineMachine_93fd1e00.webp";
const BEER_AREA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/beerandwinearea(2)_9f5e21c1.jpg";
const MEETING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoardroomProjector_400eafd0.png";
// Stock for breakfast (buffet style) and pets
const BREAKFAST_IMG = "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&q=80";
const PET_IMG = "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=900&q=80";
// Stock for fitness
const GYM_IMG = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const amenities = [
  {
    icon: Coffee,
    title: "Complimentary Hot Breakfast",
    subtitle: "Included with Every Stay",
    desc: "Every morning, guests enjoy a full hot and cold breakfast buffet at no charge. Our rotating menu features freshly made waffles, scrambled eggs, sausage, biscuits, seasonal fruits, pastries, hot and cold cereals, and freshly brewed coffee and juices. Start your day fueled and ready — whether you're heading to the show ring or exploring Ocala.",
    img: BREAKFAST_IMG,
    alt: "Equus Inn complimentary hot breakfast buffet",
    items: ["Freshly made waffles", "Scrambled eggs & sausage", "Biscuits & pastries", "Seasonal fresh fruits", "Hot & cold cereals", "Coffee, juice & tea"],
  },
  {
    icon: Waves,
    title: "Heated Outdoor Pool",
    subtitle: "Seasonally Heated",
    desc: "Our outdoor pool is the perfect place to unwind after a day at the World Equestrian Center or exploring Ocala's natural wonders. Seasonally heated and surrounded by comfortable lounge seating, it's a peaceful retreat that makes our property feel like a true resort.",
    img: POOL_IMG,
    alt: "Equus Inn heated outdoor pool",
    items: ["Seasonally heated", "Comfortable lounge seating", "Open daily", "Towels provided", "Adjacent to outdoor lounge area"],
  },
  {
    icon: Wine,
    title: "Self-Service Beer & Wine Bar",
    subtitle: "Available Anytime",
    desc: "Unwind after a long day at the show ring with a glass of wine or a cold beer from our self-service bar. Available to guests throughout the day and evening — no waiting for a bartender. Enjoy your drink poolside, at the outdoor fireplace, or in the comfort of your room.",
    img: BEER_WINE_IMG,
    alt: "Equus Inn self-service beer and wine machine",
    items: ["Selection of wines", "Cold beer selection", "Available all day", "Serve yourself anytime", "Enjoy poolside or at the gazebo"],
  },
  {
    icon: Flame,
    title: "Outdoor Fireplace & Covered Gazebo",
    subtitle: "Southern Evenings at Their Best",
    desc: "As the Florida sun sets, gather around our outdoor stone fireplace under the covered gazebo. This beloved gathering spot is where guests connect, share stories from the day's events, and experience the warmth of true Southern hospitality. Perfect for cool evenings during show season.",
    img: OUTDOOR_IMG,
    alt: "Equus Inn outdoor covered area and lounge",
    items: ["Covered outdoor gazebo", "Outdoor fireplace", "Comfortable seating", "Perfect for evening gatherings", "Open to all guests"],
  },
  {
    icon: Dumbbell,
    title: "24/7 Fitness Center",
    subtitle: "Full Gym Access",
    desc: "Maintain your training routine with access to our fully equipped fitness center, available 24 hours a day, 7 days a week. Whether you're an early-morning runner or a late-night lifter, our gym is always open for you.",
    img: GYM_IMG,
    alt: "Equus Inn 24/7 fitness center",
    items: ["Open 24 hours, 7 days a week", "Cardio equipment", "Free weights", "Strength machines", "No additional charge"],
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Policy",
    subtitle: "All Pets Welcome, No Extra Fees",
    desc: "At Equus Inn, we believe life is better with your animals by your side. We proudly welcome pets of all sizes with absolutely no additional pet fees. Whether you're bringing your dog along for a show season trip or simply can't imagine a vacation without your companion, you'll find a warm welcome here.",
    img: PET_IMG,
    alt: "Pet-friendly hotel in Ocala Florida — Equus Inn",
    items: ["All pet sizes welcome", "No additional pet fees", "Pet-friendly rooms available", "Spacious grounds for walks", "Please notify us at booking"],
  },
  {
    icon: Users,
    title: "Meeting Room & Event Space",
    subtitle: "For Groups & Corporate Events",
    desc: "Equus Inn offers a versatile, fully equipped meeting room ideal for corporate events, team retreats, training sessions, equestrian industry gatherings, and private celebrations. Our space accommodates groups of all sizes with flexible configurations and full AV support.",
    img: MEETING_IMG,
    alt: "Equus Inn meeting room and event space",
    items: ["Theater: 35 guests", "Classroom: 24 guests", "U-Shape: 18 guests", "AV equipment & projector included", "Fiber optic WiFi", "Multiple room configurations"],
  },
];

const additionalFeatures = [
  { icon: Wifi, label: "Fiber Optic WiFi", desc: "High-speed throughout the property" },
  { icon: Check, label: "Free On-Site Parking", desc: "Ample space for all vehicles" },
  { icon: Check, label: "24/7 Front Desk", desc: "Always available to assist" },
  { icon: Check, label: "Housekeeping Service", desc: "Daily service available" },
  { icon: Check, label: "Laundry Facilities", desc: "On-site guest laundry" },
  { icon: Check, label: "Ice & Vending", desc: "Available on every floor" },
];

export default function Amenities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POOL_AREA_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/90 via-[#111B30]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Everything Included</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Hotel Amenities
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label mb-4">Designed for Equestrian Travelers</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C2B4A] mb-5">
              More Than a Place to Sleep
            </h2>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Equus Inn was designed with the equestrian traveler in mind — but our amenities are enjoyed by every guest. From the complimentary hot breakfast to the heated pool, outdoor fireplace, and pet-friendly policy, every detail is here to make your stay exceptional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenity Sections */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-0">
          {amenities.map((amenity, i) => (
            <AnimatedSection key={i}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${i % 2 === 1 ? "" : ""}`}>
                {/* Image */}
                <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={amenity.img}
                    alt={amenity.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/30 to-transparent" />
                </div>
                {/* Content */}
                <div className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "bg-[#FAF7F2] lg:order-1" : "bg-white"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <p className="section-label">{amenity.subtitle}</p>
                  </div>
                  <div className="gold-divider mb-5" />
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C2B4A] mb-4">{amenity.title}</h2>
                  <p className="font-body text-[#2A2A2A]/65 text-sm leading-relaxed mb-6">{amenity.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {amenity.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-[#D4AF6A] flex-shrink-0" />
                        <span className="font-body text-xs text-[#2A2A2A]/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {i < amenities.length - 1 && <div className="border-b border-[#1C2B4A]/8" />}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-6 lg:px-8 bg-[#1C2B4A]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label text-[#D4AF6A] mb-4">Also Included</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#FAF7F2]">
              Additional Hotel Features
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {additionalFeatures.map((f, i) => (
              <AnimatedSection key={i}>
                <div className="text-center p-6 border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 hover:bg-white/5 transition-all duration-300">
                  <div className="w-10 h-10 mx-auto mb-3 bg-[#D4AF6A]/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-[#D4AF6A]" />
                  </div>
                  <p className="font-display font-600 text-sm text-[#FAF7F2] mb-1">{f.label}</p>
                  <p className="font-body text-xs text-[#FAF7F2]/45">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${EXTERIOR_IMG})` }}
        />
        <div className="absolute inset-0 bg-[#1C2B4A]/80" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label text-[#D4AF6A] mb-4">Experience It All</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Book Your Stay Today
            </h2>
            <p className="font-body text-white/70 text-base mb-8 leading-relaxed">
              All amenities are included with your stay. No hidden fees, no surprises — just exceptional hospitality in the heart of Ocala's horse country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-10 py-4 inline-block"
              >
                Book Now
              </a>
              <a href="tel:+13528543200" className="btn-outline text-xs px-10 py-4 inline-block">
                Call (352) 854-3200
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
