import "./css/Formations.css";
import { useState } from "react";
import { ChevronDown, X } from "@boxicons/react";

const formationsData = [
  {
    title: "EPITA - Work-Study Programme in Computer Science",
    period: "September 2026 - August 2029",
    details: ["No started yet"]
  },
  {
    title: "Griffith College Dublin - Bachelor Degree in Computing",
    period: "September 2025 - June 2026",
    details: [
      "Development of complex applications and interfaces.",
      "System and network administration on Linux.",
      "Applied AI project experience: built a local AI agent using multiple LLMs."
    ]
  },
  {
    title: "IA Institut - Digital Business & Data Science",
    period: " September 2023 - June 2026",
    details: [
      "Data analysis, visualization, and Python programming for projects.",
      "Machine learning fundamentals and database management.",
      "Web development, cloud technologies, AI governance, and project management."
    ]
  }
];

const Formations = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFormation = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="formations">
      <h1 className="formations-title">Formations</h1>

      {formationsData.map((formation, index) => (
        <div
          key={index}
          className={`formation ${activeIndex === index ? "active" : ""}`}
        >
          <h3 className="formation-title">
            {formation.title} <span style={{ fontSize: "0.9rem", color: "#555" }}><br />({formation.period})</span>
          </h3>

          {activeIndex === index && (
            <ul className="formation-text">
              {formation.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          <button
            className="toggle"
            onClick={() => toggleFormation(index)}
          >
            {activeIndex === index ? <X /> : <ChevronDown />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Formations;