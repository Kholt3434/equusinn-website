/*
 * BASEBALL TOURNAMENT LANDING PAGE
 * Hidden landing page for Google Ads campaigns
 * Target: Baseball tournament teams attending Ocala events
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Trophy, Users, MapPin, DollarSign, Wifi, Coffee, 
  CheckCircle, ArrowRight, Phone, Mail
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/FrontExterior-HorseStatue_c9445e18.webp";
const POOL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/outdoorpool_41fd32e0.webp";
const ROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/KingRoom_5ae99094.webp";
const BREAKFAST_IMG = "/manus-storage/ChatGPTImageApr27,2026,12_03_33PM_b17ef2ac.png";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BaseballTournament() {
  const [formData, setFormData] = useState({
    teamName: "",
    contactName: "",
    email: "",
    phone: "",
    teamSize: "",
    tournament: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to email
    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "baseball",
          recipientEmail: "kholt@paxproperties.com"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ teamName: "", contactName: "", email: "", phone: "", teamSize: "", tournament: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Equus Inn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            Baseball Tournament Teams
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Home Base in Ocala
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-8"
          >
            Perfect accommodations for FAST Ocala, Ocala Rotary Sportsplex, Shocker Park, Babe Ruth & Cal Ripken tournaments
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-500 hover:bg-yellow-600 text-navy px-8 py-3 rounded-lg font-semibold transition"
          >
            Get Group Rates
          </motion.button>
        </div>
      </section>

      {/* Why Choose Equus Inn */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-navy">Why Tournament Teams Choose Equus Inn</h2>
            <p className="text-lg text-gray-600">Close to all major Ocala baseball venues • Group discounts • Free breakfast • Pet-friendly</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Minutes from Tournaments",
                desc: "Just minutes from FAST Ocala, Ocala Rotary Sportsplex, Shocker Park, and Babe Ruth fields"
              },
              {
                icon: DollarSign,
                title: "Group Rates",
                desc: "Special pricing for tournament teams and group bookings"
              },
              {
                icon: Coffee,
                title: "Free Hot Breakfast",
                desc: "Fuel up your team before games with our complimentary hot breakfast daily"
              },
              {
                icon: Wifi,
                title: "Free WiFi & Parking",
                desc: "Stay connected and park free throughout your stay"
              },
              {
                icon: Trophy,
                title: "Tournament Ready",
                desc: "152 rooms to accommodate your entire team"
              },
              {
                icon: Users,
                title: "Group Meeting Space",
                desc: "Host team meetings in our dedicated group facilities"
              }
            ].map((item, i) => (
              <AnimatedSection key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <item.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-navy">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Tournaments */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-navy">Ocala Tournament Venues</h2>
            <p className="text-lg text-gray-600">All within minutes of Equus Inn</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "FAST Ocala",
                desc: "Florida Aquatics Swimming & Training - Premier aquatics facility",
                distance: "5 minutes"
              },
              {
                name: "Ocala Rotary Sportsplex",
                desc: "Multiple baseball fields hosting Cal Ripken and Babe Ruth tournaments",
                distance: "8 minutes"
              },
              {
                name: "Shocker Park",
                desc: "Professional-grade baseball facility in downtown Ocala",
                distance: "6 minutes"
              },
              {
                name: "Babe Ruth & Cal Ripken Fields",
                desc: "World-class youth baseball tournaments throughout the season",
                distance: "7 minutes"
              }
            ].map((venue, i) => (
              <AnimatedSection key={i} className="bg-gradient-to-r from-navy to-blue-900 text-white p-8 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">{venue.name}</h3>
                <p className="mb-4">{venue.desc}</p>
                <p className="text-yellow-400 font-semibold">{venue.distance} from Equus Inn</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-navy">Team Amenities</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <img src={BREAKFAST_IMG} alt="Breakfast" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg text-navy mb-2">Free Hot Breakfast</h3>
              <p className="text-gray-600">Daily hot breakfast included with every room</p>
            </AnimatedSection>
            <AnimatedSection>
              <img src={POOL_IMG} alt="Pool" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg text-navy mb-2">Heated Pool</h3>
              <p className="text-gray-600">Relax after tournament games in our seasonal heated pool</p>
            </AnimatedSection>
            <AnimatedSection>
              <img src={ROOM_IMG} alt="Room" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg text-navy mb-2">Comfortable Rooms</h3>
              <p className="text-gray-600">152 rooms with modern amenities and pet-friendly options</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Group Inquiry Form */}
      <section id="inquiry" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4 text-navy">Get Your Group Rates</h2>
            <p className="text-lg text-gray-600">Fill out the form below and we'll send you special tournament team pricing</p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! We'll contact you shortly with group rates.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Team Name *</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your team name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Team Size *</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select team size</option>
                    <option value="10-15">10-15 people</option>
                    <option value="16-25">16-25 people</option>
                    <option value="26-50">26-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Tournament *</label>
                  <select
                    name="tournament"
                    value={formData.tournament}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select tournament</option>
                    <option value="FAST Ocala">FAST Ocala</option>
                    <option value="Ocala Rotary Sportsplex">Ocala Rotary Sportsplex</option>
                    <option value="Shocker Park">Shocker Park</option>
                    <option value="Babe Ruth">Babe Ruth Baseball</option>
                    <option value="Cal Ripken">Cal Ripken Baseball</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Dates needed, special requests, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-navy font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                Request Group Rates <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Questions? Contact us directly:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:3528541234" className="flex items-center justify-center gap-2 text-navy hover:text-yellow-500 font-semibold">
                  <Phone className="w-5 h-5" /> (352) 854-1234
                </a>
                <a href="mailto:kholt@paxproperties.com" className="flex items-center justify-center gap-2 text-navy hover:text-yellow-500 font-semibold">
                  <Mail className="w-5 h-5" /> kholt@paxproperties.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4">Ready to Book Your Tournament Stay?</h2>
          <p className="text-lg mb-8">Get special group rates for your baseball team at Equus Inn</p>
          <Link href="/">
            <a className="inline-block bg-yellow-500 hover:bg-yellow-600 text-navy font-semibold px-8 py-3 rounded-lg transition">
              View All Accommodations
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
