import React from 'react';

class CharButton extends React.Component {
   render() {
      return (
         <div className="char-box-button-area">
               <button className="button" onClick={this.props.clicked}>{this.props.name}</button>
               <p>Reset to default 20 Characters</p>
         </div>
      );

   }
}

export default CharButton;