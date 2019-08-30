import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="header">
            <h1>CHARACTER COUNT</h1>
            <p>An Own ReactJS Challenge</p>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#char">Char Count</a></li>
              <li><a href="#word">Word Count</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>
          <div className="char-count" id="char">
            <div className="char-box">
              <h1>Characters Count</h1>
            </div>
            <div className="right-box"></div>
            <div className="lower-box"></div>
          </div>
          Rest Coming Soon
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
