import React from 'react';
import Box from './Box';

class BoxesArticles extends React.Component {
   render() {
      return (
         <div className="boxes">
            <Box
              boxTitel={"ARTICLE 1"}
              boxSubtitel={"Word Counting"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"Learn how to code"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"ARTICLE 2"}
              boxSubtitel={"Why 2000 words"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://geeksessions.io/"}
              boxAlt={"Tech Talk"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"ARTICLE 3"}
              boxSubtitel={"Google Ranking"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"StartUp Portimao"}
              boxButton={"Read More"}
            />
            <Box
              boxTitel={"How to become a pro with React setState() in 10 minutes"}
              boxSubtitel={"Eduardo Vedes"}
              boxContent={"This article is aimed at people who have already had their first approach to React, and who, as beginners, have doubts about how setState works and how to use it correctly. It should also help mid to senior devs use cleaner and more abstracted ways of setting state, and make higher-order-functions handle and abstract state."}
              boxLink={"https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/"}
              boxAlt={"Share your repo's"}
              boxButton={"Read More"}
            />
          </div>
      );
   }
}

export default BoxesArticles;