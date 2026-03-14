/**
 * EQUUS INN ROOMS & SUITES PAGE
 * Design: Southern Equestrian Heritage
 * Colors: Hunter Green #2C4C3B, Gold #C9A84C, Ivory #FDFBF7, Charcoal #2A2A2A
 * Typography: Playfair Display (headings) + Raleway (body)
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Wifi, Wind, Coffee, Bath, Refrigerator, Utensils, Check, ArrowRight } from "lucide-react";

const ROOM_MURAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_mural-awzoBnDHR2dKQohS7ZsnQp.webp";
const ROOM_KING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_king_161d87ce.jpg";
const ROOM_QUEEN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_queen_c8d47e56.jpg";
const SUITE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_suite_3029ddf4.jpg";
const BATHROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_bathroom_989c9365.jpg";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_room_king_161d87ce.jpg";

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

const standardAmenities = [
  { icon: Tv, label: "Smart TV with streaming" },
  { icon: Wifi, label: "Fiber optic high-speed WiFi" },
  { icon: Wind, label: "Individual climate control" },
  { icon: Coffee, label: "In-room coffee maker" },
  { icon: Bath, label: "Luxury rain showerhead" },
  { icon: Refrigerator, label: "Mini-fridge & microwave" },
];

const rooms = [
  {
    id: "king",
    tag: "Most Popular",
    title: "King Room",
    subtitle: "Our Signature Equestrian Suite",
    img: ROOM_MURAL_IMG,
    img2: ROOM_KING,
    description:
      "Our signature King Rooms are the heart of the Equus Inn experience. Each room features a dramatic full-wall equestrian mural depicting galloping horses in a timeless black-and-white photographic style — a true conversation piece that sets us apart from any other hotel in Ocala.",
    details:
      "Newly renovated with hardwood-style tile flooring, a luxury king-size bed with premium linens, a modern bathroom with a large bowl sink and rain showerhead, and all the technology you need for a comfortable stay.",
    features: [
      "King-size bed with premium linens",
      "Full-wall equestrian mural",
      "Hardwood-style tile floors",
      "Luxury rain showerhead",
      "Modern bowl sink vanity",
      "Smart TV (50\"+)",
      "Fiber optic WiFi",
      "Mini-fridge & microwave",
      "In-room safe",
      "Individual A/C control",
    ],
    color: "#2C4C3B",
  },
  {
    id: "queen",
    tag: "Great for Families",
    title: "Double Queen Room",
    subtitle: "Spacious Comfort for Groups",
    img: ROOM_QUEEN,
    img2: ROOM_MURAL_IMG,
    description:
      "Our Double Queen Rooms offer generous space and two plush queen beds, making them ideal for families, traveling companions, or equestrian teams attending shows at the World Equestrian Center or HITS.",
    details:
      "Like all our rooms, the Double Queen features the same high-quality renovation with equestrian-themed décor, modern bathrooms, and premium amenities. Extra space means extra comfort for longer stays.",
    features: [
      "Two queen-size beds",
      "Equestrian-themed wall art",
      "Hardwood-style tile floors",
      "Luxury rain showerhead",
      "Modern bowl sink vanity",
      "Smart TV (50\"+)",
      "Fiber optic WiFi",
      "Mini-fridge & microwave",
      "Seating area",
      "Individual A/C control",
    ],
    color: "#1E3328",
  },
  {
    id: "suite",
    tag: "Extended Stay",
    title: "Suite with Kitchenette",
    subtitle: "Home Away from Home",
    img: SUITE_IMG,
    img2: BATHROOM_IMG,
    description:
      "For guests planning an extended stay during show season or those who simply prefer more space, our Suites with Kitchenette offer the ultimate in comfort and convenience. These spacious accommodations include a full-size refrigerator, a dedicated dining area, and a separate living space.",
    details:
      "Perfect for equestrian competitors staying for multi-week events at the World Equestrian Center. All the amenities of our standard rooms, plus the added convenience of a kitchenette for preparing light meals.",
    features: [
      "King or queen bed configuration",
      "Full kitchenette",
      "Full-size refrigerator",
      "Dining area",
      "Separate living space",
      "Smart TV (50\"+)",
      "Fiber optic WiFi",
      "Luxury rain showerhead",
      "Modern bowl sink vanity",
      "Individual A/C control",
    ],
    color: "#2C4C3B",
  },
];

export default function Rooms() {
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
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3328]/90 via-[#1E3328]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#C9A84C] mb-3">Accommodations</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Rooms & Suites
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="font-body text-[#2A2A2A]/70 text-lg leading-relaxed mb-4">
              Every room at Equus Inn has been thoughtfully renovated to celebrate Ocala's equestrian heritage. From our signature full-wall horse murals to the modern rain showers and Smart TVs, each detail is designed to make your stay both memorable and comfortable.
            </p>
            <p className="font-body text-[#2A2A2A]/60 text-base leading-relaxed">
              All 152 rooms and suites include complimentary fiber optic WiFi, in-room coffee makers, mini-fridges, microwaves, and access to all hotel amenities — including our free hot breakfast each morning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Standard Amenities Bar */}
      <div className="bg-[#F5F0E8] py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center">
            {standardAmenities.map((a, i) => (
              <div key={i} className="flex items-center gap-2 text-[#2C4C3B]">
                <a.icon className="w-4 h-4 text-[#C9A84C]" />
                <span className="font-body text-xs tracking-wide text-[#2A2A2A]/70">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Images */}
                <div className={`grid grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img
                      src={room.img}
                      alt={`Equus Inn ${room.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img
                      src={room.img2}
                      alt={`Equus Inn ${room.title} detail`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Content */}
                <div
                  className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  style={{ backgroundColor: room.color }}
                >
                  <span className="inline-block bg-[#C9A84C] text-[#2A2A2A] font-body font-600 text-xs tracking-widest uppercase px-3 py-1 mb-6 w-fit">
                    {room.tag}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FDFBF7] mb-2">
                    {room.title}
                  </h2>
                  <p className="font-body text-[#C9A84C] text-sm tracking-wide mb-6 italic">{room.subtitle}</p>
                  <p className="font-body text-[#FDFBF7]/75 text-sm leading-relaxed mb-4">{room.description}</p>
                  <p className="font-body text-[#FDFBF7]/60 text-sm leading-relaxed mb-8">{room.details}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {room.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                        <span className="font-body text-xs text-[#FDFBF7]/70">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.booking.com/hotel/us/hotel-sw-college-road-ocala.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs px-7 py-3.5 font-body font-600 tracking-widest uppercase inline-flex items-center gap-2 w-fit"
                  >
                    Book This Room <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#2C4C3B]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label text-[#C9A84C] mb-4">Ready to Book?</p>
            <h2 className="font-display text-4xl font-bold text-[#FDFBF7] mb-6">
              Reserve Your Room Today
            </h2>
            <p className="font-body text-[#FDFBF7]/70 text-base mb-8 leading-relaxed">
              Rooms fill quickly during WEC show seasons. Book early to secure your preferred room type and enjoy all that Equus Inn has to offer.
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
