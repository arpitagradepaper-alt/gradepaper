import { useState, useEffect } from "react";
import "./Hero.css";

import dashboardImage from "../assets/gradelead-dashboard.png";
import aiChatImage from "../assets/gradelead-ai-chat.png";

// Words that rotate inside the headline — swap these for whatever
// outcomes matter most to your buyers.
const ROTATING_WORDS = [
  "Closed Deal",
  "Booked Meeting",
  "Loyal Customer",
  "Pipeline Win",
];

// Replace with real customer logo images when you have them —
// plain wordmarks keep this section shippable in the meantime.
const TRUST_LOGOS = [
  "Aon",
  "Razorpay",
  "Capillary",
  "BrowserStack",
  "Wingify",
  "Hevo Data",
];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwitching(true);

      // wait for the exit animation before swapping the word
      const swap = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsSwitching(false);
      }, 350);

      return () => clearTimeout(swap);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-sparkle">✦</span>
          AI-POWERED LEAD MANAGEMENT
        </div>

        <h1>
          Turn Every Lead Into
          <br />
          a{" "}
          <span
            className={
              "rotating-word" + (isSwitching ? " rotating-word-exit" : "")
            }
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </h1>

        <p className="hero-description">
          Capture, qualify and convert leads with AI-powered automation —
          so no opportunity sits in your inbox untouched.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
            <span>→</span>
          </button>

          <button className="secondary-btn">
            <span className="play-icon">▶</span>
            Explore GradLead
          </button>
        </div>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <span className="trust-label">Trusted by teams at</span>
          <div className="trust-marquee">
            <div className="trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((name, i) => (
                <span className="trust-logo" key={name + i}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT PREVIEW */}
        <div className="hero-visual">
          <div className="image-glow"></div>

          <img
            className="dashboard-shot"
            src={dashboardImage}
            alt="GradLead Dashboard"
          />

          <div className="chat-floating">
            <img src={aiChatImage} alt="GradLead AI Chat" />
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
          <div className="floating-ring ring-one"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;