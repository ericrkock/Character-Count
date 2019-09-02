import React from 'react';

class Navigation extends React.Component {
   render() {
      return (
         <div className="navigation">
         <ul>
           <li><a href="#char">Chars Count</a></li>
           <li><a href="#word">Words Count</a></li>
           <li><a href="#articles">Articles</a></li>
           <li><a href="https://ericrkock.github.io/portfolio/" rel="noopener noreferrer"
             target="_blank">Portfolio</a></li>
         </ul>
       </div>
      );
   }
}

export default Navigation;