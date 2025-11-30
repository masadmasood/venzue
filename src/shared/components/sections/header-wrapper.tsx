"use client";

import { useState, useEffect } from "react";
import Header from "@/shared/components/sections/header";

export default function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 300);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return <Header isScrolled={isScrolled} />;
}
