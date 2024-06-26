import "./App.css";
import "./nav.css";
import "./main.js";
import Pdf from "./barabarakat.pdf";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={require("./p/Blue_Logo.png")} alt="b" />
        <div>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">All Projects</a>
            </li>
            <li>
              <a href="#ce">Certificate</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="viH">
        <img src={require("./p/2.png")} alt="2" />
      </div>

      <div class="home">
        <div id="about" class="about">
          <h1>About Me</h1>
          <h3>
            Hello, I am <p>Bara Barakat.</p>{" "}
          </h3>
          <h3>
            Front-End Developer We specialize in website programming and
            development, providing clean code and pixel-perfect design I can
            create any project you want in a very short time.
          </h3>
        </div>
        <div class="m">
          <h2>
            Age: <span>22/1/1999 </span>
          </h2>
          <h2>
            Country: <span>Amman, Jordan</span>
          </h2>
        </div>
        <div class="m">
          <h2>
            Freelance: <span>Available</span>
          </h2>
          <h2>
            E-mail:{" "}
            <span>
              <a target={"blank"} href="https://barabarakat700@gmail.com">
                BaraBarakat700..
              </a>
            </span>
          </h2>
        </div>
        <button>
          <a target={"blank"} href={Pdf}>
            Dawnload CV
          </a>
        </button>
      </div>

      <br />

      <div id="projects" class="slide">
        <h2>My Skills</h2>
        <marquee direction="">
          <img src={require("./p/html.png")} alt="h" />
          <img src={require("./p/css.png")} alt="c" />
          <img src={require("./p/tilwind.png")} alt="t" />
          <img src={require("./p/sass.png")} alt="s" />
          <img src={require("./p/pugjs.png")} alt="p" />
          <img src={require("./p/javascript-0.png")} alt="j" />
          <img src={require("./p/react.png")} alt="r" />
          <img src={require("./p/redux-react.png")} alt="rr" />
          <img className={"node"} src={require("./p/nodejs.png")} alt="n" />
          <img src={require("./p/express.png")} alt="e" />
          <img src={require("./p/api.png")} alt="a" />
          <img src={require("./p/npm.png")} alt="n" />
          <img src={require("./p/git.png")} alt="g" />
          <img src={require("./p/postman.png")} alt="p" />
          <img src={require("./p/jira.png")} alt="j" />
          <img src={require("./p/slack.png")} alt="s" />
        </marquee>
      </div>

      <br />

      <div class="m-p">
        <h2>Best Projects</h2>
        <div class="pp">
          <a
            target={"blank"}
            href="https://bara-barakat.github.io/Weather-App/"
          >
            <img src={require("./p/weather.png")} alt="w" />
          </a>
          <a target={"blank"} href="https://bara-barakat.github.io/Cruds/">
            <img src={require("./p/cruds.png")} alt="c" />
          </a>
          <a
            target={"blank"}
            href="https://bara-barakat.github.io/Currency-Conversion./"
          >
            <img src={require("./p/carency.png")} alt="c" />
          </a>
        </div>

        <div class="pp">
          <a target={"blank"} href="https://bara-barakat.github.io/Ecommerce/">
            <img src={require("./p/cara.png")} alt="c" />
          </a>
          <a target={"blank"} href="https://bara-barakat.github.io/Tic-Tac/">
            <img src={require("./p/tic.png")} alt="t" />
          </a>
          <a
            target={"blank"}
            href="https://bara-barakat.github.io/landing-page/"
          >
            <img src={require("./p/landing.png")} alt="l" />
          </a>
        </div>
      </div>

      <div id="ce" class="ce">
        <h2>Certificate</h2>
        <div class="cc">
          <img src={require("./p/Screenshot3.png")} alt="s" />
          <img src={require("./p/Screenshot.png")} alt="s" />
          <img src={require("./p/Agile.jpg")} alt="a" />
        </div>
        <br />
        <div class="cc">
          <img src={require("./p/su.jpg")} alt="s" />
          <img src={require("./p/c++.png")} alt="c" />
          <img src={require("./p/hack.jpg")} alt="h" />
        </div>
      </div>

      <footer>
        <div class="a">
          <a target={"blank"} href="https://barakatbara27@gmail.com">
            {" "}
            <img src={require("./p/gmail.png")} alt="g" />
          </a>
          <a target={"blank"} href="https://wa.link/6ffdlp">
            {" "}
            <img src={require("./p/Whatsapp.ico")} alt="w" />
          </a>
          <a
            target={"blank"}
            href="https://www.linkedin.com/in/bara-barakat-330418296"
          >
            {" "}
            <img src={require("./p/linkedin.png")} alt="l" />
          </a>
          <a target={"blank"} href="https://mostaql.com/u/bara19">
            {" "}
            <img src={require("./p/mosta.png")} alt="m" />
          </a>
          <a
            target={"blank"}
            href="https://github.com/Bara-barakat?tab=repositories"
          >
            {" "}
            <img src={require("./p/hub.png")} alt="h" />
          </a>
        </div>
        <div class="sk">
          {" "}
          <img src={require("./p/wave.png")} alt="w" />
        </div>
      </footer>
      <span class="up">UP^</span>
    </div>
  );
}

export default App;
