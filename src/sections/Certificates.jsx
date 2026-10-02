import certificates from "../data/certificates";

function Certificates() {
  const hasCertificates =
    certificates.length > 0 &&
    certificates.some(
      (certificate) =>
        certificate.credentialUrl && certificate.credentialUrl !== "#",
    );

  return (
    <section className="certificates" id="certificates">
      <div className="section-container">
        {/* Heading */}
        <div className="section-heading">
          <p className="section-subtitle">CERTIFICATIONS</p>

          <h2>
            Learning & <span>credentials.</span>
          </h2>

          <p className="section-intro">
            Professional learning, technical training, and certifications that
            support my software engineering development.
          </p>
        </div>

        {/* Certificate Notice */}
        {!hasCertificates && (
          <div className="certificate-notice">
            <div className="certificate-notice-icon">!</div>

            <div>
              <h3>Certificates will be added here</h3>

              <p>
                This section is ready for verified certificates and training
                credentials. I will add the official certificate name, issuing
                organization, date, and credential link when available.
              </p>
            </div>
          </div>
        )}

        {/* Certificate Cards */}
        {hasCertificates && (
          <div className="certificates-grid">
            {certificates
              .filter(
                (certificate) =>
                  certificate.credentialUrl &&
                  certificate.credentialUrl !== "#",
              )
              .map((certificate) => (
                <article className="certificate-card" key={certificate.id}>
                  <div className="certificate-top">
                    <div className="certificate-icon">🎓</div>

                    <span className="certificate-date">{certificate.date}</span>
                  </div>

                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p className="certificate-issuer">{certificate.issuer}</p>

                  <p className="certificate-description">
                    {certificate.description}
                  </p>

                  <div className="certificate-skills">
                    {certificate.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    View Credential
                    <span>↗</span>
                  </a>
                </article>
              ))}
          </div>
        )}

        {/* Learning Message */}
        <div className="certificates-learning">
          <div className="certificates-learning-icon">{"</>"}</div>

          <div>
            <span>CONTINUOUS LEARNING</span>

            <h3>
              Building skills through
              <span> practice and projects.</span>
            </h3>

            <p>
              Beyond formal certificates, I continue developing my software
              engineering skills through university coursework, practical
              projects, technical documentation, and hands-on development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
