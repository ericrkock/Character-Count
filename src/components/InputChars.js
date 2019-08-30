import React from 'react';

class InputChars extends React.Component {
   render() {
      return(
         <div>
            <div>
               <label className="line-header">Line</label>
               <input type="text" className="input-box" />
            </div>
         </div>
      );
   }
}

export default InputChars;