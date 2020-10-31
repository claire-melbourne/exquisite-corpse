import React, { useState } from 'react';

function LineEntry( { saveLine } ) {
  const [line, setLine] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    saveLine(line)
  }

  return (
    <div>
      <form onSubmit= { handleSubmit }>
        <label>
          Add a line or two to the story. Remember, the next author will only see your last word!
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