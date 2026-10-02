import { useEffect, useState } from "react";
import profileImage from "../assets/images/profile.jpg";

function Hero() {
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Software Engineering Student",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          {/* Availability */}
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Temare <span>Gudie</span>
          </h1>

          {/* Typing Role */}
          <h2 className="hero-role">
            <span>{displayText}</span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            I am a Software Engineering student and aspiring professional Web
            Developer focused on building modern, responsive, and user-friendly
            digital experiences.
          </p>

          {/* Location */}
          <div className="hero-location">
            <span>📍</span>
            <span>Ethiopia</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
              <span>→</span>
            </a>

            <a href="#contact" className="btn secondary-btn">
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="#contact" aria-label="LinkedIn">
              in
            </a>

            <a href="#contact" aria-label="GitHub">
              GH
            </a>

            <a href="mailto:temaregudie16@gmail.com" aria-label="Email">
              @
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Temare Gudie - Software Engineering Student and Web Developer"
              className="profile-image"
            />

            <div className="hero-image-ring"></div>

            {/* Floating Badge */}
            <div className="hero-floating-card">
              <span className="floating-icon">{"</>"}</span>

              <div>
                <strong>Web Development</strong>
                <small>Building digital solutions</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;
