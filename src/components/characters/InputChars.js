import React from 'react';

class InputChars extends React.Component {
   render() {
      return (
         <div>
            <div className="line">
               <label className="line-header">Line</label>
               <input type="text" className="input-box" placeholder="Start Typing or Paste Text"
                  value={this.props.value}
                  onChange={this.props.handleCount}
               />
            </div>
         </div>
      );
   }
}

export default InputChars;