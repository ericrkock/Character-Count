import React from 'react';

class Box extends React.Component {
   render() {
      return (
         <div className="box">
            <i className={this.props.fas}></i>
            <h3>{this.props.boxTitel}</h3>
            <h4>{this.props.boxSubtitel}</h4>
            <p>{this.props.boxContent}</p>
            <a href={this.props.boxLink} alt={this.props.boxAlt} rel="noopener noreferrer" target="_blank" className="btn">{this.props.boxButton}</a>
         </div>
      );
   }
}

export default Box;