"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GA_ID } from "../lib/gtag";

const CONSENT_KEY = "analytics_consent";

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(CONSENT_KEY);
    setEnabled(saved === "granted");

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setEnabled(detail === "granted");
    };

    window.addEventListener("cookieConsentChanged", onChange);
    return () => window.removeEventListener("cookieConsentChanged", onChange);
  }, []);

  if (!GA_ID) return null;

  return enabled ? (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", GA_ID, { page_path: window.location.pathname });
          }
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  ) : null;
}
