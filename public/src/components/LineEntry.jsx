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
  width: 80%;
  color: bisque;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 25px;
`;

const StyledTextArea = styled.textarea`
  width: 560px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  font-size: 25px;
`;

const SubmitInput = styled.input`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: rgb(200, 180, 150);
  border: none;
  color: #fff;
  display: block;
  width: 40%;
  line-height: 1.3333333;
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


function LineEntry( { saveLine, lastWord, authors, authorCount } ) {
  console.log("last word " + lastWord)
  const [line, setLine] = useState('');

  const storyPrompts = {
    firstEntry:`${authors[0]}, begin the story with a hook! Remember, ${authors[1]} will only see the end of your brilliant contribution! End your last phrase mid-thought, to give them a clue how to continue the story.`,
    add:`${authors[authorCount]}, add a few lines to the story. \nRemember, ${authors[authorCount === authors.length - 1 ? 0 : authorCount + 1]} will only see the end of your shining word-smithery! End your last phrase mid-thought to give them a clue how to continue the story.\nHere's where we left off: \n"...${lastWord}"`
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