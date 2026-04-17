/*
 * Awards & Recognition Page — Equus Inn
 * Design: Southern Equestrian Heritage
 * Colors: Deep Navy (#1C2B4A), Saddle Brown (#8B5E3C), Champagne Gold (#D4AF6A), Ivory (#FDFBF7)
 * Typography: Cormorant Garamond (headings) + Lato (body)
 * Showcases all accolades, certifications, and industry recognition
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";
import AwardsStrip from "@/components/AwardsStrip";

const LOBBY_IMG = "https://d2ey4v8lmxjl3t.cloudfront.net/equusinn/LobbyLoungeAre.webp";

// Award categories with descriptions
const awardCategories = [
  {
    id: 1,
    category: "TripAdvisor Traveler Choice Awards",
    description: "Recognized by millions of travelers worldwide for exceptional guest experiences",
    awards: [
      { year: 2025, title: "Traveler Choice Award", source: "TripAdvisor" },
      { year: 2024, title: "Traveler Choice Award", source: "TripAdvisor" },
      { year: 2023, title: "Traveler Choice Award", source: "TripAdvisor" },
      { year: 2022, title: "Traveler Choice Award", source: "TripAdvisor" },
      { year: 2021, title: "Traveler Choice Award", source: "TripAdvisor" },
    ],
  },
  {
    id: 2,
    category: "Best of the 352 Awards",
    description: "Voted best hotel by North Central Florida Media and local community members",
    awards: [
      { year: 2025, title: "Best Hotel", source: "North Central Florida Media" },
      { year: 2024, title: "Best Hotel", source: "North Central Florida Media" },
      { year: 2023, title: "Best Hotel", source: "North Central Florida Media" },
      { year: 2022, title: "Best Hotel", source: "North Central Florida Media" },
    ],
  },
  {
    id: 3,
    category: "Business Recognition",
    description: "Industry and community partnerships recognizing our commitment to excellence",
    awards: [
      { year: "2025-2026", title: "Proud Partner", source: "Ocala Metro Chamber & Economic Partnership" },
      { year: 2025, title: "Top 3 Business in Ocala, 34474", source: "BusinessRate" },
    ],
  },
  {
    id: 4,
    category: "Online Booking Platforms",
    description: "Highly rated and verified by major travel booking platforms",
    awards: [
      { year: "2021-Present", title: "Verified Reviews", source: "Booking.com" },
      { year: "2021-Present", title: "Loved by Guests", source: "Hotels.com" },
      { year: "2021-Present", title: "Verified Reviews", source: "Expedia" },
    ],
  },
];

// Key statistics
const statistics = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Guest Reviews", value: "507" },
  { label: "Average Rating", value: "9.0/10" },
  { label: "Awards Won", value: "20+" },
];

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${LOBBY_IMG})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B4A]/80 to-transparent" />

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Awards & Recognition
            </h1>
            <p className="text-xl text-[#D4AF6A] max-w-2xl mx-auto">
              Celebrating our commitment to excellence and guest satisfaction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Strip */}
      <div className="bg-[#1C2B4A] py-8">
        <AwardsStrip />
      </div>

      {/* Statistics Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statistics.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif text-[#D4AF6A] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-[#1C2B4A] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Award Categories */}
      <section className="py-16 px-4 md:px-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#1C2B4A] text-center mb-16"
          >
            Our Accolades
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {awardCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#D4AF6A]"
              >
                <h3 className="text-2xl md:text-3xl font-serif text-[#1C2B4A] mb-2">
                  {category.category}
                </h3>
                <p className="text-[#8B5E3C] mb-6 text-lg">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-[#FDFBF7] to-[#F5F3F0] p-4 rounded-lg border border-[#D4AF6A]/30"
                    >
                      <div className="text-sm font-semibold text-[#D4AF6A] mb-1">
                        {award.year}
                      </div>
                      <div className="text-[#1C2B4A] font-medium mb-1">
                        {award.title}
                      </div>
                      <div className="text-sm text-[#8B5E3C]">
                        {award.source}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition Statement */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C2B4A] mb-6">
            Why We're Recognized
          </h2>
          <p className="text-lg text-[#8B5E3C] leading-relaxed mb-8">
            At Equus Inn, our awards and recognition reflect our unwavering commitment to providing exceptional hospitality. From our meticulously maintained facilities to our attentive staff and unique equestrian-themed experience, every detail is crafted to exceed guest expectations. Whether you're attending the World Equestrian Center, HITS Ocala, or simply exploring North Central Florida, we're honored to be your choice for boutique hotel accommodations.
          </p>
          <p className="text-lg text-[#8B5E3C] leading-relaxed">
            These accolades inspire us to continue delivering the highest standards of service and comfort to every guest who walks through our doors.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#1C2B4A] to-[#2d3d5c]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Experience Award-Winning Hospitality
            </h2>
            <p className="text-[#D4AF6A] text-lg mb-8 max-w-2xl mx-auto">
              Book your stay at Ocala's most recognized boutique hotel and discover why guests consistently rate us exceptional.
            </p>
            <Link href="/">
              <a className="inline-block bg-[#D4AF6A] text-[#1C2B4A] px-8 py-3 rounded-lg font-semibold hover:bg-[#E8C87D] transition-colors">
                Book Your Stay
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup
        id="awards-page"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Awards & Recognition | Equus Inn",
          description: "Explore Equus Inn's awards and recognition from TripAdvisor, Best of 352, and industry partners.",
          url: "https://www.equusinn.com/awards",
          publisher: {
            "@type": "Organization",
            name: "Equus Inn",
          },
        }}
      />

      <Footer />
    </div>
  );
}
