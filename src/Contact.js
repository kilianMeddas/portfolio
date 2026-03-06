import "./css/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>

      <p className="contact-text">
        Feel free to reach out for collaborations, opportunities, or just to connect.
      </p>

      <div className="contact-list">
        <p>
          📧 Personal email:{" "}
          <a href="mailto:kilianmeddas94380@gmail.com">
            kilianmeddas94380@gmail.com
          </a>
        </p>

        <p>
          🎓 Academic email:{" "}
          <a href="mailto:kilian.meddas@epita.fr">
            kilian.meddas@epita.fr
          </a>
        </p>

        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;