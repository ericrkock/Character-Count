import React from 'react';
import InputChars from './InputChars';
import CharLimit from './CharLimit';
import CharButton from './CharButton';

class CharacterCount extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         limit: "20",
         totalChar: "0",
         maxCharWidth: "200"
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ limit: event.target.value });
      console.log("Limit set to:", this.state.limit);
   }

   countChars = () => {
      console.log("countChars evoked");
   }

   clearCharCount = () => {
      console.log("Reset to default evoked");
      this.setState({
         limit: "20",
         totalChar: "1 /",
         maxCharWidth: "200"
      });
      console.log("Reset to:", this.state.limit);
   }
   render() {
      return (
         <div className="char-count" id="char">
            <div className="char-box">
               <h1>Characters Count</h1>
               <div className="line">
                  <InputChars />
                  {/*<p id="charNum" >{this.state.totalChar} /</p>*/}
                  <CharLimit
                     input={this.state.limit}
                     handleChange={this.handleChange}
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