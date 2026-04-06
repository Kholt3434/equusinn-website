/**
 * EQUUS INN — THINGS TO DO IN OCALA PAGE
 * Design: Modern Equestrian Luxury
 * Purpose: SEO + AI search optimized local guide — positions Equus Inn as the area expert
 * Brand Colors used:
 *   Deep Navy    #1C2B4A  — hero overlay, primary headings
 *   Saddle Brown #8B5E3C  — section labels, accents
 *   Champagne    #D4AF6A  — dividers, gold highlights
 *   Dark Teal    #2C3639  — equestrian section background
 *   Forest Teal  #3F4E4F  — outdoor section background
 *   Warm Tan     #A27B5C  — restaurant card accents
 *   Blush Rose   #DCB7C8  — shopping/spa section accents
 *   Ivory        #FAF7F2  — light section backgrounds
 */

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  MapPin, Star, Clock, ExternalLink, ChevronRight,
  Utensils, ShoppingBag, TreePine, Award, Compass, Coffee
} from "lucide-react";

// ── Schema markup for AI + Google ──────────────────────────────────────────────
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Ocala, Florida — Equus Inn Local Guide",
  "description": "A curated guide to the best things to do in Ocala, Florida, including equestrian venues, top restaurants, shopping, and outdoor adventures near the World Equestrian Center.",
  "url": "https://newequusinn.manus.space/things-to-do",
  "touristType": ["Equestrian", "Nature", "Culinary", "Cultural"],
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "World Equestrian Center",
      "description": "The world's premier equestrian venue hosting year-round competitions, shows, and events.",
      "address": { "@type": "PostalAddress", "addressLocality": "Ocala", "addressRegion": "FL" }
    },
    {
      "@type": "TouristAttraction",
      "name": "Silver Springs State Park",
      "description": "Florida's oldest attraction featuring world-famous glass-bottom boat tours over crystal-clear springs.",
      "address": { "@type": "PostalAddress", "addressLocality": "Ocala", "addressRegion": "FL" }
    },
    {
      "@type": "TouristAttraction",
      "name": "Ocala National Forest",
      "description": "Over 600 square miles of natural forest with springs, hiking trails, and wildlife.",
      "address": { "@type": "PostalAddress", "addressLocality": "Ocala", "addressRegion": "FL" }
    }
  ],
  "containedInPlace": {
    "@type": "City",
    "name": "Ocala",
    "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" }
  }
};

// ── Animation helper ──────────────────────────────────────────────────────────
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

