"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../lib/gtag";

const CONSENT_KEY = "analytics_consent";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent !== "granted") return;
    // pageview will early-return if gtag is not available
    pageview(window.location.pathname);
  }, [pathname]);

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "granted" && typeof window !== "undefined") {
        // ensure we send the current page when consent is granted
        pageview(window.location.pathname);
      }
    };

    window.addEventListener("cookieConsentChanged", onChange);
    return () => window.removeEventListener("cookieConsentChanged", onChange);
  }, []);

  return null;
}
