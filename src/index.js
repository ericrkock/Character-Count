import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import CharacterCount from "./components/characters/CharacterCount";
import WordCount from "./components/words/WordCount";

import Box from "./components/boxes/Box";
import LongBox from "./components/boxes/LongBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fas: "",
      boxTitel: "",
      boxSubTitel: "",
      boxContent: "",
      boxLink: "",
      boxAlt: "",
      boxButton: "",
      longboxTitle: "",
      longboxContent: ""
    };
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="header">
            <h1>CHARACTER & WORD COUNT</h1>
            <p>An Own ReactJS and responsive Challenge</p>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#char">Chars Count</a></li>
              <li><a href="#word">Words Count</a></li>
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
            <Box
              fas={"fas fa-chart-pie fa-4x"}
              boxTitel={"FreeCodeCamp"}
              boxSubtitel={"LearnCoding"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"Learn how to code"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-globe fa-4x"}
              boxTitel={"GeekSessions Faro"}
              boxSubtitel={"Meet other IT'ers"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://geeksessions.io/"}
              boxAlt={"Tech Talk"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-cog fa-4x"}
              boxTitel={"StartUp Algarve"}
              boxSubtitel={"Portimão"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"StartUp Portimao"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-users fa-4x"}
              boxTitel={"GitHub"}
              boxSubtitel={"Show your Repo's"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://github.com/"}
              boxAlt={"Share your repo's"}
              boxButton={"Know More"}
            />
          </div>

          <div id="word">
            <LongBox
              longboxTitle={"Long Box 1"}
              longboxContent={"Coming Soon"}
            />
          </div>

          <div className="word-count">
            <div className="word-box">
              <h1>Words Count</h1>
              <WordCount />
            </div>
          </div>

          <div id="articles">
            <LongBox id="articles"
              longboxTitle={"Long Box 2"}
              longboxContent={"Coming Soon"}
            />
          </div>

          <div className="boxes">
            <Box
              boxTitel={"ARTICLE 1"}
              boxSubtitel={"Word Counting"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"Learn how to code"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"ARTICLE 2"}
              boxSubtitel={"Why 2000 words"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://geeksessions.io/"}
              boxAlt={"Tech Talk"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"ARTICLE 3"}
              boxSubtitel={"Google Ranking"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"StartUp Portimao"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"ARTICLE 4"}
              boxSubtitel={"Unique Content"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://github.com/"}
              boxAlt={"Share your repo's"}
              boxButton={"Read More"}
            />
          </div>

          <LongBox
            longboxTitle={"Last Long Box"}
            longboxContent={"Coming Soon"}
          />

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