// ── Category pill ─────────────────────────────────────────────────────────────
function CategoryPill({ label, color, textColor }: { label: string; color: string; textColor: string }) {
  return (
    <span
      className="inline-block font-body font-700 text-[0.55rem] tracking-widest uppercase px-3 py-1"
      style={{ backgroundColor: color, color: textColor }}
    >
      {label}
    </span>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({
  label, title, subtitle, labelColor = "#8B5E3C", titleColor = "#1C2B4A", dividerColor = "#D4AF6A", center = false
}: {
  label: string; title: string; subtitle?: string;
  labelColor?: string; titleColor?: string; dividerColor?: string; center?: boolean;
}) {
  return (
    <AnimatedSection className={center ? "text-center" : ""}>
      <p className="font-body font-700 text-[0.65rem] tracking-[0.22em] uppercase mb-3" style={{ color: labelColor }}>{label}</p>
      <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: dividerColor, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }} />
      <h2 className="font-display font-600 text-3xl md:text-4xl leading-tight mb-4" style={{ color: titleColor }}>{title}</h2>
      {subtitle && <p className="font-body text-sm leading-relaxed opacity-75 max-w-2xl" style={{ color: titleColor, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>{subtitle}</p>}
    </AnimatedSection>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const equestrian = [
  {
    name: "World Equestrian Center",
    tag: "Signature Venue",
    distance: "20 min from Equus Inn",
    desc: "The crown jewel of Ocala's equestrian world — a 378-acre complex hosting world-class hunter/jumper, dressage, reining, and breed shows year-round. Walk the grounds, watch warm-ups from the rail, or attend an evening Grand Prix under the lights.",
    tip: "Ask our front desk for the current show schedule — we always have it on hand.",
    icon: Award,
    tagColor: "#D4AF6A",
    tagText: "#1C2B4A",
  },
  {
    name: "Florida Horse Park",
    tag: "Equestrian Events",
    distance: "25 min from Equus Inn",
    desc: "A 500-acre multi-discipline venue hosting eventing, trail rides, and endurance competitions. The park's cross-country course is one of the finest in the Southeast and draws competitors from across the country.",
    tip: "Open to the public on non-event days — great for a morning walk along the course.",
    icon: Award,
    tagColor: "#2C3639",
    tagText: "#FAF7F2",
  },
  {
    name: "Horse Shows in the Sun (HITS)",
    tag: "Show Circuit",
    distance: "15 min from Equus Inn",
    desc: "One of the most prestigious hunter/jumper circuits in the country, running January through April. The Ocala Winter Circuit draws Olympic-caliber riders and thousands of horses to the Sunshine State each season.",
    tip: "General admission is free for most classes — a fantastic way to spend a morning.",
    icon: Award,
    tagColor: "#3F4E4F",
    tagText: "#FAF7F2",
  },
  {
    name: "Gypsy Gold Farm",
    tag: "Farm Tour",
    distance: "30 min from Equus Inn",
    desc: "Home to the legendary Gypsy Vanner horse breed in America. Tour the farm, meet the horses, and learn the history of this stunning Irish draft breed. A must for any horse lover visiting Ocala.",
    tip: "Tours by appointment — book in advance as spots fill quickly during show season.",
    icon: Award,
    tagColor: "#A27B5C",
    tagText: "#FAF7F2",
  },
];

const restaurants = [
  {
    name: "Remington's Prime Steakhouse",
    category: "Fine Dining",
    vibe: "Upscale steakhouse with an extensive wine list and private dining rooms. A favorite among equestrian professionals after a big win.",
    distance: "12 min",
    priceRange: "$$$",
    tagColor: "#1C2B4A",
  },
  {
    name: "Harry's Seafood Bar & Grille",
    category: "Seafood",
    vibe: "Ocala's most beloved restaurant — New Orleans-inspired seafood in a lively downtown setting. The shrimp and grits are legendary.",
    distance: "15 min",
    priceRange: "$$$",
    tagColor: "#2C3639",
  },
  {
    name: "Braised Onion",
    category: "Farm-to-Table",
    vibe: "Locally sourced ingredients, creative seasonal menus, and a warm, intimate atmosphere. One of Ocala's most celebrated culinary destinations.",
    distance: "14 min",
    priceRange: "$$$",
    tagColor: "#3F4E4F",
  },
  {
    name: "Salted Brick",
    category: "American Bistro",
    vibe: "Craft cocktails, charcuterie boards, and elevated comfort food in a stylish setting. Perfect for a relaxed dinner after a day at the shows.",
    distance: "10 min",
    priceRange: "$$",
    tagColor: "#8B5E3C",
  },
  {
    name: "Bella Cosa Italian Ristorante",
    category: "Italian",
    vibe: "Authentic Italian cuisine in an elegant setting. House-made pastas, wood-fired dishes, and an impressive wine cellar make this a perennial favorite.",
    distance: "11 min",
    priceRange: "$$$",
    tagColor: "#A27B5C",
  },
  {
    name: "La Cuisine",
    category: "French",
    vibe: "Ocala's premier French restaurant — classic technique, impeccable service, and a romantic atmosphere. Reserve well in advance during show season.",
    distance: "15 min",
    priceRange: "$$$$",
    tagColor: "#D4AF6A",
  },
  {
    name: "Juniper",
    category: "Contemporary",
    vibe: "Modern American cuisine with a Florida twist. Seasonal menus, craft cocktails, and a beautiful patio make this a go-to for special occasions.",
    distance: "13 min",
    priceRange: "$$$",
    tagColor: "#2C3639",
  },
  {
    name: "District Bar & Kitchen",
    category: "Gastropub",
    vibe: "Lively downtown spot with creative burgers, local craft beers, and a great happy hour. The rooftop patio is one of Ocala's best people-watching perches.",
    distance: "16 min",
    priceRange: "$$",
    tagColor: "#3F4E4F",
  },
];

const shopping = [
  {
    name: "Historic Downtown Ocala Square",
    category: "Shopping District",
    desc: "Ocala's charming downtown square is lined with independent boutiques, art galleries, gift shops, and cafés. Browse local artisan goods, equestrian-themed gifts, and Florida-made products in a walkable, historic setting.",
    highlight: "Don't miss the monthly Art Walk — local artists showcase their work around the square.",
    color: "#DCB7C8",
    textColor: "#1C2B4A",
  },
  {
    name: "Antique Row — North Pine Avenue",
    category: "Antiques & Collectibles",
    desc: "Ocala's antique district stretches along North Pine Avenue and features several large multi-dealer malls including Ole Cracker House, Diggers Antique Mall, and Florida Marion Antiques. A treasure hunter's paradise with over 50,000 sq ft of inventory.",
    highlight: "Arrive early on weekends — the best finds go quickly.",
    color: "#A27B5C",
    textColor: "#FAF7F2",
  },
  {
    name: "Paddock Mall",
    category: "Shopping Mall",
    desc: "Ocala's primary retail destination with over 100 stores including major department stores, specialty retailers, and a full food court. Conveniently located near I-75 and just minutes from Equus Inn.",
    highlight: "Includes a 16-screen AMC Theatre — great for a rainy afternoon.",
    color: "#3F4E4F",
    textColor: "#FAF7F2",
  },
  {
    name: "Equestrian Boutiques at WEC",
    category: "Equestrian Retail",
    desc: "The World Equestrian Center campus features a collection of high-end equestrian boutiques carrying everything from custom saddles and bespoke riding attire to equestrian art and gifts. A must-visit for horse enthusiasts.",
    highlight: "Several vendors set up during major show weeks — check the WEC event calendar.",
    color: "#2C3639",
    textColor: "#FAF7F2",
  },
];

const outdoor = [
  {
    name: "Silver Springs State Park",
    category: "Natural Wonder",
    desc: "Florida's oldest tourist attraction and one of the world's largest artesian spring formations. The famous glass-bottom boat tours reveal an underwater world of crystal-clear springs, ancient fossils, and abundant wildlife. Kayaking, paddleboarding, and wildlife viewing are also available.",
    distance: "25 min",
    icon: TreePine,
    accentColor: "#3F4E4F",
  },
  {
    name: "Ocala National Forest",
    category: "Wilderness",
    desc: "Over 600 square miles of longleaf pine forest, freshwater springs, and diverse wildlife. The forest offers hundreds of miles of hiking and biking trails, swimming at Alexander Springs and Juniper Springs, and some of the best bass fishing in Florida.",
    distance: "35 min",
    icon: TreePine,
    accentColor: "#2C3639",
  },
  {
    name: "Santos Trailhead",
    category: "Biking & Hiking",
    desc: "One of Florida's premier mountain biking destinations with over 80 miles of singletrack trails ranging from beginner-friendly loops to technical expert routes. The Santos Trail system is part of the Florida Greenways and Trails network.",
    distance: "20 min",
    icon: Compass,
    accentColor: "#3F4E4F",
  },
  {
    name: "Rainbow Springs State Park",
    category: "Springs & Swimming",
    desc: "A stunning natural spring with a 40-foot waterfall — one of Florida's most beautiful. Swim in the crystal-clear 68°F water, kayak the Rainbow River, or simply relax on the manicured grounds. A perfect half-day escape.",
    distance: "40 min",
    icon: TreePine,
    accentColor: "#2C3639",
  },
  {
    name: "Sholom Park",
    category: "Gardens & Walking",
    desc: "A serene 60-acre botanical garden and walking park in the heart of Ocala. Beautifully maintained paths wind through themed gardens, koi ponds, and peaceful meditation areas. Free admission — a perfect morning stroll.",
    distance: "10 min",
    icon: TreePine,
    accentColor: "#A27B5C",
  },
  {
    name: "Lake Weir",
    category: "Boating & Fishing",
    desc: "A 5,685-acre natural lake offering excellent bass fishing, boating, and swimming. The lake's clear water and sandy shores make it a favorite local escape. Boat rentals are available at the marina.",
    distance: "30 min",
    icon: Compass,
    accentColor: "#3F4E4F",
  },
];

const itinerary = [
  {
    day: "Morning",
    icon: Coffee,
    color: "#D4AF6A",
    title: "Equestrian Sunrise",
    activities: [
      "Start with breakfast at Equus Inn — our complimentary continental spread is ready by 7am",
      "Head to WEC or HITS for morning warm-ups (free rail viewing)",
      "Grab a coffee at The Polo Pony on the WEC campus",
    ]
  },
  {
    day: "Midday",
    icon: Utensils,
    color: "#A27B5C",
    title: "Explore & Dine",
    activities: [
      "Browse the equestrian boutiques at WEC or drive downtown to the Historic Square",
      "Lunch at Salted Brick or Harry's Seafood — both are 10–15 minutes from the inn",
      "Afternoon visit to Silver Springs for a glass-bottom boat tour",
    ]
  },
  {
    day: "Evening",
    icon: Star,
    color: "#2C3639",
    title: "Dine & Unwind",
    activities: [
      "Pre-dinner drinks at District Bar & Kitchen's rooftop patio",
      "Dinner at Remington's Prime, Braised Onion, or La Cuisine",
      "Return to Equus Inn — relax in the courtyard or unwind in your suite",
    ]
  },
];

// ── Main component ─────────────────────────────────────────────────────────────
export default function ThingsToDo() {
  useEffect(() => {
    document.title = "Things to Do in Ocala, FL | Equus Inn — Your Local Area Guide";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Discover the best things to do in Ocala, Florida near the World Equestrian Center. Top restaurants, equestrian venues, outdoor adventures, and shopping — curated by the team at Equus Inn.");
    }
    // Inject schema markup
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaMarkup);
    script.id = "things-to-do-schema";
    if (!document.getElementById("things-to-do-schema")) {
      document.head.appendChild(script);
    }
    return () => {
      const s = document.getElementById("things-to-do-schema");
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1C2B4A 0%, #1C2B4A80 50%, transparent 100%)" }} />
        <div className="relative z-10 w-full px-6 lg:px-16 pb-14 max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-body font-700 text-[0.65rem] tracking-[0.22em] uppercase mb-3" style={{ color: "#D4AF6A" }}>
              Your Local Area Guide
            </p>
            <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: "#D4AF6A" }} />
            <h1 className="font-display font-600 text-4xl md:text-6xl text-white leading-tight mb-4">
              Things to Do<br />
              <span style={{ color: "#D4AF6A" }}>in Ocala, Florida</span>
            </h1>
            <p className="font-body text-white/80 text-base max-w-xl leading-relaxed">
              From world-class equestrian events to crystal-clear springs and acclaimed dining — Ocala is far more than a horse town. Our team lives here, loves it here, and is always happy to share our favorite spots.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INTRO EXPERT POSITIONING ─── */}
      <section className="py-16 px-6 lg:px-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader
                label="Your Ocala Experts"
                title="We Know This Town Inside & Out"
                subtitle="Equus Inn has been welcoming equestrian travelers, families, and business guests to Ocala since 2020. We've built relationships with the best restaurants, know which trails are worth the drive, and always have the current show schedule at the front desk. Think of us as your personal concierge for everything Ocala."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Equestrian Venues", color: "#2C3639", text: "#FAF7F2" },
                  { label: "Top Restaurants", color: "#A27B5C", text: "#FAF7F2" },
                  { label: "Outdoor Adventures", color: "#3F4E4F", text: "#FAF7F2" },
                  { label: "Shopping & Antiques", color: "#DCB7C8", text: "#1C2B4A" },
                  { label: "Day Trip Itineraries", color: "#D4AF6A", text: "#1C2B4A" },
                ].map(tag => (
                  <CategoryPill key={tag.label} label={tag.label} color={tag.color} textColor={tag.text} />
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "20 min", label: "to World Equestrian Center", color: "#2C3639" },
                  { stat: "25 min", label: "to Silver Springs State Park", color: "#3F4E4F" },
                  { stat: "15 min", label: "to Historic Downtown Ocala", color: "#A27B5C" },
                  { stat: "35 min", label: "to Ocala National Forest", color: "#1C2B4A" },
                ].map(item => (
                  <div key={item.label} className="p-6 text-white" style={{ backgroundColor: item.color }}>
                    <p className="font-display font-600 text-3xl mb-1">{item.stat}</p>
                    <p className="font-body text-xs text-white/75 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── EQUESTRIAN VENUES ─── */}
      <section className="py-20 px-6 lg:px-16" style={{ backgroundColor: "#2C3639" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Equestrian Venues"
            title="The Horse Capital of the World"
            subtitle="Ocala is home to more thoroughbred horses per capita than anywhere else on earth. These are the venues that define the equestrian experience here."
            labelColor="#D4AF6A"
            titleColor="#FAF7F2"
            dividerColor="#D4AF6A"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {equestrian.map(venue => (
              <div key={venue.name} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <CategoryPill label={venue.tag} color={venue.tagColor} textColor={venue.tagText} />
                  <span className="font-body text-[0.6rem] text-white/50 tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {venue.distance}
                  </span>
                </div>
                <h3 className="font-display font-600 text-xl text-white mb-3">{venue.name}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed mb-4">{venue.desc}</p>
                <div className="border-l-2 pl-4" style={{ borderColor: "#D4AF6A" }}>
                  <p className="font-body text-xs text-white/50 italic leading-relaxed">
                    <span style={{ color: "#D4AF6A" }}>Equus Inn Tip: </span>{venue.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESTAURANTS ─── */}
      <section className="py-20 px-6 lg:px-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Dining Guide"
            title="Ocala's Best Restaurants"
            subtitle="From celebrated farm-to-table bistros to classic steakhouses and French fine dining — Ocala's culinary scene has grown dramatically. Here are our team's personal favorites."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {restaurants.map(r => (
              <div key={r.name} className="bg-white border border-[#1C2B4A]/8 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-body font-700 text-[0.55rem] tracking-widest uppercase px-2.5 py-1 text-white"
                    style={{ backgroundColor: r.tagColor }}
                  >
                    {r.category}
                  </span>
                  <span className="font-body text-xs text-[#8B5E3C] font-700">{r.priceRange}</span>
                </div>
                <h3 className="font-display font-600 text-lg text-[#1C2B4A] mb-2 leading-tight">{r.name}</h3>
                <p className="font-body text-xs text-[#2A2A2A]/65 leading-relaxed mb-4">{r.vibe}</p>
                <div className="flex items-center gap-1 text-[#8B5E3C]">
                  <MapPin className="w-3 h-3" />
                  <span className="font-body text-[0.6rem] tracking-wide">{r.distance} from Equus Inn</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 border-l-4" style={{ borderColor: "#D4AF6A", backgroundColor: "#1C2B4A" }}>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              <span className="font-700 text-[#D4AF6A]">Reservation Tip: </span>
              During show season (January–April and September–November), Ocala's best restaurants fill up quickly. We recommend booking dinner reservations at least 2–3 days in advance. Our front desk is happy to assist with reservations — just ask at check-in.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SHOPPING ─── */}
      <section className="py-20 px-6 lg:px-16" style={{ backgroundColor: "#FAF7F2", borderTop: "1px solid #DCB7C8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <SectionHeader
                label="Shopping"
                title="Browse, Discover & Take Home a Piece of Ocala"
                subtitle="From equestrian boutiques and antique malls to a charming downtown square — Ocala has a shopping experience for every taste."
                labelColor="#DCB7C8"
                dividerColor="#DCB7C8"
              />
              <div className="mt-8 p-6" style={{ backgroundColor: "#DCB7C8" }}>
                <p className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] mb-2">Staff Pick</p>
                <p className="font-display font-600 text-lg text-[#1C2B4A] mb-2">Downtown Art Walk</p>
                <p className="font-body text-xs text-[#1C2B4A]/75 leading-relaxed">
                  Held the last Friday of each month, Ocala's Art Walk transforms the downtown square into an open-air gallery. Local artists, live music, and wine — a wonderful evening out.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {shopping.map(shop => (
                <div key={shop.name} className="overflow-hidden">
                  <div className="p-4" style={{ backgroundColor: shop.color }}>
                    <span className="font-body font-700 text-[0.55rem] tracking-widest uppercase" style={{ color: shop.textColor === "#FAF7F2" ? "rgba(250,247,242,0.7)" : "rgba(28,43,74,0.6)" }}>
                      {shop.category}
                    </span>
                  </div>
                  <div className="p-6 bg-white border border-[#1C2B4A]/8">
                    <h3 className="font-display font-600 text-lg text-[#1C2B4A] mb-2">{shop.name}</h3>
                    <p className="font-body text-xs text-[#2A2A2A]/65 leading-relaxed mb-4">{shop.desc}</p>
                    <p className="font-body text-xs italic leading-relaxed" style={{ color: "#8B5E3C" }}>
                      ✦ {shop.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUTDOOR ADVENTURES ─── */}
      <section className="py-20 px-6 lg:px-16" style={{ backgroundColor: "#3F4E4F" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Outdoor Adventures"
            title="Nature's Best Kept Secret"
            subtitle="Beyond the show rings, Ocala is surrounded by some of Florida's most spectacular natural landscapes — crystal springs, ancient forests, and pristine lakes."
            labelColor="#D4AF6A"
            titleColor="#FAF7F2"
            dividerColor="#D4AF6A"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {outdoor.map(place => (
              <div key={place.name} className="bg-white/8 border border-white/15 p-7 hover:bg-white/12 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: place.accentColor }}>
                    <place.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-body font-700 text-[0.55rem] tracking-widest uppercase text-white/50">{place.category}</span>
                    <div className="flex items-center gap-1 text-white/40">
                      <MapPin className="w-2.5 h-2.5" />
                      <span className="font-body text-[0.55rem]">{place.distance}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-600 text-lg text-white mb-3">{place.name}</h3>
                <p className="font-body text-xs text-white/65 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAMPLE ITINERARY ─── */}
      <section className="py-20 px-6 lg:px-16 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Sample Itinerary"
            title="A Perfect Day in Ocala"
            subtitle="Not sure where to start? Here's how we'd spend a perfect day — from morning warm-ups to a memorable dinner."
            center
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {itinerary.map((block, i) => (
              <div key={block.day} className="relative">
                <div className="absolute -top-4 left-6 w-8 h-8 flex items-center justify-center text-white font-display font-600 text-sm" style={{ backgroundColor: block.color }}>
                  {i + 1}
                </div>
                <div className="pt-8 p-7 bg-white border border-[#1C2B4A]/8 h-full">
                  <p className="font-body font-700 text-[0.6rem] tracking-widest uppercase mb-1" style={{ color: block.color }}>{block.day}</p>
                  <h3 className="font-display font-600 text-xl text-[#1C2B4A] mb-5">{block.title}</h3>
                  <ul className="space-y-3">
                    {block.activities.map((act, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0" style={{ backgroundColor: block.color }} />
                        <p className="font-body text-xs text-[#2A2A2A]/70 leading-relaxed">{act}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-[#2A2A2A]/60 leading-relaxed">
              Want a customized itinerary based on your interests and the current show schedule?<br />
              <span className="font-700 text-[#1C2B4A]">Just ask at the front desk — we're always happy to help plan your stay.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ (for AI search / People Also Ask) ─── */}
      <section className="py-16 px-6 lg:px-16" style={{ backgroundColor: "#1C2B4A" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Frequently Asked Questions"
            title="Planning Your Ocala Visit"
            labelColor="#D4AF6A"
            titleColor="#FAF7F2"
            dividerColor="#D4AF6A"
            center
          />
          <div className="mt-10 space-y-5">
            {[
              {
                q: "How far is Equus Inn from the World Equestrian Center?",
                a: "Equus Inn is approximately 20 minutes from the World Equestrian Center (WEC) in Ocala. We are conveniently located off I-75, making us one of the most accessible hotels for WEC guests and competitors.",
              },
              {
                q: "What is the best time of year to visit Ocala for equestrian events?",
                a: "Ocala's peak equestrian season runs from January through April (Winter Circuit) and again September through November. The World Equestrian Center and HITS host major competitions throughout the year, so there is almost always something happening. We recommend checking the WEC and HITS event calendars when planning your trip.",
              },
              {
                q: "Are there good restaurants near the World Equestrian Center?",
                a: "Yes — Ocala has an excellent and growing dining scene. Closest to WEC are the on-property restaurants at the Equestrian Hotel (Stirrups, The Polo Pony, The White Willow). Within 10–15 minutes you'll find Remington's Prime Steakhouse, Salted Brick, Braised Onion, Harry's Seafood, and Bella Cosa Italian — all highly rated and popular with equestrian visitors.",
              },
              {
                q: "What outdoor activities are available near Ocala?",
                a: "Ocala is surrounded by exceptional natural attractions. Silver Springs State Park (glass-bottom boats, kayaking) is 25 minutes away. Ocala National Forest offers hundreds of miles of trails and freshwater springs 35 minutes out. Santos Trailhead is one of Florida's top mountain biking destinations, just 20 minutes from Equus Inn. Rainbow Springs State Park, with its famous waterfall and swimming area, is about 40 minutes away.",
              },
              {
                q: "Is Ocala good for shopping?",
                a: "Ocala offers a range of shopping experiences. The Historic Downtown Square features independent boutiques, galleries, and gift shops in a charming walkable setting. North Pine Avenue is known as Antique Row, with several large multi-dealer malls. The World Equestrian Center campus has high-end equestrian boutiques, and Paddock Mall provides major retail options.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 p-6">
                <h3 className="font-body font-700 text-sm text-white mb-3 leading-snug">{faq.q}</h3>
                <p className="font-body text-xs text-white/65 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 lg:px-16" style={{ backgroundColor: "#2C3639" }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-body font-700 text-[0.65rem] tracking-[0.22em] uppercase mb-3" style={{ color: "#D4AF6A" }}>
              Stay at the Heart of It All
            </p>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#D4AF6A" }} />
            <h2 className="font-display font-600 text-3xl md:text-4xl text-white mb-5 leading-tight">
              Ready to Experience<br />
              <span style={{ color: "#D4AF6A" }}>Ocala's Best?</span>
            </h2>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Book your stay at Equus Inn and let our team handle the details. We'll share our latest restaurant recommendations, current show schedules, and insider tips to make your Ocala visit unforgettable.
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
              <Link href="/contact">
                <span className="btn-outline text-xs px-10 py-4 inline-block">
                  Ask Our Team
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
