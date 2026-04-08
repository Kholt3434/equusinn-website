/**
 * EQUUS INN LOCATION PAGE
 * Design: Southern Equestrian Heritage
 * Colors: Hunter Green #2B3F4E, Gold #C9A84C, Ivory #FDFBF7, Charcoal #2A2A2A
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";
import { MapPin, Clock, Car, Phone, ExternalLink, Compass } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_hero_sunset-HMu8DpcdFXuQjTsq7fUbz9.webp";
const EXTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_exterior_f60796b2.jpg";
const ENTRANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equusinn_entrance_f0d4bc99.jpg";

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

const nearbyAttractions = [
  {
    name: "World Equestrian Center (WEC)",
    distance: "~20 minutes",
    desc: "The largest equestrian facility in the world, hosting premier horse shows, competitions, and events year-round. Home to the HITS Ocala series and countless championship events.",
    category: "Equestrian",
  },
  {
    name: "Florida Horse Park",
    distance: "~20 minutes",
    desc: "A premier multi-discipline equestrian facility hosting eventing, dressage, and hunter/jumper competitions throughout the year.",
    category: "Equestrian",
  },
  {
    name: "HITS Post Time Farm",
    distance: "~25 minutes",
    desc: "Host of the prestigious HITS Ocala Winter Spectacular, one of the most popular hunter/jumper show circuits in the country.",
    category: "Equestrian",
  },
  {
    name: "Silver Springs State Park",
    distance: "~15 minutes",
    desc: "One of Florida's most iconic natural attractions, featuring crystal-clear spring waters, glass-bottom boat tours, wildlife viewing, and kayaking through ancient cypress forests.",
    category: "Nature",
  },
  {
    name: "Downtown Ocala",
    distance: "~10 minutes",
    desc: "Explore Ocala's charming historic downtown, featuring local restaurants, boutique shops, art galleries, and the beautiful Ocala Historic District.",
    category: "City",
  },
  {
    name: "Ocala National Forest",
    distance: "~30 minutes",
    desc: "The southernmost national forest in the continental United States, offering hiking, swimming in natural springs, wildlife viewing, and camping.",
    category: "Nature",
  },
  {
    name: "Gainesville",
    distance: "~45 minutes",
    desc: "Home to the University of Florida, Gainesville offers excellent dining, cultural attractions, and the Florida Museum of Natural History.",
    category: "City",
  },
  {
    name: "The Villages",
    distance: "~30 minutes",
    desc: "America's largest retirement community, featuring golf courses, entertainment venues, shopping, and dining.",
    category: "City",
  },
];

const categoryColors: Record<string, string> = {
  Equestrian: "#2B3F4E",
  Nature: "#4A7C59",
  City: "#8B7355",
};

export default function Location() {
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B3F4E]/90 via-[#2B3F4E]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#C9A84C] mb-3">Ocala, Florida</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Location & Ocala Guide
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="py-16 px-6 lg:px-8 bg-[#2B3F4E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display font-600 text-lg text-[#FDFBF7] mb-2">Address</h3>
                  <p className="font-body text-[#FDFBF7]/70 text-sm leading-relaxed">
                    3434 SW College Rd<br />
                    Ocala, FL 34474
                  </p>
                  <a
                    href="https://maps.google.com/?q=3434+SW+College+Rd+Ocala+FL+34474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#C9A84C] font-body text-xs tracking-wide mt-3 hover:underline"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display font-600 text-lg text-[#FDFBF7] mb-2">Contact</h3>
                  <p className="font-body text-[#FDFBF7]/70 text-sm leading-relaxed">
                    Phone: (352) 854-3200<br />
                    Email: OcalaFD@paxproperties.com
                  </p>
                  <a
                    href="tel:+13528543200"
                    className="inline-flex items-center gap-1 text-[#C9A84C] font-body text-xs tracking-wide mt-3 hover:underline"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display font-600 text-lg text-[#FDFBF7] mb-2">Hours</h3>
                  <p className="font-body text-[#FDFBF7]/70 text-sm leading-relaxed">
                    Front Desk: 24/7<br />
                    Breakfast: 6:00 AM – 10:00 AM<br />
                    Pool: Sunrise – Sunset
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="section-label mb-4">Find Us</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#2B3F4E]">
              Perfectly Positioned in<br />
              <span className="italic">Florida's Horse Country</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map Embed */}
            <AnimatedSection>
              <div className="overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.1234567890!2d-82.1234567!3d29.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7b1234567890%3A0x1234567890abcdef!2s3434%20SW%20College%20Rd%2C%20Ocala%2C%20FL%2034474!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Equus Inn Location Map"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://maps.google.com/?q=3434+SW+College+Road+Ocala+FL+34474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-6 py-3 font-body font-600 tracking-widest uppercase inline-flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" /> Get Directions
                </a>
                <a
                  href="https://maps.google.com/?q=3434+SW+College+Road+Ocala+FL+34474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-600 text-xs tracking-widest uppercase text-[#2B3F4E] border-b border-[#2B3F4E] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors duration-200"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </AnimatedSection>

            {/* Driving Directions */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="p-6 bg-[#F5F0E8] border-l-4 border-[#C9A84C]">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-4 h-4 text-[#2B3F4E]" />
                    <h3 className="font-display font-600 text-base text-[#2B3F4E]">From I-75 Northbound</h3>
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A]/70 leading-relaxed">
                    Take Exit 350 (SR-200/SW College Road). Turn left onto SW College Road heading west. Equus Inn will be on your right approximately 0.5 miles from the exit.
                  </p>
                </div>
                <div className="p-6 bg-[#F5F0E8] border-l-4 border-[#C9A84C]">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-4 h-4 text-[#2B3F4E]" />
                    <h3 className="font-display font-600 text-base text-[#2B3F4E]">From I-75 Southbound</h3>
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A]/70 leading-relaxed">
                    Take Exit 350 (SR-200/SW College Road). Turn right onto SW College Road heading west. Equus Inn will be on your right approximately 0.5 miles from the exit.
                  </p>
                </div>
                <div className="p-6 bg-[#F5F0E8] border-l-4 border-[#2B3F4E]">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-4 h-4 text-[#2B3F4E]" />
                    <h3 className="font-display font-600 text-base text-[#2B3F4E]">From World Equestrian Center</h3>
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A]/70 leading-relaxed">
                    Head east on NW 80th Avenue, then south on NW Gainesville Road. Continue to SW College Road and head east. Equus Inn is approximately 20 minutes from the WEC main entrance.
                  </p>
                </div>
                <div className="p-6 bg-[#F5F0E8] border-l-4 border-[#C9A84C]">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-4 h-4 text-[#2B3F4E]" />
                    <h3 className="font-display font-600 text-base text-[#2B3F4E]">From SR-301 (US-301)</h3>
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A]/70 leading-relaxed">
                    Head west on SW College Road (SR-200). Equus Inn will be on your right approximately 0.5 miles west of the I-75 interchange. The hotel is easily accessible from SR-301 via SW College Road.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hotel Exterior Photos */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="h-72 overflow-hidden">
            <img src={EXTERIOR_IMG} alt="Equus Inn exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-72 overflow-hidden">
            <img src={ENTRANCE_IMG} alt="Equus Inn entrance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="section-label mb-4">Explore Ocala</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#2B3F4E]">
              Nearby Attractions &<br />
              <span className="italic">Points of Interest</span>
            </h2>
          </AnimatedSection>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-10">
            {Object.entries(categoryColors).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-body text-xs tracking-wide text-[#2A2A2A]/60">{cat}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nearbyAttractions.map((place, i) => (
              <AnimatedSection key={i}>
                <div className="p-6 bg-white shadow-sm border-l-4 hover:shadow-md transition-shadow duration-300" style={{ borderColor: categoryColors[place.category] }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-600 text-lg text-[#2B3F4E]">{place.name}</h3>
                    <span
                      className="font-body font-600 text-xs tracking-widest uppercase px-2 py-1 flex-shrink-0 text-white"
                      style={{ backgroundColor: categoryColors[place.category] }}
                    >
                      {place.distance}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">{place.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Ocala */}
      <section className="py-20 px-6 lg:px-8 bg-[#2B3F4E]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center">
            <p className="section-label text-[#C9A84C] mb-4">The Horse Capital of the World</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#FDFBF7] mb-8">
              Why Ocala, Florida?
            </h2>
            <p className="font-body text-[#FDFBF7]/70 text-base leading-relaxed mb-6 max-w-3xl mx-auto">
              Ocala, Florida is internationally recognized as the "Horse Capital of the World," home to more than 1,200 horse farms and breeding operations spanning over 70,000 acres of rolling green pastures. The region's unique combination of limestone-filtered water, mineral-rich soil, and ideal climate has produced some of the world's greatest Thoroughbred racehorses, including multiple Kentucky Derby winners.
            </p>
            <p className="font-body text-[#FDFBF7]/70 text-base leading-relaxed max-w-3xl mx-auto">
              Today, Ocala is home to the World Equestrian Center — the largest equestrian facility in the world — as well as the Florida Horse Park, HITS Post Time Farm, and dozens of premier training facilities. For equestrian enthusiasts, Ocala is a pilgrimage destination. For everyone else, it's a beautiful Florida city with natural springs, state parks, and genuine Southern charm.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-[#2B3F4E] mb-4">
              Ready to Visit Ocala?
            </h2>
            <p className="font-body text-[#2A2A2A]/65 text-base mb-8 leading-relaxed">
              Book your stay at Equus Inn and experience the best of Florida's horse country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-10 py-4 font-body font-600 tracking-widest uppercase inline-block"
              >
                Book Your Stay
              </a>
              <a
                href="tel:+13528543200"
                className="inline-flex items-center justify-center gap-2 font-body font-600 text-sm tracking-widest uppercase text-[#2B3F4E] border border-[#2B3F4E] px-10 py-4 hover:bg-[#2B3F4E] hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
