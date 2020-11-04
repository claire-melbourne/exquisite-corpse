import React, {useState, useEffect} from 'react';
import axios from 'axios';
import soundFile from '../currentAudio1.mp3';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Body = styled.div`
color: bisque;
position: relative;
margin-top: 50px;
margin-left: 20px;
padding-left: 20px;
padding-bottom: 20px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: space-evenly;
width: 100%;
height: 100%;
ay: flex;
-webkit-box-align: center;
align-items: center;
font-family: Calibre, Helvetica, Arial, sans-serif;
}
`;

const Cover = styled.div`
  color: bisque;
  margin-top: 50px;
  margin-left: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: space-evenly;
  width: 100%;
  width: 600px;
  width: 800px;
  height: 500px;
  ay: flex;
  -webkit-box-align: center;
  align-items: center;
  font-family: Calibre, Helvetica, Arial, sans-serif;
}
`;

const Arrow = styled.span`
  font-size: 150px;
  color: white;
  z-index: 100;
  opacity: .1;
  &:hover {
    cursor: pointer;
    opacity: .9
  }
`;

const Text = styled.span`
  position: absolute;
  bottom: -500px;
  left: 150px;
  background-color: black;
  color: white;
  font-size: 29px;
`;

const ImageStyle = styled.img`
  transition: all .6s ease-out;
  position: absolute;
  top: -95px;
  padding: 10px;
  font-weight: 700px;
`;

const Button = styled.button`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: rgb(200, 180, 150);
  border: none;
  color: #fff;
  display: block;
  width: 40%;
  line-height: 1.3333333;
  margin-top: 85px;
  padding: 10px 15px;
  position: relative;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: rgb(185, 217, 172);
    background-color: rgb(200, 180, 150);
    border: 2px solid rgb(185, 217, 172);
  }
`;

function StoryTeller({storyLines, title, authors, selectView, clearEntries}) {
  const [count, setCount] = useState(-1);
  const [end, setEnd] = useState(false);
  const sound = new Audio(soundFile);

  useEffect(() => {
    sound.play();
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 7000);
    if (count > storyLines.length) {
      console.log(count);
      clearInterval(interval);
    }
    return () => {
      sound.pause();
    }
  }, []);

  const handleClick = () => {
    setCount(0);
  };

  const handleHomeSelect = () => {
    clearEntries()
    selectView('home')
  }

  const handleStorySelect = () => {
    selectView('home')
  }

  if (count < 0) {
    return (
      <Body onClick={handleClick}>
        <h1>{title}</h1>
        <h2> by {authors.join(', ')}</h2>
        Click on any text to move ahead
      </Body>
    );
  } else if (count >= storyLines.length) {
    return (
      <Body onClick={() => setCount(storyLines.length - 1)}>
      <h1>The End</h1>
      <Button onClick= { handleStorySelect } > Read '{title}' again!</Button>
      <Button onClick= { handleHomeSelect } > Return to main page</Button>
      </Body>
    );
  } else {
    return (
      <Container>
          <Arrow onClick={() => count >= 0 ? setCount(count - 1) : {}}> &lt;</Arrow>
          <Body>
            <ImageStyle src= {storyLines[count].imgUrl} />
            <Text>{storyLines[count].line}</Text>
          </Body>
          <Arrow onClick={() => count <= storyLines.length ? setCount(count + 1) : {}} >&gt;</Arrow>
      </Container>
    )
  }
};

export default StoryTeller;