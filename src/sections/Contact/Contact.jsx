import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2>Let's Connect</h2>

        <p className="section-description">
          I'm currently seeking opportunities in Tier II IT Support,
          Systems Administration, and Entry-Level Cybersecurity.
        </p>

        <div className="contact-links">

          <a href="mailto:johnathan.regan.dev">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/johnathan-regan-395849201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/JRegans"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;