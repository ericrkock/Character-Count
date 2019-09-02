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
              boxTitel={"ARTICLE 4"}
              boxSubtitel={"Unique Content"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://github.com/"}
              boxAlt={"Share your repo's"}
              boxButton={"Read More"}
            />
          </div>
      );
   }
}

export default BoxesArticles;