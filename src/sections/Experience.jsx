import experience from "../data/experience";
import education from "../data/education";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        {/* Heading */}
        <div className="section-heading">
          <p className="section-subtitle">MY JOURNEY</p>

          <h2>
            Experience & <span>education.</span>
          </h2>

          <p className="section-intro">
            My academic journey and practical development experience as I
            continue growing in software engineering.
          </p>
        </div>

        {/* Experience */}
        <div className="journey-block">
          <div className="journey-heading">
            <div className="journey-heading-icon">{"</>"}</div>

            <div>
              <span>PROFESSIONAL JOURNEY</span>
              <h3>Development Experience</h3>
            </div>
          </div>

          <div className="experience-timeline">
            {experience.map((item) => (
              <article className="experience-item" key={item.id}>
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-header">
                    <div>
                      <span className="experience-type">{item.type}</span>

                      <h3>{item.role}</h3>

                      <p className="experience-organization">
                        {item.organization}
                      </p>
                    </div>

                    <div className="experience-period">{item.period}</div>
                  </div>

                  <div className="experience-meta">
                    <span>📍 {item.location}</span>
                  </div>

                  <p className="experience-description">{item.description}</p>

                  <div className="experience-highlights">
                    <h4>Key Focus</h4>

                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>
                          <span>✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="journey-block education-block">
          <div className="journey-heading">
            <div className="journey-heading-icon">🎓</div>

            <div>
              <span>ACADEMIC JOURNEY</span>
              <h3>Education</h3>
            </div>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.id}>
                <div className="education-card-top">
                  <span className="education-status">{item.status}</span>

                  <span className="education-period">{item.period}</span>
                </div>

                <h3>{item.degree}</h3>

                <p className="education-institution">{item.institution}</p>

                <p className="education-location">📍 {item.location}</p>

                <p className="education-description">{item.description}</p>

                <div className="education-areas">
                  {item.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
