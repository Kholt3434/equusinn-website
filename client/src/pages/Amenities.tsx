/**
 * EQUUS INN AMENITIES PAGE
 * Design: Southern Equestrian Heritage
 * Colors: Hunter Green #2C4C3B, Gold #C9A84C, Ivory #FDFBF7, Charcoal #2A2A2A
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Coffee, Waves, Wine, Flame, Dumbbell, PawPrint,
  Truck, Wifi, Utensils, Car, Clock, Check
} from "lucide-react";

const POOL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_pool_evening-kwoXjFTqz5ZRaw5c2JzSuy.webp";
const BREAKFAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_breakfast-6wNvkyvCs53Tvf6iB4jhEy.webp";
const FIREPLACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_fireplace-ioHRQcEfheoRvotxhuRHpD.webp";
const POOL_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_pool_aerial_c7d6b863.jpg";
const BAR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_bar_1a589b9b.jpg";
const GAZEBO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_gazebo_06e6310c.jpg";

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

const amenityCategories = [
  {
    title: "Dining & Beverages",
    icon: Coffee,
    items: [
      {
        icon: Coffee,
        title: "Complimentary Hot Breakfast",
        desc: "Every morning, guests enjoy a full hot and cold breakfast buffet at no charge. Our rotating menu features freshly made waffles, scrambled eggs, sausage, biscuits, seasonal fruits, pastries, hot and cold cereals, and freshly brewed coffee and juices.",
        img: BREAKFAST_IMG,
        alt: "Equus Inn complimentary hot breakfast buffet",
      },
      {
        icon: Wine,
        title: "Self-Service Beer & Wine Bar",
        desc: "Unwind after a long day at the show ring with a glass of wine or a cold beer from our self-service bar. Available to guests throughout the day and evening — no waiting for a bartender.",
        img: BAR_IMG,
        alt: "Equus Inn self-service beer and wine bar",
      },
    ],
  },
  {
    title: "Outdoor Spaces",
    icon: Waves,
    items: [
      {
        icon: Waves,
        title: "Seasonally Heated Outdoor Pool",
        desc: "Our beautiful oval outdoor pool is the centerpiece of the Equus Inn property. Seasonally heated and surrounded by comfortable lounge chairs and umbrellas, it's the perfect place to relax between show days or after a long drive.",
        img: POOL_IMG,
        alt: "Equus Inn heated outdoor pool at sunset",
      },
      {
        icon: Flame,
        title: "Covered Gazebo & Outdoor Fireplace",
        desc: "Our signature outdoor gathering space features a large stone fireplace under a beautiful covered wooden gazebo, strung with warm Edison lights. The perfect setting for evening conversation, a glass of wine, and the sounds of Florida's natural landscape.",
        img: FIREPLACE_IMG,
        alt: "Equus Inn outdoor fireplace and gazebo at night",
      },
    ],
  },
  {
    title: "Fitness & Wellness",
    icon: Dumbbell,
    items: [
      {
        icon: Dumbbell,
        title: "24/7 Fitness Center",
        desc: "Our fully equipped fitness center is available around the clock, so you can maintain your training schedule no matter when you arrive or depart. Features cardio equipment, free weights, and strength training machines.",
        img: POOL_AERIAL,
        alt: "Equus Inn fitness and property amenities",
      },
    ],
  },
  {
    title: "Equestrian & Travel",
    icon: Truck,
    items: [
      {
        icon: Truck,
        title: "Ample Trailer Parking",
        desc: "We understand the unique needs of equestrian travelers. Equus Inn offers ample parking for horse trailers of all sizes, making us the preferred choice for competitors and trainers attending events at the World Equestrian Center, HITS, and the Florida Horse Park.",
        img: GAZEBO_IMG,
        alt: "Equus Inn grounds and parking area",
      },
      {
        icon: PawPrint,
        title: "Proudly Pet-Friendly",
        desc: "Your four-legged family members are always welcome at Equus Inn. We accept pets of all sizes with no additional pet fees, making us one of the most pet-friendly hotels in Ocala. Because life is better with your animals by your side.",
        img: POOL_AERIAL,
        alt: "Equus Inn pet-friendly hotel",
      },
    ],
  },
];

const quickAmenities = [
  { icon: Wifi, label: "Fiber Optic WiFi", sub: "Property-wide" },
  { icon: Car, label: "Free Parking", sub: "On-site" },
  { icon: Clock, label: "24/7 Front Desk", sub: "Always available" },
  { icon: Utensils, label: "Free Breakfast", sub: "Hot & cold daily" },
  { icon: Waves, label: "Heated Pool", sub: "Seasonal" },
  { icon: Dumbbell, label: "Fitness Center", sub: "24/7 access" },
  { icon: Wine, label: "Beer & Wine Bar", sub: "Self-service" },
  { icon: Flame, label: "Outdoor Fireplace", sub: "Covered gazebo" },
  { icon: PawPrint, label: "Pet Friendly", sub: "All sizes welcome" },
  { icon: Truck, label: "Trailer Parking", sub: "Equestrian travelers" },
];

export default function Amenities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POOL_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3328]/90 via-[#1E3328]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#C9A84C] mb-3">What's Included</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Amenities & Experiences
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Quick Amenities Grid */}
      <section className="py-14 px-6 lg:px-8 bg-[#2C4C3B]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <p className="section-label text-[#C9A84C] mb-3">At a Glance</p>
            <h2 className="font-display text-3xl font-bold text-[#FDFBF7]">
              Everything Included in Your Stay
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {quickAmenities.map((a, i) => (
              <AnimatedSection key={i}>
                <div className="text-center p-5 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:bg-white/5 transition-all duration-300">
                  <a.icon className="w-6 h-6 text-[#C9A84C] mx-auto mb-3" />
                  <p className="font-display font-600 text-sm text-[#FDFBF7] mb-0.5">{a.label}</p>
                  <p className="font-body text-xs text-[#FDFBF7]/40">{a.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Amenity Sections */}
      {amenityCategories.map((cat, ci) => (
        <section key={ci} className={`py-20 px-6 lg:px-8 ${ci % 2 === 1 ? "bg-[#F5F0E8]" : "bg-[#FDFBF7]"}`}>
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-14">
              <div className="flex items-center gap-4 mb-2">
                <cat.icon className="w-5 h-5 text-[#C9A84C]" />
                <p className="section-label">{cat.title}</p>
              </div>
              <div className="gold-divider" />
            </AnimatedSection>
            <div className="space-y-16">
              {cat.items.map((item, ii) => (
                <AnimatedSection key={ii}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${ii % 2 === 1 ? "" : ""}`}>
                    <div className={`${ii % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="overflow-hidden h-72 lg:h-80">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className={`${ii % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#2C4C3B]/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#2C4C3B]" />
                        </div>
                        <h3 className="font-display text-2xl font-600 text-[#2C4C3B]">{item.title}</h3>
                      </div>
                      <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* In-Room Amenities */}
      <section className="py-20 px-6 lg:px-8 bg-[#2C4C3B]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="section-label text-[#C9A84C] mb-4">In Every Room</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#FDFBF7]">
              Room Amenities & Features
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Smart TV (50\"+) with streaming apps",
              "Fiber optic high-speed WiFi",
              "Individual climate control (A/C & heat)",
              "In-room coffee maker",
              "Mini-fridge & microwave",
              "Luxury rain showerhead",
              "Modern bowl sink vanity",
              "Premium bath amenities",
              "In-room safe",
              "Iron & ironing board",
              "Hair dryer",
              "Blackout curtains",
              "USB charging ports",
              "Equestrian wall murals",
              "Hardwood-style tile floors",
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-center gap-3 py-3 border-b border-[#C9A84C]/10">
                  <Check className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span className="font-body text-sm text-[#FDFBF7]/75">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Experience It All</p>
            <h2 className="font-display text-4xl font-bold text-[#2C4C3B] mb-6">
              Book Your Stay at Equus Inn
            </h2>
            <p className="font-body text-[#2A2A2A]/65 text-base mb-8 leading-relaxed">
              All amenities are included with your stay. No hidden fees, no surprises — just genuine Southern hospitality in the heart of Ocala's horse country.
            </p>
            <a
              href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-10 py-4 font-body font-600 tracking-widest uppercase inline-block"
            >
              Reserve Your Room
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
