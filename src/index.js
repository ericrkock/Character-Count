import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import CharacterCount from "./components/CharacterCount";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCharCount: 20,
      maxCharWidth: 200
    }
  }
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
