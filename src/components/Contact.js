import "./css/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()
  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>

      <p className="contact-text">{t("contact_text")}</p>

      <div className="contact-list">
        <p>
          📧 {t("personal_mail")}:{" "}
          <a href="mailto:meddas.kilian@gmail.com">meddas.kilian@gmail.com</a>
        </p>

        <p>
          🎓 {t("academic_mail")}:{" "}
          <a href="mailto:kilian.meddas@epita.fr">kilian.meddas@epita.fr</a>
        </p>

        <p>
          💼 LinkedIn:{" "}
          <a href="https://linkedin.com/in/kilian-meddas-6b361525b" target="_blank" rel="noopener noreferrer">{t("LinkedIn")}</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;