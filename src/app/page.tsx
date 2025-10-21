"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CloudProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Cloud({ children, className = "", delay = 0 }: CloudProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cloud-container ${className}`}
      style={{
        animationPlayState: isHovered ? "paused" : "running",
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cloud">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-400 overflow-hidden relative">
      {/* Floating Clouds with Menu Items */}
      <Cloud
        className="absolute top-1/4 left-1/4"
        delay={0}
      >
        <a href="/blog" className="cloud-menu-item">
          Blog
        </a>
      </Cloud>

      <Cloud
        className="absolute top-1/3 right-1/3"
        delay={2}
      >
        <a href="/om-mig" className="cloud-menu-item">
          Om mig
        </a>
      </Cloud>

      <Cloud
        className="absolute bottom-1/3 left-1/3"
        delay={4}
      >
        <a href="/kontakt" className="cloud-menu-item">
          Kontakt
        </a>
      </Cloud>

      {/* Additional decorative clouds */}
      <Cloud
        className="absolute top-1/2 right-1/4"
        delay={1}
      >
        <div className="cloud-decoration"></div>
      </Cloud>

      <Cloud
        className="absolute bottom-1/4 right-1/5"
        delay={3}
      >
        <div className="cloud-decoration"></div>
      </Cloud>

      <Cloud
        className="absolute top-1/6 right-1/6"
        delay={5}
      >
        <div className="cloud-decoration"></div>
      </Cloud>

      {/* Magnus Image */}
      <div className="magnus-image-container">
        <Image
          src="/static/magnus.png"
          alt="Magnus Kaspersen"
          width={120}
          height={120}
          className="magnus-image"
          priority
        />
      </div>

      {/* Grass Footer */}
      <footer className="grass-footer">
        <div className="grass-field"></div>
      </footer>
    </div>
  );
}
