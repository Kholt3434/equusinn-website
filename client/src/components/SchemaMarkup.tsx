/**
 * SchemaMarkup — Injects JSON-LD structured data into <head> per page.
 * Used for AI-friendly structured data on every route.
 * Design: Deep Navy / Saddle Brown / Champagne Gold — Southern Equestrian Heritage
 */
import { useEffect } from "react";

interface SchemaMarkupProps {
  id: string;
  schema: object;
}

export function SchemaMarkup({ id, schema }: SchemaMarkupProps) {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    // Remove existing script if present (e.g., on navigation)
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [id, schema]);

  return null;
}

export default SchemaMarkup;

// Pre-built schemas for AI discovery and SEO
export const hotelSchema = {
  "@context": "https://schema.org/",
  "@type": "Hotel",
  "name": "Equus Inn",
  "description": "Recently renovated equestrian-themed hotel in Ocala, FL with pet-friendly rooms, free breakfast, and modern amenities. Located 20 minutes from World Equestrian Center.",
  "url": "https://newequusinn.manus.space",
  "telephone": "+13528543200",
  "email": "ocalafd@paxproperties.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3434 SW College Road",
    "addressLocality": "Ocala",
    "addressRegion": "FL",
    "postalCode": "34474",
    "addressCountry": "US"
  },
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/hotel_exterior_main_decd433b.webp",
  "priceRange": "$$",
  "amenityFeature": [
    { "@type": "Text", "name": "Free WiFi" },
    { "@type": "Text", "name": "Free Hot Breakfast" },
    { "@type": "Text", "name": "Pet Friendly" },
    { "@type": "Text", "name": "24/7 Fitness Center" },
    { "@type": "Text", "name": "Outdoor Pool" },
    { "@type": "Text", "name": "Meeting Rooms" },
    { "@type": "Text", "name": "ADA Accessible Rooms" }
  ],
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "petsAllowed": true,
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book a room at Equus Inn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book directly on our website, call (352) 854-3200, or use booking platforms like Booking.com, Expedia, or Hotels.com."
      }
    },
    {
      "@type": "Question",
      "name": "What room types are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer King Rooms, King Junior Rooms, Double Queen Rooms, Two Queen Suites, King Suites, Spa Suites, and ADA-accessible options."
      }
    },
    {
      "@type": "Question",
      "name": "Is breakfast included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, complimentary hot and cold breakfast is included with all rooms, served 6:00 AM - 9:00 AM daily."
      }
    },
    {
      "@type": "Question",
      "name": "Are pets allowed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pets of all sizes are welcome for $35 per pet, per night."
      }
    },
    {
      "@type": "Question",
      "name": "What attractions are near Equus Inn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're 20 minutes from World Equestrian Center and Florida Horse Park, plus Ocala offers restaurants, springs, hiking, and shopping."
      }
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Equus Inn",
  "url": "https://newequusinn.manus.space",
  "logo": "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/equus_logo_white_02b7b265.webp",
  "description": "Equestrian-themed hotel in Ocala, Florida with modern amenities and pet-friendly accommodations.",
  "sameAs": [
    "https://www.facebook.com/equusinn",
    "https://www.instagram.com/equusinn"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+13528543200",
    "email": "ocalafd@paxproperties.com"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Equus Inn",
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/hotel_exterior_main_decd433b.webp",
  "description": "Recently renovated equestrian-themed hotel in Ocala, FL.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3434 SW College Road",
    "addressLocality": "Ocala",
    "addressRegion": "FL",
    "postalCode": "34474",
    "addressCountry": "US"
  },
  "telephone": "+13528543200",
  "url": "https://newequusinn.manus.space",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.1866",
    "longitude": "-82.1605"
  }
};
