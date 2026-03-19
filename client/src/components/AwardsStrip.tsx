// AwardsStrip — Equus Inn
// Design: Deep Navy background, horizontally auto-scrolling awards showcase
// Includes: static award images + inline white TripAdvisor owl badges + live Expedia/Hotels.com widgets

import { useEffect, useRef } from "react";

// Award images (static)
const BOOKING_2026 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/Digital-Award_RA-2026_fbd38bad.png";
// Awards collage — Booking.com 2021/2022 + Hotels.com red badge (white background, keep original colors)
const AWARDS_COLLAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/EquusAwardsopening-2022_11664e3c.webp";

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

// White TripAdvisor owl SVG badge — used for 2020, 2021, 2022 Travelers' Choice
function TripAdvisorOwlBadge({ year }: { year: string }) {
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <span className="text-white/60 font-bold text-[10px] tracking-widest uppercase">{year}</span>
      {/* Travelers' Choice text */}
      <div className="text-center leading-tight mb-0.5">
        <div className="text-white font-semibold text-[11px] leading-none">Travelers'</div>
        <div className="text-white font-semibold text-[11px] leading-none">Choice</div>
        <div className="text-white/50 text-[8px] tracking-wider">®</div>
      </div>
      {/* TripAdvisor owl in white */}
      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`TripAdvisor Travelers Choice ${year}`}
      >
        {/* Laurel wreath left */}
        <path d="M8 52 C4 44 3 36 5 28 C7 22 11 17 16 14 C13 20 11 27 11 34 C11 41 13 48 17 54 Z" opacity="0.9"/>
        <path d="M6 46 C2 40 1 33 3 26 C4 21 7 17 11 14 C9 19 8 25 8 31 C8 38 10 44 13 50 Z" opacity="0.7"/>
        {/* Laurel wreath right */}
        <path d="M72 52 C76 44 77 36 75 28 C73 22 69 17 64 14 C67 20 69 27 69 34 C69 41 67 48 63 54 Z" opacity="0.9"/>
        <path d="M74 46 C78 40 79 33 77 26 C76 21 73 17 69 14 C71 19 72 25 72 31 C72 38 70 44 67 50 Z" opacity="0.7"/>
        {/* Owl body */}
        <ellipse cx="40" cy="44" rx="18" ry="20" />
        {/* Owl head */}
        <circle cx="40" cy="26" r="14" />
        {/* Left eye outer */}
        <circle cx="33" cy="25" r="7" fill="#1C2B4A"/>
        {/* Left eye inner */}
        <circle cx="33" cy="25" r="4" fill="white"/>
        {/* Left pupil */}
        <circle cx="33" cy="25" r="2" fill="#1C2B4A"/>
        {/* Right eye outer */}
        <circle cx="47" cy="25" r="7" fill="#1C2B4A"/>
        {/* Right eye inner */}
        <circle cx="47" cy="25" r="4" fill="white"/>
        {/* Right pupil */}
        <circle cx="47" cy="25" r="2" fill="#1C2B4A"/>
        {/* Beak */}
        <path d="M37 30 L40 35 L43 30 Z" fill="#D4AF6A"/>
        {/* Ear tufts */}
        <path d="M28 14 L30 8 L33 14 Z" />
        <path d="M52 14 L50 8 L47 14 Z" />
        {/* Wing lines */}
        <path d="M24 50 C26 44 30 40 35 38" stroke="#1C2B4A" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M56 50 C54 44 50 40 45 38" stroke="#1C2B4A" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </svg>
      {/* Tripadvisor wordmark */}
      <div className="text-white font-bold text-[10px] tracking-wide">Tripadvisor</div>
    </div>
  );
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
    const speed = 0.5;
    const animate = () => {
      posRef.current += speed;
      const halfWidth = track.scrollWidth / 2;
      if (posRef.current >= halfWidth) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

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

  const Divider = () => <div className="w-px h-16 bg-white/20 shrink-0" />;

  const ItemSet = () => (
    <div className="flex items-center gap-10 px-8 shrink-0">

      {/* 1. Booking.com 2026 — original colors */}
      <div className="flex items-center justify-center shrink-0">
        <img
          src={BOOKING_2026}
          alt="Booking.com Traveler Review Award 2026"
          style={{ height: "120px", width: "auto", objectFit: "contain" }}
          className="drop-shadow-lg"
        />
      </div>

      <Divider />

      {/* 2. Awards collage (Booking.com 2021/2022 + Hotels.com red badge) — original colors, NO filter */}
      <div className="flex items-center justify-center shrink-0">
        <img
          src={AWARDS_COLLAGE}
          alt="Equus Inn Awards — Booking.com 2021 & 2022, TripAdvisor Travelers Choice 2020 2021 2022, Hotels.com Loved by Guests 2021"
          style={{ height: "80px", width: "auto", objectFit: "contain" }}
          className="drop-shadow-lg"
        />
      </div>

      <Divider />

      {/* 3. TripAdvisor Travelers' Choice 2020 — white owl SVG */}
      <TripAdvisorOwlBadge year="2020" />

      <Divider />

      {/* 4. TripAdvisor Travelers' Choice 2021 — white owl SVG */}
      <TripAdvisorOwlBadge year="2021" />

      <Divider />

      {/* 5. TripAdvisor Travelers' Choice 2022 — white owl SVG */}
      <TripAdvisorOwlBadge year="2022" />

      <Divider />

      {/* 6. TripAdvisor Travelers' Choice 2025 badge */}
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

      <Divider />

      {/* 7. Expedia Verified Reviews widget */}
      <div className="shrink-0 flex items-center justify-center" style={{ minWidth: 120, minHeight: 80 }}>
        <div id="widgetContainerBox" data-isaddnofollow="false" className="scale-90 origin-center" />
      </div>

      <Divider />

      {/* 8. Hotels.com Loved by Guests widget */}
      <div className="shrink-0 flex items-center justify-center" style={{ minWidth: 120, minHeight: 80 }}>
        <div id="widgetContainerBox" data-isaddnofollow="false" className="scale-90 origin-center" />
      </div>

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
          <ItemSet />
          <ItemSet />
          <ItemSet />
        </div>
      </div>
    </section>
  );
}
