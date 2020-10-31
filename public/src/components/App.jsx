import React, {useState, useEffect} from 'react';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [storyLines, setStoryLines] = useState([]);
  const [view, setView] = useState('entry');

  const saveStory = (entry) => {
    setTitle(entry);
    //POST request
  }

  const selectView = (view) => {
    setView(view);
  }

  if (view === 'entry') {
    return (
      <div>
        <h1>Welcome to Exquisite Corps-y Time</h1>
        <TitleEntry saveStory= { (entry) => {saveStory(entry)} }/>
        <p>Your story is called.... {title}</p>
        <Begin title= {title} selectView= { (view) => {selectView(view)} }/>
      </div>
    )
  } //else {
  //   return (
  //     <div>
  //       Enter your name and write the first line
  //     </div>
  //   )
  // }
}

export default App;