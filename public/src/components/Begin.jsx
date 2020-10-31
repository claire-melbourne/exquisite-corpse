import React, {useState} from 'react';

function Begin({title, selectView}) {
  const handleClick = () => {
    selectView('storyline')
  }
    if (title === '') {
      return null;
    }
    return (
      <button onClick= { handleClick }> Write the first line for {title}</button>
    )
}

export default Begin;