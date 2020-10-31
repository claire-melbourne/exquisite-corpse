import React, {useState} from 'react';

function Begin({title, selectView}) {
  console.log(title)
    if (title === '') {
      return null;
    }
    return (
      <button> Write the first line for {title}</button>
    )
}

export default Begin;