import React, {useState} from 'react';
//import StoryLine from './StoryLine.jsx';
//import getPhoto from '../unsplash.js';


function StoryTeller({storyLines}) {
  const [count, setCount] = useState(0);

  const divStyle = {
    color: 'blue',
    backgroundImage: `url(${storyLines[count].imgUrl})`,
  };
  return (
    <div style={divStyle}>
      <div onClick={() => count > 0 ? setCount(count - 1) : {}}>&lt;</div>
      <p>{storyLines[count].line}</p>
      <div onClick={() => count < storyLines.length - 1 ? setCount(count + 1) : {}} >&gt;</div>
    </div>
  )
};

//

export default StoryTeller;