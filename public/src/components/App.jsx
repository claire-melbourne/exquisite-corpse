import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
import LineEntry from './LineEntry.jsx';
import EndStory from './EndStory.jsx';
import StoryTeller from './StoryTeller.jsx';
import AudioPlayer from './AudioPlayer.jsx';
import { AudioPlayerProvider } from 'react-use-audio-player';

function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [storyLines, setStoryLines] = useState([]);
  const [view, setView] = useState('home');
  const [lastWord, setLastWord] = useState('');
  const [formattedTitle, setFormattedTitle] = useState('');

  useEffect(() => {
    let hyphenatedTitle = title.split(' ').join('-');
    setFormattedTitle(hyphenatedTitle);
  }, [title]);

  const getStoryLines = () => {
    axios.get(`/story/${formattedTitle}`)
    .then((res) => {
      console.log('story retrieved, ', res.data.storyLines)
      setStoryLines(res.data.storyLines);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const createStory = (storyTitle) => {
    axios.post('/title', {title: storyTitle})
    .then((res) => {
      if (res.data.title === undefined) {
        alert('title taken, get creative')
      } else {
        console.log("title updated to ", res.data.title);
        setTitle(res.data.title);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const createLine = (storyLine) => {
    axios.put(`/addline/${ formattedTitle }`, {line: storyLine})
    .then((res) => {
      console.log("line added ", res.data);
      getStoryLines();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const saveStory = (storyTitle) => {
    createStory(storyTitle);
  }

  const getLastWord = (line) => {
    let words = line.split(' ');
    setLastWord(words[words.length - 1]);
  }

  const saveLine = (line) => {
    createLine(line);
    getLastWord(line);
  }

  const selectView = (string) => {
    console.log(string);
    setView(string);
  }

  const clearEntries = () => {
    setTitle('');
    setAuthors([]);
    setStoryLines([]);
    setLastWord('');
    //add delete api
  };

  // function readStory() {
  //   window.location.reload(false);
  //   selectView('')
  // }
  // const textToSpeech = () => {
  //   console.log('accessed')
  //   // axios.get(`/speech/${formattedTitle}`)
  //   // .then((res) => {
  //   //   console.log(res);
  //   // })
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // })
  // };
  // const textToSpeech = () =>{
  //   console.log('accessed');
  //       axios.get(`/speech/${formattedTitle}`)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }


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
        <EndStory selectView= { view => selectView(view) } clearEntries= { () => clearEntries() } textToSpeech= { () => textToSpeech() } />
        <LineEntry saveLine= { line => saveLine(line) } lastWord= { lastWord }/>
      </div>
    )
  } else {
    return (
      <div>

        <h1>{title}</h1>
        <StoryTeller storyLines= {storyLines} formattedTitle= { formattedTitle }/>
      </div>
    )
  }
}

export default App;