import React, {useState} from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
  font-style: oblique;
  font-size: 25px;
  color: bisque;
  &:hover {
    color: green;
  }
`;

function RecentEntry({title, selectView, searchStories}) {
  const handleClick = () => {
    searchStories(title);
    selectView('compile');
  };
  return (
    <TitleText onClick= { handleClick }>
      {title}
    </TitleText>
  );
};

export default RecentEntry;