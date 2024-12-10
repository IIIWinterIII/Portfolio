import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import "../styles/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" className="link">
          N.K.
        </Link>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            {routes.map((it, index) => (
              <li key={index}>
                <Link to={it.path} className="link">
                  <FontAwesomeIcon icon={it.icons} className="icons" />
                  {it.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cbf">
          <a href="https://github.com/IIIWinterIII/Portfolio" className="btn">
            <FontAwesomeIcon icon={faCodeBranch} className="icons" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
