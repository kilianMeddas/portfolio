import me from "./assets/me.jpg";
import EPITA from "./assets/EPITA.png";
import IA_Institut from "./assets/IA_Institut.png";
import Griffith from "./assets/Griffith.jpg";
import "./css/About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div> {/* body ne doit pas être utilisé dans un composant React */}
      <div className="logo">
        <img src={EPITA} alt="EPITA" className="EPITA" />
        <img src={me} alt="me" />
        <img src={Griffith} alt="Griffith" className="Ecole" />
        <img src={IA_Institut} alt="IA_Institut" className="Ecole" />
      </div>

      <section>
        <p dangerouslySetInnerHTML={{ __html: t("current_status") }} />
      </section>

      <section>
        <h2>{t("like_title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("like") }} />
      </section>

      <section>
        <h2>{t("currently_doing")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("doing") }} />
      </section>
    </div>
  );
};

export default About;