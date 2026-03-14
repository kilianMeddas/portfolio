import "./css/Skills.css";

const hardSkills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 60 },
  { name: "JavaScript / React", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "Web Development", level: 85 },
  { name: "Linux & Networks", level: 70 }
];

const softSkills = [
  "Problem-solving",
  "Teamwork & Collaboration",
  "Project Management",
  "Communication",
  "Adaptability",
  "Analytical mindset",
];

const Skills = () => {
  return (
    <div className="skills-container">
      
      {/* Hard Skills */}
      <div className="hard-skills">
        <h1 className="title">Hard Skills</h1>
        {hardSkills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-title">
              {skill.name} <span className="skill-level-text">({skill.level}%)</span>
            </h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h1 className="title">Soft Skills</h1>
        <div className="badges-container">
          {softSkills.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;