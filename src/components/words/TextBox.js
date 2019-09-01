import React from 'react';
import "./word.css";

class TextBox extends React.Component {
   render() {
      return (
         <div>
            <textarea id="box3" col="100" rows="30" onkeyup="countWords(this)" placeholder="Start Typing or Paste Text"></textarea>
         </div>
      );
   }
}

export default TextBox;