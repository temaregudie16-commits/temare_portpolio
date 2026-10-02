function About() {
  const strengths = [
    {
      icon: "</>",
      title: "Web Development",
      description:
        "Building modern and responsive websites with clean and maintainable code.",
    },
    {
      icon: "UI",
      title: "Frontend Development",
      description:
        "Creating user-friendly interfaces with HTML, CSS, JavaScript, and React.",
    },
    {
      icon: "API",
      title: "Backend & APIs",
      description:
        "Developing backend services and REST APIs using Node.js and Express.js.",
    },
    {
      icon: "DB",
      title: "Database",
      description: "Working with MySQL to design and manage application data.",
    },
  ];

  const stats = [
    {
      number: "4th",
      label: "Year Student",
    },
    {
      number: "INU",
      label: "University",
    },
    {
      number: "Web",
      label: "Development Focus",
    },
    {
      number: "Full",
      label: "Stack Direction",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-subtitle">ABOUT ME</p>

          <h2>
            Building ideas into <span>digital experiences.</span>
          </h2>

          <p className="section-intro">
            A Software Engineering student focused on learning, building, and
            improving through practical development.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-main">
          {/* About Text */}
          <div className="about-text">
            <div className="about-label">WHO I AM</div>

            <h3>
              Software Engineering Student &<span> Web Developer</span>
            </h3>

            <p>
              I am Temare Gudie, a Software Engineering student at Injibara
              University with a strong interest in web development and modern
              software technologies.
            </p>

            <p>
              I enjoy turning ideas into practical digital solutions by
              combining frontend interfaces, backend services, databases, and
              software engineering principles.
            </p>

            <p>
              My current focus is developing stronger full-stack skills through
              academic learning, personal projects, and continuous practice.
            </p>

            {/* Info */}
            <div className="about-info">
              <div className="about-info-item">
                <span>Name</span>
                <strong>Temare Gudie</strong>
              </div>

              <div className="about-info-item">
                <span>Education</span>
                <strong>Bachelor of Software Engineering</strong>
              </div>

              <div className="about-info-item">
                <span>University</span>
                <strong>Injibara University</strong>
              </div>

              <div className="about-info-item">
                <span>Focus</span>
                <strong>Web & Full-Stack Development</strong>
              </div>
            </div>

            <a href="#contact" className="btn primary-btn about-button">
              Let's Work Together
              <span>→</span>
            </a>
          </div>

          {/* Strengths */}
          <div className="about-strengths">
            <div className="about-label">WHAT I DO</div>

            <h3>
              My core development <span>focus.</span>
            </h3>

            <div className="strengths-grid">
              {strengths.map((strength) => (
                <div className="strength-card" key={strength.title}>
                  <div className="strength-icon">{strength.icon}</div>

                  <div>
                    <h4>{strength.title}</h4>

                    <p>{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
