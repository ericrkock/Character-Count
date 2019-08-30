import React from 'react';
import InputChars from './InputChars';
import CharButton from './CharButton';

class CharacterCount extends React.Component {
   constructor(props) {
      super(props);
   }

   clearCharCount = () => {
      this.setState=({
         defaultCharCount: 20,
         maxCharWidth: 200
      })
   }
   render() {
      return (
         <div>
            <div class="line">
               <InputChars />
               <p id="charNum" >0 /</p>
               <input type="text" className="max-count" placeholder="default: 20"/>
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