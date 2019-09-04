import React from 'react';
import InputChars from './InputChars';
import CharLimit from './CharLimit';
import CharButton from './CharButton';

class CharacterCount extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         limit: "20",
         charCount: "",
         totalChar: "0 / 20",
         styleTotalChar: { color: "#fff" },
         inputbox: { width: "200px" }
      };
      this.handleLimit = this.handleLimit.bind(this);
      this.handleCount = this.handleCount.bind(this);
   }

   handleCount(event) {
      this.setState({ charCount: event.target.value });
      const inputChars = event.target.value;
      const maxLength = parseInt(this.state.limit);
      const boxLength = inputChars.length;
      const charRemain = maxLength - boxLength;
      if (boxLength <= (parseInt(this.state.limit))) {
         let limitGood = boxLength + " / " + charRemain + " ... GOOD";
         let TotalCharStyle = { color: "#fff" };
         this.setTotalChar(limitGood, TotalCharStyle);
      } else {
         let limitTooLong = -charRemain + " # TOO LONG";
         let TotalCharStyle = { color: "red" };
         this.setTotalChar(limitTooLong, TotalCharStyle);
      }

   }

   handleLimit(event) {
      while (event.target.value < 101) {
         let restLimit = "0 / " + event.target.value;
         let inputBoxSize = { width: event.target.value * 10 + "px" };
         this.setState({
            limit: event.target.value,
            totalChar: restLimit,
            inputbox: inputBoxSize
         });
         break
      }
   }

   setTotalChar = (remainLimit, charStyle) => {
      this.setState({
         totalChar: remainLimit,
         styleTotalChar: charStyle
      });
   }

   clearCharCount = () => {
      this.setState({
         limit: "20",
         charCount: "",
         totalChar: "0 / 20",
         styleTotalChar: { color: "#fff" },
         inputbox: { width: "200px" }
      });
   }

   render() {
      return (
         <div className="char-count" id="char">
            <div className="char-box">
               <h1>Characters Count</h1>
               <h4>Maximum 100 Characters</h4>
               <div>
                  <div className="line">
                     <CharLimit
                        value={this.state.limit}
                        handleLimit={this.handleLimit}
                     />
                     <InputChars
                        inputbox={this.state.inputbox}
                        value={this.state.charCount}
                        handleCount={this.handleCount}
                        totalChar={this.state.totalChar}
                        styleTotalChar={this.state.styleTotalChar}
                     />
                  </div>
                  <CharButton
                     name={"Clear"}
                     clicked={this.clearCharCount}
                  />
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
      );
   }
}

export default CharacterCount;