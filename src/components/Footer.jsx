function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =========================================
            FOOTER TOP
        ========================================== */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-code">&lt;/&gt;</span>

              <span className="footer-logo-name">
                TEMARE<span>.</span>
              </span>
            </a>

            <p className="footer-brand-description">
              Software Engineering student and Web Developer focused on building
              modern, responsive, and user-friendly digital experiences.
            </p>

            <div className="footer-availability">
              <span className="footer-status-dot"></span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Navigation</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Expertise */}
          <div className="footer-column">
            <h3>Expertise</h3>

            <span>Web Development</span>
            <span>Frontend Development</span>
            <span>Full-Stack Development</span>
            <span>React Development</span>
            <span>Backend Development</span>
            <span>Database Development</span>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Let's Connect</h3>

            <a
              href="mailto:temaregudie16@gmail.com"
              className="footer-contact-link"
            >
              <span className="footer-contact-icon">@</span>

              <span>temaregudie16@gmail.com</span>
            </a>

            <a href="tel:+251919468741" className="footer-contact-link">
              <span className="footer-contact-icon">☎</span>

              <span>+251 919 468 741</span>
            </a>

            <span className="footer-location">
              <span className="footer-contact-icon">●</span>
              Ethiopia
            </span>
          </div>
        </div>

        {/* =========================================
            FOOTER MIDDLE
        ========================================== */}
        <div className="footer-middle">
          <div className="footer-social-label">
            <span>FOLLOW & CONNECT</span>
          </div>

          <div className="footer-socials">
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="Telegram">
              Telegram
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================== */}
        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>Temare Gudie</strong>. All rights reserved.
          </p>

          <div className="footer-bottom-right">
            <span>Built with React</span>

            <span className="footer-divider">/</span>

            <span>Designed & Developed by Temare</span>

            <a href="#home" className="back-to-top" aria-label="Back to top">
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
