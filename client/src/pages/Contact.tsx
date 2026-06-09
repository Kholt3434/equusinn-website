/**
 * EQUUS INN CONTACT PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, ExternalLink, Radio } from "lucide-react";
import { toast } from "sonner";

const LOBBY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/LobbyLoungeAre_v2_943f919a.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/hotel_exterior_main_decd433b.webp";

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

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
    message: "",
    transactionOptIn: 0,
    marketingOptIn: 0
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xdapjnzg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
          _subject: "New General Inquiry from Equus Inn",
          _replyto: form.email,
        }),
      });
      if (response.ok) {
        toast.success("Thank you! Your message has been sent. We'll be in touch within 24 hours.");
        setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "", roomType: "", message: "", transactionOptIn: 0, marketingOptIn: 0 });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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
            <p className="section-label text-[#D4AF6A] mb-3">We'd Love to Hear From You</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="section-label mb-4">Get in Touch</p>
                <div className="gold-divider mb-6" />
                <h2 className="font-display text-3xl font-bold text-[#1C2B4A] mb-6">
                  We're Here<br />
                  <span className="italic">For You</span>
                </h2>
                <p className="font-body text-[#2A2A2A]/65 text-sm leading-relaxed mb-10">
                  Whether you're planning a trip to the World Equestrian Center, looking for the perfect pet-friendly getaway, or simply need directions — our front desk team is available 24 hours a day, 7 days a week.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Address</p>
                      <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">
                        3434 SW College Rd<br />
                        Ocala, FL 34474
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Phone</p>
                      <a href="tel:+13528543200" className="font-body text-sm text-[#2A2A2A]/65 hover:text-[#1C2B4A] transition-colors">
                        (352) 854-3200
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Front Desk Email</p>
                      <a href="mailto:OcalaFD@paxproperties.com" className="font-body text-sm text-[#2A2A2A]/65 hover:text-[#1C2B4A] transition-colors">
                        OcalaFD@paxproperties.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#1C2B4A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Front Desk Hours</p>
                      <p className="font-body text-sm text-[#2A2A2A]/65">Open 24 hours, 7 days a week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C2B4A]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#D4AF6A]" />
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Breakfast Hours</p>
                      <p className="font-body text-sm text-[#2A2A2A]/65">Mon–Fri: 6:00 am – 9:00 am</p>
                      <p className="font-body text-sm text-[#2A2A2A]/65">Sat – Sun: 6:00 am – 10:00 am</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-10">
                  <p className="font-display font-600 text-sm text-[#1C2B4A] mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/EquusInn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 border border-[#1C2B4A]/20 text-[#1C2B4A] hover:bg-[#1C2B4A] hover:text-white transition-all duration-300 font-body text-xs tracking-wide"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/equusinn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 border border-[#1C2B4A]/20 text-[#1C2B4A] hover:bg-[#1C2B4A] hover:text-white transition-all duration-300 font-body text-xs tracking-wide"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  </div>
                </div>

                {/* Lobby Image */}
                <div className="overflow-hidden h-48">
                  <img
                    src={LOBBY_IMG}
                    alt="Equus Inn lobby lounge area with horse racing mural"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white shadow-sm p-8 lg:p-12">
                  <h3 className="font-display text-2xl font-bold text-[#2B3F4E] mb-2">Send Us a Message</h3>
                  <p className="font-body text-sm text-[#2A2A2A]/55 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours. For immediate assistance, please call us directly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FDFBF7]"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FDFBF7]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FDFBF7]"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Room Type
                        </label>
                        <select
                          name="roomType"
                          value={form.roomType}
                          onChange={handleChange}
                          className="w-full border border-[#2B3F4E]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]"
                        >
                          <option value="">Select room type</option>
                          <option value="king">King Room</option>
                          <option value="double-queen">Double Queen Room</option>
                          <option value="suite">Suite with Kitchenette</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Check-In Date
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          value={form.checkIn}
                          onChange={handleChange}
                          className="w-full border border-[#2B3F4E]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Check-Out Date
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          value={form.checkOut}
                          onChange={handleChange}
                          className="w-full border border-[#2B3F4E]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-600 tracking-widest uppercase text-[#1C2B4A] mb-2">
                          Guests
                        </label>
                        <select
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          className="w-full border border-[#2B3F4E]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]"
                        >
                          <option value="">Guests</option>
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Guests</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs font-600 tracking-widest uppercasetext-[#1C2B4A] mb-2">
                        Send Us a Message                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your stay, any special requests, or questions you have..."
                        className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FDFBF7] resize-none"
                      />
                    </div>
                    <div>
                      <input onChange={handleChange} type="checkbox" id="transactionOptInCheckBox" name="transactionOptIn" value="1" />

                      <p className="font-body text-sm text-[#2A2A2A]/55 mb-8">
                        By checking this box, I consent to receive transactional messages related to my account, orders, or services I have received from Pax Ocala, LLC. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message and data rates may apply. Reply HELP for help. Reply STOP to opt-out.
                      </p>

                    </div>
                    <div>
                      <input onChange={handleChange} type="checkbox" id="marketingOptInCheckBox" name="marketingOptIn" value="1" />
                      <label>
                        <p className="font-body text-sm text-[#2A2A2A]/55 mb-8">
                          By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new services updates, among others from Pax Ocala, LLC. Message frequency may vary. Message and data rates may apply. Reply HELP for help. Reply STOP to opt-out.
                        </p>
                      </label><br />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary text-xs px-8 py-4 font-body font-600 tracking-widest uppercase inline-flex items-center gap-2 disabled:opacity-60"
                      >
                        {submitting ? "Sending..." : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </button>
                      <p className="font-body text-xs text-[#2A2A2A]/40">
                        Or call us directly: <a href="tel:+13528543200" className="text-[#1C2B4A] hover:underline">(352) 854-3200</a>
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                      <a href="/privacy-policy" className="font-body text-xs text-[#2A2A2A]/40">
                        Privacy Policy
                      </a>
                      <a href="/terms-of-service" className="font-body text-xs text-[#2A2A2A]/40">
                        Terms of Service
                      </a>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Book Direct CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#2B3F4E]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#FAF7F2] mb-3">
                  Ready to Book?
                </h2>
                <p className="font-body text-[#FAF7F2]/65 text-sm leading-relaxed max-w-lg">
                  Reserve your room online for instant confirmation. Rooms fill quickly during show season — book early to secure your preferred dates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs px-8 py-4 font-body font-600 tracking-widest uppercase inline-flex items-center gap-2"
                >
                  Book Online <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="tel:+13528543200"
                  className="btn-outline text-xs px-8 py-4 font-body font-600 tracking-widest uppercase inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
