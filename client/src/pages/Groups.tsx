/*
 * EQUUS INN GROUPS PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Phone, Mail, Check } from "lucide-react";

// Hero — actual hotel exterior
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior-HorseStatue_c9445e18.webp";

// Stock images for each group type (Unsplash)
const GROUP_SWIM = "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&q=80";
const GROUP_GOLF = "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=80";
const GROUP_BASEBALL = "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=900&q=80";
const GROUP_SOFTBALL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/softball_3cc68f8b.jpg";
const GROUP_VOLLEYBALL = "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=900&q=80";
const GROUP_RELIGIOUS = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&q=80";
const GROUP_SOCIAL = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=80";
const GROUP_EQUINE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomEquine_20f540e2.png";
const GROUP_RODEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/rodeo_8eb9fc69.webp";

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

const groupTypes = [
  {
    id: "swim",
    title: "FAST Swim Tournaments",
    subtitle: "Competitive Swimming Groups",
    img: GROUP_SWIM,
    desc: "Equus Inn is a top choice for FAST swim tournament teams visiting Ocala. With spacious rooms, complimentary hot breakfast to fuel early-morning heats, and a heated outdoor pool for warm-ups, we make sure your swimmers arrive rested and ready to compete. Our group room block pricing and flexible check-in options are designed for tournament schedules.",
    highlights: ["Group room block pricing", "Complimentary hot breakfast", "Heated outdoor pool", "Early check-in available", "Ample parking for team vehicles"],
  },
  {
    id: "golf",
    title: "Golf Groups",
    subtitle: "Tee Time Ready",
    img: GROUP_GOLF,
    desc: "Ocala's warm climate and world-class golf courses make it a premier destination for golf groups and corporate golf outings. Equus Inn offers comfortable accommodations, a self-service beer and wine bar perfect for post-round relaxation, and easy access to the region's top courses. Whether you're organizing a charity tournament or a casual group outing, we have the space and amenities to make it memorable.",
    highlights: ["Group room blocks available", "Beer & wine bar for post-round relaxation", "Meeting room for pre-tournament briefings", "Proximity to top Ocala golf courses", "Free parking for all vehicles"],
  },
  {
    id: "baseball",
    title: "Baseball Tournaments",
    subtitle: "Play Ball in Ocala",
    img: GROUP_BASEBALL,
    desc: "Ocala is home to some of Florida's most competitive youth and adult baseball tournaments, and Equus Inn is the team hotel of choice for coaches and players alike. Our spacious rooms accommodate families and team members, our breakfast fuels early game days, and our pool is the perfect place to cool off and recharge after a long day on the diamond.",
    highlights: ["Family-friendly rooms", "Complimentary hot breakfast", "Outdoor pool for recovery", "Group block pricing", "Pet-friendly for traveling families"],
  },
  {
    id: "softball",
    title: "Softball Tournaments",
    subtitle: "Your Home Base in Ocala",
    img: GROUP_SOFTBALL,
    desc: "From youth travel ball to adult recreational leagues, Equus Inn welcomes softball teams and their families throughout the tournament season. Our convenient location off I-75 makes us easy to reach from anywhere in Florida, and our group amenities — from breakfast to the beer and wine bar — make us the ideal home base for your team's Ocala visit.",
    highlights: ["Convenient I-75 access", "Group room block pricing", "Complimentary breakfast for all guests", "Outdoor pool for recovery", "Ample on-site parking"],
  },
  {
    id: "volleyball",
    title: "Volleyball Tournaments",
    subtitle: "Spike Your Stay",
    img: GROUP_VOLLEYBALL,
    desc: "Volleyball teams competing in Ocala's growing tournament circuit choose Equus Inn for our combination of comfort, value, and group-friendly amenities. With rooms for families and individual players, a hearty complimentary breakfast, and a relaxed outdoor atmosphere, we're the perfect place to recover between matches and celebrate victories.",
    highlights: ["Team-friendly accommodations", "Complimentary hot breakfast", "Outdoor pool for recovery", "Group pricing for 10+ rooms", "Meeting room for team strategy sessions"],
  },
  {
    id: "religious",
    title: "Religious Groups",
    subtitle: "Faith, Fellowship & Florida",
    img: GROUP_RELIGIOUS,
    desc: "Equus Inn welcomes church groups, retreat participants, ministry teams, and faith-based organizations with warm hospitality. Our meeting room is available for worship gatherings, Bible studies, and group sessions, and our comfortable accommodations and complimentary breakfast create an environment conducive to fellowship and reflection.",
    highlights: ["Meeting room for gatherings & worship", "Group room block pricing", "Complimentary hot breakfast", "Quiet, welcoming atmosphere", "Flexible check-in/check-out"],
  },
  {
    id: "social",
    title: "Social Events & Celebrations",
    subtitle: "Birthdays, Reunions & More",
    img: GROUP_SOCIAL,
    desc: "From milestone birthday celebrations and family reunions to bachelorette weekends and class reunions, Equus Inn provides the perfect backdrop for your special occasion. Our meeting room can be configured for private parties, and our outdoor fireplace and gazebo area create a memorable setting for evening gatherings.",
    highlights: ["Meeting room for private parties", "Outdoor fireplace & gazebo", "Beer & wine bar", "Group room blocks", "Pet-friendly for the whole family"],
  },
  {
    id: "equine",
    title: "Equine Events & Rodeos",
    subtitle: "Where Horse People Feel at Home",
    img: GROUP_EQUINE,
    desc: "Equus Inn was built for the equestrian community. Located 20 minutes from the World Equestrian Center and close to HITS Ocala, the Florida Horse Park, and the Ocala Jockey Club, we are the natural choice for competitors, trainers, owners, and spectators attending equine events and rodeos throughout the year. Our equestrian-themed décor and deep understanding of horse show culture set us apart.",
    highlights: ["20 min to World Equestrian Center", "Close to HITS Ocala & Florida Horse Park", "Equestrian-themed rooms & décor", "Group block pricing for show season", "Pet-friendly — $35 per pet, per night"],
  },
];

const groupBenefits = [
  "Dedicated group sales coordinator",
  "Competitive group room block rates",
  "Complimentary hot breakfast for all guests",
  "Flexible meeting room configurations",
  "Outside catering welcome",
  "Pet-friendly — $35 per pet, per night",
  "Your area expert — restaurant, shopping & activity recommendations",
  "24/7 front desk assistance",
  "Free on-site parking",
];

export default function Groups() {
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
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/90 via-[#111B30]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Group Travel & Events</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Groups at Equus Inn
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="section-label mb-4">Your Group's Home in Ocala</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#1C2B4A] mb-6">
                Built for Teams,<br />
                <span className="italic">Designed for Comfort</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-5">
                Equus Inn is Ocala's premier destination for group travel. Whether you're bringing a sports team, a faith community, a corporate group, or an equestrian delegation, we have the rooms, amenities, and experience to make your group stay seamless and enjoyable.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-8">
                With 152 rooms, a fully equipped meeting room, complimentary hot breakfast, and a dedicated group sales team, Equus Inn handles the details so your group can focus on what matters most.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#group-inquiry" className="btn-primary text-xs px-8 py-4 inline-flex items-center gap-2">
                  Request Group Rates <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+13528543200" className="btn-outline-dark text-xs px-8 py-4 inline-block">
                  Call (352) 854-3200
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-[#1C2B4A] p-8">
                <p className="section-label text-[#D4AF6A] mb-4">Group Benefits</p>
                <div className="gold-divider mb-6" />
                <div className="space-y-3">
                  {groupBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D4AF6A] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-[#FAF7F2]/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Group Types */}
      <section className="py-8 px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <p className="section-label mb-4">Who We Welcome</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#1C2B4A]">
              Groups We Love to Host
            </h2>
          </AnimatedSection>

          <div className="space-y-20">
            {groupTypes.map((group, i) => (
              <AnimatedSection key={group.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {/* Image */}
                  <div className={`relative h-80 overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={group.img}
                      alt={`Equus Inn — ${group.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-[#D4AF6A] text-[#111B30] font-body font-700 text-[0.6rem] tracking-widest uppercase px-3 py-1.5">
                      {group.subtitle}
                    </div>
                  </div>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="section-label mb-3">{group.subtitle}</p>
                    <div className="gold-divider mb-5" />
                    <h3 className="font-display text-3xl font-bold text-[#1C2B4A] mb-4">{group.title}</h3>
                    <p className="font-body text-[#2A2A2A]/70 text-sm leading-relaxed mb-6">{group.desc}</p>
                    <div className="space-y-2 mb-8">
                      {group.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF6A] mt-0.5 flex-shrink-0" />
                          <span className="font-body text-xs text-[#2A2A2A]/65">{h}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#group-inquiry" className="inline-flex items-center gap-2 font-body font-700 text-xs tracking-widest uppercase text-[#1C2B4A] border-b border-[#1C2B4A] pb-0.5 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-colors duration-200">
                      Request Group Rates <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                {i < groupTypes.length - 1 && <div className="border-b border-[#1C2B4A]/10 mt-20" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#8B5E3C] py-14 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: "152", label: "Rooms & Suites" },
              { number: "35", label: "Theater Capacity" },
              { number: "10+", label: "Group Types Welcomed" },
              { number: "20 min", label: "to World Equestrian Center" },
            ].map((stat, i) => (
              <AnimatedSection key={i}>
                <div className="font-display text-4xl font-bold text-[#D4AF6A] mb-2">{stat.number}</div>
                <div className="font-body text-xs text-[#FAF7F2]/65 tracking-widest uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Group Inquiry Form */}
      <section className="py-20 px-6 lg:px-8 bg-[#FAF7F2]" id="group-inquiry">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="section-label mb-4">Get Group Rates</p>
                <div className="gold-divider mb-6" />
                <h2 className="font-display text-3xl font-bold text-[#1C2B4A] mb-6">
                  Plan Your Group Stay<br />
                  <span className="italic">at Equus Inn</span>
                </h2>
                <p className="font-body text-[#2A2A2A]/65 text-sm leading-relaxed mb-8">
                  Tell us about your group and we'll put together a customized proposal with competitive room block rates. Our team typically responds within one business day.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Call Us Directly</p>
                      <a href="tel:+13528543200" className="font-body text-sm text-[#2A2A2A]/65 hover:text-[#1C2B4A] transition-colors">
                        (352) 854-3200
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Group Sales — Kelli Holt</p>
                      <a href="mailto:Kholt@paxproperties.com" className="font-body text-sm text-[#2A2A2A]/65 hover:text-[#1C2B4A] transition-colors">
                        Kholt@paxproperties.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Group Minimum</p>
                      <p className="font-body text-sm text-[#2A2A2A]/65">
                        Group rates available for 10+ rooms. Meeting room available for all group sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white shadow-sm p-8 lg:p-12">
                  <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-2">Group Inquiry</h3>
                  <p className="font-body text-sm text-[#2A2A2A]/55 mb-8">
                    Fill out the form below and our group sales coordinator will respond with availability and pricing.
                  </p>
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Name *</label>
                        <input type="text" name="name" required className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Email *</label>
                        <input type="email" name="email" required className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Phone</label>
                        <input type="tel" name="phone" className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]" placeholder="(555) 000-0000" />
                      </div>
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Group Type *</label>
                        <select name="groupType" required className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]">
                          <option value="">Select group type</option>
                          <option value="swim">FAST Swim Tournament</option>
                          <option value="golf">Golf Group</option>
                          <option value="baseball">Baseball Tournament</option>
                          <option value="softball">Softball Tournament</option>
                          <option value="volleyball">Volleyball Tournament</option>
                          <option value="religious">Religious / Faith Group</option>
                          <option value="social">Social Event / Celebration</option>
                          <option value="equine">Equine Event / Rodeo</option>
                          <option value="corporate">Corporate / Business Group</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Arrival Date</label>
                        <input type="date" name="arrivalDate" className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]" />
                      </div>
                      <div>
                        <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Number of Rooms</label>
                        <input type="number" name="rooms" min="1" className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2]" placeholder="e.g. 15" />
                      </div>
                    </div>
                    <div>
                      <label className="font-body font-700 text-[0.6rem] tracking-widest uppercase text-[#1C2B4A] block mb-2">Tell Us About Your Group</label>
                      <textarea name="message" rows={4} className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] bg-[#FAF7F2] resize-none" placeholder="Tell us about your group, event details, special needs, or any questions..." />
                    </div>
                    <button type="submit" className="btn-gold text-xs px-10 py-4 inline-flex items-center gap-2 w-full justify-center">
                      Submit Group Inquiry <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#1C2B4A]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-[#FAF7F2] mb-4">
              Ready to Book Your Group?
            </h2>
            <p className="font-body text-[#FAF7F2]/65 text-sm max-w-xl mx-auto mb-8">
              Contact our group sales team today for competitive rates, availability, and a customized proposal for your group's stay in Ocala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13528543200" className="btn-gold text-xs px-10 py-4 inline-block">
                Call (352) 854-3200
              </a>
              <Link href="/contact">
                <span className="btn-outline text-xs px-10 py-4 inline-block cursor-pointer">
                  Contact Us
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
