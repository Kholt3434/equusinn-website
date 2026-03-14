/**
 * EQUUS INN HOME PAGE
 * Design: Southern Equestrian Heritage — asymmetric editorial layout
 * Colors: Hunter Green #2C4C3B, Gold #C9A84C, Ivory #FDFBF7, Charcoal #2A2A2A
 * Typography: Playfair Display (headings) + Raleway (body)
 * Sections: Hero, Welcome, Amenities Strip, Rooms Preview, Experience, Testimonials, CTA
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Coffee,
  Waves,
  Dumbbell,
  PawPrint,
  Truck,
  Wifi,
  Wine,
  Flame,
  Star,
  MapPin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// CDN URLs for generated images
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_hero_sunset-HMu8DpcdFXuQjTsq7fUbz9.webp";
const POOL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_pool_evening-kwoXjFTqz5ZRaw5c2JzSuy.webp";
const ROOM_MURAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_mural-awzoBnDHR2dKQohS7ZsnQp.webp";
const BREAKFAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_breakfast-6wNvkyvCs53Tvf6iB4jhEy.webp";
const FIREPLACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_fireplace-ioHRQcEfheoRvotxhuRHpD.webp";
const POOL_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_pool_aerial_c7d6b863.jpg";
const ROOM_KING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_king_161d87ce.jpg";
const ENTRANCE_HORSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_horse_statue_83401a6b.jpg";
const ROOM_QUEEN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_queen_c8d47e56.jpg";
const SUITE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_suite_3029ddf4.jpg";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const amenities = [
  { icon: Coffee, label: "Free Hot Breakfast", desc: "Served every morning" },
  { icon: Waves, label: "Heated Pool", desc: "Seasonally heated outdoor pool" },
  { icon: Wine, label: "Beer & Wine Bar", desc: "Self-service, any time of day" },
  { icon: Flame, label: "Outdoor Fireplace", desc: "Covered gazebo & fire" },
  { icon: Dumbbell, label: "24/7 Fitness Center", desc: "Full gym access" },
  { icon: PawPrint, label: "Pet Friendly", desc: "Unlimited pets welcome" },
  { icon: Truck, label: "Trailer Parking", desc: "For equestrian travelers" },
  { icon: Wifi, label: "Fiber Optic WiFi", desc: "Property-wide high-speed" },
];

const testimonials = [
  {
    quote: "The equestrian murals in every room are stunning. It felt like staying in a gallery dedicated to the sport I love. Perfect location for the WEC shows.",
    author: "Sarah M.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "Best boutique hotel in Ocala, hands down. The breakfast was incredible, the pool was perfect, and the staff went above and beyond. We'll be back every show season.",
    author: "James & Lisa T.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote: "Finally a hotel that understands equestrians! Trailer parking, proximity to WEC, and rooms that feel like home. The fireplace gazebo at night is magical.",
    author: "Renee K.",
    source: "Booking.com",
    rating: 5,
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navigation />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label text-[#C9A84C] mb-4">Ocala, Florida</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where the Spirit<br />
            <span className="italic text-[#C9A84C]">of the Horse</span><br />
            Meets Southern Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ocala's premier equestrian-themed boutique hotel. Minutes from the World Equestrian Center, with free hot breakfast, a heated pool, and trailer parking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-8 py-4 font-body font-600 tracking-widest uppercase inline-block"
            >
              Book Your Stay
            </a>
            <Link href="/rooms">
              <span className="btn-outline text-sm px-8 py-4 font-body font-600 tracking-widest uppercase inline-block">
                View Rooms
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── QUICK STATS BAR ─── */}
      <div className="bg-[#2C4C3B] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { label: "20 min to WEC", icon: MapPin },
              { label: "#1 Rated Boutique Hotel", icon: Star },
              { label: "152 Rooms & Suites", icon: null },
              { label: "Pet-Friendly Always", icon: PawPrint },
              { label: "Trailer Parking Available", icon: Truck },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#FDFBF7]/80">
                {item.icon && <item.icon className="w-3.5 h-3.5 text-[#C9A84C]" />}
                <span className="font-body text-xs tracking-widest uppercase">{item.label}</span>
                {i < 4 && <span className="hidden sm:block text-[#C9A84C]/40 ml-6">·</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WELCOME SECTION ─── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <p className="section-label mb-4">Welcome to Equus Inn</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#2C4C3B] leading-tight mb-6">
                Ocala's Most Distinctive<br />
                <span className="italic">Boutique Hotel</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-5">
                Nestled in the heart of Florida's Horse Capital of the World, Equus Inn is a recently renovated boutique hotel designed with equestrian lovers in mind. Our property celebrates Ocala's rich heritage as home to more than 1,200 horse farms and some of the most prestigious equestrian venues in the country.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-8">
                Every one of our 152 rooms and suites features unique equestrian wall murals, new hardwood-style tile floors, luxury rain showerheads, modern bowl sinks, and Smart TVs. We offer the comfort of a boutique hotel with the convenience of a prime location — just minutes off I-75 and 20 minutes from the World Equestrian Center.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/rooms">
                  <span className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    Explore Rooms <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/amenities">
                  <span className="inline-flex items-center gap-2 font-body font-600 text-sm tracking-widest uppercase text-[#2C4C3B] border-b border-[#2C4C3B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors duration-200 cursor-pointer">
                    View Amenities
                  </span>
                </Link>
              </div>
            </AnimatedSection>

            {/* Image Grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-56 rounded-none overflow-hidden">
                    <img src={ENTRANCE_HORSE} alt="Equus Inn entrance with horse sculpture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="h-40 rounded-none overflow-hidden">
                    <img src={POOL_AERIAL} alt="Equus Inn heated outdoor pool aerial view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-40 rounded-none overflow-hidden">
                    <img src={ROOM_KING} alt="Equus Inn king room with equestrian mural" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="h-56 rounded-none overflow-hidden">
                    <img src={POOL_IMG} alt="Equus Inn pool at golden hour" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── AMENITIES STRIP ─── */}
      <section className="bg-[#2C4C3B] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label text-[#C9A84C] mb-4">Everything You Need</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#FDFBF7]">
              Amenities Designed for<br />
              <span className="italic text-[#C9A84C]">Equestrian Travelers</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="text-center p-6 border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 hover:bg-[#FDFBF7]/5 transition-all duration-300 group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-display font-600 text-sm text-[#FDFBF7] mb-1">{item.label}</h3>
                  <p className="font-body text-xs text-[#FDFBF7]/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/amenities">
              <span className="btn-outline text-xs px-8 py-3 font-body font-600 tracking-widest uppercase inline-block">
                All Amenities
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ROOMS PREVIEW ─── */}
      <section className="py-24 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="section-label mb-4">Accommodations</p>
                <div className="gold-divider mb-6" />
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#2C4C3B]">
                  Rooms & Suites<br />
                  <span className="italic">Crafted with Character</span>
                </h2>
              </div>
              <Link href="/rooms">
                <span className="inline-flex items-center gap-2 font-body font-600 text-sm tracking-widest uppercase text-[#2C4C3B] border-b border-[#2C4C3B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  View All Rooms <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: ROOM_MURAL_IMG,
                title: "King Room",
                desc: "Our signature king rooms feature dramatic equestrian murals, luxury rain showers, Smart TV, and hardwood-style tile floors.",
                tag: "Most Popular",
              },
              {
                img: ROOM_QUEEN,
                title: "Double Queen Room",
                desc: "Spacious rooms with two queen beds, perfect for families or groups attending equestrian events. All-new furnishings throughout.",
                tag: "Great for Groups",
              },
              {
                img: SUITE_IMG,
                title: "Suite with Kitchenette",
                desc: "Extended-stay suites featuring full-size refrigerators, dining areas, and all the comforts of home for longer visits.",
                tag: "Extended Stay",
              },
            ].map((room, i) => (
              <AnimatedSection key={i}>
                <div className="card-hover group overflow-hidden bg-white shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.img}
                      alt={`Equus Inn ${room.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#2A2A2A] font-body font-600 text-xs tracking-widest uppercase px-3 py-1">
                      {room.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-600 text-xl text-[#2C4C3B] mb-3">{room.title}</h3>
                    <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed mb-5">{room.desc}</p>
                    <Link href="/rooms">
                      <span className="inline-flex items-center gap-2 font-body font-600 text-xs tracking-widest uppercase text-[#2C4C3B] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE SECTION ─── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto">
            <img
              src={FIREPLACE_IMG}
              alt="Equus Inn outdoor fireplace gazebo at night"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="bg-[#1E3328] flex items-center px-10 lg:px-16 py-20">
            <AnimatedSection>
              <p className="section-label text-[#C9A84C] mb-4">The Equus Inn Experience</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#FDFBF7] mb-6 leading-tight">
                More Than a Hotel.<br />
                <span className="italic text-[#C9A84C]">A Destination.</span>
              </h2>
              <p className="font-body text-[#FDFBF7]/70 text-base leading-relaxed mb-6">
                Begin each morning with our complimentary hot and cold breakfast buffet — freshly made waffles, scrambled eggs, sausage, biscuits, seasonal fruits, and more. Then spend your day at the World Equestrian Center, Silver Springs State Park, or simply relax by our seasonally heated pool.
              </p>
              <p className="font-body text-[#FDFBF7]/70 text-base leading-relaxed mb-8">
                As the sun sets, gather around our outdoor stone fireplace under the covered gazebo. Pour yourself a glass from our self-service beer and wine bar, and let the evening unfold at the pace of true Southern hospitality.
              </p>
              <Link href="/amenities">
                <span className="btn-gold text-xs px-7 py-3.5 font-body font-600 tracking-widest uppercase inline-block">
                  Discover Amenities
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── BREAKFAST FEATURE ─── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text */}
          <div className="bg-[#FDFBF7] flex items-center px-10 lg:px-16 py-20 order-2 lg:order-1">
            <AnimatedSection>
              <p className="section-label mb-4">Complimentary Every Morning</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#2C4C3B] mb-6 leading-tight">
                Start Your Day<br />
                <span className="italic">The Right Way</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-6">
                Our free hot and cold breakfast is included with every stay. Each morning, our rotating menu features freshly made waffles, scrambled eggs, sausage, biscuits, seasonal fruits, baked goods, hot and cold cereals, and freshly brewed coffee.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-8">
                Whether you're fueling up for a full day at the show ring or heading out to explore Ocala's natural wonders, a hearty breakfast awaits you — at no extra charge.
              </p>
              <a
                href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-7 py-3.5 font-body font-600 tracking-widest uppercase inline-block"
              >
                Reserve Your Room
              </a>
            </AnimatedSection>
          </div>
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto order-1 lg:order-2">
            <img
              src={BREAKFAST_IMG}
              alt="Equus Inn complimentary hot breakfast buffet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 lg:px-8 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label mb-4">Guest Stories</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#2C4C3B]">
              What Our Guests Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white p-8 shadow-sm border-t-2 border-[#C9A84C]">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="font-body text-[#2A2A2A]/70 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-display font-600 text-sm text-[#2C4C3B]">{t.author}</p>
                    <p className="font-body text-xs text-[#2A2A2A]/40 tracking-wide">{t.source}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION TEASER ─── */}
      <section className="py-20 px-6 lg:px-8 bg-[#2C4C3B]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label text-[#C9A84C] mb-4">Prime Location</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#FDFBF7] mb-6">
              The Heart of Florida's<br />
              <span className="italic text-[#C9A84C]">Horse Country</span>
            </h2>
            <p className="font-body text-[#FDFBF7]/70 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Located at 3434 SW College Road, Ocala, FL — just minutes off I-75 and 20 minutes from the World Equestrian Center. Easily accessible from Silver Springs State Park, downtown Ocala, and all major equestrian venues.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              {[
                { label: "World Equestrian Center", dist: "20 min" },
                { label: "Florida Horse Park", dist: "20 min" },
                { label: "Silver Springs State Park", dist: "15 min" },
                { label: "I-75 Exit", dist: "2 min" },
              ].map((place, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-2xl text-[#C9A84C]">{place.dist}</div>
                  <div className="font-body text-xs text-[#FDFBF7]/60 tracking-wide mt-1">{place.label}</div>
                </div>
              ))}
            </div>
            <Link href="/location">
              <span className="btn-outline text-xs px-8 py-3.5 font-body font-600 tracking-widest uppercase inline-block">
                Explore Location
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POOL_IMG})` }}
        />
        <div className="absolute inset-0 bg-[#2C4C3B]/75" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label text-[#C9A84C] mb-4">Ready to Experience Equus Inn?</p>
            <h2 className="font-display text-5xl font-bold text-white mb-6">
              Book Your Stay<br />
              <span className="italic text-[#C9A84C]">Today</span>
            </h2>
            <p className="font-body text-white/75 text-base mb-10 leading-relaxed">
              Rooms fill quickly during WEC and HITS show seasons. Reserve early to secure your preferred room type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-10 py-4 font-body font-600 tracking-widest uppercase inline-block"
              >
                Book Now
              </a>
              <a
                href="tel:+13528543200"
                className="btn-outline text-sm px-10 py-4 font-body font-600 tracking-widest uppercase inline-block"
              >
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
