import React from 'react';

class ClearButton extends React.Component {
   render() {
      return (
         <div className="count-button">
            <p id="wordNum">{this.props.totalwords}</p>
            <button className="button" onClick={this.props.clicked}>{this.props.name}</button>
         </div>
      );
   }
}

export default ClearButton;