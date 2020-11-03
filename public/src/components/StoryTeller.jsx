import React, {useState, useEffect} from 'react';
import axios from 'axios';
import soundFile from '../currentAudio1.mp3';
//import StoryLine from './StoryLine.jsx';
//import getPhoto from '../unsplash.js';
//import getSpeech from '../../../speech.js'


function StoryTeller({storyLines, formattedTitle}) {
  const [count, setCount] = useState(0);

  const divStyle = {
    color: 'blue',
    backgroundImage: `url(${storyLines[count].imgUrl})`,
  };
  let sound = new Audio(soundFile);
  // useEffect(() => {
  //   console.log(count)
  //   //console.log(textToSpeech)
  //   //textToSpeech(formattedTitle, count)
  // }, [count])

  return (
    <div>
        <button onClick= {() => sound.play()}>begin</button>
        <div onClick={() => count > 0 ? setCount(count - 1) : {}}>&lt;</div>
        <p>{storyLines[count].line}</p>
        <img src= {storyLines[count].imgUrl} />
        <div onClick={() => count < storyLines.length - 1 ? setCount(count + 1) : {}} >&gt;</div>
    </div>
  )
};


export default StoryTeller;