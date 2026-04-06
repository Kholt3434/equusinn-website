/*
 * EQUUS INN PHOTO GALLERY PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 * Features: Filterable masonry grid + full-screen lightbox with keyboard navigation
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// ─── CDN IMAGE REGISTRY ───────────────────────────────────────────────────────
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd";

type Category = "all" | "exterior" | "rooms" | "bathrooms" | "pool" | "dining" | "lounge" | "meetings";

interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  category: Category[];
  caption: string;
  span?: "wide" | "tall" | "normal";
}

const photos: GalleryPhoto[] = [
  // Exterior
  {
    id: 1,
    src: `${CDN}/FrontExterior-HorseStatue_c9445e18.webp`,
    alt: "Equus Inn hotel entrance with horse statue",
    category: ["all", "exterior"],
    caption: "Hotel Entrance — The iconic horse statue welcomes every guest",
    span: "wide",
  },
  {
    id: 2,
    src: `${CDN}/FrontExterior_578913ce.webp`,
    alt: "Equus Inn hotel exterior Ocala Florida",
    category: ["all", "exterior"],
    caption: "Hotel Exterior — Nestled in the heart of Ocala's horse country",
  },
  {
    id: 3,
    src: `${CDN}/equusinn_exterior_f60796b2.jpg`,
    alt: "Equus Inn hotel building exterior",
    category: ["all", "exterior"],
    caption: "Property Overview — 152 rooms across a beautifully landscaped campus",
  },
  {
    id: 4,
    src: `${CDN}/equusinn_entrance_f0d4bc99.jpg`,
    alt: "Equus Inn hotel entrance driveway",
    category: ["all", "exterior"],
    caption: "Arrival Experience — A warm welcome from the moment you pull in",
  },
  // Rooms
  {
    id: 5,
    src: `${CDN}/KingRoom_5ae99094.webp`,
    alt: "Equus Inn king room with equestrian decor",
    category: ["all", "rooms"],
    caption: "King Room — Equestrian-themed décor with premium hardwood-style tile floors",
    span: "wide",
  },
  {
    id: 6,
    src: `${CDN}/TwoQueenRoom_ecf1b94f.webp`,
    alt: "Equus Inn two queen room",
    category: ["all", "rooms"],
    caption: "Double Queen Room — Perfect for families and groups, sleeps up to 4",
  },
  {
    id: 7,
    src: `${CDN}/SuiteKitchenette_392204ac.webp`,
    alt: "Equus Inn suite with kitchenette",
    category: ["all", "rooms"],
    caption: "Suite with Kitchenette — Full-size refrigerator and dining area for extended stays",
  },
  {
    id: 24,
    src: `${CDN}/spasuitebedroom_a29eb507.jpg`,
    alt: "Equus Inn Spa Suite bedroom",
    category: ["all", "rooms"],
    caption: "Spa Suite — Luxurious bedroom with spa-inspired finishes",
    span: "wide",
  },
  {
    id: 25,
    src: `${CDN}/SpaSuiteJrLivingArea_d53b4a8c.webp`,
    alt: "Equus Inn Spa Junior Suite living area",
    category: ["all", "rooms"],
    caption: "Spa Junior Suite — Separate living area for added comfort",
  },
  {
    id: 26,
    src: `${CDN}/spasuitelivingroom_a29eb507.jpg`,
    alt: "Equus Inn Spa Suite living room",
    category: ["all", "rooms"],
    caption: "Spa Suite Living Room — Spacious seating area with premium furnishings",
  },
  {
    id: 27,
    src: `${CDN}/CopyofCopyofKJA-KingJunior(2)_33c0fb91.webp`,
    alt: "Equus Inn King Junior room",
    category: ["all", "rooms"],
    caption: "King Junior — Cozy king bed with comfortable lounge chair",
  },
  {
    id: 28,
    src: `${CDN}/KingADAbedroomUSE_67b4766e.jpg`,
    alt: "Equus Inn ADA accessible king room",
    category: ["all", "rooms"],
    caption: "ADA Accessible King Room — Thoughtfully designed for all guests",
  },
  // Bathrooms
  {
    id: 8,
    src: `${CDN}/BathroomandVanity_36d4711a.webp`,
    alt: "Equus Inn luxury bathroom vanity",
    category: ["all", "bathrooms"],
    caption: "Bathroom Vanity — Modern bowl sink and premium finishes throughout",
  },
  {
    id: 9,
    src: `${CDN}/Bathroom(1)_860b652a.webp`,
    alt: "Equus Inn bathroom with rain showerhead",
    category: ["all", "bathrooms"],
    caption: "Luxury Rain Shower — Every room features a spa-quality rain showerhead",
  },
  {
    id: 10,
    src: `${CDN}/WaterfallWall_edfd5f66.jpg`,
    alt: "Equus Inn waterfall wall feature",
    category: ["all", "bathrooms"],
    caption: "Waterfall Wall Feature — A distinctive design element in select rooms",
  },
  // Pool & Outdoors
  {
    id: 11,
    src: `${CDN}/outdoorpool_41fd32e0.webp`,
    alt: "Equus Inn heated outdoor pool",
    category: ["all", "pool"],
    caption: "Heated Outdoor Pool — Open year-round for guests to enjoy Florida sunshine",
    span: "wide",
  },
  {
    id: 12,
    src: `${CDN}/LoungeandFireplace_471e8721.webp`,
    alt: "Equus Inn outdoor lounge and fireplace",
    category: ["all", "pool"],
    caption: "Outdoor Lounge & Fireplace — Gather around the fire under the Florida sky",
  },
  // Dining
  {
    id: 13,
    src: `${CDN}/diningarea(2)_d0bc3ff8.jpg`,
    alt: "Equus Inn complimentary breakfast dining area",
    category: ["all", "dining"],
    caption: "Breakfast Dining Area — Start every morning with a complimentary hot breakfast",
    span: "wide",
  },
  {
    id: 14,
    src: `${CDN}/BeerNWineMachine_93fd1e00.webp`,
    alt: "Equus Inn self-serve beer and wine machine",
    category: ["all", "dining"],
    caption: "Beer & Wine Bar — Self-serve craft beer and wine available every evening",
  },
  {
    id: 15,
    src: `${CDN}/beerandwinearea(2)_9f5e21c1.jpg`,
    alt: "Equus Inn beer and wine lounge area",
    category: ["all", "dining"],
    caption: "Evening Bar Area — Unwind with a cold beer or glass of wine after a long day",
  },
  // Lobby & Lounge
  {
    id: 16,
    src: `${CDN}/LobbyLoungeAre_v2_943f919a.webp`,
    alt: "Equus Inn lobby lounge with horse racing mural",
    category: ["all", "lounge"],
    caption: "Lobby Lounge — The dramatic horse racing mural sets the equestrian tone",
    span: "wide",
  },
  // Meetings
  {
    id: 18,
    src: `${CDN}/MeetingRoomBoardroomProjector_400eafd0.png`,
    alt: "Equus Inn meeting room boardroom setup with projector",
    category: ["all", "meetings"],
    caption: "Boardroom Setup — Full AV system with projector and screen for presentations",
    span: "wide",
  },
  {
    id: 19,
    src: `${CDN}/TheaterStyle_b9e6e5a5.webp`,
    alt: "Equus Inn meeting room theater setup",
    category: ["all", "meetings"],
    caption: "Theater Setup — Up to 35 guests for presentations and lectures",
  },
  {
    id: 20,
    src: `${CDN}/MeetingRoomClassroom_1bea37f5.png`,
    alt: "Equus Inn meeting room classroom setup",
    category: ["all", "meetings"],
    caption: "Classroom Setup — Training sessions and workshops for up to 24 guests",
  },
  {
    id: 21,
    src: `${CDN}/Ushape_56433fc1.png`,
    alt: "Equus Inn meeting room U-shape setup",
    category: ["all", "meetings"],
    caption: "U-Shape Setup — Collaborative discussions for up to 18 guests",
  },
  {
    id: 22,
    src: `${CDN}/MeetingRoomGirlsBirthday_ed47bdfc.png`,
    alt: "Equus Inn meeting room birthday celebration setup",
    category: ["all", "meetings"],
    caption: "Social Events — The meeting room transforms for birthdays and celebrations",
  },
  {
    id: 23,
    src: `${CDN}/MeetingRoomBoysBabyShower_29e078af.png`,
    alt: "Equus Inn meeting room baby shower setup",
    category: ["all", "meetings"],
    caption: "Baby Showers & Private Events — Intimate gatherings in a beautifully decorated space",
  },
];

const categories: { id: Category; label: string; count: number }[] = [
  { id: "all", label: "All Photos", count: photos.length },
  { id: "exterior", label: "Exterior", count: photos.filter(p => p.category.includes("exterior")).length },
  { id: "rooms", label: "Rooms & Suites", count: photos.filter(p => p.category.includes("rooms")).length },
  { id: "bathrooms", label: "Bathrooms", count: photos.filter(p => p.category.includes("bathrooms")).length },
  { id: "pool", label: "Pool & Outdoors", count: photos.filter(p => p.category.includes("pool")).length },
  { id: "dining", label: "Dining & Bar", count: photos.filter(p => p.category.includes("dining")).length },
  { id: "lounge", label: "Lobby & Lounge", count: photos.filter(p => p.category.includes("lounge")).length },
  { id: "meetings", label: "Meeting Room", count: photos.filter(p => p.category.includes("meetings")).length },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = photos.filter(p => p.category.includes(activeCategory));

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/FrontExterior-HorseStatue_c9445e18.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/90 via-[#111B30]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Visual Tour</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Photo Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 lg:px-8 border-b border-[#1C2B4A]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <AnimatedSection>
            <p className="section-label mb-2">Explore Equus Inn</p>
            <div className="gold-divider mb-0" />
          </AnimatedSection>
          <AnimatedSection>
            <p className="font-body text-sm text-[#2A2A2A]/60 max-w-lg">
              Browse our full collection of photos — from beautifully appointed rooms and suites to our heated pool, lobby lounge, dining area, and fully equipped meeting room.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 lg:px-8 bg-white border-b border-[#1C2B4A]/10 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
                className={`inline-flex items-center gap-2 px-4 py-2 font-body font-700 text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? "bg-[#1C2B4A] text-[#FAF7F2] border-[#1C2B4A]"
                    : "bg-transparent text-[#1C2B4A]/60 border-[#1C2B4A]/20 hover:border-[#1C2B4A]/50 hover:text-[#1C2B4A]"
                }`}
              >
                {cat.label}
                <span className={`text-[0.55rem] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? "bg-[#D4AF6A] text-[#111B30]" : "bg-[#1C2B4A]/10 text-[#1C2B4A]/50"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer bg-[#1C2B4A]/5"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/80 via-[#111B30]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="font-body text-xs text-[#FAF7F2]/90 leading-snug">{photo.caption}</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#D4AF6A]" />
                      <span className="font-body font-700 text-[0.55rem] tracking-widest uppercase text-[#D4AF6A]">View Full Size</span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#1C2B4A]/80 backdrop-blur-sm text-[#D4AF6A] font-body font-700 text-[0.5rem] tracking-widest uppercase px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {categories.find(c => c.id !== "all" && photo.category.includes(c.id))?.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-body text-[#2A2A2A]/40 text-sm">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6 lg:px-8 bg-[#2C3639]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF7F2] mb-4">
              Ready to Experience It in Person?
            </h2>
            <p className="font-body text-[#FAF7F2]/60 text-sm max-w-xl mx-auto mb-8">
              Photos only tell part of the story. Book your stay at Equus Inn and discover Ocala's most distinctive boutique hotel for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-10 py-4 inline-block"
              >
                Book Your Stay
              </a>
              <a href="tel:+13528543200" className="btn-outline text-xs px-10 py-4 inline-block">
                Call (352) 854-3200
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {/* ─── LIGHTBOX ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0A0F1A]/97 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 z-10 font-body font-700 text-[0.6rem] tracking-widest uppercase text-white/50">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Prev button */}
            <button
              className="absolute left-4 sm:left-6 z-10 w-11 h-11 bg-white/10 hover:bg-[#D4AF6A]/80 flex items-center justify-center transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next button */}
            <button
              className="absolute right-4 sm:right-6 z-10 w-11 h-11 bg-white/10 hover:bg-[#D4AF6A]/80 flex items-center justify-center transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center px-16 sm:px-24 max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className="max-h-[75vh] max-w-full object-contain shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <p className="font-body text-sm text-white/80">{currentPhoto.caption}</p>
                  <p className="font-body font-700 text-[0.55rem] tracking-widest uppercase text-[#D4AF6A] mt-1">
                    {categories.find(c => c.id !== "all" && currentPhoto.category.includes(c.id))?.label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0A0F1A]/90 py-3 px-4 overflow-x-auto">
              <div className="flex gap-2 justify-center min-w-max mx-auto">
                {filtered.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`flex-shrink-0 w-14 h-10 overflow-hidden transition-all duration-200 ${
                      i === lightboxIndex ? "ring-2 ring-[#D4AF6A] opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
