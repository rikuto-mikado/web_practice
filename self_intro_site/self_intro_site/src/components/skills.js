import '../styles/skills.css';
function Skills() {
    const skills = [
      "HTML / CSS",
      "JavaScript",
      "React",
      "Figma",
      "Canva",
      "Python",
      "SQL",
      "Git",
      "GitHub",
      "Node.js",
      "Java"
    ];
  
    return (
      <section id = "skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-item">{skill}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
export default Skills;
  