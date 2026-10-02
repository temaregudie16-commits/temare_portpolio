import services from "../data/services";

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">MY SERVICES</p>

          <h2>
            What I can <span>build for you.</span>
          </h2>

          <p className="section-intro">
            Practical development services focused on creating responsive,
            useful, and maintainable digital solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="service-card-top">
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <a href="#contact" className="service-link">
                Discuss a project
                <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <div>
            <span className="services-cta-label">HAVE A PROJECT IN MIND?</span>

            <h3>
              Let's turn your idea into a<span> digital solution.</span>
            </h3>
          </div>

          <a href="#contact" className="btn primary-btn">
            Start a Conversation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
