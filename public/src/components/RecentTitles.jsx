import React, {useState} from 'react';
import RecentEntry from './RecentEntry.jsx';
import styled from 'styled-components';

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

const TitleText = styled.div`
  font-style: oblique;
  font-size: 40px;
  color: light blue;

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
    color: rgb(200, 180, 150);
    background-color: #fff;
    border: 2px solid rgb(200, 180, 150);
  }
`;

function RecentTitles({recentStories, selectView, searchStories}) {

  const handleClick = () => {
    selectView('home')
  }
  return (
    <Body>
      <h2>Didn't find your story!</h2>
      <h3>Choose a title below </h3>
      {recentStories.map(title => <RecentEntry title= {title} searchStories= {searchStories} selectView= {selectView}/> )}

      <Button onClick= { handleClick }> Or write your own</Button>
    </Body>
  )
}

export default RecentTitles;