import resume from "../data/resume";
import profileImage from "../assets/images/profile.jpg";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="section-container">
        {/* Large Square Profile Image */}
        <div className="resume-top-image">
          <img src={profileImage} alt="Temare Gudie" />
        </div>

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-subtitle">MY RESUME</p>

          <h2>
            Professional <span>profile.</span>
          </h2>

          <p className="section-intro">
            A concise overview of my education, technical skills, development
            experience, and professional focus.
          </p>
        </div>

        {/* Resume Layout */}
        <div className="resume-layout">
          {/* LEFT PROFILE SIDEBAR */}
          <aside className="resume-profile">
            <div className="resume-profile-top">
              <div className="resume-profile-image">
                <img src={profileImage} alt="Temare Gudie" />
              </div>

              <span className="resume-availability">
                <span></span>
                Available for opportunities
              </span>

              <h3>{resume.name}</h3>

              <p className="resume-profile-title">{resume.title}</p>

              <div className="resume-profile-line"></div>
            </div>

            {/* Contact */}
            <div className="resume-contact-mini">
              <a href={`mailto:${resume.contact.email}`}>
                <span className="resume-mini-icon">✉</span>

                <div>
                  <small>Email</small>
                  <strong>{resume.contact.email}</strong>
                </div>
              </a>

              <a href={`tel:${resume.contact.phone.replace(/\s/g, "")}`}>
                <span className="resume-mini-icon">☎</span>

                <div>
                  <small>Phone</small>
                  <strong>{resume.contact.phone}</strong>
                </div>
              </a>
            </div>

            {/* CV Buttons */}
            <div className="resume-actions">
              <a
                href={resume.cvFile}
                target="_blank"
                rel="noreferrer"
                className="resume-view-btn"
              >
                <span>View CV</span>
                <span>↗</span>
              </a>

              <a href={resume.cvFile} download className="resume-download-btn">
                <span>Download CV</span>
                <span>↓</span>
              </a>
            </div>

            {/* Professional Focus */}
            <div className="resume-sidebar-focus">
              <span>PROFESSIONAL FOCUS</span>

              {resume.interests.map((interest) => (
                <div className="resume-focus-item" key={interest}>
                  <span>✓</span>
                  {interest}
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="resume-content">
            {/* Summary */}
            <div className="resume-block">
              <div className="resume-block-heading">
                <span>01</span>

                <div>
                  <small>PROFILE</small>
                  <h3>Professional Summary</h3>
                </div>
              </div>

              <p className="resume-summary">{resume.summary}</p>
            </div>

            {/* Education */}
            <div className="resume-block">
              <div className="resume-block-heading">
                <span>02</span>

                <div>
                  <small>ACADEMIC BACKGROUND</small>
                  <h3>Education</h3>
                </div>
              </div>

              <div className="resume-education-card">
                <div className="resume-education-icon">🎓</div>

                <div className="resume-education-main">
                  <div className="resume-education-top">
                    <span className="resume-status">IN PROGRESS</span>

                    <span className="resume-education-period">
                      {resume.education.period}
                    </span>
                  </div>

                  <h4>{resume.education.degree}</h4>

                  <p>{resume.education.institution}</p>

                  <span className="resume-education-location">
                    📍 Injibara, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-block">
              <div className="resume-block-heading">
                <span>03</span>

                <div>
                  <small>TECHNICAL EXPERTISE</small>
                  <h3>Technical Skills</h3>
                </div>
              </div>

              <div className="resume-skills">
                {resume.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Professional Focus */}
            <div className="resume-block">
              <div className="resume-block-heading">
                <span>04</span>

                <div>
                  <small>CAREER DIRECTION</small>
                  <h3>Professional Focus</h3>
                </div>
              </div>

              <div className="resume-focus-grid">
                {resume.interests.map((interest, index) => (
                  <div className="resume-focus-card" key={interest}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <strong>{interest}</strong>

                    <i>↗</i>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="resume-cta">
              <div>
                <span>LET'S CONNECT</span>

                <h3>
                  Interested in working
                  <span> together?</span>
                </h3>

                <p>
                  I'm open to development opportunities, collaborations,
                  internships, freelance projects, and professional connections.
                </p>
              </div>

              <a href="#contact" className="btn primary-btn">
                Contact Me
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
