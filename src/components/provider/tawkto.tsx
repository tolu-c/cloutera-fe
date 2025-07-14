"use client";

import { useEffect } from "react";

export const TawkTo = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("tawkto-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6870e910aff56d19dab5ebba/1ivsgsq96";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "anonymous");

    const s0 = document.getElementsByTagName("script")[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }

    return () => {
      const script = document.getElementById("tawkto-script");
      if (script) script.remove();
    };
  }, []);

  return null;
};
