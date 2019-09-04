import React from 'react';

import Settings from './Settings';
import TextBox from './TextBox';
import ClearButton from './ClearButton';

class WordCount extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         maxwords: "",
         keywords: "",
         boxvalue: "",
         totalwords: "No words yet!"
      };
      this.handleMax = this.handleMax.bind(this);
      this.handleKeywords = this.handleKeywords.bind(this);
      this.handleBox = this.handleBox.bind(this);
   }

   handleMax(event) {
      console.log("handleMax evoked", event.target.value);
      this.setState({ maxwords: event.target.value });
   }

   handleKeywords(event) {
      console.log("handleKeyword evoked", event.target.value);
      this.setState({ keywords: event.target.value });
   }

   handleBox(event) {
      console.log("handleKeyword evoked", event.target.value);
      this.setState({ boxvalue: event.target.value });
      var maximum = this.state.maxwords;
      var boxLength3 = event.target.value;
      if (maximum == "" || boxLength3.split(" ").length <= parseInt(maximum)) {

         boxLength3 = boxLength3.replace(/(^\s*)|(\s*$)/gi, "");
         boxLength3 = boxLength3.replace(/[ ]{2,}/gi, " ");
         boxLength3 = boxLength3.replace(/\n /, "\n");

         this.setState({ totalwords: boxLength3.split(" ").length + " words" });
      } else {
         this.setState({ totalwords: "Too many words" });
      }
      //if (maximum == 0) {
      //   document.getElementById("wordNum").innerHTML = boxLength3.split(" ").length + " words";
      //} else {
      //   document.getElementById("wordNum").innerHTML = maximum;
      // }
   }

   clearWordBox = () => {
      console.log("Clear Word Box evoked");
      this.setState({
         maxwords: "",
         keywords: "",
         boxvalue: "",
         totalwords: "No words yet!"
      });
   }
   render() {
      return (
         <div className="word-count">
            <div className="word-box">
               <h1>Words Count</h1>
               <Settings
                  placeholder1={"Max. Words"}
                  clicked1={this.handleMax}
                  value1={this.state.maxwords}
                  maxwords={this.state.maxwords}
                  placeholder2={"Keyword(s) to count"}
                  clicked2={this.handleKeywords}
                  value2={this.state.keywords}
                  keywords={this.state.keywords}
               />
               <TextBox
                  placeholder={"Start Typing or Paste Text"}
                  clicked={this.handleBox}
                  value={this.state.boxvalue}
               />
               <ClearButton
                  name={"Clear Text"}
                  totalwords={this.state.totalwords}
                  clicked={this.clearWordBox}
               />
            </div>
            <div className="word-content">
               <div>
                  <h3>How to use</h3><br></br>
                  <p><b>Max. Words</b> : Determ how many words you want to count maximum - Leave empty for unlimitted.</p><br></br>
                  <p><b>Limited to Max words?</b> : Limit your count to the "Max. Words" you determed.</p><br></br>
                  <p><b>Keyword to count</b> : Enter words you want to count in your text - Seperate words with comma's</p>
               </div>
            </div>
         </div>
      );
   }
}

export default WordCount;