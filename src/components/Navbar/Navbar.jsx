import { useState } from "react";
import "./Navbar.css";
import Button from "../Button/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="navbar__container" aria-label="Primary navigation">
        <a className="navbar__brand" href="#top" onClick={closeMenu}>
          John Regan
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation-links"
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>

        <div
          id="primary-navigation-links"
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <Button
            href="mailto:johnathan.regan.dev@gmail.com"
            variant="primary"
            onClick={closeMenu}
          >
            Email Me
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;