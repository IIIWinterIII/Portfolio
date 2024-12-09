import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import "../styles/components/Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div>
        <nav>
          <ul>
            {routes.map((it, index) => (
              <li key={index}>
                <Link to={it.path}>{it.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="cta">
        <a href="/resume.pdf" className="btn">
          Скачать резюме
        </a>
      </div>
    </header>
  );
}

export default Header;
