import "./css/Formations.css";
import { useState } from "react";
import { ChevronDown, X } from "@boxicons/react";
import { useTranslation } from "react-i18next";

const Formations = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFormation = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formationsData = t("formations.list", { returnObjects: true });

  return (
    <div className="formations">
      <h1 className="formations-title">{t("formations.title")}</h1>

      {formationsData.map((formation, index) => (
        <div
          key={index}
          className={`formation ${activeIndex === index ? "active" : ""}`}
        >
          <h3 className="formation-title">
            {formation.title}{" "}
            <span style={{ fontSize: "0.9rem", color: "#555" }}>
              <br />({formation.period})
            </span>
          </h3>

          {activeIndex === index && (
            <ul className="formation-text">
              {formation.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          <button className="toggle" onClick={() => toggleFormation(index)}>
            {activeIndex === index ? <X /> : <ChevronDown />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Formations;
