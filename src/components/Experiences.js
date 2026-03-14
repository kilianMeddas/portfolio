import "./css/Experiences.css";
import { useState } from "react";
import { ChevronDown, X } from "@boxicons/react";
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const { t } = useTranslation();
  const experiences = t("experiences", { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experience">
      <h1 className="experience-title">{t("experiences_title")}</h1>
      {experiences.map((experience, index) => (
        <div key={index} className={`experience ${activeIndex === index ? "active" : ""}`}>
          <h3 className="experience-title">
            {experience.title}{" "}
            <span style={{ fontSize: "0.9rem", color: "#555" }}>
              <br />({experience.context})
            </span>
          </h3>

          {activeIndex === index && (
            <div>
              <ul className="experience-text">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="experience-badge">
                <h3 className="title">Technologies</h3>
                <div className="badges-container">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button className="toggle" onClick={() => toggleExperience(index)}>
            {activeIndex === index ? <X /> : <ChevronDown />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Experiences;