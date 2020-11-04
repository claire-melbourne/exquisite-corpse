import React, {useState} from 'react';
import styled from 'styled-components';
const TitleText = styled.div`
  font-style: oblique;
  font-size: 40px;
  color: light blue;

`;

function RecentEntry(title, selectView, selectStory) {

  const handleClick = () => {
    selectStory(title);
    selectView('compile');
  }

  return (
    <TitleText onClick= { handleClick }>{title}</TitleText>
  )
}

export default RecentEntry;