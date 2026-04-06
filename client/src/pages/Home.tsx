/**
 * EQUUS INN HOME PAGE
 * Design: Modern Equestrian Luxury — editorial asymmetric layout
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import AwardsStrip from "@/components/AwardsStrip";
import Footer from "@/components/Footer";
import {
  Coffee, Waves, Dumbbell, PawPrint, Wifi, Wine, Flame,
  Star, MapPin, ChevronDown, ArrowRight, Users, Phone,
} from "lucide-react";

// ─── REAL HOTEL IMAGES (CDN) ───
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior-HorseStatue_c9445e18.webp";
const SPIRIT_HORSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/horse_spirit_image_42bfd2d6.png";
const POOL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const ROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingRoom_5ae99094.webp";
const DINING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/diningarea(2)_d0bc3ff8.jpg";
const EXTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior_578913ce.webp";
const POOL_AREA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const ROOM_2_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenRoom_ecf1b94f.webp";
const ROOM_3_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/SuiteKitchenette_392204ac.webp";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/LoungeandFireplace_471e8721.webp";
const PROPERTY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/LobbyLoungeAre_ff1e71f3.webp";
const ROOM_DETAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/BathroomandVanity_36d4711a.webp";
const MEETING_SECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoardroomProjector_400eafd0.png";
// Real Equus Inn branded breakfast photo
const BREAKFAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/newbreakfastimage_9961f052.png";

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
  { icon: Coffee, label: "Free Hot Breakfast", desc: "Mon–Fri 6–9am · Sat–Sun 6–10am" },
  { icon: Waves, label: "Seasonally Heated Pool", desc: "Outdoor pool" },
  { icon: Wine, label: "Beer & Wine Bar", desc: "Self-service · 11am–11pm" },
  { icon: Flame, label: "Outdoor Fireplace", desc: "Covered gazebo" },
  { icon: Dumbbell, label: "24/7 Fitness Center", desc: "Full gym access" },
  { icon: PawPrint, label: "Pet Friendly", desc: "$35 per pet, per night" },
  { icon: Users, label: "Meeting Space", desc: "Up to 45 guests" },
];

const testimonials = [
  {
    quote: "The equestrian-themed rooms are stunning. It felt like staying in a gallery dedicated to the sport I love. Perfect location for the WEC shows.",
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
    quote: "Finally a hotel that understands equestrians! The proximity to WEC, the equestrian-themed rooms, and the cozy outdoor fireplace at night — this place truly feels like home.",
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
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Deep navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111B30]/70 via-[#111B30]/40 to-[#111B30]/75" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label text-[#D4AF6A] mb-5">Ocala, Florida</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where the Spirit<br />
            <span className="italic text-[#D4AF6A]">of the Horse</span><br />
            Meets Southern Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ocala's premier equestrian-themed boutique hotel. Minutes from the World Equestrian Center, with free hot breakfast, a seasonally heated pool, and pet-friendly accommodations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-8 py-4 inline-block"
            >
              Book Your Stay
            </a>
            <Link href="/rooms">
              <span className="btn-outline text-sm px-8 py-4 inline-block">
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[0.6rem] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── AWARDS SCROLLING STRIP ─── */}
      <AwardsStrip />

      {/* ─── QUICK STATS BAR ─── */}
      <div className="bg-[#2C3639] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { label: "20 min to WEC", icon: MapPin },
              { label: "152 Rooms & Suites", icon: null },
              { label: "Pet-Friendly Always", icon: PawPrint },
              { label: "Free Hot Breakfast Daily", icon: Coffee },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#FAF7F2]/75">
                {item.icon && <item.icon className="w-3.5 h-3.5 text-[#D4AF6A]" />}
                <span className="font-body font-700 text-[0.6rem] tracking-widest uppercase">{item.label}</span>
                {i < 4 && <span className="hidden sm:block text-[#D4AF6A]/30 ml-6">·</span>}
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
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C2B4A] leading-tight mb-6">
                Ocala's Most Distinctive<br />
                <span className="italic">Boutique Hotel</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-5">
                Nestled in the heart of Florida's Horse Capital of the World, Equus Inn is a thoughtfully designed boutique hotel for equestrian lovers. Our property celebrates Ocala's rich heritage as home to more than 1,200 horse farms and some of the most prestigious equestrian venues in the country.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-8">
                Every one of our 152 rooms and suites features unique equestrian-themed décor, new hardwood-style tile floors, luxury rain showerheads, modern bowl sinks, and Smart TVs. We offer the comfort of a boutique hotel with the convenience of a prime location — just minutes off I-75 and 20 minutes from the World Equestrian Center.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/rooms">
                  <span className="btn-primary text-xs px-7 py-3.5 inline-flex items-center gap-2">
                    Explore Rooms <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/amenities">
                  <span className="inline-flex items-center gap-2 font-body font-700 text-xs tracking-widest uppercase text-[#1C2B4A] border-b border-[#1C2B4A] pb-0.5 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-colors duration-200 cursor-pointer">
                    View Amenities
                  </span>
                </Link>
              </div>
            </AnimatedSection>

            {/* Real Hotel Image Grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="h-56 overflow-hidden">
                    <img src={POOL_IMG} alt="Equus Inn heated outdoor pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="h-40 overflow-hidden">
                    <img src={ROOM_IMG} alt="Equus Inn room interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-3 mt-8">
                  <div className="h-40 overflow-hidden">
                    <img src={ROOM_DETAIL_IMG} alt="Equus Inn room detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="h-56 overflow-hidden">
                    <img src={DINING_IMG} alt="Equus Inn dining area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SPIRIT HORSE FEATURE SECTION ─── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image — the "spirit of the horse" image */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={SPIRIT_HORSE_IMG}
              alt="The spirit of the horse — Equus Inn Ocala"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1C2B4A]/20" />
          </div>
          {/* Text */}
          <div className="bg-[#2C3639] flex items-center px-10 lg:px-16 py-20 border-l-4 border-[#A27B5B]/40">
            <AnimatedSection>
              <p className="section-label text-[#D4AF6A] mb-4">The Equus Inn Spirit</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#FAF7F2] mb-6 leading-tight">
                Where the Spirit<br />
                <span className="italic text-[#D4AF6A]">of the Horse</span><br />
                Lives On
              </h2>
              <div className="w-full h-px bg-[#DCB7C8]/20 mb-6" />
              <p className="font-body text-[#FAF7F2]/70 text-base leading-relaxed mb-6">
                Ocala is the Horse Capital of the World — and Equus Inn is its most fitting retreat. Our hotel is a living tribute to the bond between horse and rider, from our equestrian-themed rooms to our location minutes from the world's greatest show venues.
              </p>
              <p className="font-body text-[#FAF7F2]/70 text-base leading-relaxed mb-8">
                Whether you're a competitor, a trainer, a devoted spectator, or simply someone who appreciates the grace and power of the horse, you'll feel at home here.
              </p>
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-7 py-3.5 inline-block"
              >
                Book Your Stay
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── AMENITIES STRIP ─── */}
      <section className="bg-[#3F4E4F] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label text-[#D4AF6A] mb-4">Everything You Need</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#FAF7F2]">
              Amenities Designed for<br />
              <span className="italic text-[#D4AF6A]">Equestrian Travelers</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {amenities.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="text-center p-6 border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/60 hover:bg-white/5 transition-all duration-300 group">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#DCB7C8]/10 flex items-center justify-center group-hover:bg-[#DCB7C8]/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#D4AF6A]" />
                  </div>
                  <h3 className="font-display font-600 text-sm text-[#FAF7F2] mb-1">{item.label}</h3>
                  <p className="font-body text-xs text-[#FAF7F2]/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/amenities">
              <span className="btn-outline text-xs px-8 py-3 inline-block">
                All Amenities
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ROOMS PREVIEW ─── */}
      <section className="py-24 px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="section-label mb-4">Accommodations</p>
                <div className="gold-divider mb-6" />
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C2B4A]">
                  Rooms & Suites<br />
                  <span className="italic">Crafted with Character</span>
                </h2>
              </div>
              <Link href="/rooms">
                <span className="inline-flex items-center gap-2 font-body font-700 text-xs tracking-widest uppercase text-[#1C2B4A] border-b border-[#1C2B4A] pb-0.5 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  View All Rooms <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: ROOM_IMG,
                title: "King Room",
                desc: "Our signature king rooms feature equestrian-themed décor, luxury rain showers, Smart TV, and hardwood-style tile floors.",
                tag: "Most Popular",
              },
              {
                img: ROOM_2_IMG,
                title: "Two Queen Room",
                desc: "Spacious rooms with two queen beds, perfect for families or groups attending equestrian events. All-new furnishings throughout.",
                tag: "Great for Groups",
              },
              {
                img: ROOM_3_IMG,
                title: "Suite with Kitchenette",
                desc: "Extended-stay suites featuring full-size refrigerators, dining areas, and all the comforts of home for longer visits.",
                tag: "Extended Stay",
              },
            ].map((room, i) => (
              <AnimatedSection key={i}>
                <div className="group overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.img}
                      alt={`Equus Inn ${room.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4AF6A] text-[#111B30] font-body font-700 text-[0.6rem] tracking-widest uppercase px-3 py-1">
                      {room.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-600 text-xl text-[#1C2B4A] mb-3">{room.title}</h3>
                    <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed mb-5">{room.desc}</p>
                    <Link href="/rooms">
                      <span className="inline-flex items-center gap-2 font-body font-700 text-xs tracking-widest uppercase text-[#1C2B4A] hover:text-[#8B5E3C] transition-colors duration-200 cursor-pointer">
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

      {/* ─── BREAKFAST FEATURE ─── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text */}
          <div className="bg-[#FAF7F2] flex items-center px-10 lg:px-16 py-20 order-2 lg:order-1">
            <AnimatedSection>
              <p className="section-label mb-4">Complimentary Every Morning</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#1C2B4A] mb-6 leading-tight">
                Start Your Day<br />
                <span className="italic">The Right Way</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-6">
                Our free hot and cold breakfast is included with every stay. Each morning, our rotating menu features scrambled eggs, sausage, biscuits, grits, seasonal fruits, baked goods, hot and cold cereals, and freshly brewed coffee.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-2">
                Whether you're fueling up for a full day at the show ring or heading out to explore Ocala's natural wonders, a hearty breakfast awaits you — at no extra charge.
              </p>
              <p className="font-body text-[#8B5E3C] text-xs font-semibold tracking-wide uppercase mb-8">
                Mon–Fri: 6:00am–9:00am &nbsp;·&nbsp; Sat–Sun: 6:00am–10:00am
              </p>
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-7 py-3.5 inline-block"
              >
                Reserve Your Room
              </a>
            </AnimatedSection>
          </div>
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto order-1 lg:order-2 overflow-hidden">
            <img
              src={BREAKFAST_IMG}
              alt="Equus Inn complimentary breakfast"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── OUTDOOR PROPERTY STRIP ─── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-3 h-64">
          <div className="overflow-hidden">
            <img src={OUTDOOR_IMG} alt="Equus Inn outdoor area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden">
            <img src={POOL_IMG} alt="Equus Inn pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden">
            <img src={PROPERTY_IMG} alt="Equus Inn property" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 lg:px-8 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label mb-4">Guest Stories</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#1C2B4A]">
              What Our Guests Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white p-8 shadow-sm border-t-2 border-[#D4AF6A]">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#D4AF6A] text-[#D4AF6A]" />
                    ))}
                  </div>
                  <p className="font-body text-[#2A2A2A]/70 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-display font-600 text-sm text-[#1C2B4A]">{t.author}</p>
                    <p className="font-body text-xs text-[#2A2A2A]/40 tracking-wide">{t.source}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION TEASER ─── */}
      <section className="py-20 px-6 lg:px-8 bg-[#3F4E4F]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label text-[#D4AF6A] mb-4">Prime Location</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#FAF7F2] mb-6">
              The Heart of Florida's<br />
              <span className="italic text-[#D4AF6A]">Horse Country</span>
            </h2>
            <p className="font-body text-[#FAF7F2]/70 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Located at 3434 SW College Road, Ocala, FL — just minutes off I-75 and 20 minutes from the World Equestrian Center. Easily accessible from Silver Springs State Park, downtown Ocala, and all major equestrian venues.
            </p>
            <div className="flex flex-wrap gap-8 justify-center mb-10">
              {[
                { label: "World Equestrian Center", dist: "20 min" },
                { label: "Florida Horse Park", dist: "20 min" },
                { label: "Silver Springs State Park", dist: "15 min" },
                { label: "I-75 Exit", dist: "2 min" },
              ].map((place, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-3xl text-[#D4AF6A]">{place.dist}</div>
                  <div className="font-body text-xs text-[#FAF7F2]/55 tracking-wide mt-1">{place.label}</div>
                </div>
              ))}
            </div>
            <Link href="/location">
              <span className="btn-outline text-xs px-8 py-3.5 inline-block">
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
          style={{ backgroundImage: `url(${POOL_AREA_IMG})` }}
        />
        <div className="absolute inset-0 bg-[#1C2B4A]/80" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label text-[#D4AF6A] mb-4">Ready to Experience Equus Inn?</p>
            <h2 className="font-display text-5xl font-bold text-white mb-6">
              Book Your Stay<br />
              <span className="italic text-[#D4AF6A]">Today</span>
            </h2>
            <p className="font-body text-white/75 text-base mb-10 leading-relaxed">
              Rooms fill quickly during WEC and HITS show seasons. Reserve early to secure your preferred room type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-10 py-4 inline-block"
              >
                Book Now
              </a>
              <a
                href="tel:+13528543200"
                className="btn-outline text-sm px-10 py-4 inline-block"
              >
                Call (352) 854-3200
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TripAdvisor Award Strip */}
      <section className="py-8 bg-[#FAF7F2] border-t border-[#1C2B4A]/10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div id="TA_certificateOfExcellence586" className="TA_certificateOfExcellence">
            <ul id="svZXhbNzz6F" className="TA_links R3E9zHluokWy" style={{listStyle: "none", padding: 0, margin: 0}}>
              <li id="QnI9zo6h0Zkm" className="zDBi3f">
                <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.com/Hotel_Review-g34496-d86798-Reviews-Equus_Inn-Ocala_Florida.html">
                  <img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_L.png" alt="TripAdvisor Travelers Choice 2025" className="h-20 w-auto" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-[#1C2B4A] mb-1">TripAdvisor Travelers' Choice 2025</p>
            <p className="font-body text-sm text-[#2A2A2A]/60">Award-winning hospitality in the heart of Ocala's horse country</p>
          </div>
          <a
            href="/reviews"
            className="font-body text-xs font-700 tracking-widest uppercase text-[#8B5E3C] border border-[#8B5E3C] px-6 py-3 hover:bg-[#8B5E3C] hover:text-white transition-colors whitespace-nowrap"
          >
            Read Guest Reviews
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
