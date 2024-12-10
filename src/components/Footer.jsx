import React from "react";
import "../styles/components/Footer.css";
import ContactButton from "./ContactButton"

function Footer() {
  return (
    <footer className="container-footer">
      <h3>Разработано и создано IIIWinteRIII</h3>
      <h3>Авторские права © 2024 N.K.</h3>
      <ContactButton />
    </footer>
  );
}

export default Footer;
