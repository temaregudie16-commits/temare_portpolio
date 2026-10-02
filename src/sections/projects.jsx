import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Web Development",
    "Full Stack",
    "Software Development",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const searchText = searchTerm.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchText),
      );

    return matchesCategory && matchesSearch;
  });

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-subtitle">MY PROJECTS</p>

          <h2>
            Featured <span>projects.</span>
          </h2>

          <p className="section-intro">
            A selection of projects demonstrating my experience in frontend,
            full-stack, and software development.
          </p>
        </div>

        {/* Search */}
        <div className="project-search">
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`project-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="projects-result-info">
          <span>
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                />
              </div>

              {/* Project Top */}
              <div className="project-card-top">
                <div className="project-number">
                  {String(project.id).padStart(2, "0")}
                </div>

                {project.featured && (
                  <span className="project-featured">Featured</span>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="project-footer">
                <button
                  type="button"
                  className="project-details-btn"
                  onClick={() => openProject(project)}
                >
                  View Details
                  <span>→</span>
                </button>

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              <h3>No projects found</h3>

              <p>Try another project name, technology, or category.</p>

              <button
                type="button"
                className="project-filter active"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ×
            </button>

            {/* Modal Image */}
            <div className="project-modal-image">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project`}
              />
            </div>

            {/* Modal Content */}
            <div className="project-modal-content">
              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.description}</p>

              {/* Technologies */}
              <div className="project-modal-technologies">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Modal Links */}
              <div className="project-modal-actions">
                {selectedProject.github && selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary-btn"
                  >
                    View GitHub ↗
                  </a>
                )}

                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary-btn"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
