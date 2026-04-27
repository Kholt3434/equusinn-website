/**
 * EQUUS INN REWARDS PROGRAM PAGE
 * Loyalty program showcase with The Guestbook integration
 * Design: Deep Navy / Saddle Brown / Champagne Gold — Southern Equestrian Heritage
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, Star, Users, TrendingUp, Award, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Rewards() {
  useEffect(() => {
    // Load The Guestbook rewards script
    const script = document.createElement("script");
    script.src = "https://theguestbook.com/rewards_overview.js?w=equusinn";
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);
  }, []);

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

  const benefits = [
    {
      icon: Star,
      title: "Earn Points",
      description: "Earn 1 point per dollar spent on every stay at Equus Inn",
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Redeem points for room upgrades, free nights, and special experiences",
    },
    {
      icon: Heart,
      title: "Member Perks",
      description: "Enjoy exclusive discounts, early booking access, and VIP treatment",
    },
    {
      icon: TrendingUp,
      title: "Bonus Multipliers",
      description: "Earn 2x points during peak show season and special promotions",
    },
    {
      icon: Award,
      title: "Elite Status",
      description: "Reach elite tiers and unlock premium benefits and recognition",
    },
    {
      icon: Users,
      title: "Refer Friends",
      description: "Share your rewards code and earn bonus points when friends book",
    },
  ];

  const tiers = [
    {
      name: "Silver Member",
      points: "0-499",
      benefits: ["5% discount on all stays", "Birthday bonus points", "Priority customer support"],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Gold Member",
      points: "500-1,499",
      benefits: ["10% discount on all stays", "Free room upgrade (subject to availability)", "Complimentary breakfast upgrade", "Exclusive event invitations"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Platinum Member",
      points: "1,500+",
      benefits: ["15% discount on all stays", "Guaranteed room upgrade", "Complimentary suite upgrade", "VIP concierge service", "Free parking", "Exclusive equestrian experiences"],
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1C2B4A] via-[#2B3F4E] to-[#1C2B4A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF6A] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#A27B5B] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Equus Inn Rewards
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF6A] mb-8 max-w-3xl mx-auto">
              Join our loyalty program and earn exclusive rewards on every stay
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              From complimentary upgrades to VIP experiences, our rewards program is designed to thank you for choosing Equus Inn.
            </p>
          </motion.div>
          <div id="guestbook-rewards" className="mt-12"></div>
        </div>
      </section>

      {/* The Guestbook Rewards Widget Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <div id="guestbook-rewards-widget" className="min-h-[600px]">
            {/* The Guestbook script renders here */}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1C2B4A] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn points on every stay and unlock exclusive member benefits
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-[#D4AF6A]"
                >
                  <Icon className="w-12 h-12 text-[#D4AF6A] mb-4" />
                  <h3 className="text-xl font-semibold text-[#1C2B4A] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1C2B4A] mb-4">
              Membership Tiers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advance through our tiers and unlock increasingly exclusive benefits
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${tier.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm opacity-90 mb-6">{tier.points} points</p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-[#D4AF6A] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gradient-to-r from-[#1C2B4A] to-[#2B3F4E]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the Equus Inn Rewards program today and start earning points on your next stay
            </p>
            <motion.a
              href="https://res.windsurfercrs.com/ibe/index.aspx?propertyID=17026&nono=1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#D4AF6A] text-[#1C2B4A] font-semibold rounded-lg hover:bg-[#C9A04F] transition-colors"
            >
              Book Your Stay Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1C2B4A] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                q: "How do I join the Equus Inn Rewards program?",
                a: "Joining is easy and free! You can sign up during your first booking or through our website. Members start earning points immediately.",
              },
              {
                q: "How many points do I earn per stay?",
                a: "You earn 1 point per dollar spent. During promotional periods and peak show season, you may earn bonus points.",
              },
              {
                q: "What can I redeem my points for?",
                a: "Points can be redeemed for free nights, room upgrades, dining credits, spa services, and exclusive equestrian experiences.",
              },
              {
                q: "Do my points expire?",
                a: "Points are valid for 3 years from the date earned. Active members who book at least once per year maintain their membership status.",
              },
              {
                q: "Can I transfer my points to someone else?",
                a: "Points are non-transferable and tied to your account. However, you can use your rewards code to refer friends and earn bonus points.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#D4AF6A]"
              >
                <h3 className="text-lg font-semibold text-[#1C2B4A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup
        id="rewards-page"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Equus Inn Rewards Program",
          description: "Join the Equus Inn loyalty rewards program and earn exclusive benefits on every stay.",
          url: "https://www.equusinn.com/rewards",
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
