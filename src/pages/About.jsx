import angelImg from "../assets/angel_pixel.png";
import santiagoImg from "../assets/santiago_pixel.png";

function About() {
  return (
    <>
      <div>
        <div className="about-content">
        <h2>
          A simple To-do app allowing the user to create and manage tasks, as
          well as check off (or uncheck) the existing tasks when completed.
        </h2>

        <div className="avatar-container">

        <div className="avatar-block">
          <img src={angelImg} className="avatar-img" alt="Angèle van Groesen" />
          <h3>Angèle van Groesen</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/angelevangroesen">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/angeleVG">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="avatar-block">

        <img src={santiagoImg} className="avatar-img" alt="Santiago Villa" />

        <h3>Santiago Villa</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/villa-santiago">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/villa-santiago">GitHub</a>
          </li>
        </ul>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
