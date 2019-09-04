import React from 'react';

class TextBox extends React.Component {
   render() {
      return (
         <div>
            <textarea id="box3" cols="100" rows="15" 
               placeholder={this.props.placeholder}
               value={this.props.value}
               onChange={this.props.handleBox} >
            </textarea>
         </div>
      );
   }
}

export default TextBox;