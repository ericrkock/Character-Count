import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import LineCount from "./components/LineCount";

class CharacterCounter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         maxLineCount: 0
      }
   }
   render() {
      return (
         <div>
            {/*-- Start Wrapper Word Count--*/}
            <div className="wrapper">
               {/*-- Top Banner --*/}
               <div className="top-banner">
                  <h1>CHARACTER COUNT</h1>
                  <p>An Own ReactJS Challenge</p>
                  <div id="screen-res"></div>
               </div> 
               {/*-- Navigation --*/}
               <nav className="main-nav">
                  <ul>
                     <li><a href="#char">Char Count</a></li>
                     <li><a href="#word">Word Count</a></li>
                     <li><a href="#articles">Articles</a></li>
                     <li><a href="#">Portfolio</a></li>
                  </ul>
               </nav>

               {/*-- Char Count --*/}
               <div className="char-count" id="char">
                  <div className="char-box">
            
                     <h1>Characters Count</h1>
                     <div>
                        <LineCount />
                     </div>
                     <div>
                        <div className="line">
                           <p className="line-header">Line 2 :</p>
                           {/*<input id="box2" className="input-box" onkeyup="countChars2(this)" placeholder="Start Typing or Paste Text">*/}
                           <p id="charNum2" >0 / 20</p>
                        </div>
                     </div>
                     <div>
                        <button className="button" onclick="clearBoxes()">Clear</button>
                     </div>
                  </div>

                  <div className="right-ad-box">
                     <h4>Drum Machine</h4>
                     <p>Link coming soon ...</p>
                  </div>
                  
                  <div className="lower-ad-box">
                     <h4>AdSense Box</h4>
                     <p>Lower Ad Box</p>
                     
                  </div>
               </div>

               {/*!-- Boxes Section --*/}
               <div className="boxes">
                  <div className="box">
                     <i className="fas fa-chart-pie fa-4x"></i>
                     <h3>SuccessWizard</h3>
                     <h4>Digital Marketing Ageny</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
                     <a href="https://www.successwizard.eu" alt="Digital Marketing Agency" target="_blank" className="btn">Know more</a>
                  </div>
                  <div className="box">
                     <i className="fas fa-globe fa-4x"></i>
                     <h3>Artis Directory</h3>
                     <h4>Local Business Finder</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
                     <a href="https:artis.directory" alt="Local Business Finder" target="_blank" className="btn">See More</a>
                  </div>
                  <div className="box">
                     <i className="fas fa-cog fa-4x"></i>
                     <h3>GeekSessions</h3>
                     <h4>Developers</h4>
                     <p>Algarve : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
                  </div>
                  <div className="box">
                     <i className="fas fa-users fa-4x"></i>
                     <h3>FreeCodeCamp</h3>
                     <h4>Learn Coding</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!</p>
                     <a href="https://freecodecamp.org" alt="Learn how to code" target="_blank" className="btn">Learn Now</a>
                  </div>
               </div>

               {/*!-- Ad box 1 --*/}
               <div className="long-ad-box" id="word">
                  <h4>AdSense Box</h4>
                  <p>Long Ad Box 1</p>
               </div> 

               {/*!-- Word Count --*/}
               <div className="word-count">
                  <div className="word-box">
                     <h3>Word Count</h3>
                     <div className="count-settings">
                        <p>Settings :</p>
                        {/*<input id="max-words" style="height: 1.5rem;" type="text" value="0" placeholder="Max. Words">*/}
                        {/*<label><input style="margin:1rem 0 1rem 0;" type="checkbox"> Limited to Max words?</label>*/}
                        {/*<input style="margin-bottom: 0.5rem; height: 1.5rem;" type="text" placeholder="keyword to count">*/}
                     </div>
                     <textarea id="box3" col="100" rows="30" onkeyup="countWords(this)" placeholder="Start Typing or Paste Text"></textarea>
                     <div className="count-button">
                        <p id="wordNum">No words yet!</p>
                        <button className="btn" onclick="clearWordbox()">Clear Text</button>
                     </div>
                  </div>
                  <div className="word-content">
                     <div>
                        <h4>How to use</h4>
                        <p>
                           <p><b>Max. Words</b> :</p>
                           <p>Determ how many words you want to count maximum - Leave empty for unlimitted.</p>
                        </p>
                        <p><b>Limited to Max words?</b> : Limit your count to the "Max. Words" you determed.</p>
                        <p><b>Keyword to count</b> : Enter words you want to count in your text - Seperate words with comma's</p>
                     </div>
                  </div>
               </div> 

               {/*-- Ad box 2 --*/}
               <div className="long-ad-box" id="articles">
                  <h4>AdSense Box</h4>
                  <p>Long Ad Box 2</p>
               </div> 

               {/*-- Articles --*/}
               <div className="articles">
                  <div className="article">
                     <h4>Article 1</h4>
                     <h5>Word Counting</h5>
                     <p>Comming Soon</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita recusandae optio est, perferendis necessitatibus accusamus vel ratione eum alias possimus voluptate dicta voluptatum nostrum mollitia tenetur totam quo quis amet. Rerum recusandae dolore consequuntur odio eius sit ea hic quis consectetur omnis! Velit molestias necessitatibus at saepe sunt exercitationem!</p>
                  </div>
                  <div className="article">
                        <h4>Article 2</h4>
                        <h5>Why 2000 words</h5>
                        <p>Comming Soon</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita recusandae optio est, perferendis necessitatibus accusamus vel ratione eum alias possimus voluptate dicta voluptatum nostrum mollitia tenetur totam quo quis amet. Rerum recusandae dolore consequuntur odio eius sit ea hic quis consectetur omnis! Velit molestias necessitatibus at saepe sunt exercitationem!</p>
                     </div>
                  <div className="article">
                     <h4>Article 3</h4>
                     <h5>Google Ranking</h5>
                     <p>Comming Soon</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita recusandae optio est, perferendis necessitatibus accusamus vel ratione eum alias possimus voluptate dicta voluptatum nostrum mollitia tenetur totam quo quis amet. Rerum recusandae dolore consequuntur odio eius sit ea hic quis consectetur omnis! Velit molestias necessitatibus at saepe sunt exercitationem!</p>
                  </div>
                  <div className="article">
                     <h4>Article 4</h4>
                     <h5>Unique Content</h5>
                     <p>Comming Soon</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita recusandae optio est, perferendis necessitatibus accusamus vel ratione eum alias possimus voluptate dicta voluptatum nostrum mollitia tenetur totam quo quis amet. Rerum recusandae dolore consequuntur odio eius sit ea hic quis consectetur omnis! Velit molestias necessitatibus at saepe sunt exercitationem!</p>
                  </div>
               </div>

               {/*-- Ad box 3 --*/}
               <div className="long-ad-box" >
                     <h4>AdSense Box</h4>
                     <p>Long Ad Box 3</p>
               </div>

               {/*-- Footer --*/}
               <footer>
                  <span>Presented by Eric R. Kock - Aug. 2019 |
                     <a href="https://about.me/erickock" rel="noopener noreferrer" target="_blank">{" "}About Me</a>{" "}-
                     <a href="https://codepen.io/EricRKock/" rel="noopener noreferrer" target="_blank">{" "}CodePen{" "}</a>{" "}-
                     <a href="https://github.com/ericrkock/" rel="noopener noreferrer" target="_blank">{" "}GitHub</a>
                  </span>
               </footer>
               
            </div>
            {/*-- End Wrapper --*/}

         </div>
      );
   }
}

ReactDOM.render(<CharacterCounter />, document.getElementById("root"));