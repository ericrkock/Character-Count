import React from 'react';
import Box from './Box';

class BoxesDevelopment extends React.Component {
   render() {
      return (
         <div className="boxes">
            <Box
              fas={"fas fa-chart-pie fa-4x"}
              boxTitel={"FreeCodeCamp"}
              boxSubtitel={"LearnCoding"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"Learn how to code"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-globe fa-4x"}
              boxTitel={"GeekSessions Faro"}
              boxSubtitel={"Meet other IT'ers"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://geeksessions.io/"}
              boxAlt={"Tech Talk"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-cog fa-4x"}
              boxTitel={"StartUp Algarve"}
              boxSubtitel={"Portimão"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://freecodecamp.org"}
              boxAlt={"StartUp Portimao"}
              boxButton={"Know More"}
            />
            <Box
              fas={"fas fa-users fa-4x"}
              boxTitel={"GitHub"}
              boxSubtitel={"Show your Repo's"}
              boxContent={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates molestiae praesentium voluptate atque nesciunt? Nostrum labore nam voluptas non amet minus odio totam tempora, beatae reiciendis corporis velit perferendis!"}
              boxLink={"https://github.com/"}
              boxAlt={"Share your repo's"}
              boxButton={"Know More"}
            />
          </div>
      );
   }
}

export default BoxesDevelopment;