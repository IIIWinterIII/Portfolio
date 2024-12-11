import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faGithub,
  faSass,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/pages/About.css";

function About() {
  const faIcons = [faJs, faHtml5, faCss3, faReact, faSass, faFigma, faGithub];
  return (
    <main className="container-about">
      <h1>Обо мне</h1>
      <div className="text-img-box">
        <section className="text-section">
        <p>
          Привет! Меня зовут Низами, я фронтенд-разработчик, увлеченный
          созданием красивых и удобных веб-интерфейсов. Работаю с JavaScript,
          React, HTML и CSS, а также совершенствую навыки в разработке PWA и
          адаптивных приложений.
        </p>
        <p>
          Создаю сайты под ключ, предлагая качественные и современные решения.
          Если вам нужен ответственный разработчик или вы ищете сотрудника в
          свою команду, я готов быть полезным и открытым к новым вызовам!
        </p>
        <p>
          Помимо программирования, люблю работать с макетами, исследовать новые
          технологии и отдыхать в тишине.
        </p>
      </section>
      <img src="../assets/images/about.png" alt="about" className="image"/>
      </div>
      
      <div className="scills">
        <h1>
          <span>Мои навыки</span>
        </h1>
        <div className="box-with-boxs">
          {faIcons.map((icon, index) => (
            <div key={index} className="border-box">
              <FontAwesomeIcon icon={icon} className="icon" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
