"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "analytics_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "granted" || saved === "denied") {
      setConsent(saved as 'granted' | 'denied');
      setVisible(false);
    } else {
      setVisible(true);
    }

    const onOpen = () => setVisible(true);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "granted" || detail === "denied") setConsent(detail);
    };

    window.addEventListener("openCookieBanner", onOpen);
    window.addEventListener("cookieConsentChanged", onChange);
    return () => {
      window.removeEventListener("openCookieBanner", onOpen);
      window.removeEventListener("cookieConsentChanged", onChange);
    };
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: "granted" }));
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: "denied" }));
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-4 z-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <p className="font-semibold">Nous utilisons des cookies</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">J'utilise Google Analytics pour analyser le trafic. Acceptez-vous les cookies d'analyse ?</p>
        </div>
        <div className="flex-shrink-0 flex gap-2">
          <button onClick={decline} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm">Refuser</button>
          <button onClick={accept} className="px-3 py-2 rounded bg-blue-600 text-white text-sm">Accepter</button>
        </div>
      </div>
    </div>
  );
}
