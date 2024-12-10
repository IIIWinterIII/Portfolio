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

      {/* -------------------------- */}
      <section class="skills">
        <p>
          Фронтенд-разработчик и HTML-верстальщик с опытом создания удобных и
          эстетичных веб-сайтов.
        </p>
        <p>
          Мои начальные шаги включали разработку сайтов для малого бизнеса.
          Затем я углубился в проекты на платформе UpWork, что помогло мне
          развить навыки и научиться находить решения для различных задач.
        </p>
        <p>
          Сейчас я продолжаю создавать веб-проекты и совершенствуюсь в этой
          сфере. Переходите в разделы сайта, чтобы узнать больше обо мне и моих
          работах!
        </p>
      </section>
      <div className="avatar">
        <img src="../" alt="my-avatar" />
      </div>
    </main>
  );
}

export default Home;
