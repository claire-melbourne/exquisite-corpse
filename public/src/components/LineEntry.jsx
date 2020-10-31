import React, { useState } from 'react';

function LineEntry( { saveLine, lastWord } ) {
  console.log("last word " + lastWord)
  const [line, setLine] = useState('');

  const storyPrompts = {
    firstEntry:'Begin the story with a hook! Remember, the next author will only see your last word!',
    add:'Continue a line or two to the story. Remember, the next author will only see your last word!'
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveLine(line);
    setLine('');
  }

  return (
    <div>
      { lastWord === '' ? storyPrompts.firstEntry : storyPrompts.add}
      <form onSubmit= { handleSubmit }>
        <label>
          {`...${lastWord}`}<br></br>
          <textarea
            value= {line}
            onChange= { e => setLine(e.target.value) }
          />
        </label>
        <input
          type= "submit"
          value= "Submit"
        />
      </form>
    </div>
  )
}

export default LineEntry;