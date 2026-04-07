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
