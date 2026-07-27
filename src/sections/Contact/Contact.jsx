import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2>Let's Connect</h2>

        <p className="section-description">
          I'm passionate about growing as an IT and Security professional, building deeper expertise in Tier II IT Support, Systems Administration, and Cybersecurity through real-world experience, continuous learning, and hands-on projects. Let's connect!
        </p>

        <div className="contact-links">

          <a href="mailto:johnathan.regan.dev@gmail.com">
          
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