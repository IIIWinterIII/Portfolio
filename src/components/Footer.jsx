import React from "react";
import "../styles/components/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="container-footer">
      <h3>Разработано и создано IIIWinteRIII</h3>
      <h3>Авторские права © 2024 N.K.</h3>
      <div className="contactBox">
          <a href="mailto:nizamikas@gmail.com">nizamikas@gmail.com</a>
          <a href="https://t.me/iwinter1">
            <FontAwesomeIcon icon={faTelegram} className="icon"/>
          </a>
          <a href="https://github.com/IIIWinterIII">
            <FontAwesomeIcon icon={faGithub} className="icon"/>
          </a>
      </div>
    </footer>
  );
}

export default Footer;
