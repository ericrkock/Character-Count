import React from 'react';

import Settings from './Settings';
import TextBox from './TextBox';

class WordCount extends React.Component {
   render() {
      return (
         <div className="word-count">
            <div className="word-box">
               <h1>Words Count</h1>
               <div>
                  <Settings />
               </div>
               <TextBox />
               <div className="count-button">
                  <p id="wordNum">No words yet!</p>
                  <button className="btn" onclick="clearWordbox()">Clear Text</button>
               </div>
               <div className="word-content">
                  <div>
                     <h3>How to use</h3>
                     <p><b>Max. Words</b> : Determ how many words you want to count maximum - Leave empty for unlimitted.</p>
                     <p><b>Limited to Max words?</b> : Limit your count to the "Max. Words" you determed.</p>
                     <p><b>Keyword to count</b> : Enter words you want to count in your text - Seperate words with comma's</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default WordCount;