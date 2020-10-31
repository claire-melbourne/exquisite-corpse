import React, {useState, useEffect} from 'react';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
import LineEntry from './LineEntry.jsx';

function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [storyLines, setStoryLines] = useState([]);
  const [view, setView] = useState('entry');
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
    console.log(entry)
    let currentStory = storyLines;
    currentStory.push(entry);
    console.log(currentStory)
    setStoryLines(currentStory);
    //POST request
  }

  const selectView = (string) => {
    setView(string);
  }

  if (view === 'entry') {
    return (
      <div>
        <h1>Welcome to Exquisite Corps-y Time</h1>
        <TitleEntry saveStory= { (entry) => { saveStory(entry) } } savedTitle= {title}/>
        <p>Your story is called.... {title}</p>
        <Begin title= {title} selectView= { (view) => { selectView(view) } }/>
      </div>
    )
  } else {
    return (
      <div>
        <LineEntry saveLine= { (line) => { saveLine(line) } }/>
      </div>
    )
  }
}

export default App;