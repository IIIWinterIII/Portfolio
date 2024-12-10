import React from "react";
import "../styles/pages/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main>
      <div className="vision-section">
        <div className="text-box">
          <h1>Привет!</h1>
          <h1>Меня зовут Низами.</h1>
          <p>
            Я Frontend-разработчик, создаю современные и удобные веб-приложения.
          </p>
        </div>
        <img
          src="../assets/images/home-main.png"
          alt="home pic"
          className="image"
        />
      </div>
      <div className="icon-down">
        <FontAwesomeIcon icon={faChevronDown} /> 
      </div>
      <div>
        <h2>Технологии:</h2>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 и CSS3</li>
          <li>Git и GitHub</li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
