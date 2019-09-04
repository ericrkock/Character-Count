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
      this.setState({maxwords: event.target.value});
   }

   handleKeywords(event) {
      console.log("handleKeyword evoked", event.target.value);
      this.setState({keywords: event.target.value});
   }

   handleBox(event) {
      console.log("handleKeyword evoked", event.target.value);
      this.setState({boxvalue: event.target.value});
      this.countWords()
   }

   countWords = (event) => {
      console.log("Word Count evoked");
      var maximum = document.getElementById("max-words");
      var boxLength3 = event.target.value;
      boxLength3 = boxLength3.replace(/(^\s*)|(\s*$)/gi,"");
      boxLength3 = boxLength3.replace(/[ ]{2,}/gi," ");
      boxLength3 = boxLength3.replace(/\n /, "\n");
   
      document.getElementById("wordNum").innerHTML = boxLength3.split(" ").length + " words";
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
         boxvalue: "Cleared",
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
                  value={this.state.maxwords}
                  placeholder2={"Keyword(s) to count"}
                  maxwords={this.state.maxwords}
                  clicked2={this.handleKeywords}
                  
               />
               <TextBox 
                  placeholder={"Start Typing or Paste Text"}
                  value={this.state.boxvalue}
                  handleBox={this.handleBox}
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