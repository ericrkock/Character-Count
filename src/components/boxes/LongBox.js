import React from 'react';

class LongBox extends React.Component {
   render() {
      return (
         <div className="long-box" id="word">
            <h4>{this.props.longboxTitle}</h4>
            <p>{this.props.longboxContent}</p>   
         </div>
      );
   }
}

export default LongBox;