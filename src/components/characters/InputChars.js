import React from 'react';

class InputChars extends React.Component {
   render() {
      return (
         <div>
            <input type="text" className="input-box" placeholder="Start Typing or Paste Text"
               style={this.props.inputbox}
               value={this.props.value}
               onChange={this.props.handleCount}
            />
            <label style={this.props.styleTotalChar} className="line-header" id="charNum">{this.props.totalChar}</label>
         </div>
      );
   }
}

export default InputChars;