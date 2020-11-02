import React, {useState} from 'react';
//import StoryLine from './StoryLine.jsx';
//import story image

function StoryTeller({storyLines}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => count > 0 ? setCount(count - 1) : {}}>&lt;</div>
      <p>{storyLines[count]}</p>
      <div onClick={() => count < storyLines.length - 1 ? setCount(count + 1) : {}} >&gt;</div>
    </div>
  )
};

//

export default StoryTeller;