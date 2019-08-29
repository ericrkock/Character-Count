import React from 'react';
import Button from "react-bootstrap/Button";

class LineCount extends React.Component {
   render() {
      return (
         <div>
            <div className="line">
               <p className="line-div">Line :</p>
               <input 
                  type="text" 
                  id="box1" 
                  className="input-box" 
                  onkeyup="countChars1(this)" 
                  placeholder="Start Typing or Paste Text"
               />
               <p id="charNum1" >0 / 20</p>
               <Button variant="warning" ></Button>
            </div>
         </div>
      );
   }
}

export default LineCount;