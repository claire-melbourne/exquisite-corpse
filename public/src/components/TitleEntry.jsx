import React, {useState} from 'react';

function TitleEntry( {saveStory, savedTitle} ) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault()
    saveStory(title)
  }

  if (savedTitle) {
    return null;
  } else {
    return (
      <div>
        <form onSubmit= { handleSubmit }>
          <label>
            Enter your title here <br></br>
            <input
            type= "text"
            value= {title}
            onChange= {e => setTitle(e.target.value)}
            />
          </label>
          <input
          type= "submit"
          value= "Start your story"
          />
        </form>
      </div>
    );
  }
};

export default TitleEntry;