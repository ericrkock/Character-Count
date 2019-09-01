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
         <div>
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
         </div>
      );
   }
}

export default CharacterCount;