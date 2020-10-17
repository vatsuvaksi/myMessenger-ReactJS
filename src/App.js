import React, { useState } from 'react';                              //using hooks to call useState
import './App.css';

function App() {
  const [input, setInput] = useState('');              // State is a temporary memore to store the input (when the input is typed it is set again because setinput is called(event.target.value))            
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    //all the logic to send message goes here 
    event.preventDefault();   // This will prevent the default nature of the form. As soon as the message is is hit form will refres the page but with the help of this it will prevent that so that messages could be shown on screen
    setMessages([...messages, input]); // this adds the list of previous messages and then append the current input   (WE WILL HAVE A LIST OF MESSAGES )
    setInput('');
  }




  console.log(input);
  console.log(messages);
  return (
    <div className="App">
      <h1>HEY vatsuvaksi</h1>
      <form>                         {/*Why we added form? It is a simple trick so that when enter is hit the form will submit the message otherwise enter key won't work  */} 
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type='submit' onClick={sendMessage}> Send messages</button>
      </form>
      {
        messages.map(message => (
          <p> { message}</p>
        ))
      }
    </div >
  );
}

export default App;
{/* */}