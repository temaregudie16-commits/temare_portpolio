import skills from "../data/skills";

function Skills() {
  const categories = ["Frontend", "Backend", "Database", "Tools"];

  const skillLevels = {
    HTML: 90,
    CSS: 85,
    JavaScript: 80,
    React: 75,
    Bootstrap: 80,
    "Node.js": 70,
    "Express.js": 70,
    MySQL: 75,
    "Git & GitHub": 75,
  };

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        {/* Heading */}
        <div className="section-heading">
          <p className="section-subtitle">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p className="section-intro">
            A growing technical skill set built through academic learning,
            practical projects, and continuous development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="skills-container">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            return (
              <div className="skills-category" key={category}>
                <div className="skills-category-header">
                  <div>
                    <span className="skills-category-label">{category}</span>

                    <h3>
                      {category === "Frontend" && "Frontend Development"}

                      {category === "Backend" && "Backend Development"}

                      {category === "Database" && "Database Technologies"}

                      {category === "Tools" && "Development Tools"}
                    </h3>
                  </div>

                  <span className="skills-count">
                    {categorySkills.length}{" "}
                    {categorySkills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                <div className="skills-list">
                  {categorySkills.map((skill) => {
                    const level = skillLevels[skill.name] || 70;

                    return (
                      <div className="skill-item" key={skill.name}>
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <span>{level}%</span>
                        </div>

                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{
                              width: `${level}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="skills-bottom">
          <div className="skills-bottom-icon">{"</>"}</div>

          <div>
            <h3>Always learning. Always building.</h3>

            <p>
              I continuously improve my skills by building practical projects,
              exploring new technologies, and applying software engineering
              principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
