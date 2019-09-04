import React from 'react';

class ScreenRes extends React.Component {
   render() {
      return (
         <div id="screen-res">
            <button className="button" style={{width: "200px"}} onClick={this.props.clicked}>{this.props.name}</button>
         </div>
      );
   }
}

export default ScreenRes;