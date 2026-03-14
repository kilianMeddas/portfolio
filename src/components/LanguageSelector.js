import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "./css/LanguageSelector.css";

const countries = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Langue actuelle:", i18n.language);
    setOpen(false); // fermer le menu après sélection
  };

  return (
    <div className="language-selector">
      <button
        className="language-button"
        onClick={() => setOpen(!open)}
      >
        <GlobeAltIcon style={{ width: "20px", height: "20px", marginRight: "6px" }} />
        Langue
      </button>

      <div className={`language-menu ${open ? "show" : ""}`}>
        {countries.map((lng) => (
          <button
            key={lng.code}
            onClick={() => handleChangeLanguage(lng.code)}
            disabled={i18n.language === lng.code}
          >
            <span className="flag">{lng.flag}</span>
            {lng.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;