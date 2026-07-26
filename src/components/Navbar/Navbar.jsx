import "./Navbar.css";
import Button from "../Button/Button";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container" aria-label="Primary navigation">
        <a className="navbar__brand" href="#top">
          John Regan
        </a>

        <div className="navbar__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
          
          

          <Button href="mailto:johnathan.regan.dev@gmail.com" variant="primary">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;