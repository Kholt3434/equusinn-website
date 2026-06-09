/**
 * EQUUS INN ROOMS & SUITES PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function Rooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2]">
<div className="max-w-7xl mx-auto" style={{ paddingTop: "5rem" }}>
          <p className="section-label mb-4">Privacy Policy</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C2B4A] mb-5">
            Your Privacy Matters to Us
          </h2>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-10">
            Last updated: 10/10/2025. At Pax Ocala, LLC, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you use our website and services. It also informs you of your privacy rights and how the law protects you. By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          {/* Interpretation and Definitions */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Interpretation and Definitions
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
              Words with capitalized initial letters have meanings defined below. These definitions apply whether the terms appear in singular or plural.
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Account</strong> means a unique account created for you to access our service or parts of our service.</li>
              <li><strong>Company</strong> (referred to as "Pax Ocala, LLC", "we", "us", or "our") refers to Pax Ocala, LLC.</li>
              <li><strong>Cookies</strong> are small files placed on your device to track usage and improve your experience.</li>
              <li><strong>Country</strong> refers to: United States.</li>
              <li><strong>Device</strong> means any device that can access the service, such as a computer, smartphone, or tablet.</li>
              <li><strong>Personal Data</strong> is any information relating to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website operated by Pax Ocala, LLC.</li>
              <li><strong>Service Provider</strong> means any third party that processes data on behalf of the Company.</li>
              <li><strong>Usage Data</strong> is data collected automatically through use of the Service.</li>
              <li><strong>Website</strong> refers to Pax Ocala, LLC, accessible at: https://equusinn.com.</li>
              <li><strong>You</strong> means the individual using the Service, or the legal entity on whose behalf such individual is accessing the Service.</li>
            </ul>
          </div>

          {/* Collecting and Using Your Personal Data */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Collecting and Using Your Personal Data
            </h3>
            <div className="gold-divider mb-5" />

            <h4 className="font-display text-xl font-semibold text-[#1C2B4A] mb-2">Personal Data</h4>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              When using our service, we may ask you to provide personally identifiable information such as:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-1 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (Street, City, State, ZIP)</li>
              <li>Other data you voluntarily submit</li>
            </ul>

            <h4 className="font-display text-xl font-semibold text-[#1C2B4A] mb-2">Usage Data</h4>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-6">
              We automatically collect information about how you access and use the service. This may include your IP address, browser type, operating system, pages visited, time and date of visits, and device identifiers.
            </p>

            <h4 className="font-display text-xl font-semibold text-[#1C2B4A] mb-2">Tracking Technologies &amp; Cookies</h4>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              We use cookies and similar tracking technologies (e.g., web beacons, tags, scripts) to improve website functionality, understand user behavior, and customize your experience. You can instruct your browser to refuse cookies, though this may affect some site functionality.
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-1">
              <li><strong>Essential Cookies:</strong> Required to provide basic website functionality.</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences like language or login details.</li>
              <li><strong>Analytics Cookies:</strong> Track how users interact with the website for optimization purposes.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertising and promotions.</li>
            </ul>
          </div>

          {/* Use of Your Personal Data */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Use of Your Personal Data
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              We may use your personal data to:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-1">
              <li>Provide and maintain our services</li>
              <li>Create and manage your account</li>
              <li>Fulfill contracts and deliver services</li>
              <li>Communicate with you about updates, offers, and support</li>
              <li>Send promotional content (unless you opt out)</li>
              <li>Improve and personalize your experience</li>
              <li>Monitor and analyze usage trends</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </div>

          {/* Sharing Your Personal Data */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Sharing Your Personal Data
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              We may share your personal data with:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-1">
              <li>Service Providers who assist with hosting, analytics, customer support, etc.</li>
              <li>Business Partners to provide joint offerings or promotions</li>
              <li>Affiliates and subsidiaries, where applicable</li>
              <li>Legal authorities, when required by law</li>
              <li>Business transfers, such as a merger, acquisition, or asset sale</li>
              <li>With your consent, for any other disclosed purposes</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Data Retention
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, including for legal, accounting, or reporting requirements. Usage data is generally kept for a shorter period, unless needed to improve service security or functionality.
            </p>
          </div>

          {/* International Data Transfers */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              International Data Transfers
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, including for legal, accounting, or reporting requirements. Usage data is generally kept for a shorter period, unless needed to improve service security or functionality.
            </p>
          </div>

          {/* Your Privacy Rights */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Your Privacy Rights
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-disc list-inside space-y-1">
              <li>Access and review your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your data (with certain legal exceptions)</li>
              <li>Object to processing or restrict usage in specific cases</li>
              <li>Withdraw consent at any time (where applicable)</li>
              <li>File a complaint with a data protection authority</li>
            </ul>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mt-3">
              To exercise your rights, contact us using the information below.
            </p>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Data Security
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We take appropriate security measures to protect your data. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable methods to safeguard your data, Pax Ocala, LLC cannot guarantee absolute security.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Children's Privacy
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Our services are not intended for individuals under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can delete it.
            </p>
          </div>

          {/* Links to Other Websites */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Links to Other Websites
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Our website may contain links to third-party websites. Pax Ocala, LLC is not responsible for their content or privacy practices. Please review the privacy policies of any external sites you visit.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Changes to This Privacy Policy
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date and, where appropriate, notify you via email or a notice on our website. We encourage you to review this policy regularly to stay informed.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              Contact Us
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-none mt-3 space-y-1">
              <li>Email: <a href="mailto:info@equusinn.com" className="underline hover:text-[#1C2B4A]">info@equusinn.com</a></li>
              <li>Website: <a href="https://equusinn.com/contact" className="underline hover:text-[#1C2B4A]">equusinn.com/contact</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
