import "./css/Menubar.css"
import { NavLink } from 'react-router-dom';
import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next";

const MenuBar = () => {

  const { t } = useTranslation();

  return(
      <div className="nav">
          <ul>
                <li><NavLink to="/">{t("about")}</NavLink></li>
                <li><NavLink to="/formations">{t("formation")}</NavLink></li>
                <li><NavLink to="/skills">{t("skill")}</NavLink></li>
                <li><NavLink to="/experiences">{t("experiences_title")}</NavLink></li>
                <li><NavLink to="/contact">{t("contact")}</NavLink></li>
                <li><LanguageSelector /></li> 

          </ul>
      </div>
  );
}

export default MenuBar;