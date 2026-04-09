/*
 * EQUUS INN FAQ PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * AI-Optimized: Comprehensive FAQ schema markup for search engines and AI assistants
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, Search } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/hotel_exterior_main_decd433b.webp";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // Booking & Reservations
  {
    category: "Booking & Reservations",
    question: "How do I make a reservation at Equus Inn?",
    answer: "Book directly through our website at www.equusinn.com or call us at (352) 854-3200. We offer group rates for 10+ rooms.",
  },
  {
    category: "Booking & Reservations",
    question: "What is your cancellation policy?",
    answer: "Cancellations made 24 hours before arrival receive a full refund. Cancellations within 24 hours are subject to one night's room charge. Group bookings have specific terms—contact our sales team for details.",
  },
  {
    category: "Booking & Reservations",
    question: "Do you offer group discounts?",
    answer: "Yes! Groups of 10 or more rooms receive special pricing. Contact our group sales coordinator at kholt@paxproperties.com or call (352) 854-3200 for custom quotes.",
  },
  {
    category: "Booking & Reservations",
    question: "Can I modify my reservation?",
    answer: "Yes, you can modify dates, room type, or guest count by calling us or logging into your online booking. Changes are subject to availability and rate differences.",
  },
  {
    category: "Booking & Reservations",
    question: "Do you accept late check-in?",
    answer: "Yes! We have an agent available at the front desk 24 hours a day to assist you with late check-in or any other needs.",
  },

  // Room Types & Features
  {
    category: "Room Types & Features",
    question: "What room types are available?",
    answer: "We offer One Queen, Two Queen, King Suite, One Queen Suite, Two Queen Suite, King Standard ADA, Two Queen Suite ADA, One Queen ADA, and One Queen Suite ADA rooms. Each features modern amenities and equestrian-inspired décor.",
  },
  {
    category: "Room Types & Features",
    question: "What are your ADA-accessible rooms?",
    answer: "We offer ADA-accessible rooms including our King Standard ADA and Two Queen Suite ADA options. All feature accessible bathrooms with grab bars and spacious layouts for wheelchair access.",
  },
  {
    category: "Room Types & Features",
    question: "Do rooms have air conditioning?",
    answer: "Yes, all rooms feature individual climate control with air conditioning and heating. You can adjust the temperature to your preference.",
  },
  {
    category: "Room Types & Features",
    question: "Are rooms pet-friendly?",
    answer: "Yes! We welcome pets at Equus Inn. Pet fees are $35 per pet, per night. Please mention your pet when booking and let us know the size and type.",
  },
  {
    category: "Room Types & Features",
    question: "What amenities are included in rooms?",
    answer: "All rooms include complimentary WiFi, flat-screen TV, work desk, coffee maker, hair dryer, and premium bedding. Suite rooms feature additional living areas and kitchenettes.",
  },

  // Breakfast & Dining
  {
    category: "Breakfast & Dining",
    question: "Is breakfast included?",
    answer: "Yes! A complimentary hot breakfast buffet is included with every room reservation. Breakfast is served daily from 6:00 AM to 9:00 AM. Our amazing breakfast team ensures we have a variety of rotating items to choose from.",
  },
  {
    category: "Breakfast & Dining",
    question: "What is served at breakfast?",
    answer: "Our hot breakfast buffet features a rotating selection of items including eggs, fresh fruit, yogurt, cereal, toast, pastries, juice, and coffee. Our amazing breakfast team ensures we have a variety of options to choose from. We accommodate dietary restrictions—please inform us when booking.",
  },
  {
    category: "Breakfast & Dining",
    question: "Are there restaurants and dining options at or near Equus Inn?",
    answer: "We have a self-service beer and wine bar available for guests. For dining, excellent local favorites are within walking distance or a short drive, including The Yearling (classic Florida cuisine), Tony's Sushi (Japanese), and Bagelicious Deli & Bakery (breakfast and lunch). We can provide recommendations at check-in.",
  },
  {
    category: "Breakfast & Dining",
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely. Please inform us of any dietary needs (vegetarian, vegan, gluten-free, allergies) when booking, and we'll do our best to accommodate at breakfast.",
  },

  // Facilities & Amenities
  {
    category: "Facilities & Amenities",
    question: "What amenities does Equus Inn offer?",
    answer: "We offer a heated outdoor pool, fitness center with strength equipment and weights, high-speed WiFi, meeting room, business center, self-service beer and wine bar, and complimentary breakfast.",
  },
  {
    category: "Facilities & Amenities",
    question: "Is there a fitness center?",
    answer: "Yes, our fitness center features strength equipment, weights, cardio machines, and free weights. It's available 24/7 for all guests.",
  },
  {
    category: "Facilities & Amenities",
    question: "Can I use the pool year-round?",
    answer: "Yes! Our heated outdoor pool is open year-round for all guests to enjoy."
  },
  {
    category: "Facilities & Amenities",
    question: "Is WiFi included?",
    answer: "Yes, high-speed fiber optic WiFi is complimentary for all guests throughout the hotel.",
  },
  {
    category: "Facilities & Amenities",
    question: "Do you have a business center?",
    answer: "Yes, we offer a fully equipped business center with computers, printers, and copying services available 24/7.",
  },

  // Meetings & Events
  {
    category: "Meetings & Events",
    question: "Can I host a meeting or event at Equus Inn?",
    answer: "Yes! Our versatile meeting room accommodates up to 45 guests in various configurations (theater, classroom, boardroom, banquet). Contact our events team at kholt@paxproperties.com.",
  },
  {
    category: "Meetings & Events",
    question: "What meeting room equipment is available?",
    answer: "Our meeting room includes high-speed WiFi, projector, screen, sound system, and AV equipment.",
  },
  {
    category: "Meetings & Events",
    question: "Do you offer catering?",
    answer: "We're currently working on developing catering options for our guests. Please contact our sales team at kholt@paxproperties.com for more information."
  },
  {
    category: "Meetings & Events",
    question: "Is the projector included in meeting room rental?",
    answer: "The projector is available for use. Please contact our sales department for current availability and any associated fees.",
  },
  {
    category: "Meetings & Events",
    question: "Can you accommodate corporate events?",
    answer: "Absolutely! We host corporate meetings, training sessions, team building events, and business dinners. Our team can customize packages to meet your needs.",
  },

  // Parking
  {
    category: "Parking",
    question: "Is parking free?",
    answer: "Yes, complimentary parking is available for all guests. We have ample on-site parking for cars, trucks, and vehicles.",
  },
  {
    category: "Parking",
    question: "Is the parking lot well-lit and secure?",
    answer: "Yes, our parking lot is well-lit. Please note that the parking lot is not monitored. We recommend locking your vehicle and keeping valuables out of sight for your security.",
  },

  // Location & Attractions
  {
    category: "Location & Attractions",
    question: "Where is Equus Inn located?",
    answer: "We're located at 3434 SW College Rd, Ocala, FL 34474, conveniently off I-75 and close to the World Equestrian Center.",
  },
  {
    category: "Location & Attractions",
    question: "What attractions are near the hotel?",
    answer: "Ocala offers excellent attractions including the World Equestrian Center, Silver Springs State Park, local golf courses, restaurants, and shopping. We're a great base for exploring the area.",
  },
  {
    category: "Location & Attractions",
    question: "How far is the World Equestrian Center?",
    answer: "The World Equestrian Center is just a short drive from Equus Inn, making us the ideal choice for equestrian event attendees.",
  },

  {
    category: "Location & Attractions",
    question: "What activities are available in Ocala?",
    answer: "Ocala offers golf, equestrian events, state parks, shopping, dining, and cultural attractions. It's a great destination for families, sports teams, and business travelers.",
  },

  // Policies & House Rules
  {
    category: "Policies & House Rules",
    question: "What is your smoking policy?",
    answer: "Equus Inn is a non-smoking property. Smoking is not permitted in rooms or common areas. Designated outdoor smoking areas are available.",
  },
  {
    category: "Policies & House Rules",
    question: "What is your noise policy?",
    answer: "We maintain quiet hours from 10 PM to 8 AM. Please keep noise levels low during these times to respect other guests.",
  },
  {
    category: "Policies & House Rules",
    question: "Are there any additional fees?",
    answer: "Room rates include breakfast and WiFi. Pet fees are $35 per pet, per night. Parking is complimentary. A $150 security deposit may be required for cash-paying guests, OTA prepaid reservations, or Marion County residents. The deposit can be provided in cash or as a credit/debit card authorization hold, which will be released upon departure following room inspection (allow 3–7 business days for funds to reflect back in your account).",
  },
  {
    category: "Policies & House Rules",
    question: "What is your check-in and check-out time?",
    answer: "Standard check-in is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available based on availability—contact us to arrange.",
  },
  {
    category: "Policies & House Rules",
    question: "Can I have guests visit my room?",
    answer: "Yes, guests are welcome to visit. Please ensure visitors leave by 10 PM (quiet hours). For security, we ask that you notify the front desk of visitors.",
  },

  // Groups & Teams
  {
    category: "Groups & Teams",
    question: "What group sizes do you accommodate?",
    answer: "We welcome groups of all sizes, from small meetings to large tournaments. Groups of 10+ rooms receive special pricing and dedicated support.",
  },
  {
    category: "Groups & Teams",
    question: "Do you host sports tournaments?",
    answer: "Yes! We host swim tournaments, baseball, softball, volleyball, and other sports teams. Our location and amenities make us ideal for tournament teams.",
  },
  {
    category: "Groups & Teams",
    question: "Can you provide group transportation?",
    answer: "We don't provide transportation, but we can recommend local transportation services. Our central location makes it easy for groups to arrange their own.",
  },
  {
    category: "Groups & Teams",
    question: "Do you offer group packages?",
    answer: "Yes! We offer customized group packages including room blocks, breakfast, meeting space, and event coordination. Contact kholt@paxproperties.com for details.",
  },
  {
    category: "Groups & Teams",
    question: "Can groups book the meeting room?",
    answer: "Absolutely! Groups can book our meeting room for team meetings, strategy sessions, or celebrations. Contact our events team for availability and pricing.",
  },

  // Contact & Support
  {
    category: "Contact & Support",
    question: "How do I contact Equus Inn?",
    answer: "Call us at (352) 854-3200, email general inquiries to ocalafd@paxproperties.com, or contact our sales team at kholt@paxproperties.com.",
  },
  {
    category: "Contact & Support",
    question: "What are your office hours?",
    answer: "Our front desk is available 24/7. Office hours for sales inquiries are Monday-Friday, 9:00 AM - 5:00 PM EST.",
  },
  {
    category: "Contact & Support",
    question: "Do you have a loyalty program?",
    answer: "Please contact us for information about loyalty programs and special offers for repeat guests.",
  },
  {
    category: "Contact & Support",
    question: "Can I request special accommodations?",
    answer: "Yes! We're happy to accommodate special requests such as late check-in, room preferences, or accessibility needs. Please mention when booking.",
  },
  {
    category: "Contact & Support",
    question: "How do I leave feedback or file a complaint?",
    answer: "We value your feedback! Contact us at (352) 854-3200 or email ocalafd@paxproperties.com. We're committed to resolving any concerns.",
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

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[#1C2B4A]/10 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between hover:bg-[#FAF7F2] transition-colors text-left"
      >
        <span className="font-body font-600 text-[#1C2B4A] text-sm sm:text-base">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#D4AF6A] transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 font-body text-sm text-[#2A2A2A]/75 leading-relaxed">{item.answer}</div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* Hero Section */}
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
            <p className="section-label text-[#D4AF6A] mb-3">Your Questions Answered</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Search & Filter */}
          <AnimatedSection className="mb-12">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF6A]" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#1C2B4A]/20 rounded-lg focus:outline-none focus:border-[#D4AF6A] bg-white text-[#2A2A2A]"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                    !selectedCategory
                      ? "bg-[#D4AF6A] text-white"
                      : "bg-white border border-[#1C2B4A]/20 text-[#1C2B4A] hover:border-[#D4AF6A]"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                      selectedCategory === category
                        ? "bg-[#D4AF6A] text-white"
                        : "bg-white border border-[#1C2B4A]/20 text-[#1C2B4A] hover:border-[#D4AF6A]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, index) => <FAQAccordion key={index} item={item} index={index} />)
              ) : (
                <div className="p-12 text-center">
                  <p className="text-[#2A2A2A]/60 font-body">No questions match your search. Try different keywords.</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection className="mt-16 bg-gradient-to-r from-[#1C2B4A] to-[#2B3F4E] rounded-lg p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Didn't find your answer?</h3>
            <p className="text-[#FAF7F2] mb-6 font-body">
              Contact our team directly. We're here to help with any questions about your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13528543200"
                className="btn-gold px-8 py-3 rounded-lg text-center font-body font-600"
              >
                Call Us: (352) 854-3200
              </a>
              <a
                href="/contact"
                className="px-8 py-3 rounded-lg border-2 border-[#D4AF6A] text-[#D4AF6A] hover:bg-[#D4AF6A] hover:text-[#1C2B4A] transition-colors font-body font-600"
              >
                Contact Form
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Schema Markup for AI */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </script>

      <Footer />
    </div>
  );
}
