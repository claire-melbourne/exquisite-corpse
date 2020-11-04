import React, { useState } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Calibre, Helvetica, Arial, sans-serif;
`;
const Entries = styled.div`
  color: bisque;
  width: 553px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 25px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

const SubmitInput = styled.input`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: rgb(185, 217, 172);
  border: none;
  color: #fff;
  display: block;
  width: 40%;
  line-height: 1.3333333;
  padding: 10px 15px;
  position: relative;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: rgb(185, 217, 172);
    background-color: #fff;
    border: 2px solid rgb(185, 217, 172);
  }
`;


function LineEntry( { saveLine, lastWord, authors, authorCount } ) {
  console.log("last word " + lastWord)
  const [line, setLine] = useState('');

  const storyPrompts = {
    firstEntry:`${authors[0]}, begin the story with a hook! \nRemember, ${authors[1]} will only see end of your brilliant contribution! End your last phrase mid-thought so they can finish it.`,
    add:`${authors[authorCount]}, add a few linest to the story. \nRemember, ${authors[authorCount === authors.length - 1 ? 0 : authorCount + 1]} will only see the end of your shining word-smithery! End your last phrase mid-thought so they can finish it.\nHere's where we left off: \n"...${lastWord}"`
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveLine(line);
    setLine('');
  }

  return (
    <Body>
      <Entries>
      { lastWord === '' ? storyPrompts.firstEntry : storyPrompts.add}
      </Entries>
      <form onSubmit= { handleSubmit }>
        <Entries>
          {``}<br></br>
          <StyledTextArea
            value= {line}
            required
            onChange= { e => setLine(e.target.value) }
          />
        </Entries>
        <Entries>
        <SubmitInput
          type= "submit"
          value= "Submit"
        />
        </Entries>
      </form>
    </Body>
  )
}

export default LineEntry;