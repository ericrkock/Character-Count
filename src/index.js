import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import CharacterCount from "./components/characters/CharacterCount";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="header">
            <h1>CHARACTER COUNT</h1>
            <p>An Own ReactJS and responsive Challenge</p>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#char">Char Count</a></li>
              <li><a href="#word">Word Count</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="https://ericrkock.github.io/portfolio/" rel="noopener noreferrer"
                target="_blank">Portfolio</a></li>
            </ul>
          </div>
          <div className="char-count" id="char">
            <div className="char-box">
              <h1>Characters Count</h1>
              <CharacterCount />
              <div>
                <p>Start typing your text, the count is automatically</p>
              </div>
            </div>
            <div className="right-box">
              <h4>Right Box</h4>
              <p>Coming soon</p>
            </div>
            <div className="lower-box">
              <h4>Lower box</h4>
              <p>Coming Soon</p>
            </div>
          </div>
          
          <div className="boxes">
            <div className="box">
              <i className="fas fa-chart-pie fa-4x"></i>
              <h3>FreeCodeCamp</h3>
              <h4>Learn Coding</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
              <a href="https://freecodecamp.org" alt="Learn how to code" rel="noopener noreferrer" target="_blank" className="btn">Know more</a>
            </div>
            <div className="box">
              <i className="fas fa-globe fa-4x"></i>
              <h3>GeekSessions Faro</h3>
              <h4>Meet other IT'ers</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
              <a href="https://geeksessions.io/" alt="Tech Talk" rel="noopener noreferrer" target="_blank" className="btn">See More</a>
            </div>
         <div className="box">
            <i className="fas fa-cog fa-4x"></i>
            <h3>StartUp Algarve</h3>
            <h4>Portimão</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
            <a href="https://geeksessions.io/" alt="Learn how to code" rel="noopener noreferrer" target="_blank" className="btn">Learn Now</a>
         </div>
         <div className="box">
            <i className="fas fa-users fa-4x"></i>
            <h3>GitHub</h3>
            <h4>Show your Repo's</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
            <a href="https://github.com/" alt="Share your repo's" rel="noopener noreferrer" target="_blank" className="btn">Learn Now</a>
         </div>
      </div>
          
          Rest Coming Soon
          <div className="footer">
            <span>
              Presented by Eric R. Kock - Aug. 2019 |
            <a href="https://about.me/erickock" rel="noopener noreferrer" target="_blank">{" "}About Me</a>{" "}-
            <a href="https://codepen.io/EricRKock/" rel="noopener noreferrer" target="_blank">{" "}CodePen{" "}</a>{" "}-
            <a href="https://github.com/ericrkock/" rel="noopener noreferrer" target="_blank">{" "}GitHub
            </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
