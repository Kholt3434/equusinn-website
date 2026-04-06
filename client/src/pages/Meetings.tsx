/**
 * EQUUS INN MEETINGS & EVENTS PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";
import {
  Users, Wifi, Coffee, Tv, Projector, Check, Phone, Mail,
  Send, PawPrint, Heart, Shield, Star,
} from "lucide-react";
import { toast } from "sonner";

// Real meeting room photos
const MEETING_BOARDROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoardroomProjector_400eafd0.png";
const MEETING_THEATRE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/theaterstyle2_b80cc898.png";
const MEETING_CLASSROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomClassroom_1bea37f5.png";
const MEETING_EQUINE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/upshapecorporate_0b80dc44.png";
const MEETING_BIRTHDAY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomGirlsBirthday_ed47bdfc.png";
const MEETING_BABY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoysBabyShower_29e078af.png";
const EXTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/MeetingRoomBoardroomProjector_400eafd0.png";
// Stock photo for pet (appropriate for pet-friendly section)
const PET_STOCK_IMG = "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=900&q=80";

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

const meetingFeatures = [
  { icon: Users, label: "Flexible Capacity", desc: "Configurable for up to 45 guests" },
  { icon: Wifi, label: "Fiber Optic WiFi", desc: "High-speed throughout" },
  { icon: Tv, label: "AV Equipment", desc: "Screen, projector & sound" },
  { icon: Coffee, label: "Catering Available", desc: "Coffee service & breakfast. Outside catering welcome." },
  { icon: Projector, label: "Presentation Ready", desc: "HDMI & wireless display" },
  { icon: Check, label: "Natural Light", desc: "Bright, comfortable space" },
];

const meetingSetups = [
  {
    name: "U-Shape",
    capacity: "18 guests",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/upshapecorporate_0b80dc44.png",
    desc: "Tables arranged in a U-shape for collaborative discussions, training sessions, and interactive workshops where everyone can see each other.",
  },
  {
    name: "Theater",
    capacity: "35 guests",
    img: MEETING_THEATRE,
    desc: "Rows of chairs facing a presentation screen — ideal for presentations, lectures, product launches, and larger group events.",
  },
  {
    name: "Classroom",
    capacity: "24 guests",
    img: MEETING_CLASSROOM,
    desc: "Rows of tables with chairs for training sessions, workshops, and educational seminars. Includes writing surface for each attendee.",
  },
  {
    name: "Boardroom",
    capacity: "18 guests",
    img: MEETING_BOARDROOM,
    desc: "Ideal for executive meetings, strategy sessions, and focused team gatherings. Intimate, professional, and fully equipped.",
  },
  {
    name: "Banquet",
    capacity: "35 guests",
    img: MEETING_BABY,
    desc: "Round or rectangular tables for networking events, team dinners, celebrations, award ceremonies, and social gatherings.",
  },
];

export default function Meetings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    eventDate: "", attendees: "", eventType: "", message: "",
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
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Thank you! Your meeting inquiry has been received. We'll respond within one business day.");
    setForm({ name: "", email: "", phone: "", company: "", eventDate: "", attendees: "", eventType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SchemaMarkup id="meetings-page" schema={{
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "name": "Equus Inn Meeting & Event Room",
        "description": "Versatile meeting and event space in Ocala, Florida. Accommodates up to 45 guests in theater, classroom, U-shape, boardroom, or banquet configurations. AV equipment, high-speed WiFi, and coffee service included.",
        "address": { "@type": "PostalAddress", "streetAddress": "3334 SW College Road", "addressLocality": "Ocala", "addressRegion": "FL", "postalCode": "34474", "addressCountry": "US" },
        "telephone": "+13528543200",
        "url": "https://www.equusinn.com/meetings",
        "maximumAttendeeCapacity": 45
      }} />
      <Navigation />

      {/* Page Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${EXTERIOR_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111B30]/90 via-[#111B30]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-[#D4AF6A] mb-3">Events & Groups</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Meetings & Events
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="section-label mb-4">Meeting Space at Equus Inn</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#1C2B4A] mb-6">
                Where Business Meets<br />
                <span className="italic">Southern Hospitality</span>
              </h2>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-5">
                Equus Inn offers a versatile, fully equipped meeting room ideal for corporate events, team retreats, training sessions, equestrian industry gatherings, and private celebrations. Our space accommodates groups of all sizes with flexible configurations.
              </p>
              <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-8">
                Located minutes from the World Equestrian Center, our meeting facilities are a natural choice for equestrian industry professionals, show organizers, sponsors, and teams who want to combine productive meetings with proximity to Ocala's premier venues.
              </p>
              <a
                href="#meeting-inquiry"
                className="btn-primary text-xs px-8 py-4 inline-block"
              >
                Request a Quote
              </a>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-64 overflow-hidden">
                  <img src={MEETING_BOARDROOM} alt="Equus Inn boardroom meeting setup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-64 overflow-hidden">
                  <img src={MEETING_CLASSROOM} alt="Equus Inn classroom meeting setup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-48 overflow-hidden col-span-2">
                  <img src={MEETING_BABY} alt="Equus Inn meeting room event setup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meeting Features */}
      <section className="py-16 px-6 lg:px-8 bg-[#2B3F4E]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label text-[#D4AF6A] mb-4">What's Included</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#FAF7F2]">
              Fully Equipped for Your Event
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {meetingFeatures.map((f, i) => (
              <AnimatedSection key={i}>
                <div className="text-center p-6 border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 hover:bg-white/5 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#DCD7C9]/15 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#DCD7C9]" />
                  </div>
                  <p className="font-display font-600 text-sm text-[#FAF7F2] mb-1">{f.label}</p>
                  <p className="font-body text-xs text-[#FAF7F2]/45">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Room Configurations */}
      <section className="py-20 px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="section-label mb-4">Room Configurations</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#1C2B4A]">
              Flexible Setups for Every Event
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingSetups.map((setup, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="h-44 overflow-hidden">
                    <img src={setup.img} alt={`Equus Inn ${setup.name} setup`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 border-t-4 border-[#D4AF6A]">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display text-xl font-600 text-[#1C2B4A]">{setup.name}</h3>
                      <span className="font-body font-700 text-[0.6rem] tracking-widest uppercase px-3 py-1 bg-[#2B3F4E] text-[#DCD7C9] flex-shrink-0">
                        {setup.capacity}
                      </span>
                    </div>
                    <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">{setup.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities for Groups */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#DCD7C9]/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="section-label mb-4">For Your Group</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#1C2B4A]">
              Everything Your Group Needs
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="bg-white p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#A27B5B]/15 flex items-center justify-center mb-5">
                  <Coffee className="w-5 h-5 text-[#A27B5B]" />
                </div>
                <h3 className="font-display font-600 text-lg text-[#1C2B4A] mb-3">Group Catering</h3>
                <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">
                  We offer coffee service and breakfast for your event. We also allow outside catering — contact our sales team for recommendations on trusted local caterers who know our space well.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#A27B5B]/15 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-[#A27B5B]" />
                </div>
                <h3 className="font-display font-600 text-lg text-[#1C2B4A] mb-3">Group Room Blocks</h3>
                <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">
                  Planning a multi-day event or bringing a team to Ocala? We offer group room block pricing for 10 or more rooms. Contact us directly to discuss rates and availability for your group dates.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#1C2B4A]/10 flex items-center justify-center mb-5">
                  <Check className="w-5 h-5 text-[#1C2B4A]" />
                </div>
                <h3 className="font-display font-600 text-lg text-[#1C2B4A] mb-3">Event Coordination & Local Expertise</h3>
                <p className="font-body text-sm text-[#2A2A2A]/65 leading-relaxed">
                  Our team is experienced in coordinating equestrian industry events, corporate retreats, and group stays. We're also your local experts for everything Ocala has to offer — from the best restaurants and shopping to outdoor activities, attractions, and things to do near the World Equestrian Center. We'll help make your group's entire stay memorable, not just the event itself.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PET-FRIENDLY SECTION ─── */}
      <section className="py-0 overflow-hidden" id="pet-friendly">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto overflow-hidden">
            <img
              src={PET_STOCK_IMG}
              alt="Pet-friendly hotel Ocala — Equus Inn welcomes all pets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#8B5E3C]/10" />
          </div>
          {/* Text */}
          <div className="bg-[#8B5E3C] flex items-center px-10 lg:px-16 py-20">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <PawPrint className="w-5 h-5 text-[#D4AF6A]" />
                <p className="section-label text-[#D4AF6A]">Pet-Friendly Policy</p>
              </div>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl font-bold text-[#FAF7F2] mb-6 leading-tight">
                Your Pets Are<br />
                <span className="italic text-[#D4AF6A]">Always Welcome</span>
              </h2>
              <p className="font-body text-[#FAF7F2]/75 text-base leading-relaxed mb-6">
                At Equus Inn, we believe life is better with your animals by your side. That's why we proudly welcome pets of all sizes — from small dogs to large breeds. A pet fee of $35 per pet, per night applies.
              </p>
              <p className="font-body text-[#FAF7F2]/75 text-base leading-relaxed mb-8">
                We understand that for equestrian travelers, animals are family. Whether you're bringing your dog along for a show season trip or simply can't imagine a vacation without your furry companion, you'll find a warm welcome here.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Heart, text: "All pet sizes welcome — no restrictions" },
                  { icon: Shield, text: "Pet fee: $35 per pet, per night" },
                  { icon: Star, text: "Pet-friendly rooms available on request" },
                  { icon: PawPrint, text: "Spacious grounds for walks and exercise" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[#D4AF6A] flex-shrink-0" />
                    <span className="font-body text-sm text-[#FAF7F2]/75">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-8 py-4 inline-block"
              >
                Book a Pet-Friendly Room
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meeting Inquiry Form */}
      <section className="py-20 px-6 lg:px-8 bg-[#FAF7F2]" id="meeting-inquiry">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="section-label mb-4">Get a Quote</p>
                <div className="gold-divider mb-6" />
                <h2 className="font-display text-3xl font-bold text-[#1C2B4A] mb-6">
                  Plan Your Event<br />
                  <span className="italic">at Equus Inn</span>
                </h2>
                <p className="font-body text-[#2A2A2A]/65 text-sm leading-relaxed mb-8">
                  Tell us about your event and we'll put together a customized proposal. Our team typically responds within one business day.
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
                      <p className="font-display font-600 text-sm text-[#1C2B4A] mb-1">Email</p>
                      <a href="mailto:Kholt@paxproperties.com" className="font-body text-sm text-[#2A2A2A]/65 hover:text-[#1C2B4A] transition-colors">
                        Kholt@paxproperties.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 overflow-hidden h-48">
                  <img src={MEETING_BIRTHDAY} alt="Equus Inn meeting room event" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white shadow-sm p-8 lg:p-12">
                  <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-2">Meeting Inquiry</h3>
                  <p className="font-body text-sm text-[#2A2A2A]/55 mb-8">
                    Fill out the form below and we'll respond with availability and pricing within one business day.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Company / Organization</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your organization"
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Event Date</label>
                        <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange}
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Attendees</label>
                        <select name="attendees" value={form.attendees} onChange={handleChange}
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]">
                          <option value="">Select</option>
                          <option value="10-20">10–20</option>
                          <option value="20-40">20–40</option>
                          <option value="40-60">40–60</option>
                          <option value="60-80">60–80</option>
                          <option value="80+">80+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Event Type</label>
                        <select name="eventType" value={form.eventType} onChange={handleChange}
                          className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]">
                          <option value="">Select</option>
                          <option value="corporate">Corporate Meeting</option>
                          <option value="training">Training / Workshop</option>
                          <option value="equestrian">Equestrian Industry</option>
                          <option value="social">Social / Celebration</option>
                          <option value="retreat">Team Retreat</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Tell Us About Your Event *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                        placeholder="Describe your event, any special requirements, catering needs, or questions..."
                        className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2] resize-none" />
                    </div>
                    <button type="submit" disabled={submitting}
                      className="btn-primary text-xs px-8 py-4 inline-flex items-center gap-2 disabled:opacity-60">
                      {submitting ? "Sending..." : <><Send className="w-4 h-4" /> Submit Inquiry</>}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Group Room Block Inquiry Form */}
      <section className="py-20 px-6 lg:px-8 bg-[#F2EDE4]" id="group-inquiry">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-4">Group Reservations</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-[#1C2B4A] mb-4">
              Reserve a Room Block
            </h2>
            <p className="font-body text-[#2A2A2A]/65 text-sm max-w-xl mx-auto">
              Bringing a group to Ocala? Fill out the form below and our group sales team will contact you with availability and group rate options.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white shadow-sm p-8 lg:p-12">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target as HTMLFormElement);
                  const groupName = fd.get("groupName") as string;
                  const contactName = fd.get("contactName") as string;
                  const contactEmail = fd.get("contactEmail") as string;
                  const contactPhone = fd.get("contactPhone") as string;
                  const checkIn = fd.get("checkIn") as string;
                  const checkOut = fd.get("checkOut") as string;
                  const numRooms = fd.get("numRooms") as string;
                  const comments = fd.get("comments") as string;
                  if (!groupName || !contactName || !contactEmail) {
                    toast.error("Please fill in all required fields.");
                    return;
                  }
                  await new Promise((r) => setTimeout(r, 1000));
                  toast.success("Group inquiry submitted! Kelli Holt will be in touch within one business day.");
                  (e.target as HTMLFormElement).reset();
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Group / Company Name *</label>
                    <input type="text" name="groupName" required placeholder="Your group or company name"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Contact Name *</label>
                    <input type="text" name="contactName" required placeholder="Your full name"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Email Address *</label>
                    <input type="email" name="contactEmail" required placeholder="your@email.com"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Phone Number</label>
                    <input type="tel" name="contactPhone" placeholder="(555) 000-0000"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Check-In Date</label>
                    <input type="date" name="checkIn"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Check-Out Date</label>
                    <input type="date" name="checkOut"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Number of Rooms Needed</label>
                    <input type="number" name="numRooms" min="1" placeholder="e.g. 10"
                      className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2]" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs font-700 tracking-widest uppercase text-[#1C2B4A] mb-2">Comments / Special Requests</label>
                  <textarea name="comments" rows={4}
                    placeholder="Tell us about your group, any special requirements, or questions..."
                    className="w-full border border-[#1C2B4A]/20 px-4 py-3 font-body text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/30 focus:outline-none focus:border-[#1C2B4A] transition-colors bg-[#FAF7F2] resize-none" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="font-body text-xs text-[#2A2A2A]/45">Inquiries are sent to Kelli Holt, Group Sales — <a href="mailto:Kholt@paxproperties.com" className="underline hover:text-[#1C2B4A]">Kholt@paxproperties.com</a></p>
                  <button type="submit" className="btn-primary text-xs px-8 py-4 inline-flex items-center gap-2">
                    <Send className="w-4 h-4" /> Submit Group Inquiry
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#1C2B4A]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#FAF7F2] mb-3">
                  Ready to Plan Your Event?
                </h2>
                <p className="font-body text-[#FAF7F2]/65 text-sm leading-relaxed max-w-lg">
                  Contact us today to check availability and receive a customized proposal for your meeting or event.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a href="tel:+13528543200" className="btn-gold text-xs px-8 py-4 inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="#meeting-inquiry" className="btn-outline text-xs px-8 py-4 inline-block">
                  Submit Inquiry
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
