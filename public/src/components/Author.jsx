import React from 'react';
import styled from 'styled-components';

const AuthorDiv = styled.div`
  font-size 20px;
  color: white;
`;
function Author({author}) {
  return (
    <AuthorDiv>
      {author}
    </AuthorDiv>
  )
}

export default Author;