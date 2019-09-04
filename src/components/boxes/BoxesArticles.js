import React from 'react';
import Box from './Box';

class BoxesArticles extends React.Component {
  render() {
    return (
      <div className="boxes">
        <Box
          boxTitel={"How to get your first job as a Web Developer"}
          boxSubtitel={"João Henrique"}
          boxContent={"How do you know you are ready? Let me put it simple… you don’t! In this profession, you will be constantly learning and improving, there is no way around it. A good indicator that you should start applying for a job, is when you have enough projects in your portfolio to show your skills. What is enough? Well, if you are following freeCodeCamp’s path, you should finish..."}
          boxLink={"https://medium.com/@jrshenrique/how-to-get-your-first-job-as-a-web-developer-270088363c1d"}
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