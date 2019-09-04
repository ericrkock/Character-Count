import React from 'react';

class Settings extends React.Component {
   render() {
      return (
         <div className="count-settings">
            <p>Settings :</p>
            <input id="max-words" type="text" 
               onChange={this.props.clicked1} 
               placeholder={this.props.placeholder1} 
               value={this.props.value}
               />
            <label className="limited"><input type="checkbox" /> Limited to Max words?</label>
            <input className="kw-count" type="text" onChange={this.props.clicked2} placeholder={this.props.placeholder2} />
         </div>
      );
   }
}

export default Settings;