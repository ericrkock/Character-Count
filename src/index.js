import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ScreenRes from './ScreenRes';
import Navigation from './Navigation';
import CharacterCount from "./components/characters/CharacterCount";
import WordCount from "./components/words/WordCount";

import BoxesDevelopment from "./components/boxes/BoxeDevelopment";
import BoxesArticles from "./components/boxes/BoxesArticles";
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
  
  screenRes = () => {
    console.log("ScreenRes evoked");
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
 
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
 
    var x = document.getElementById("screen-res");
    x.innerHTML = " width: " + w + ", height: " + h + ".";
 }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="header">
             <ScreenRes 
              name={"Screen Resolution"}
              clicked={this.screenRes}
            />
            <div>
              <h1>CHARACTER & WORD COUNT</h1>
              <p>An Own ReactJS and responsive Challenge</p>
            </div>
           
          </div>

          <Navigation />
          <CharacterCount />
          <BoxesDevelopment />

          <div id="word">
            <LongBox
              longboxTitle={"Long Box 1"}
              longboxContent={"Coming Soon"}
            />
          </div>

          <WordCount />

          <div id="articles">
            <LongBox
              longboxTitle={"Long Box 2"}
              longboxContent={"Coming Soon"}
            />
          </div>
 
          <BoxesArticles />
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
