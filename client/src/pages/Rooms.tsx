/**
 * EQUUS INN ROOMS & SUITES PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Wifi, Wind, Coffee, Bath, Check, ArrowRight, BedDouble } from "lucide-react";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const roomsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Equus Inn Room Types",
  "description": "All room types available at Equus Inn, Ocala's premier equestrian boutique hotel.",
  "url": "https://www.equusinn.com/rooms",
  "numberOfItems": 13,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "King Room", "url": "https://www.equusinn.com/rooms#king" },
    { "@type": "ListItem", "position": 2, "name": "King Junior Room", "url": "https://www.equusinn.com/rooms#king-junior" },
    { "@type": "ListItem", "position": 3, "name": "Double Queen Room", "url": "https://www.equusinn.com/rooms#double-queen" },
    { "@type": "ListItem", "position": 4, "name": "Two Queen Suite", "url": "https://www.equusinn.com/rooms#two-queen-suite" },
    { "@type": "ListItem", "position": 5, "name": "King Suite", "url": "https://www.equusinn.com/rooms#king-suite" },
    { "@type": "ListItem", "position": 6, "name": "Spa Junior Suite", "url": "https://www.equusinn.com/rooms#spa-junior" },
    { "@type": "ListItem", "position": 7, "name": "Spa Suite", "url": "https://www.equusinn.com/rooms#spa-suite" },
    { "@type": "ListItem", "position": 8, "name": "King Suite ADA", "url": "https://www.equusinn.com/rooms#king-suite-ada" },
    { "@type": "ListItem", "position": 9, "name": "One Queen ADA", "url": "https://www.equusinn.com/rooms#one-queen-ada" },
    { "@type": "ListItem", "position": 10, "name": "One Queen Suite ADA", "url": "https://www.equusinn.com/rooms#one-queen-suite-ada" },
    { "@type": "ListItem", "position": 11, "name": "Two Queen Suite ADA", "url": "https://www.equusinn.com/rooms#two-queen-suite-ada" },
    { "@type": "ListItem", "position": 12, "name": "King ADA Room", "url": "https://www.equusinn.com/rooms#ada-king" },

  ]
};

// Real hotel images — updated with actual room photos
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd";
const HERO_IMG = `${CDN}/KingRoom_5ae99094.webp`;
// King Room
const ROOM_1A = `${CDN}/KingRoom_5ae99094.webp`;
const ROOM_1B = `${CDN}/BathroomandVanity_36d4711a.webp`;
// King Junior
const KING_JR_A = `${CDN}/CopyofCopyofKJA-KingJunior(2)_33c0fb91.webp`;
const KING_JR_B = `${CDN}/CopyofCopyofKJA-KingJunior(9)_03d2a1f0.webp`;
// Double Queen
const ROOM_2A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenRoomNoCHair_a60dbf08.webp";
const ROOM_2B = `${CDN}/Bathroom(1)_860b652a.webp`;
// Two Queen Suite
const TWO_QUEEN_SUITE_A = `${CDN}/TwoQueenSuite_72c25328.webp`;
const TWO_QUEEN_SUITE_B = `${CDN}/BathroomandVanity_36d4711a.webp`;
// King Suite — bedroom + living room (updated photos)
const KING_SUITE_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingSuiteBedroom_c7c75828.jpg";
const KING_SUITE_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingSuiteLivingRoom_5896f9ed.jpg";
// Spa Junior Suite
const SPA_JR_A = `${CDN}/spasuitejrbedroom_42d10bdb.jpg`;
const SPA_JR_B = `${CDN}/SpaSuiteJrLivingArea_d53b4a8c.webp`;
// Spa Suite
const SPA_SUITE_A = `${CDN}/spasuitebedroom_a29eb507.jpg`;
const SPA_SUITE_B = `${CDN}/SpaSuiteBathroom_172a9e7d.webp`;
// King Suite ADA
const KING_SUITE_ADA_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingSuiteADABed_fb3a0bf8.jpg";
const KING_SUITE_ADA_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/_14KingSuiteADAShower_8a0c2f61.jpg";
const KING_SUITE_ADA_C = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingSuiteADALivingArea_8cd125b4.jpg";
// One Queen ADA
const ONE_QUEEN_ADA_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/OneQueenADABed_a8043aa6.jpg";
const ONE_QUEEN_ADA_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/iQueenADAShower_eed77279.jpg";
// One Queen Suite ADA
const ONE_QUEEN_SUITE_ADA_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/OneQueenSuiteADABed_e39f51c6.jpg";
const ONE_QUEEN_SUITE_ADA_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/iQueenADAShower_56543e63.jpg";
const ONE_QUEEN_SUITE_ADA_C = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/OneQueenSuiteADALivingArea_d0709e4e.jpg";
// Two Queen Suite ADA
const TWO_QUEEN_SUITE_ADA_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenSuiteADABed_ffda7c38.jpg";
const TWO_QUEEN_SUITE_ADA_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenSuiteADAShowerandToilet_49790559.jpg";
const TWO_QUEEN_SUITE_ADA_C = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenSuiteADALivingArea_fac241aa.jpg";
// ADA King
const ADA_KING_A = `${CDN}/KingADAbedroomUSE_ede95188.jpg`;
const ADA_KING_B = `${CDN}/KingADAbathroom_493444c0.jpg`;
// ADA Two Queen — actual room photos
const ADA_TQ_A = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenSuiteADABed_ffda7c38.jpg";
const ADA_TQ_B = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/TwoQueenSuiteADABathroom_53ad5123.jpg";
// Shared
const EXTERIOR_IMG = `${CDN}/FrontExterior_578913ce.webp`;
const POOL_IMG = `${CDN}/outdoorpool_41fd32e0.webp`;
const BATH_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/OneQueenADABed_a8043aa6.jpg";
const BATH_2 = `${CDN}/ADABathroom_fa553d74.webp`;

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

const standardFeatures = [
  { icon: Tv, label: "Smart TV" },
  { icon: Wifi, label: "Fiber Optic WiFi" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Bath, label: "Luxury Rain Shower" },
  { icon: Wind, label: "Climate Control" },
  { icon: Check, label: "Equestrian Décor" },
];

const rooms = [
  {
    id: "king",
    tag: "Most Popular",
    title: "King Room",
    subtitle: "Signature Equestrian Experience",
    imgA: ROOM_1A,
    imgB: ROOM_1B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~320 sq ft",
    desc: "Our signature king rooms are the heart of the Equus Inn experience. Each room has been thoughtfully designed with equestrian-themed décor that pays homage to Ocala's horse heritage. Featuring hardwood-style tile floors, a luxury rain showerhead, modern bowl sink, and a Smart TV, these rooms blend comfort with character.",
    features: [
      "1 King Bed with premium linens",
      "Equestrian-themed décor throughout",
      "Luxury rain showerhead & modern bowl sink",
      "Hardwood-style tile floors",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "In-room safe",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "king-junior",
    tag: "Comfortable & Cozy",
    title: "King Junior Room",
    subtitle: "Relaxed Comfort for Solo Travelers & Couples",
    imgA: KING_JR_A,
    imgB: KING_JR_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~300 sq ft",
    desc: "The King Junior offers all the comfort of our signature king rooms in a cozy, well-appointed layout. Perfect for solo travelers or couples, this room features the same equestrian-inspired décor, premium linens, and modern finishes. Note: this room features a comfortable chair rather than a sofa.",
    features: [
      "1 King Bed with premium linens",
      "Comfortable seating chair",
      "Equestrian-themed décor throughout",
      "Luxury rain showerhead & modern bowl sink",
      "Hardwood-style tile floors",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "double-queen",
    tag: "Great for Groups",
    title: "Double Queen Room",
    subtitle: "Spacious Comfort for Families & Teams",
    imgA: ROOM_2A,
    imgB: ROOM_2B,
    beds: "2 Queen Beds",
    guests: "Up to 4 Guests",
    sqft: "~380 sq ft",
    desc: "Our double queen rooms offer the perfect solution for families, groups attending equestrian events, or travelers who simply want extra space. Two queen beds with premium linens, all-new furnishings, and the same equestrian-inspired décor found throughout the property make this room a comfortable base for your Ocala adventures.",
    features: [
      "2 Queen Beds with premium linens",
      "Equestrian-themed décor throughout",
      "Luxury rain showerhead & modern bowl sink",
      "Hardwood-style tile floors",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Ideal for families & groups",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "two-queen-suite",
    tag: "Suite",
    title: "Two Queen Suite",
    subtitle: "Extra Space for Families & Groups",
    imgA: TWO_QUEEN_SUITE_A,
    imgB: TWO_QUEEN_SUITE_B,
    beds: "2 Queen Beds",
    guests: "Up to 4 Guests",
    sqft: "~440 sq ft",
    desc: "The Two Queen Suite combines the sleeping capacity of our double queen rooms with the added space and comfort of a suite layout. Includes a kitchenette with full-size refrigerator, microwave, and dining area — ideal for families or small groups who want a little more room to spread out during a show week or extended stay in Ocala.",
    features: [
      "2 Queen Beds with premium linens",
      "Kitchenette with full-size refrigerator",
      "Microwave & dining area",
      "Additional living space",
      "Equestrian-themed décor throughout",
      "Luxury rain showerhead & modern bowl sink",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "king-suite",
    tag: "Suite",
    title: "King Suite",
    subtitle: "Elevated Comfort with Separate Living Area",
    imgA: KING_SUITE_A,
    imgB: KING_SUITE_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~460 sq ft",
    desc: "The King Suite elevates your stay with a separate living area featuring a sofa, coffee table, and dining space, plus a full kitchenette with a full-size refrigerator and microwave. Ideal for guests who want more room to relax after a long day at the show grounds, or for those who prefer a more spacious retreat. All the character of Equus Inn, with added comfort.",
    features: [
      "1 King Bed with premium linens",
      "Separate living/sitting area with sofa",
      "Kitchenette with full-size refrigerator",
      "Microwave & dining area",
      "Equestrian-themed décor throughout",
      "Luxury rain showerhead & modern bowl sink",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "spa-junior-suite",
    tag: "Spa Suite",
    title: "Spa Junior Suite",
    subtitle: "Relaxation Meets Equestrian Elegance",
    imgA: SPA_JR_A,
    imgB: SPA_JR_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~420 sq ft",
    desc: "The Spa Junior Suite is designed for guests who want a touch of luxury without sacrificing the warm, equestrian character of the Equus Inn. A spa-inspired bathroom with premium finishes and upgraded bath amenities makes this suite a perfect choice for a romantic getaway or a well-deserved retreat.",
    features: [
      "1 King Bed with premium linens",
      "Spa-inspired bathroom with premium finishes",
      "Upgraded bath amenities",
      "Equestrian-themed décor throughout",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "spa-suite",
    tag: "Most Luxurious",
    title: "Spa Suite",
    subtitle: "The Ultimate Equus Inn Experience",
    imgA: SPA_SUITE_A,
    imgB: SPA_SUITE_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~520 sq ft",
    desc: "Our most luxurious accommodation, the Spa Suite offers the full Equus Inn experience elevated to its finest. Expansive spa bathroom, premium finishes throughout, and a spacious layout make this the ideal choice for special occasions, honeymoons, or simply treating yourself to the best Ocala has to offer.",
    features: [
      "1 King Bed with premium linens",
      "Full spa bathroom with premium finishes",
      "Upgraded bath amenities & robes",
      "Separate living/sitting area",
      "Equestrian-themed décor throughout",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "king-suite-ada",
    tag: "ADA Accessible Suite",
    title: "King Suite ADA",
    subtitle: "Accessible Luxury with Separate Living Area",
    imgA: KING_SUITE_ADA_A,
    imgB: KING_SUITE_ADA_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~460 sq ft",
    desc: "The King Suite ADA combines accessible features with the luxury of a separate living area. Perfect for guests who require ADA accommodations and want extra space to relax. Includes a full kitchenette, accessible bathroom with grab bars and wide clearances, and a spacious living/dining area.",
    features: [
      "1 King Bed with premium linens",
      "Separate living/sitting area",
      "Kitchenette with full-size refrigerator",
      "Accessible bathroom with grab bars",
      "Wide doorways throughout",
      "Equestrian-themed décor",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "one-queen-ada",
    tag: "ADA Accessible",
    title: "One Queen ADA Room",
    subtitle: "Accessible Comfort for Solo Travelers",
    imgA: ONE_QUEEN_ADA_A,
    imgB: ONE_QUEEN_ADA_B,
    beds: "1 Queen Bed",
    guests: "Up to 2 Guests",
    sqft: "~340 sq ft",
    desc: "The One Queen ADA Room provides full accessibility in a comfortable, well-appointed layout. Ideal for solo travelers or couples who require ADA accommodations. Features an accessible bathroom with grab bars, wide doorways, and the same equestrian-themed décor found throughout Equus Inn.",
    features: [
      "1 Queen Bed with premium linens",
      "Accessible bathroom with grab bars",
      "Wide doorways throughout",
      "Equestrian-themed décor",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "one-queen-suite-ada",
    tag: "ADA Accessible Suite",
    title: "One Queen Suite ADA",
    subtitle: "Accessible Suite with Living Space",
    imgA: ONE_QUEEN_SUITE_ADA_A,
    imgB: ONE_QUEEN_SUITE_ADA_B,
    imgC: ONE_QUEEN_SUITE_ADA_C,
    beds: "1 Queen Bed",
    guests: "Up to 2 Guests",
    sqft: "~420 sq ft",
    desc: "The One Queen Suite ADA offers accessible accommodations with the added comfort of a separate living area. Perfect for guests who require ADA features and want extra space. Includes a kitchenette, accessible bathroom, and living/dining area.",
    features: [
      "1 Queen Bed with premium linens",
      "Separate living/sitting area",
      "Kitchenette with full-size refrigerator",
      "Accessible bathroom with grab bars",
      "Wide doorways throughout",
      "Equestrian-themed décor",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "two-queen-suite-ada",
    tag: "ADA Accessible Suite",
    title: "Two Queen Suite ADA",
    subtitle: "Accessible Space for Families & Groups",
    imgA: TWO_QUEEN_SUITE_ADA_A,
    imgB: TWO_QUEEN_SUITE_ADA_B,
    beds: "2 Queen Beds",
    guests: "Up to 4 Guests",
    sqft: "~440 sq ft",
    desc: "The Two Queen Suite ADA offers full accessibility for families and groups who require ADA accommodations. Two queen beds, a spacious accessible bathroom with grab bars and wide clearances, plus a full kitchenette and separate living area make this the ideal choice for accessible group stays.",
    features: [
      "2 Queen Beds with premium linens",
      "Separate living/sitting area",
      "Kitchenette with full-size refrigerator",
      "Accessible bathroom with grab bars",
      "Wide doorways throughout",
      "Equestrian-themed décor",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
  {
    id: "ada-king",
    tag: "ADA Accessible",
    title: "King ADA Room",
    subtitle: "Accessible Comfort Without Compromise",
    imgA: ADA_KING_A,
    imgB: ADA_KING_B,
    beds: "1 King Bed",
    guests: "Up to 2 Guests",
    sqft: "~340 sq ft",
    desc: "Our King ADA Room is thoughtfully designed to provide full accessibility without sacrificing the equestrian character and modern comfort that define the Equus Inn. Features an accessible bathroom layout with grab bars, wide doorways throughout, and the same equestrian-themed décor and premium finishes found in all our rooms.",
    features: [
      "1 King Bed with premium linens",
      "Accessible bathroom with grab bars",
      "Accessible bathroom with wide clearances",
      "Wide doorways throughout",
      "Equestrian-themed décor",
      "Smart TV with streaming",
      "Fiber optic WiFi",
      "Coffee maker & mini fridge",
      "Climate control (A/C & heat)",
      "Complimentary hot breakfast included",
    ],
  },
];

export default function Rooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SchemaMarkup id="rooms-page" schema={roomsSchema} />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/90 via-[#111B30]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Accommodations</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Rooms & Suites
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label mb-4">152 Rooms & Suites</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C2B4A] mb-5">
              Every Room Tells a Story
            </h2>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Each of our 152 rooms and suites has been designed with equestrian-themed décor, luxury finishes, and modern technology. From our signature king rooms to our spa suites, every accommodation reflects the spirit and heritage of Ocala's horse country. We offer a full range of ADA-accessible rooms and suites to ensure all guests enjoy the Equus Inn experience. All suites offer additional living space and upgraded amenities for a more comfortable extended stay.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Standard Features Bar */}
      <section className="py-10 px-6 lg:px-8 bg-[#2B3F4E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {standardFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-[#FAF7F2]/75">
                <f.icon className="w-4 h-4 text-[#D4AF6A]" />
                <span className="font-body font-700 text-xs tracking-widest uppercase">{f.label}</span>
                {i < standardFeatures.length - 1 && <span className="hidden sm:block text-[#D4AF6A]/30 ml-4">·</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Listings */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                {/* Images */}
                <div className={`space-y-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={room.imgA}
                      alt={`Equus Inn ${room.title} — main view`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4AF6A] text-[#111B30] font-body font-700 text-[0.6rem] tracking-widest uppercase px-3 py-1.5">
                      {room.tag}
                    </div>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={room.imgB}
                      alt={`Equus Inn ${room.title} — detail view`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {room.imgC && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={room.imgC}
                        alt={`Equus Inn ${room.title} — living area view`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="section-label mb-3">{room.subtitle}</p>
                  <div className="gold-divider mb-5" />
                  <h2 className="font-display text-4xl font-bold text-[#1C2B4A] mb-4">{room.title}</h2>

                  {/* Quick specs */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-[#F2EDE4] px-4 py-2">
                      <BedDouble className="w-4 h-4 text-[#8B5E3C]" />
                      <span className="font-body text-xs font-700 text-[#1C2B4A]">{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F2EDE4] px-4 py-2">
                      <span className="font-body text-xs font-700 text-[#1C2B4A]">{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F2EDE4] px-4 py-2">
                      <span className="font-body text-xs font-700 text-[#1C2B4A]">{room.sqft}</span>
                    </div>
                  </div>

                  <p className="font-body text-[#2A2A2A]/70 text-sm leading-relaxed mb-6">{room.desc}</p>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {room.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF6A] mt-0.5 flex-shrink-0" />
                        <span className="font-body text-xs text-[#2A2A2A]/65 leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-xs px-8 py-4 inline-flex items-center gap-2"
                    >
                      Book This Room <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="tel:+13528543200" className="btn-outline-dark text-xs px-8 py-4 inline-block">
                      Call to Reserve
                    </a>
                  </div>
                </div>
              </div>
              {i < rooms.length - 1 && <div className="border-b border-[#1C2B4A]/10 mt-20" />}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bathroom Gallery */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="section-label mb-4">Luxury Finishes</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#1C2B4A]">Bathrooms & Amenities</h2>
            <p className="font-body text-[#2A2A2A]/65 text-sm mt-3 max-w-2xl">Every bathroom features a luxury rain showerhead, modern bowl sink, and premium finishes. ADA-accessible rooms feature accessible tubs with safety grab bars and spacious layouts — room configurations may vary. Guests requiring ADA accommodations are encouraged to call ahead so we can ensure the right room is reserved for you.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-72 overflow-hidden">
              <img src={BATH_1} alt="Equus Inn bathroom vanity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-72 overflow-hidden">
              <img src={BATH_2} alt="Equus Inn ADA accessible bathroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="mt-4 bg-[#A27B5B]/8 border-l-4 border-[#A27B5B] p-4">
            <p className="font-body text-xs text-[#1C2B4A] leading-relaxed">
              <strong>ADA Accessible Rooms Available:</strong> Our King Standard ADA and Two Queen Suite ADA rooms feature accessible tubs with safety grab bars and spacious layouts. Room configurations differ from standard rooms — please call <a href="tel:+13528543200" className="underline">(352) 854-3200</a> to reserve an ADA room and confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* Property Photos Strip */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2 h-56">
          <div className="overflow-hidden">
            <img src={EXTERIOR_IMG} alt="Equus Inn hotel exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden">
            <img src={POOL_IMG} alt="Equus Inn heated pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#DCD7C9]/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="section-label mb-4">Good to Know</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#1C2B4A]">Hotel Policies</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Check-In / Check-Out", body: "Check-in: 3:00 PM\nCheck-out: 11:00 AM\nEarly check-in available upon request, subject to availability. Early or late check-in fees may apply." },
              { title: "Pet Policy", body: "Pets of all sizes welcome. A pet fee of $35 per pet, per night applies. Please notify us at booking. Pets must be kept on leash in common areas." },
              { title: "Cancellation", body: "Free cancellation up to 24 hours before check-in. Please review the cancellation policy at time of booking as it may vary by rate." },
              { title: "Parking", body: "Free on-site parking for all guests. Please call ahead for trailer parking availability." },
            ].map((policy, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white p-6 shadow-sm h-full">
                  <h3 className="font-display font-600 text-base text-[#1C2B4A] mb-3">{policy.title}</h3>
                  <p className="font-body text-xs text-[#2A2A2A]/65 leading-relaxed whitespace-pre-line">{policy.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#3D5A6B]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-[#FAF7F2] mb-4">
              Ready to Book Your Room?
            </h2>
            <p className="font-body text-[#FAF7F2]/65 text-sm max-w-xl mx-auto mb-8">
              Rooms fill quickly during WEC and HITS show seasons. Book early to secure your preferred room type and dates.
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
