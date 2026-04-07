/*
 * EQUUS INN FAQ PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import SchemaMarkup, { faqSchema } from "@/components/SchemaMarkup";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/hotel_exterior_main_decd433b.webp";

const FAQs = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        q: "How do I make a reservation at Equus Inn?",
        a: "You can book directly through our website, or contact our front desk at (352) 854-3200. We're also available on major booking platforms including Booking.com, Expedia, and Hotels.com.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer free cancellation up to 24 hours before check-in. Cancellation policies may vary by rate type, so please review the specific terms at the time of booking.",
      },
      {
        q: "Is there an early check-in or late check-out option?",
        a: "Early check-in (before 3:00 PM) and late check-out (after 11:00 AM) are available upon request, subject to availability. Additional fees may apply.",
      },
      {
        q: "What is your group booking policy?",
        a: "We welcome group bookings for events, conferences, and equestrian competitions. Contact our sales team at kholt@paxproperties.com for group rates and special arrangements.",
      },
    ],
  },
  {
    category: "Rooms & Amenities",
    questions: [
      {
        q: "What room types are available?",
        a: "We offer King Rooms, King Junior Rooms, Double Queen Rooms, Two Queen Suites, King Suites, Spa Junior Suites, Spa Suites, and multiple ADA-accessible room options including King Suite ADA, Two Queen Suite ADA, One Queen ADA, and One Queen Suite ADA.",
      },
      {
        q: "Are your rooms pet-friendly?",
        a: "Yes! Equus Inn is a pet-friendly hotel. Pets of all sizes are welcome for a fee of $35 per pet, per night. Please notify us at booking and keep pets on a leash in common areas.",
      },
      {
        q: "Do you have ADA-accessible rooms?",
        a: "Yes, we have several ADA-accessible room options featuring accessible bathrooms, grab bars, and spacious layouts. Please mention accessibility needs when booking.",
      },
      {
        q: "What amenities are included with my room?",
        a: "All rooms include free hot and cold breakfast, WiFi, smart TV, air conditioning, and access to our fitness center, outdoor pool, and fire pit lounge.",
      },
      {
        q: "Do you have kitchenettes or full kitchens?",
        a: "Our suite rooms include kitchenettes with full-size refrigerators and dining areas, perfect for extended stays or groups.",
      },
    ],
  },
  {
    category: "Dining & Breakfast",
    questions: [
      {
        q: "What time is breakfast served?",
        a: "Breakfast is served daily from 6:00 AM to 9:00 AM. It's a hot buffet featuring rotating menu items including eggs, sausage, biscuits, fresh fruits, cereals, and freshly made waffles.",
      },
      {
        q: "Is breakfast included in my room rate?",
        a: "Yes, complimentary hot and cold breakfast is included with all room bookings.",
      },
      {
        q: "Are there restaurants near the hotel?",
        a: "Absolutely! Ocala has excellent dining options nearby. Local favorites include Stella's Modern Pantry, Tony's Sushi (across the street), and Bagelicious Deli & Bakery for breakfast and lunch.",
      },
      {
        q: "Do you have a bar or lounge?",
        a: "Yes, we offer a self-service beer and wine bar available to guests throughout the day.",
      },
    ],
  },
  {
    category: "Facilities & Activities",
    questions: [
      {
        q: "What facilities are available at Equus Inn?",
        a: "We offer a 24/7 fitness center with strength equipment and weights, a seasonally heated outdoor pool, a covered fire pit lounge with gazebo, and free WiFi throughout the property.",
      },
      {
        q: "Do you have meeting or event spaces?",
        a: "Yes, we have meeting rooms available for conferences, corporate events, and private gatherings. Contact our sales team at kholt@paxproperties.com for details and availability.",
      },
      {
        q: "Is there a projector available for presentations?",
        a: "Yes, a projector is available for use in our meeting spaces. Contact our sales department for pricing and availability.",
      },
      {
        q: "What is there to do in Ocala?",
        a: "Ocala offers world-class equestrian facilities including the World Equestrian Center and Florida Horse Park. The area also features beautiful natural springs, hiking trails, local restaurants, shopping, and cultural attractions.",
      },
    ],
  },
  {
    category: "Parking & Transportation",
    questions: [
      {
        q: "Is parking available?",
        a: "Yes, free on-site parking is available for all guests. We have ample parking for vehicles of all sizes.",
      },
      {
        q: "How far is Equus Inn from major attractions?",
        a: "We're conveniently located just 20 minutes from the World Equestrian Center and Florida Horse Park, and only minutes off I-75 for easy access to other areas.",
      },
      {
        q: "Do you offer airport shuttle service?",
        a: "Please contact our front desk at (352) 854-3200 to inquire about transportation options and arrangements.",
      },
    ],
  },
  {
    category: "Policies & General",
    questions: [
      {
        q: "What is your check-in and check-out time?",
        a: "Standard check-in is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available upon request.",
      },
      {
        q: "Is WiFi included?",
        a: "Yes, property-wide fiber optic WiFi is complimentary for all guests.",
      },
      {
        q: "Do you have 24-hour front desk service?",
        a: "Yes, our front desk team is available 24 hours a day, 7 days a week to assist with any questions or requests.",
      },
      {
        q: "How can I contact the hotel?",
        a: "Call us at (352) 854-3200, email general inquiries to ocalafd@paxproperties.com, or visit us at 3434 SW College Road, Ocala, FL 34474.",
      },
    ],
  },
];

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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#1C2B4A]/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between hover:bg-[#1C2B4A]/5 transition-colors text-left"
      >
        <h3 className="font-display font-600 text-base text-[#1C2B4A] pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#D4AF6A] flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-[#1C2B4A]/2">
          <p className="font-body text-sm text-[#2A2A2A]/75 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SchemaMarkup id="faq" schema={faqSchema} />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      >
        <div className="absolute inset-0 bg-[#1C2B4A]/60" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Questions & Answers</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {FAQs.map((category, idx) => (
            <AnimatedSection key={idx} className="mb-16">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#1C2B4A] to-[#2A3F5F] px-8 py-6">
                  <h2 className="font-display text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <div>
                  {category.questions.map((item, qIdx) => (
                    <FAQItem key={qIdx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Contact CTA */}
          <AnimatedSection className="mt-20 bg-gradient-to-r from-[#1C2B4A] to-[#2A3F5F] rounded-lg p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Didn't find your answer?</h2>
            <p className="font-body text-[#FAF7F2]/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help! Contact us directly and we'll be happy to assist with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[#D4AF6A] text-[#1C2B4A] font-display font-600 rounded-lg hover:bg-[#E5C17A] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+13528543200"
                className="inline-block px-8 py-3 border-2 border-[#D4AF6A] text-[#D4AF6A] font-display font-600 rounded-lg hover:bg-[#D4AF6A]/10 transition-colors"
              >
                Call: (352) 854-3200
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
