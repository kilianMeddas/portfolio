import "./css/Skills.css";
import { useTranslation } from "react-i18next";

const hardSkills = [
  { key: "python", level: 90 },
  { key: "java", level: 60 },
  { key: "javascriptReact", level: 80 },
  { key: "machineLearning", level: 75 },
  { key: "webDevelopment", level: 85 },
  { key: "linuxNetworks", level: 70 },
];

const softSkillsKeys = [
  "problemSolving",
  "teamworkCollaboration",
  "projectManagement",
  "communication",
  "adaptability",
  "analyticalMindset",
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      {/* Hard Skills */}
      <div className="hard-skills">
        <h1 className="title">{t("skills.titles.hardSkills")}</h1>
        {hardSkills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-title">
              {t(`skills.hardSkills.${skill.key}`)}{" "}
              <span className="skill-level-text">({skill.level}%)</span>
            </h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h1 className="title">{t("skills.titles.softSkills")}</h1>
        <div className="badges-container">
          {softSkillsKeys.map((key, index) => (
            <span key={index} className="badge">
              {t(`skills.softSkills.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
