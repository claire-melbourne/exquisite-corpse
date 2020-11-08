import React, {useState} from 'react';
import styled from 'styled-components';

const Body = styled.div`
  font-family: Calibre, Helvetica, Arial, sans-serif;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Entries = styled.div`
  width: 400px;
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Button = styled.button`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: rgb(200, 180, 150);
  border: none;
  color: #fff;
  display: block;
  width: 25%;
  line-height: 1.3333333;
  margin-top: 10px;
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
    color: rgb(200, 180, 150);
    background-color: #fff;
    border: 2px solid rgb(200, 180, 150);
  }
`;

function EndStory({ clearEntries, selectView, textToSpeech }) {
  const handleStartOver = () => {
    clearEntries();
    selectView('home');
  };
  const handleTheEnd = () => {
    event.preventDefault();
    selectView('compile');
  };
  return (
    <Body>
      <Entries>
        Make sure to submit before you click to end the story!
      </Entries>
      <Button onClick= { handleTheEnd }>
        The End
      </Button>
      <Entries>
        If you just said something you regret, you can click below and say it was an accident.
      </Entries>
      <Button onClick= { handleStartOver }>
        Start over
      </Button>
    </Body>
  );
};

export default EndStory;