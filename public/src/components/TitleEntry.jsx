import React, {useState} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;
const Body = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Entries = styled.div`
  width: 400px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const TitleInput = styled.input`
width: 80%;
padding: 5px;
color: black;
font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const AuthorInput = styled.input`
  width: 80%;
  padding: 5px;
  color: black;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 5px;
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
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: rgb(200, 180, 150);
    background-color: #fff;
    border: 2px solid rgb(185, 217, 172);
  }
`;

function TitleEntry( {saveStory, savedTitle, searchStories} ) {
  const [title, setTitle] = useState('');
  const [author1, setAuthor1] = useState('');
  const [author2, setAuthor2] = useState('');
  const [author3, setAuthor3] = useState('');
  const [author4, setAuthor4] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    saveStory(title, author1, author2, author3, author4);
  }

  const handleSearch = (event) => {
    debugger;
    event.preventDefault()
    searchStories(searchVal);
  }

  if (savedTitle) {
    return null;
  } else {
    return (
      <div>
      <h1>Welcome to Exquisite Corps-y Time</h1>
      <Wrapper>
      <Body>
        <div>
        <form onSubmit= { handleSubmit }>
        <Entries>
            Put a title here
            <TitleInput
            type= "text"
            value= {title}
            required
            onChange= {e => setTitle(e.target.value)}
            />
        </Entries>
        <Entries>
          Put all participants pen names here <br></br>
            <AuthorInput
              type= "text"
              value= {author1}
              required
              onChange= {e => setAuthor1(e.target.value)}
            />
            <AuthorInput
              type= "text"
              value= {author2}
              onChange= {e => setAuthor2(e.target.value)}
            />
            <AuthorInput
              type= "text"
              value= {author3}
              onChange= {e => setAuthor3(e.target.value)}
            />
            <AuthorInput
              type= "text"
              value= {author4}
              onChange= {e => setAuthor4(e.target.value)}
            />
          </Entries>
          <Entries>
          <SubmitInput
          type= "submit"
          value= "Start your story"
          />
           </Entries>
        </form>
        </div>
      </Body>
      <Body>
        Find an old story
        <form onSubmit= { handleSearch }>
        <Entries>
            Enter title you are searching for
            <TitleInput
            type= "text"
            value= {searchVal}
            required
            onChange= {e => setSearchVal(e.target.value)}
            />
        </Entries>
        <Entries>
          <SubmitInput
          type= "submit"
          value= "Find your story"
          />
           </Entries>
        </form>
      </Body>
      </Wrapper>
      </div>
    );
  }
};

export default TitleEntry;