import React from 'react';

class CharButton extends React.Component {
   render() {
      return (
         <div>
            <button className="button" onClick={this.props.clicked}>{this.props.name}</button>
         </div>
      );

   }
}

export default CharButton;