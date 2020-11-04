import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
import LineEntry from './LineEntry.jsx';
import EndStory from './EndStory.jsx';
import StoryTeller from './StoryTeller.jsx';

const Container = styled.div`
  height: 100%;
  padding-left: 30px;
  position: relative;
  width: 100%;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  background-color: light green;
  color: white;
`;

function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [storyLines, setStoryLines] = useState([]);
  const [view, setView] = useState('home');
  const [lastWord, setLastWord] = useState('');
  const [formattedTitle, setFormattedTitle] = useState('');
  const [authorCount, setAuthorCount] = useState(0);

  //const [authorNum, setAuthorNum] = useState(1);

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

  const createStory = (storyObj) => {
    axios.post('/title', storyObj)
    .then((res) => {
      if (res.data.title === undefined) {
        alert('title taken, get creative')
      } else {
        console.log("authors updated to ", res.data.authors);
        setTitle(res.data.title);
        setAuthors(res.data.authors)
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

  const saveStory = (storyTitle, one, two, three, four) => {
    let authorNames = [];
    authorNames.push(one, two, three, four);

    console.log("authors", authorNames);
    let storyInfo = {
      title: storyTitle,
      authors: authorNames
    }
    createStory(storyInfo);
  }

  const getLastWord = (line) => {

    let words = line.split(' ');
    if (words.length > 1) {
      let lastWords = '' + words[words.length - 2] + ' ' + words[words.length - 1]
      setLastWord(lastWords);
    } else {
      setLastWord(words[0])
    }
  }

  const saveLine = (line) => {
    var count;
    if (authorCount === authors.length - 1) {
      count = 0;
    } else {
      count = authorCount + 1;
    }
    setAuthorCount(count)
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
      <Container>
        <TitleEntry saveStory= { (name, a1, a2, a3, a4) => saveStory(name, a1, a2, a3, a4) } savedTitle= {title}/>
        <Begin title= {title} authors= {authors} selectView= { view => selectView(view) }/>
      </Container>
    )
  } else if (view === 'storyline') {
    return (
      <div>
        <LineEntry saveLine= { line => saveLine(line) } authors= {authors} authorCount = {authorCount} lastWord= { lastWord }/>
        <EndStory selectView= { view => selectView(view) } clearEntries= { () => clearEntries() } textToSpeech= { () => textToSpeech() } />
      </div>
    )
  } else {
    return (
      <div>
        <StoryTeller storyLines= {storyLines} title= { title } authors= { authors }/>
      </div>
    )
  }
}

export default App;