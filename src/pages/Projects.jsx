import React from "react";
import "../styles/pages/Projects.css";

function Projects() {
  return (
    <main className="container-projects">
      <section className="text-section">
        <h1>Мои последние работы</h1>
        <h3>
          Вот несколько проектов, которые я создавал для обучения и практики.
        </h3>
      </section>
      <div className="box-with-projects">
        <div className="project">
          <img
            src="../assets/images/Documentation-Page.png"
            alt="documentation-page"
            className="image"
          />
          <div className="description">
            <p className="title">
              <code>Documentation-Page</code>
            </p>
            <p>
              Этот сайт создан для удобного изучения JavaScript. Он включает
              понятные материалы, охватывающие ключевые аспекты языка, и
              структурированный контент, оформленный для лёгкого восприятия.
              Адаптивная навигация автоматически подстраивается под размер
              экрана, делая сайт удобным для использования как на смартфоне, так
              и на компьютере.
            </p>
            <p className="title">Почему это полезно?</p>
            <p>
              Сайт можно адаптировать под любые задачи: конспекты лекций,
              учебные заметки, инструкции для сотрудников, справочники или
              другие данные. Такой инструмент поможет структурировать
              информацию, сделать её доступной в любом месте и упростить процесс
              обучения или работы.
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
            src="../assets/images/Beauty-salon.png"
            alt="beauty-salon"
            className="image"
          />
          <div className="description">
            <p className="title">
              <code>Beauty-salon</code>
            </p>
            <p>
              Этот сайт — шаблон, который я разработал для салона красоты с
              целью усовершенствования своих навыков в веб-разработке. Он
              предоставляет удобную платформу для ознакомления с услугами и
              ценами, а также включает галерею работ мастеров. Адаптивный дизайн
              обеспечивает комфортное использование сайта как на мобильных
              устройствах, так и на компьютерах, что позволяет клиентам легко
              находить нужную информацию в любое время и в любом месте.
            </p>
            <p>
              По этому макету я могу создать сайт для любого бизнеса. С каждым
              новым проектом мои навыки и качество сайтов становятся всё более
              совершенствованными, а также растёт моя способность создавать
              уникальные решения для различных типов бизнесов.
            </p>
          </div>
          <div className="button-section">
            <a href="https://github.com/IIIWinterIII/Beauty-salon">GitHub</a>
            <a href="https://iiiwinteriii.github.io/Beauty-salon/">Demo</a>
          </div>
        </div>
        <div className="project">
          <img
            src="../assets/images/Muhammad-Ali.png"
            alt="Muhammad-Ali"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Muhammad-Ali</code>
            </p>
            <p>
              Этот проект — одностраничный сайт, посвящённый Мухамеду Али, с
              краткой информацией о его достижениях, ярким моментом на фото и
              вдохновляющей цитатой. Я использовал стильный и минималистичный
              дизайн, чтобы сделать информацию лёгкой для восприятия. Это одна
              из моих любимых работ, так как она сочетает эстетику и
              функциональность.
            </p>
            <p>
              На основе этого макета я могу создать сайт для любых нужд:
              конспектов лекций, учебных заметок, инструкций для сотрудников или
              справочников, делая информацию доступной и понятной для
              пользователей.
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
            src="../assets/images/Random-Quote-Machine.png"
            alt="Random-Quote-Machine"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Random-Quote-Machine</code>
            </p>
            <p>
              Проект — строго развлекательное приложение "Машина цитат" с
              минималистичным дизайном, который делает его удобным и приятным
              для использования. В нём собраны вдохновляющие и мудрые цитаты от
              великих людей, которые могут поднять настроение или стать
              источником мотивации.
            </p>
            <p>
              Такой формат позволяет легко внедрить любую концепцию и
              адаптировать под любые нужды, будь то создание коллекции цитат,
              шуток или кратких вдохновляющих сообщений.
            </p>
            <p>
              Также можно адаптировать этот проект для создания карточек для
              изучения языков, что сделает его полезным инструментом для
              обучения. Это идеальный проект для демонстрации гибкости и
              креативности, а также для создания простого, но функционального
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
            src="../assets/images/Markdown-Previewer.png"
            alt="Markdown-Previewer"
            className="image"
          />

          <div className="description">
            <p className="title">
              <code>Markdown-Previewer</code>
            </p>
            <p>
              Этот проект представляет собой две доски, одна из которых
              предназначена для ввода текста в формате Markdown, а вторая — для
              отображения того, как будет выглядеть результат. Простой и
              интуитивно понятный интерфейс позволяет увидеть, как текст,
              написанный в Markdown, будет выглядеть на выходе, что идеально
              подходит для изучения и практики работы с этим языком разметки.
            </p>
            <p>
              Этот проект является отличным инструментом для тех, кто хочет
              улучшить свои навыки работы с Markdown. Он поможет быстрее понять,
              как форматируются заголовки, списки, цитаты и другие элементы
              текста.
            </p>
            <p>
              Это проект для узкой, но знающей аудитории, которая ценит удобство
              работы с текстом и хочет научиться применять Markdown для создания
              документации, заметок и других материалов.
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
