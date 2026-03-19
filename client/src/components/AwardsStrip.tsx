// AwardsStrip — Equus Inn
// Design: Deep Navy background, horizontally auto-scrolling awards showcase
// Includes: static award images + live Expedia/Hotels.com widgets + TripAdvisor widget

import { useEffect, useRef } from "react";

// Award images (static)
const AWARD_IMAGES = [
  {
    id: "booking2026",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/Digital-Award_RA-2026_fbd38bad.png",
    alt: "Booking.com Traveler Review Award 2026",
    height: 120,
  },
  {
    id: "awards2022",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/EquusAwardsopening-2022_11664e3c.webp",
    alt: "Equus Inn Awards — Booking.com 2021 & 2022, TripAdvisor Travelers Choice 2020 2021 2022, Hotels.com Loved by Guests 2021",
    height: 80,
  },
];

// TripAdvisor Travelers' Choice 2025 widget script
const TRIPADVISOR_WIDGET_ID = "ta-widget-strip";
const TRIPADVISOR_SCRIPT_SRC =
  "https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=123&amp;locationId=7124150&amp;lang=en_US&amp;display_version=2";

// Expedia Verified Reviews widget
const EXPEDIA_SCRIPT_SRC =
  "https://apps.expediapartnercentral.com/lodging/content/award/static/js/reviewCount/27152/Expedia-Dark-Square-en_US.js?widgetName=Verified%20Reviews%20Widget&hotelName=Equus%20Inn%20Ocala&noFollow=false";

// Hotels.com Loved by Guests 2021
const HOTELS_SCRIPT_SRC =
  "https://apps.expediapartnercentral.com/lodging/content/award/static/js/d8a84f0a-2374-40b8-acbb-ff2af522273f/27152/Hotels-Light-Square-en_US.js?widgetName=Loved%20by%20Guests%202021%20Hotels.com%20award&hotelName=Equus%20Inn%20Ocala&noFollow=false";

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.src = src;
  s.id = id;
  s.async = true;
  document.body.appendChild(s);
}

export default function AwardsStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  // Load third-party widget scripts once
  useEffect(() => {
    loadScript(EXPEDIA_SCRIPT_SRC, "expedia-widget-script");
    loadScript(HOTELS_SCRIPT_SRC, "hotels-widget-script");
  }, []);

  // Smooth auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame

    const animate = () => {
      posRef.current += speed;
      const halfWidth = track.scrollWidth / 2;
      if (posRef.current >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Pause on hover
  const pause = () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  const resume = () => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.5;
    const animate = () => {
      posRef.current += speed;
      const halfWidth = track.scrollWidth / 2;
      if (posRef.current >= halfWidth) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  };

  // Each "set" of items — duplicated for seamless loop
  const ItemSet = () => (
    <div className="flex items-center gap-10 px-8 shrink-0">
      {/* Booking.com 2026 */}
      <div className="flex items-center justify-center shrink-0">
        <img
          src={AWARD_IMAGES[0].src}
          alt={AWARD_IMAGES[0].alt}
          style={{ height: `${AWARD_IMAGES[0].height}px`, width: "auto", objectFit: "contain" }}
          className="drop-shadow-lg"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-white/20 shrink-0" />

      {/* Awards collage 2020–2022 — invert to white so logos pop on dark navy */}
      <div className="flex items-center justify-center shrink-0">
        <img
          src={AWARD_IMAGES[1].src}
          alt={AWARD_IMAGES[1].alt}
          style={{ height: `${AWARD_IMAGES[1].height}px`, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
          className="drop-shadow-lg"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-white/20 shrink-0" />

      {/* TripAdvisor Travelers' Choice 2025 — text badge */}
      <div className="flex items-center gap-3 shrink-0 bg-white/10 border border-white/20 px-5 py-3">
        <div className="text-center">
          <div className="text-[#D4AF6A] font-bold text-xs tracking-widest uppercase mb-1">TripAdvisor</div>
          <div className="text-white font-semibold text-sm leading-tight">Travelers' Choice</div>
          <div className="text-white/70 text-xs">2025 Award Winner</div>
        </div>
        <svg viewBox="0 0 60 60" className="w-12 h-12 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" fill="#34E0A1" />
          <circle cx="30" cy="30" r="18" fill="white" />
          <circle cx="22" cy="30" r="6" fill="#34E0A1" />
          <circle cx="38" cy="30" r="6" fill="#34E0A1" />
          <circle cx="22" cy="30" r="2.5" fill="#1A1A1A" />
          <circle cx="38" cy="30" r="2.5" fill="#1A1A1A" />
        </svg>
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-white/20 shrink-0" />

      {/* Expedia Verified Reviews widget container */}
      <div className="shrink-0 flex items-center justify-center" style={{ minWidth: 120, minHeight: 80 }}>
        <div id="widgetContainerBox" data-isaddnofollow="false" className="scale-90 origin-center" />
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-white/20 shrink-0" />

      {/* Hotels.com Loved by Guests widget container */}
      <div className="shrink-0 flex items-center justify-center" style={{ minWidth: 120, minHeight: 80 }}>
        <div id="widgetContainerBox" data-isaddnofollow="false" className="scale-90 origin-center" />
      </div>

      {/* End spacer */}
      <div className="w-8 shrink-0" />
    </div>
  );

  return (
    <section className="bg-[#1C2B4A] py-6 overflow-hidden border-y border-white/10">
      <div
        className="relative overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Duplicate for seamless loop */}
          <ItemSet />
          <ItemSet />
          <ItemSet />
        </div>
      </div>
    </section>
  );
}
