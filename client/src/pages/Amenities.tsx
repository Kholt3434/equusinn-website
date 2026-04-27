/**
 * EQUUS INN AMENITIES PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";
import {
  Coffee, Waves, Wine, Dumbbell, PawPrint,
  Wifi, Check, Users, Flame,
} from "lucide-react";

// Real hotel images — updated
const POOL_AREA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/LoungeandFireplace_471e8721.webp";
const EXTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior_578913ce.webp";
const BEER_WINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/BeerNWineMachine_93fd1e00.webp";
const MEETING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoardroomProjector_400eafd0.png";
// Real branded breakfast photos
const BREAKFAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_56AM_d96ea345.png";
const BREAKFAST_IMG2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_57_40AM_6d2f3140.png";
const BREAKFAST_IMG3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_50AM_0ef28bb3.png";
const BREAKFAST_IMG4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_24AM_5edd2785.png";
const BREAKFAST_IMG5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_45AM_20b81a78.png";
const BREAKFAST_IMG6 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_41AM_15fd751d.png";
const BREAKFAST_IMG7 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_58_30AM_82518c94.png";
const BREAKFAST_IMG8 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_11_59_50AM_b332ecba.png";
const BREAKFAST_IMG9 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/ChatGPTImageApr27_2026_12_03_33PM_8b3699c0.png";
// Beer and wine carousel images
const BEER_WINE_LADY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/CopyofEqquss_Hotel_2021-3231_7f8c5d2e.webp";
const BEER_WINE_MACHINE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/BeerNWineMachine_93fd1e00.webp";
const BEER_WINE_GLASS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/CopyofEqquss_Hotel_2021-3218_1_c9f2e1a3.webp";
const BEER_WINE_TAP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/CopyofEqquss_Hotel_2021-3209_e4d5f8b1.webp";
// Stock for pets and fitness
const PET_IMG = "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=900&q=80";
const GYM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FitnessCenter_5717ebbb.webp";

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

  const breakfastImages = [BREAKFAST_IMG, BREAKFAST_IMG2, BREAKFAST_IMG3, BREAKFAST_IMG4, BREAKFAST_IMG5, BREAKFAST_IMG6, BREAKFAST_IMG7, BREAKFAST_IMG8, BREAKFAST_IMG9];

  const amenities = [
  {
    icon: Coffee,
    title: "Complimentary Hot Breakfast",
    subtitle: "Included with Every Stay",
    desc: "Every morning, guests enjoy a full hot and cold breakfast at no charge. Our menu features scrambled eggs, sausage, biscuits, grits, seasonal fruits, pastries, hot and cold cereals, and freshly brewed coffee. Start your day fueled and ready — whether you're heading to the show ring or exploring Ocala.",
    img: BREAKFAST_IMG,
    alt: "Equus Inn complimentary hot breakfast",
    items: ["Scrambled eggs & sausage", "Biscuits & grits", "Seasonal fresh fruits", "Hot & cold cereals", "Coffee, juice & tea", "Mon–Fri 6–9am · Sat–Sun 6–10am"],
    isCarousel: true,
    carouselImages: breakfastImages,
  },
  {
    icon: Waves,
    title: "Seasonally Heated Outdoor Pool",
    subtitle: "Outdoor Retreat",
    desc: "Our outdoor pool is the perfect place to relax and unwind. Seasonally heated and surrounded by comfortable lounge seating, it's a peaceful retreat that makes our property feel like a true resort.",
    img: POOL_AREA_IMG,
    alt: "Equus Inn seasonally heated outdoor pool",
    items: ["Seasonally heated", "Comfortable lounge seating", "Open daily", "Towels provided", "Adjacent to outdoor lounge area"],
  },
  {
    icon: Wine,
    title: "Self-Service Beer & Wine Bar",
    subtitle: "Available 11am–11pm Daily",
    desc: "Unwind after a long day at the show ring with a glass of wine or a cold beer from our self-service bar. Available to guests daily from 11am to 11pm — no waiting for a bartender. Enjoy your drink poolside, at the outdoor fireplace, or in the comfort of your room.",
    img: BEER_WINE_LADY,
    alt: "Equus Inn self-service beer and wine bar",
    items: ["Selection of wines", "Cold beer selection", "Available 11am–11pm daily", "Serve yourself", "Enjoy poolside or at the fireplace"],
    isCarousel: true,
    carouselImages: [BEER_WINE_LADY, BEER_WINE_TAP, BEER_WINE_GLASS, BEER_WINE_MACHINE],
  },
  {
    icon: Flame,
    title: "Outdoor Fireplace & Covered Gazebo",
    subtitle: "A Serene Evening Retreat",
    desc: "As the Florida sun sets, step outside to our covered gazebo and outdoor fireplace — a serene retreat where guests can relax and unwind in the evening air. A quiet spot to decompress after a long day at the show grounds, perfect for cool evenings during show season.",
    img: OUTDOOR_IMG,
    alt: "Equus Inn outdoor covered gazebo and fireplace",
    items: ["Covered outdoor gazebo", "Outdoor fireplace", "Comfortable seating", "Quiet evening retreat", "Open to all guests"],
  },
  {
    icon: Dumbbell,
    title: "24/7 Fitness Center",
    subtitle: "Full Gym Access",
    desc: "Maintain your training routine with access to our fully equipped fitness center, available 24 hours a day, 7 days a week. Whether you're an early-morning runner or a late-night lifter, our gym is always open for you.",
    img: GYM_IMG,
    alt: "Equus Inn 24/7 fitness center",
    items: ["Open 24 hours, 7 days a week", "Cardio equipment", "Free weights", "Strength equipment", "No additional charge"],
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Policy",
    subtitle: "All Pets Welcome",
    desc: "At Equus Inn, we believe life is better with your animals by your side. We welcome pets of all sizes. A pet fee of $35 per pet, per night applies. Whether you're bringing your dog along for a show season trip or simply can't imagine a vacation without your companion, you'll find a warm welcome here.",
    img: PET_IMG,
    alt: "Pet-friendly hotel in Ocala Florida — Equus Inn",
    items: ["All pet sizes welcome", "$35 per pet, per night", "Pet-friendly rooms available", "Spacious grounds for walks", "Please notify us at booking"],
  },
  {
    icon: Users,
    title: "Meeting Room & Event Space",
    subtitle: "For Groups & Corporate Events",
    desc: "Equus Inn offers a versatile, fully equipped meeting room ideal for corporate events, team retreats, training sessions, and private celebrations. Our space accommodates up to 45 guests with flexible configurations and full AV support.",
    img: MEETING_IMG,
    alt: "Equus Inn meeting room and event space",
    items: ["Theater: 35 guests", "Classroom: 24 guests", "U-Shape: 18 guests", "AV equipment & projector available", "Fiber optic WiFi", "Multiple room configurations"],
  },
];

const additionalFeatures = [
  { icon: Wifi, label: "Fiber Optic WiFi", desc: "High-speed throughout the property" },
  { icon: Check, label: "Free On-Site Parking", desc: "Ample space for all vehicles" },
  { icon: Check, label: "24/7 Front Desk", desc: "Always available to assist" },
  { icon: Check, label: "Housekeeping Service", desc: "Available upon request" },
  { icon: Check, label: "Laundry Facilities", desc: "On-site guest laundry" },
  { icon: Check, label: "Ice Machines", desc: "1st & 3rd floors" },
  { icon: Check, label: "Onsite Market", desc: "Beverages, snacks, microwavable meals, ice cream & toiletries" },
];

export default function Amenities() {
  const [breakfastImageIndex, setBreakfastImageIndex] = useState(0);
  const [beerWineImageIndex, setBeerWineImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-switch breakfast carousel every 5 seconds
  useEffect(() => {
    const breakfastTimer = setInterval(() => {
      setBreakfastImageIndex((prev) => (prev + 1) % 9);
    }, 5000);
    return () => clearInterval(breakfastTimer);
  }, []);

  // Auto-switch beer and wine carousel every 5 seconds
  useEffect(() => {
    const beerWineTimer = setInterval(() => {
      setBeerWineImageIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(beerWineTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SchemaMarkup id="amenities-page" schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Does Equus Inn serve breakfast?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Equus Inn offers a complimentary hot breakfast daily. Weekdays 6am–9am, weekends 6am–10am." } },
          { "@type": "Question", "name": "Is Equus Inn pet friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Equus Inn welcomes pets. A pet fee of $35 per pet, per night applies." } },
          { "@type": "Question", "name": "Does Equus Inn have a pool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Equus Inn features a seasonally heated outdoor pool." } },
          { "@type": "Question", "name": "Does Equus Inn have a fitness center?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Equus Inn has a fully equipped fitness center available to all guests." } },
          { "@type": "Question", "name": "Does Equus Inn serve beer and wine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Equus Inn has a self-serve beer and wine station available daily from 11am to 11pm." } }
        ]
      }} />
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
              Equus Inn was designed with the equestrian traveler in mind — but our amenities are enjoyed by every guest. From the complimentary hot breakfast to the seasonally heated pool, outdoor fireplace, and pet-friendly accommodations, every detail is here to make your stay exceptional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenity Sections */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-0">
          {amenities.map((amenity, i) => (
            <AnimatedSection key={i}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden`}>
                {/* Image */}
                <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {amenity.isCarousel ? (
                    <>
                      <img
                        src={amenity.carouselImages[i === 0 ? breakfastImageIndex : beerWineImageIndex]}
                        alt={amenity.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {amenity.carouselImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => i === 0 ? setBreakfastImageIndex(idx) : setBeerWineImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === (i === 0 ? breakfastImageIndex : beerWineImageIndex) ? "bg-[#D4AF6A] w-6" : "bg-white/50 hover:bg-white"
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={amenity.img}
                      alt={amenity.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/30 to-transparent" />
                </div>
                {/* Content */}
                <div className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "bg-[#FAF7F2] lg:order-1" : "bg-white"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#A27B5B]/15 flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-4 h-4 text-[#A27B5B]" />
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
      <section className="py-16 px-6 lg:px-8 bg-[#2B3F4E]">
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
                  <div className="w-10 h-10 mx-auto mb-3 bg-[#DCD7C9]/15 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-[#DCD7C9]" />
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
        <div className="absolute inset-0 bg-[#2B3F4E]/85" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label text-[#D4AF6A] mb-4">Experience It All</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Book Your Stay Today
            </h2>
            <p className="font-body text-white/70 text-base mb-8 leading-relaxed">
              Complimentary hot breakfast is included with every stay. Pet fee of $35 per pet, per night applies. All other amenities included — no hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
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
