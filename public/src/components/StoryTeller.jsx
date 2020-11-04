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
  opacity: .2;
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
  border: 2px solid rgb(185, 217, 172);
  font-weight: 700px;
`;

function StoryTeller({storyLines, title, authors}) {
  const [count, setCount] = useState(-1);
  const [end, setEnd] = useState(false);
  const sound = new Audio(soundFile);

  // const startInterval = () => {
  //   setInterval(() => {
  //     setCount(count + 1)
  //     console.log(count)
  //   }, 3000);
  // };
  useEffect(() => {
    sound.play()
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 5000);
    if (count === storyLines.length){
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setCount(0);

    startInterval();
  };



  if (count === -1) {
    return (
      <Body onClick={handleClick}>
        <h1>{title}</h1>
        <h2> by {authors.join(', ')}</h2>
      Click to begin
      </Body>
    );
  } else if (count >= storyLines.length) {
    return (
      <Body onClick={() => setCount(storyLines.length - 1)}>
      <h1>The End</h1>
      </Body>
    );
  } else {
    return (
      <Container>
          <Arrow onClick={() => count >= 0 ? setCount(count - 1) : {}}>&lt;</Arrow>
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