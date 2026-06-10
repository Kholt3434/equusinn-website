/**
 * EQUUS INN ROOMS & SUITES PAGE
 * Design: Modern Equestrian Luxury
 * Colors: Deep Navy #1C2B4A, Saddle #8B5E3C, Champagne #D4AF6A, Ivory #FAF7F2
 * Typography: Cormorant Garamond (display) + Lato (body)
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8 bg-[#FAF7F2]">
<div className="max-w-7xl mx-auto" style={{ paddingTop: "5rem" }}>
          <p className="section-label mb-4">Terms of Service</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C2B4A] mb-5">
            Agreement to Our Legal Terms
          </h2>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            Last updated: January 10, 2025
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            We are Pax Ocala, LLC ("Company," "we," "us," "our"), a company registered in 3434 SW College Rd, Ocala, FL 34474.
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            We operate the website <a href="https://equusinn.com/" className="underline hover:text-[#1C2B4A]">https://equusinn.com/</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            You can contact us by phone at +1 352-854-3200, email at <a href="mailto:OcalaFD@paxproperties.com" className="underline hover:text-[#1C2B4A]">OcalaFD@paxproperties.com</a>, or by mail to 3434 SW College Rd, Ocala, FL 34474, United States.
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Pax Ocala, LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-4">
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          </p>
          <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-10">
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services. We recommend that you print a copy of these Legal Terms for your records.
          </p>

          {/* 1. Our Services */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              1. Our Services
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              The Services are not tailored to comply with industry-specific regulations (HIPAA, FISMA, etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </div>

          {/* 2. Intellectual Property Rights */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              2. Intellectual Property Rights
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). Our Content and Marks are protected by copyright and trademark laws and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
            </p>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content solely for your personal, non-commercial use or internal business purpose.
            </p>
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Except as expressly permitted, no part of the Services, Content, or Marks may be used for commercial purposes without our prior written permission. Requests should be addressed to <a href="mailto:OcalaFD@paxproperties.com" className="underline hover:text-[#1C2B4A]">OcalaFD@paxproperties.com</a>. We reserve all rights not expressly granted to you. Any breach of these Intellectual Property Rights constitutes a material breach of these Legal Terms.
            </p>
          </div>

          {/* 3. User Representations */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              3. User Representations
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              By using the Services, you represent and warrant that you have the legal capacity to comply with these Legal Terms, are not a minor, will not use automated means to access the Services, will not use the Services for illegal purposes, and will comply with all applicable laws.
            </p>
          </div>

          {/* 4. Prohibited Activities */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              4. Prohibited Activities
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              You may not use the Services for any purpose other than their intended use. Prohibited activities include, but are not limited to, data scraping, fraud, security circumvention, harassment, impersonation, malware transmission, reverse engineering, unauthorized automation, unsolicited communications, competitive use, advertising, or selling goods or services without authorization.
            </p>
          </div>

          {/* 5. User Generated Contributions */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              5. User Generated Contributions
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              The Services do not offer users the ability to submit or post content.
            </p>
          </div>

          {/* 6. Contribution License */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              6. Contribution License
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              By submitting feedback or suggestions, you grant Pax Ocala, LLC the unrestricted right to use and share such feedback without compensation.
            </p>
          </div>

          {/* 7. Third-Party Websites and Content */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              7. Third-Party Websites and Content
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              The Services may contain links to third-party websites and content. Pax Ocala, LLC is not responsible for third-party content, policies, or practices. Accessing third-party websites is at your own risk.
            </p>
          </div>

          {/* 8. Services Management */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              8. Services Management
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We reserve the right to monitor, restrict, remove content, report violations, and manage the Services to protect our rights and ensure proper operation.
            </p>
          </div>

          {/* 9. Privacy Policy */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              9. Privacy Policy
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Please review our Privacy Policy at <a href="https://equusinn.com/privacy-policy" className="underline hover:text-[#1C2B4A]">https://equusinn.com/privacy-policy</a>. By using the Services, you consent to data processing in the United States.
            </p>
          </div>

          {/* 10. Term and Termination */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              10. Term and Termination
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              These Legal Terms remain in effect while you use the Services. Pax Ocala, LLC reserves the right to terminate access at any time without notice for violations of these Legal Terms or applicable laws.
            </p>
          </div>

          {/* 11. Modifications and Interruptions */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              11. Modifications and Interruptions
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We may modify or discontinue the Services at any time without liability. We are not obligated to maintain or update the Services.
            </p>
          </div>

          {/* 12. Governing Law */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              12. Governing Law
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              These Legal Terms are governed by the laws of Florida.
            </p>
          </div>

          {/* 13. Dispute Resolution */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              13. Dispute Resolution
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Any legal action shall be brought in the state or federal courts located in Florida.
            </p>
          </div>

          {/* 14. Corrections */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              14. Corrections
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              We reserve the right to correct errors or omissions on the Services at any time.
            </p>
          </div>

          {/* 15. Disclaimer */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              15. Disclaimer
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." YOUR USE IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, PAX OCALA, LLC DISCLAIMS ALL WARRANTIES.
            </p>
          </div>

          {/* 16. Limitations of Liability */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              16. Limitations of Liability
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              IN NO EVENT SHALL PAX OCALA, LLC OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE SERVICES.
            </p>
          </div>

          {/* 17. Indemnification */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              17. Indemnification
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              You agree to indemnify and hold Pax Ocala, LLC harmless from claims arising out of your use of the Services or violation of these Legal Terms.
            </p>
          </div>

          {/* 18. User Data */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              18. User Data
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              You are solely responsible for data you transmit. We are not liable for data loss or corruption.
            </p>
          </div>

          {/* 19. Electronic Communications */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              19. Electronic Communications
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              You consent to electronic communications and electronic signatures.
            </p>
          </div>

          {/* 20. Consent to Receive Messages */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              20. Consent to Receive Messages
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              By opting in, you consent to receive recurring SMS/text messages from Pax Ocala, LLC, including promotional and transactional messages.
            </p>
          </div>

               {/* 20. SMS consent not shared with third parties*/}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              21. SMS Consent is Not Shared with Third Parties
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              If you opt in to provide SMS consent, that SMS consent will not be shared with third parties. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted.
            </p>
          </div>

          {/* 22. Message & Data Rates */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              22. Message &amp; Data Rates
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Message and data rates may apply.
            </p>
          </div>

          {/* 23. Opt-Out Instructions */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              23. Opt-Out Instructions
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Reply STOP to opt out, or contact support at <a href="mailto:OcalaFD@paxproperties.com" className="underline hover:text-[#1C2B4A]">OcalaFD@paxproperties.com</a>.
            </p>
          </div>

          {/* 24. Privacy */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              24. Privacy
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Your mobile number and personal data are handled in accordance with our Privacy Policy.
            </p>
          </div>

          {/* 25. Eligibility */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              25. Eligibility
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              You must be at least 18 years old and a U.S. resident to participate in the SMS program.
            </p>
          </div>

          {/* 26. Carrier Disclaimer */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              26. Carrier Disclaimer
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Wireless carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          {/* 27. Changes to Terms */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              27. Changes to Terms
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              Continued participation constitutes acceptance of changes.
            </p>
          </div>

          {/* 28. California Users and Residents */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              28. California Users and Residents
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              California residents may contact the Department of Consumer Affairs as outlined above.
            </p>
          </div>

          {/* 29. Miscellaneous */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              29. Miscellaneous
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed">
              These Legal Terms constitute the entire agreement between you and Pax Ocala, LLC.
            </p>
          </div>

          {/* 30. Contact Us */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-bold text-[#1C2B4A] mb-3">
              30. Contact Us
            </h3>
            <div className="gold-divider mb-5" />
            <p className="font-body text-[#2A2A2A]/70 text-base leading-relaxed mb-3">
              To resolve a complaint or request information, contact us at:
            </p>
            <ul className="font-body text-[#2A2A2A]/70 text-base leading-relaxed list-none space-y-1">
              <li>Pax Ocala, LLC</li>
              <li>3434 SW College Rd, Ocala, FL 34474, United States</li>
              <li>Phone: +1 352-854-3200</li>
              <li>Email: <a href="mailto:OcalaFD@paxproperties.com" className="underline hover:text-[#1C2B4A]">OcalaFD@paxproperties.com</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
