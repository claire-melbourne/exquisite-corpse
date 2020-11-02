import React, {useState} from 'react';
//import StoryLine from './StoryLine.jsx';
//import story image


function StoryTeller({storyLines}) {
  const [count, setCount] = useState(0);
  const imgURL = `https://loremflickr.com/320/240/${storyLines[count].keyWords}`;
  const divStyle = {
    color: 'blue',
    backgroundImage: `url(${imgURL})`,
  };
  console.log("in story teller", storyLines)
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