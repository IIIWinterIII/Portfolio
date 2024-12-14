import React from "react";
import "../styles/pages/Projects.css";

function Projects() {
  return (
    <main className="container-projects">
      <section className="text-section">
        <h1>Мои последние работы</h1>
        <h3>
          Вот несколько <span>проектов</span>, которые я создавал для{" "}
          <span>обучения</span> и <span>практики</span>.
        </h3>
      </section>
      <div className="box-with-projects">
        <div className="project">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Documentation-Page.jpg`}
            alt="documentation-page"
            className="image"
          />
          <div className="description">
            <p className="title">
              <code>Documentation-Page</code>
            </p>
            <p>
              Сайт для удобного изучения JavaScript. Включает охватывающие
              ключевые аспекты языка, оформленный для лёгкого восприятия.
              Адаптивная навигация автоматически подстраивается под размер
              экрана.
            </p>
            <p className="title">Почему это полезно?</p>
            <p>
              Сайт можно адаптировать под любые задачи. Такой инструмент поможет
              структурировать информацию, сделать её доступной в любом месте и
              упростить процесс обучения или работы.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/Documentation-Page">
              GitHub
            </a>
            <a href="https://iiiwinteriii.github.io/Documentation-Page/">
              Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Beauty-salon.png`}
            alt="beauty-salon"
            className="image"
          />
          <div className="description">
            <p className="title">
              <code>Beauty-salon</code>
            </p>
            <p>
              Сайт — шаблон. Он предоставляет удобную платформу для ознакомления
              с услугами и ценами, а также включает галерею работ мастеров.
              Адаптивный дизайн, что позволяет клиентам легко находить нужную
              информацию в любое время и в любом месте.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/Beauty-salon">GitHub</a>
            <a href="https://iiiwinteriii.github.io/Beauty-salon/">Demo</a>
          </div>
        </div>
        <div className="project">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Muhammad-Ali.png`}
            alt="Muhammad-Ali"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Muhammad-Ali</code>
            </p>
            <p>
              Одностраничный сайт, посвящённый Мухамеду Али, с краткой
              информацией о его достижениях, ярким моментом на фото и
              вдохновляющей цитатой. Я использовал стильный и минималистичный
              дизайн, чтобы сделать информацию лёгкой для восприятия.
            </p>
            <p>
              На основе этого макета я могу создать сайт для любых нужд:
              конспектов лекций, учебных заметок, или справочников, делая
              информацию доступной и понятной.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/WIki-Muhammad-Ali">
              GitHub
            </a>
            <a href="https://iiiwinteriii.github.io/WIki-Muhammad-Ali/">Demo</a>
          </div>
        </div>
        <div className="project">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Random-Quote-Machine.png`}
            alt="Random-Quote-Machine"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Random-Quote-Machine</code>
            </p>
            <p>
              Развлекательное приложение "Машина цитат" с минималистичным
              дизайном. В нём собраны вдохновляющие и мудрые цитаты от великих
              людей, которые могут поднять настроение или стать источником
              мотивации.
            </p>
            <p>
              Можно адаптировать этот проект для создания карточек для изучения
              языков, что сделает его полезным инструментом для обучения. Это
              идеальный проект для создания простого, но функционального
              ресурса, который всегда будет интересен пользователям.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/Random-Quote-Machine">
              GitHub
            </a>
            <a href="https://iiiwinteriii.github.io/Random-Quote-Machine/">
              Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Markdown-Previewer.png`}
            alt="Markdown-Previewer"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Markdown-Previewer</code>
            </p>
            <p>
              Проект представляет собой две доски, одна из которых предназначена
              для ввода текста в формате Markdown, а вторая — для отображения
              того, как будет выглядеть результат. Простой и интуитивно понятный
              интерфейс. Идеально подходит для изучения и практики работы с
              Markdown языком разметки.
            </p>
            <p>
              Проект является отличным инструментом для тех, кто хочет улучшить
              свои навыки работы с Markdown.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/Markdown-Previewer">
              GitHub
            </a>
            <a href="https://iiiwinteriii.github.io/Markdown-Previewer/">
              Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
