import React, {useState, useEffect} from 'react';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
import LineEntry from './LineEntry.jsx';
import EndStory from './EndStory.jsx';

function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [storyLines, setStoryLines] = useState([]);
  const [view, setView] = useState('home');
  const [lastWord, setLastWord] = useState('');

  const saveStory = (entry) => {
    setTitle(entry);
    //POST request
  }
  const getLastWord = (entry) => {
    let words = entry.split(' ');
    setLastWord(words[words.length - 1]);
  }
  const saveLine = (entry) => {
    let currentStory = storyLines;
    currentStory.push(entry);
    getLastWord(entry);
    setStoryLines(currentStory);
    //POST request
  }

  const selectView = (string) => {
    console.log(string)
    setView(string);
  }

  const clearEntries = () => {
    setTitle('');
    setAuthors([]);
    setStoryLines([]);
    setLastWord('');
  }

  if (view === 'home') {
    return (
      <div>
        <h1>Welcome to Exquisite Corps-y Time</h1>
        <TitleEntry saveStory= { entry => saveStory(entry) } savedTitle= {title}/>
        <p>Your story is called.... {title}</p>
        <Begin title= {title} selectView= { view => selectView(view) }/>
      </div>
    )
  } else if (view === 'storyline') {
    return (
      <div>
        <EndStory selectView= { view => selectView(view) } clearEntries= { () => clearEntries() }/>
        <LineEntry saveLine= { line => saveLine(line) } lastWord= { lastWord }/>
      </div>
    )
  } else {
    return (
      <div>
        Compiling your story...
      </div>
    )
  }
}

export default App;