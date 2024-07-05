import React from 'react';
import styles from './about.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerContent}>
        <h1 style={{ marginTop: "-50px" }}>Descripción Personal</h1>
        <h4>
          ¡Hola! 😊 Soy Andrés Vera, un apasionado desarrollador Full Stack con especialización en el back-end. Con 27 años de edad, combino mi amor por la tecnología con mi dedicación a mi fiel compañero, Leónidas, mi perro. Con experiencia en el desarrollo de aplicaciones web y sistemas robustos, he trabajado en proyectos que abarcan todas las tecnologías detalladas en mi perfil en conjunto con grandes equipos. Mi enfoque se centra en crear soluciones eficientes y escalables que impulsen el éxito del negocio. Siempre estoy buscando aprender y crecer profesionalmente, mientras disfruto de la compañía de mi leal amigo.
        </h4>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.column}>
          <h2 style={{ textAlign: "center" }}>Experiencias Laborales</h2>
          <ul className={styles.centerText}>
            <div>Optimo - Líder referente del proyecto front-end</div><br/><br/><br/>
            <div>Agencia Hotelera - Freelance Full Stack</div><br/><br/><br/>
            <div>E-commerce de ropa deportiva - Freelance Full Stack</div>
 
          </ul>
        </div>

        <div className={styles.column}>
          <h2 style={{ textAlign: "center" }}>Tecnologías</h2>
          <ul className={styles.centerText}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>Vue.js</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
           
          </ul>
        </div>

        <div className={styles.column}>
          <h2 style={{ textAlign: "center" }}>Intereses</h2>
          <ul className={styles.centerText}>
            <li>Lectura</li><br/><br/><br/>
            <li>Aprender algo nuevo todos los dias</li><br/><br/>
            <li>Diseño</li><br/><br/>
            <li>Dibujo arquitectonico</li>
         
          </ul>
        </div>
      </div>

      <div className={styles.centerContent}>
        <h2>Estudios</h2>
        <h4>
          Programador full stack web - Henry
        </h4>
        <h4>
          Tecnico maestro mayor de obras especializado en estructuras sismo resistentes
        </h4>
        <h4>
          Ingles avanzado. P.ochoa actualmente cursando
        </h4>
      </div>
    </div>
  );
};

export default AboutMe;