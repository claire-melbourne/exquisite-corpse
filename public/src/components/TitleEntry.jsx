import React, {useState} from 'react';

function TitleEntry( {saveStory} ) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault()
    alert(`${title} beginning!`)
    saveStory(title)
  }
  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>
          Enter your title here
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
};

export default TitleEntry;