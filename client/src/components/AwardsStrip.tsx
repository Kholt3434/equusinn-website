// AwardsStrip — Equus Inn
// Design: Deep Navy (#1C2B4A) scrolling awards bar
// Uses real transparent-background award images — no CSS filters applied
// Includes Expedia Verified Reviews and Hotels.com Loved by Guests widgets

import { useEffect, useRef } from "react";

// ── CDN URLs ──────────────────────────────────────────────────────────────────
const BOOKING_2026     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/Digital-Award_RA-2026_0d8cfb4d.png";
const BOOKING_TRA_2026 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/Instagram-Stickers-White_TRA-2026-us_d3e3d1a4.png";
// TripAdvisor Traveler Choice Awards — clean transparent-background graphics
const TRIP_2021        = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/final_2021Trip_5bbed523.png";
const TRIP_2022        = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/final_2022Trip_7ba6d629.png";
const TRIP_2023        = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/final_202Trip_e9ff575d.png";
const TRIP_2025        = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/final_2025Trip_772c454b.png";
// Local awards badges
const PROUD_PARTNER_2025_2026 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/proud_partner_2025_2026_badge-mxhnR8trXrZDRWmJtkDdJG.webp";
const BEST_OF_352_2022 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/best_of_352_2022_badge-4WQvrYcaYAZHBZNeRJEaTb.webp";
const BEST_OF_352_2023 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/best_of_352_2023_badge-dvL4WCLN7d4hMvAEDrg7n9.webp";
const BEST_OF_352_2024 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/best_of_352_2024_badge-8d4CMf2WXH4cdv2vpACHQJ.webp";
const BEST_OF_352_2025 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/best_of_352_2025_badge-WPydsREHCXDX35P9qtvGai.webp";

// ── Third-party widget loader ─────────────────────────────────────────────────
function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.src = src;
  s.id = id;
  s.async = true;
  document.body.appendChild(s);
}

// ── Thin vertical divider ─────────────────────────────────────────────────────
const Divider = () => (
  <div className="shrink-0 w-px self-stretch bg-white/20 mx-2" />
);

// ── Single award image item ───────────────────────────────────────────────────
function AwardImg({ src, alt, height = 100 }: { src: string; alt: string; height?: number }) {
  return (
    <div className="shrink-0 flex items-center justify-center px-6">
      <img
        src={src}
        alt={alt}
        style={{ height: `${height}px`, width: "auto", objectFit: "contain" }}
        draggable={false}
      />
    </div>
  );
}

// ── One full set of items (duplicated for seamless loop) ──────────────────────
function ItemSet() {
  return (
    <div className="flex items-center shrink-0 py-4">

      <AwardImg src={BOOKING_2026}     alt="Booking.com Traveler Review Award 2026"           height={110} />
      <Divider />
      <AwardImg src={BOOKING_TRA_2026} alt="Booking.com Traveler Review Awards 2026 sticker"  height={80}  />
      <Divider />
      <AwardImg src={TRIP_2021}        alt="TripAdvisor Travelers' Choice 2021"                height={110} />
      <Divider />
      <AwardImg src={TRIP_2022}        alt="TripAdvisor Travelers' Choice 2022"                height={110} />
      <Divider />
      <AwardImg src={TRIP_2023}        alt="TripAdvisor Travelers' Choice 2023"                height={110} />
      <Divider />
      <AwardImg src={TRIP_2025}        alt="TripAdvisor Travelers' Choice 2025"                height={110} />
      <Divider />
      <AwardImg src={PROUD_PARTNER_2025_2026} alt="Ocala Metro Proud Partner 2025-2026"     height={110} />
      <Divider />
      <AwardImg src={BEST_OF_352_2022} alt="Best of the 352 2022 Winner"                       height={110} />
      <Divider />
      <AwardImg src={BEST_OF_352_2023} alt="Best of the 352 2023 Winner"                       height={110} />
      <Divider />
      <AwardImg src={BEST_OF_352_2024} alt="Best of the 352 2024 Winner"                       height={110} />
      <Divider />
      <AwardImg src={BEST_OF_352_2025} alt="Best of the 352 2025 Winner"                       height={110} />
      <Divider />

      {/* Expedia Verified Reviews widget */}
      <div className="shrink-0 flex items-center justify-center px-4" style={{ minWidth: 110, minHeight: 110 }}>
        <div id="expedia-widget-box" data-isaddnofollow="false" />
      </div>
      <Divider />

      {/* Hotels.com Loved by Guests 2021 widget */}
      <div className="shrink-0 flex items-center justify-center px-4" style={{ minWidth: 110, minHeight: 110 }}>
        <div id="hotels-widget-box" data-isaddnofollow="false" />
      </div>

      {/* Spacer before loop restart */}
      <div className="shrink-0 w-10" />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AwardsStrip() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const animRef   = useRef<number | null>(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  // Load third-party scripts once on mount
  useEffect(() => {
    loadScript(
      "https://apps.expediapartnercentral.com/lodging/content/award/static/js/reviewCount/27152/Expedia-Dark-Square-en_US.js?widgetName=Verified%20Reviews%20Widget&hotelName=Equus%20Inn%20Ocala&noFollow=false",
      "expedia-award-script"
    );
    loadScript(
      "https://apps.expediapartnercentral.com/lodging/content/award/static/js/d8a84f0a-2374-40b8-acbb-ff2af522273f/27152/Hotels-Light-Square-en_US.js?widgetName=Loved%20by%20Guests%202021%20Hotels.com%20award&hotelName=Equus%20Inn%20Ocala&noFollow=false",
      "hotels-award-script"
    );
  }, []);

  // Smooth infinite scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.6; // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when we've scrolled exactly one set width
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <section
      className="bg-[#1C2B4A] overflow-hidden border-y border-white/10"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      aria-label="Awards and Recognition"
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ width: "max-content" }}
      >
        {/* Two identical sets — second one creates the seamless loop */}
        <ItemSet />
        <ItemSet />
      </div>
    </section>
  );
}
