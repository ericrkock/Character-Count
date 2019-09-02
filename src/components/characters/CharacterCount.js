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
         totalChar: "0 /",
         maxCharWidth: "200"
      };
      this.handleLimit = this.handleLimit.bind(this);
      this.handleCount = this.handleCount.bind(this);
   }

   handleCount(event) {
      this.setState({ charCount: event.target.value });
      console.log("length", event.target.value);
      this.countChars();
   }

   handleLimit(event) {
      this.setState({ limit: event.target.value });
   }

   countChars = (event) => {
      console.log("countChars evoked > charCount =", this.state.charCount);
      const maxLength = parseInt(this.state.limit);
      const boxLength = parseInt(this.state.charCount).length;
      const charRemain = maxLength - boxLength;
      if (boxLength < (parseInt(this.state.limit) + 1)) {
         let limitGood = boxLength + " / " + charRemain + " ... GOOD";
         this.setState({ totalChar: limitGood })
      } else {
         let limitTooLong = -charRemain + " # TOO LONG";
         this.setState({ totalChar: limitTooLong });
      }
   }

   clearCharCount = () => {
      console.log("Reset to default evoked");
      this.setState({
         limit: "20",
         charCount: "Clear",
         totalChar: "0 /",
         maxCharWidth: "200"
      });
      console.log("Reset to:", this.state.limit, "charCount", this.state.charCount);
   }

   render() {
      return (
         <div className="char-count" id="char">
            <div className="char-box">
               <h1>Characters Count</h1>
               <div>
                  <InputChars
                     value={this.state.charCount}
                     handleCount={this.handleCount}
                  />
                  <CharLimit
                     totalChar={this.state.totalChar}
                     value={this.state.limit}
                     handleLimit={this.handleLimit}
                  />
                  <CharButton
                     name={"Clear"}
                     clicked={this.clearCharCount}
                  />
               </div>
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
      );
   }
}

export default CharacterCount;