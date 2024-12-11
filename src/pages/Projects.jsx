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
          <p>image</p>
          <div className="description">описание</div>
          <a href="">GitHub</a>
          <a href="">Demo</a>
        </div>
      </div>
    </main>
  );
}

export default Projects;
