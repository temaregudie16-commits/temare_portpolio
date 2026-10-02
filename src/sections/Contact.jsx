function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      label: "Professional Network",
      href: "#",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      label: "Code & Projects",
      href: "#",
      icon: "github",
    },
    {
      name: "Facebook",
      label: "Connect With Me",
      href: "#",
      icon: "facebook",
    },
    {
      name: "Telegram",
      label: "Message Me",
      href: "#",
      icon: "telegram",
    },
    {
      name: "Instagram",
      label: "Follow Me",
      href: "#",
      icon: "instagram",
    },
    {
      name: "TikTok",
      label: "Creative Content",
      href: "#",
      icon: "tiktok",
    },
    {
      name: "YouTube",
      label: "Videos & Tutorials",
      href: "#",
      icon: "youtube",
    },
  ];

  const renderSocialIcon = (icon) => {
    switch (icon) {
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.2 7a2 2 0 0 0 .05-4ZM20.44 13.4c0-3.47-1.85-5.09-4.32-5.09a3.73 3.73 0 0 0-3.37 1.85h-.05V8.5H9.47V20h3.37v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.87 1.72 1.87 3.06V20h3.38v-6.6Z"
            />
          </svg>
        );

      case "github":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
            />
          </svg>
        );

      case "facebook":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.46-4.04 4.14V10H7.5v3h2.73v8h3.27Z"
            />
          </svg>
        );

      case "telegram":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21.5 3.5 18.2 20c-.25 1.17-.9 1.46-1.83.91l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.13 9.34-8.44c.41-.36-.09-.56-.64-.2L5.37 13.68.4 12.12c-1.08-.34-1.1-1.08.23-1.58L20.04 2.9c.9-.34 1.68.2 1.46.6Z"
            />
          </svg>
        );

      case "instagram":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        );

      case "tiktok":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.5 3c.2 1.8 1.2 3.25 3.1 3.95.6.23 1.2.34 1.9.35v3.05a8.6 8.6 0 0 1-4.98-1.54v6.65a5.54 5.54 0 1 1-5.55-5.54c.38 0 .76.04 1.12.12v3.16a2.6 2.6 0 1 0 1.48 2.34V3h2.93Z"
            />
          </svg>
        );

      case "youtube":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading contact-heading">
          <p className="section-subtitle">CONTACT</p>

          <h2>
            Let's create something <span>meaningful.</span>
          </h2>

          <p className="section-intro">
            Have a project idea, collaboration opportunity, or simply want to
            connect? I'd be happy to hear from you.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-left">
            <div className="contact-intro">
              <span className="contact-status">
                <span className="status-dot"></span>
                Open to opportunities
              </span>

              <h3>
                Let's talk about your
                <span> next project.</span>
              </h3>

              <p>
                I'm interested in web development, software engineering,
                freelance projects, internships, collaborations, and
                opportunities where I can continue growing as a developer.
              </p>
            </div>

            {/* Direct Contact */}
            <div className="direct-contact">
              <a
                href="mailto:temaregudie16@gmail.com"
                className="direct-contact-item"
              >
                <div className="contact-icon">@</div>

                <div>
                  <span>Email</span>
                  <strong>temaregudie16@gmail.com</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              <a href="tel:+251919468741" className="direct-contact-item">
                <div className="contact-icon">☎</div>

                <div>
                  <span>Phone</span>
                  <strong>+251 919 468 741</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="contact-card-top">
                <span className="contact-card-label">SEND A MESSAGE</span>

                <span className="contact-card-icon">↗</span>
              </div>

              <h3></h3>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project, idea, or opportunity..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-button">
                  Send Message
                  <span>↗</span>
                </button>
              </form>
            </div>

            {/* Connect With Me */}
            <div className="social-section">
              <div className="social-heading">
                <span>CONNECT WITH ME</span>
              </div>

              <div className="social-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >
                    <div className="social-icon">
                      {renderSocialIcon(social.icon)}
                    </div>

                    <div className="social-info">
                      <strong>{social.name}</strong>
                      <span>{social.label}</span>
                    </div>

                    <span className="social-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
