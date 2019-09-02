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
         maxCharWidth: "200"
      };
      this.handleLimit = this.handleLimit.bind(this);
      this.handleCount = this.handleCount.bind(this);
   }

   handleCount(event) {
      this.setState({ charCount: event.target.value });
      this.countChars();
   }

   handleLimit(event) {
      let restLimit = "0 / " + event.target.value;
      this.setState({
         limit: event.target.value,
         totalChar: restLimit
      });
   }

   countChars = () => {
      const maxLength = parseInt(this.state.limit);
      const boxLength = this.state.charCount.length + 1;
      const charRemain = maxLength - boxLength;
      if (boxLength < (parseInt(this.state.limit) + 1)) {
         let limitGood = boxLength + " / " + charRemain + " ... GOOD";
         this.setTotalChar(limitGood);
      } else {
         let limitTooLong = -charRemain + " # TOO LONG";
         this.setTotalChar(limitTooLong);
      }
   }

   setTotalChar = (remainLimit) => {
      this.setState({ totalChar: remainLimit });
   }

   clearCharCount = () => {
      this.setState({
         limit: "20",
         charCount: "",
         totalChar: "0 / 20",
         maxCharWidth: "200"
      });
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