import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitleEntry from './TitleEntry.jsx';
import Begin from './Begin.jsx';
import LineEntry from './LineEntry.jsx';
import EndStory from './EndStory.jsx';
import StoryTeller from './StoryTeller.jsx';
import RecentTitles from './RecentTitles.jsx';

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
  const [recentStories, setRecentStories] = useState([]);

  //const [authorNum, setAuthorNum] = useState(1);

  useEffect(() => {
    let hyphenatedTitle = title.split(' ').join('-');
    setFormattedTitle(hyphenatedTitle);
  }, [title]);

  const getStoryLines = (hyphTitle) => {
    axios.get(`/story/${hyphTitle}`)
    .then((res) => {
      console.log('story retrieved, ', res.data.storyLines)
      setStoryLines(res.data.storyLines);
    })
    .catch((err) => {
      alert('No story with that title')
      console.log(err);
    });
  };

  const searchStories = (search) => {
    let hyphSearch = search.split(' ').join('-');
    axios.get(`/story/${hyphSearch}`)
    .then((res) => {
      console.log('story retrieved, ', res.data)
      if(res.data = '') {
        searchRecent();
        //search recent stories
        //set view to recent stories
      } else {
      setTitle(res.data.title);
      setStoryLines(res.data.storyLines);
      setAuthors(res.data.authors);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const searchRecent = () => {
    axios.get(`/recent`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }

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
      getStoryLines(formattedTitle);
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

//if view is recent stories
  //return Container wrapping
    //titles
    //onClick for any title retrieve the rest of it and set view to compile
  //Button to go home write a new story
  if (view === 'home') {
    return (
      <Container>
        <TitleEntry saveStory= { (name, a1, a2, a3, a4) => saveStory(name, a1, a2, a3, a4) } savedTitle= {title} searchStories = { (search) => searchStories(search) }/>
        <Begin title= {title} authors= {authors} storyLines= {storyLines} selectView= { view => selectView(view) }/>
      </Container>
    )
  } else if (view === 'storyline') {
    return (
      <div>
        <LineEntry saveLine= { line => saveLine(line) } authors= {authors} authorCount = {authorCount} lastWord= { lastWord }/>
        <EndStory selectView= { view => selectView(view) } clearEntries= { () => clearEntries() } textToSpeech= { () => textToSpeech() } />
      </div>
    )
  } else if (view === 'recent') {
    <Container>
     <RecentTitles recentTitles= {recentTitles} selectView= { view => selectView(view) } selectStory= { selection => selectStory(selection) }/>
  </Container>
  } else {
    return (
      <div>
        <StoryTeller storyLines= {storyLines} title= { title } authors= { authors }/>
      </div>
    )
  }
}

export default App;