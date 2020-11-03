import React, {useState} from 'react';

function EndStory({ clearEntries, selectView, textToSpeech }) {

  const handleStartOver = () => {
    clearEntries();
    selectView('home');
  }
  const handleTheEnd = () => {
    event.preventDefault();
    //submit line
    selectView('compile');
    textToSpeech();
  }
  return (
    <div>
      <button onClick= { handleStartOver }>Start over</button>
      <button onClick= { handleTheEnd }>The End</button>
    </div>
  )
};

export default EndStory;