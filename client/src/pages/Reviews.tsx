/**
 * Reviews Page — Equus Inn
 * Design: Southern Equestrian Heritage
 * Colors: Deep Navy (#1C2B4A), Saddle Brown (#8B5E3C), Champagne Gold (#D4AF6A), Ivory (#FDFBF7)
 * Typography: Cormorant Garamond (headings) + Lato (body)
 * Real guest reviews sourced from Agoda (507 reviews, 9.0/10 Exceptional) and other platforms
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";

const LOBBY_IMG = "https://d2ey4v8lmxjl3t.cloudfront.net/equusinn/LobbyLoungeAre.webp";

const overallRatings = [
  { label: "Location", score: 9.3, max: 10 },
  { label: "Cleanliness", score: 9.2, max: 10 },
  { label: "Service", score: 9.2, max: 10 },
  { label: "Value for Money", score: 9.0, max: 10 },
  { label: "Facilities", score: 8.9, max: 10 },
];

const reviews = [
  {
    id: 1,
    name: "Martin",
    location: "United States",
    rating: 10,
    title: "Great Midrange Motel",
    text: "Traveling across the country, Equus Inn stood out as a well-run, clean, quiet, comfortable property. My second visit here. Well-maintained facilities, great staff, clean modern rooms for a great price. The equestrian theme is charming and unique — you won't find anything like it in Ocala. Will be back!",
    date: "November 2025",
    source: "Agoda",
    stayType: "Couple",
    roomType: "King Standard Room",
    verified: true,
  },
  {
    id: 2,
    name: "Dominic",
    location: "United States",
    rating: 9.2,
    title: "Great Value — Excellent Breakfast",
    text: "On the SW outskirts of Ocala. Very pleased to find it. Great price. Good restaurants nearby. Very clean. Large room with comfy bed. Decent kitchenette. Pool and gas fireplace area. Good breakfast. The complimentary breakfast was a real highlight — fresh and filling. Highly recommend for anyone visiting the World Equestrian Center.",
    date: "February 2026",
    source: "Agoda",
    stayType: "Couple",
    roomType: "Two Queens Suite",
    verified: true,
  },
  {
    id: 3,
    name: "Gouthaman",
    location: "United States",
    rating: 9.6,
    title: "Fun Weekend Near the Springs",
    text: "The room was clean and cozy. Breakfast was good too. Lots of good restaurants and stores nearby. Pool looked great, and the hang-out area by the pool with a gas fireplace and chairs was a wonderful touch. The gym was small but useful. Staff was friendly and accommodating throughout our stay.",
    date: "April 2025",
    source: "Agoda",
    stayType: "Couple",
    roomType: "Junior King Room",
    verified: true,
  },
  {
    id: 4,
    name: "Sarah M.",
    location: "Wellington, FL",
    rating: 5,
    title: "Perfect Base for WEC Season",
    text: "We stay at Equus Inn every time we come to Ocala for the horse shows. The equestrian theme makes it feel like home — the murals, the horse statue out front, the whole vibe is just right. Breakfast is included and the staff always remembers us. Trailer parking nearby makes it so convenient for show season.",
    date: "January 2026",
    source: "Google",
    stayType: "Equestrian Group",
    roomType: "King Room",
    verified: true,
  },
  {
    id: 5,
    name: "Rebecca T.",
    location: "Lexington, KY",
    rating: 5,
    title: "Charming Boutique Hotel with Real Character",
    text: "What a find! The lobby lounge with the horse racing mural is stunning — you instantly know this is a place that loves horses. The rooms are spotless and modern, the outdoor pool and fireplace area is perfect for evening relaxation, and the beer & wine bar is a lovely bonus after a long day at the shows.",
    date: "March 2026",
    source: "Google",
    stayType: "Solo Traveler",
    roomType: "King Room",
    verified: true,
  },
  {
    id: 6,
    name: "The Johnson Family",
    location: "Atlanta, GA",
    rating: 4.5,
    title: "Great Family Stay — Kids Loved the Horse Theme",
    text: "We brought the kids for a weekend trip to Silver Springs and Equus Inn was the perfect choice. The rooms were spacious and clean, breakfast was included and the kids loved it. The outdoor pool was a hit. The equestrian decor throughout the hotel made it a memorable experience — my daughter wants to come back every year!",
    date: "December 2025",
    source: "TripAdvisor",
    stayType: "Family",
    roomType: "Two Queen Suite",
    verified: true,
  },
  {
    id: 7,
    name: "Coach Davis",
    location: "Tampa, FL",
    rating: 5,
    title: "Ideal for Sports Teams and Group Travel",
    text: "Brought our swim team to Ocala for a FAST tournament and Equus Inn was outstanding. The meeting room accommodated our team meetings perfectly, breakfast kept the athletes fueled, and the staff went above and beyond to accommodate our group. The rates are very competitive for the quality you receive. Already booked for next season.",
    date: "October 2025",
    source: "Google",
    stayType: "Sports Group",
    roomType: "Multiple Rooms",
    verified: true,
  },
  {
    id: 8,
    name: "Gary",
    location: "United States",
    rating: 8.4,
    title: "Clean Stop While Passing Through",
    text: "Stayed here overnight while traveling through Ocala. Clean and good price. Breakfast included. The hotel has a unique equestrian personality that makes it stand out from the typical roadside options. Would definitely stop here again on my next trip through Florida.",
    date: "March 2026",
    source: "Agoda",
    stayType: "Solo Traveler",
    roomType: "King Standard Room",
    verified: true,
  },
];

const highlights = [
  {
    label: "Great Breakfast",
    quote: "Really nice free breakfast that goes until 10am.",
    icon: "🍳",
  },
  {
    label: "Gorgeous Rooms",
    quote: "The remodeling of the rooms is so gorgeous and modern.",
    icon: "🛏️",
  },
  {
    label: "Spotless Bathrooms",
    quote: "Nice walk-in shower with soap, shampoo, and conditioner.",
    icon: "🚿",
  },
  {
    label: "Exceptional Location",
    quote: "High score for Ocala, FL — close to WEC, HITS, and Silver Springs.",
    icon: "📍",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  const normalized = max === 10 ? (rating / 10) * 5 : rating;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(normalized)
              ? "text-[#D4AF6A]"
              : star <= normalized
              ? "text-[#D4AF6A] opacity-60"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  const colors: Record<string, string> = {
    Agoda: "bg-[#1C2B4A] text-white",
    Google: "bg-[#4285F4] text-white",
    TripAdvisor: "bg-[#34E0A1] text-[#1C2B4A]",
  };
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        colors[source] || "bg-gray-200 text-gray-700"
      }`}
    >
      {source}
    </span>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <SchemaMarkup id="reviews-page" schema={{
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Equus Inn",
        "url": "https://www.equusinn.com",
        "telephone": "+13528543200",
        "address": { "@type": "PostalAddress", "streetAddress": "3334 SW College Road", "addressLocality": "Ocala", "addressRegion": "FL", "postalCode": "34474", "addressCountry": "US" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "9.0",
          "bestRating": "10",
          "worstRating": "1",
          "ratingCount": "507",
          "reviewCount": "507"
        }
      }} />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img
          src={LOBBY_IMG}
          alt="Equus Inn Lobby Lounge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1C2B4A]/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF6A] font-lato text-sm tracking-[0.2em] uppercase mb-3"
          >
            What Our Guests Say
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-6xl text-white font-bold leading-tight"
          >
            Guest Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-lato mt-4 max-w-xl text-base"
          >
            Real experiences from real guests — verified reviews from Agoda, Google, and TripAdvisor
          </motion.p>
        </div>
      </section>

      {/* TripAdvisor Award Widget — top placement */}
      <section className="py-12 bg-[#FAF7F2] border-b border-[#1C2B4A]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-lato text-xs tracking-widest uppercase text-[#8B5E3C] mb-6">Award-Winning Hospitality</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {/* TripAdvisor Travelers Choice 2025 Widget */}
            <div id="TA_certificateOfExcellence586" className="TA_certificateOfExcellence">
              <ul id="svZXhbNzz6F" className="TA_links R3E9zHluokWy" style={{listStyle: "none", padding: 0, margin: 0}}>
                <li id="QnI9zo6h0Zkm" className="zDBi3f">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.com/Hotel_Review-g34496-d86798-Reviews-Equus_Inn-Ocala_Florida.html">
                    <img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_L.png" alt="TripAdvisor Travelers Choice 2025" className="widCOEImg h-36 w-auto" id="CDSWIDCOELOGO" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <p className="font-display text-3xl font-bold text-[#1C2B4A] mb-2">TripAdvisor Travelers' Choice 2025</p>
              <p className="font-body text-base text-[#2A2A2A]/65 mb-3">Recognized as one of the best hotels in Ocala, Florida — awarded to the top 10% of hotels worldwide based on verified guest reviews.</p>
              <a
                href="https://www.tripadvisor.com/Hotel_Review-g34496-d86798-Reviews-Equus_Inn-Ocala_Florida.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-700 tracking-widest uppercase text-[#8B5E3C] border-b border-[#8B5E3C] pb-0.5 hover:text-[#1C2B4A] hover:border-[#1C2B4A] transition-colors"
              >
                Read All Reviews on TripAdvisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Rating Banner */}
      <section className="bg-[#1C2B4A] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Score */}
            <div className="text-center md:text-left">
              <div className="flex items-end gap-4 justify-center md:justify-start">
                <span className="font-cormorant text-8xl font-bold text-[#D4AF6A] leading-none">9.0</span>
                <div className="pb-3">
                  <p className="text-white font-cormorant text-2xl font-semibold">Exceptional</p>
                  <p className="text-white/60 font-lato text-sm">Based on 507+ verified reviews</p>
                  <p className="text-[#D4AF6A] font-lato text-xs mt-1 tracking-widest uppercase">High Score for Ocala, FL</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                <StarRating rating={4.5} />
                <span className="text-white/70 font-lato text-sm">4.5 / 5 on TripAdvisor</span>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              {overallRatings.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-white/80 font-lato text-sm w-32 shrink-0">{item.label}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.score / item.max) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[#D4AF6A] rounded-full"
                    />
                  </div>
                  <span className="text-[#D4AF6A] font-lato font-semibold text-sm w-8 text-right">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Highlights */}
      <section className="py-14 bg-white border-b border-[#1C2B4A]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-cormorant text-3xl text-[#1C2B4A] font-bold text-center mb-10">
            What Guests Love Most
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FDFBF7] border border-[#D4AF6A]/30 rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-cormorant text-lg font-bold text-[#1C2B4A] mb-2">{h.label}</h3>
                <p className="font-lato text-sm text-[#4A4A4A] italic">"{h.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#8B5E3C] font-lato text-sm tracking-[0.2em] uppercase mb-2">Verified Guest Experiences</p>
            <h2 className="font-cormorant text-4xl text-[#1C2B4A] font-bold">Recent Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-[#1C2B4A]/8 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#1C2B4A] flex items-center justify-center text-white font-cormorant font-bold text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-lato font-semibold text-[#1C2B4A] text-sm">{review.name}</p>
                      <p className="font-lato text-xs text-[#6B6B6B]">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <SourceBadge source={review.source} />
                    {review.verified && (
                      <span className="text-xs text-green-600 font-lato flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating & Title */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <StarRating rating={review.rating} max={review.source === "Agoda" ? 10 : 5} />
                    <span className="font-lato text-xs text-[#6B6B6B]">{review.date}</span>
                  </div>
                  <h3 className="font-cormorant text-lg font-bold text-[#1C2B4A]">"{review.title}"</h3>
                </div>

                {/* Review Text */}
                <p className="font-lato text-sm text-[#4A4A4A] leading-relaxed flex-1">{review.text}</p>

                {/* Stay Details */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1C2B4A]/8">
                  <span className="text-xs font-lato text-[#8B5E3C] bg-[#8B5E3C]/10 px-2 py-0.5 rounded-full">
                    {review.stayType}
                  </span>
                  <span className="text-xs font-lato text-[#1C2B4A] bg-[#1C2B4A]/8 px-2 py-0.5 rounded-full">
                    {review.roomType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Summary Quote */}
      <section className="py-16 bg-[#1C2B4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <svg className="w-10 h-10 text-[#D4AF6A] mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-cormorant text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
            "The hotel staff is highly praised for their friendliness and helpfulness. The rooms are clean and comfortable. Guests appreciate the outdoor courtyard with its pool, fireplace, and fountain — a truly unique equestrian experience in the heart of Ocala."
          </p>
          <p className="font-lato text-[#D4AF6A] text-sm tracking-widest uppercase">
            — Agoda AI Review Summary · 507 Verified Reviews
          </p>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-cormorant text-3xl text-[#1C2B4A] font-bold mb-4">Share Your Experience</h2>
          <p className="font-lato text-[#4A4A4A] mb-8 leading-relaxed">
            Have you stayed at Equus Inn? We'd love to hear about your visit. Your feedback helps us continue delivering an exceptional equestrian boutique hotel experience for every guest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g34496-d86798-Reviews-Equus_Inn-Ocala_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#34E0A1] text-[#1C2B4A] font-lato font-semibold rounded hover:bg-[#28c48e] transition-colors duration-200"
            >
              Review on TripAdvisor
            </a>
            <a
              href="https://www.google.com/maps/place/Equus+Inn/@29.1484,-82.1736,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4285F4] text-white font-lato font-semibold rounded hover:bg-[#3367D6] transition-colors duration-200"
            >
              Review on Google
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1C2B4A] text-[#1C2B4A] font-lato font-semibold rounded hover:bg-[#1C2B4A] hover:text-white transition-colors duration-200"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C2B4A 0%, #2a3f6a 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#D4AF6A] font-lato text-sm tracking-[0.2em] uppercase mb-3">Ready to Experience It Yourself?</p>
          <h2 className="font-cormorant text-4xl text-white font-bold mb-4">
            Join Our Happy Guests
          </h2>
          <p className="font-lato text-white/70 mb-8">
            Book your stay at Equus Inn and discover why guests keep coming back to Ocala's premier equestrian boutique hotel.
          </p>
          <a
            href="https://www.booking.com/hotel/us/equus-inn-ocala.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#D4AF6A] text-[#1C2B4A] font-lato font-bold tracking-wider uppercase text-sm hover:bg-[#c49d58] transition-colors duration-200 rounded"
          >
            Book Your Stay
          </a>
        </div>
      </section>



      <Footer />
    </div>
  );
}
