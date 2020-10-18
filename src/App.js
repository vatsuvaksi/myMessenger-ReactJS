import React, { useState, useEffect } from 'react';                              //using hooks to call useState
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import picture from './logoVatsuvaksi.jpg';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');              // State is a temporary memore to store the input (when the input is typed it is set again because setinput is called(event.target.value))            
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // if it is blank inside [] *condition* then the code will run once when the app component is loaded 
  //if we have a vriable for examble input here then everytime input is changed 
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt("Hey, Please enter your Name to continue"));
  }, [])  //condition goes here 
  const sendMessage = (event) => {
    //all the logic to send message goes here 
    event.preventDefault();   // This will prevent the default nature of the form. As soon as the message is is hit form will refres the page but with the help of this it will prevent that so that messages could be shown on screen
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()


    })

    // setMessages([...messages, {username:username, text: input}]); // this adds the list of previous messages and then append the current input   (WE WILL HAVE A LIST OF MESSAGES )
    // user name and text is added as an object to append with input because we need to display username as well 
    setInput('');
  }

  return (
    <div className="App">
      <img src={picture} alt= 'logo'></img>
      <h1><i>Welcome to vatsuvaksi's messenger service </i></h1>
      <h2>hey, <span className="user"><i> {username} </i> </span></h2>
      <form className="app_form">                         {/*Why we added form? It is a simple trick so that when enter is hit the form will submit the message otherwise enter key won't work  */}
        <FormControl className= "app_formControl">                {/*Used this from material UI */}
          
          <Input className="app_input"placeholder="Enter your message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton"
          disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}
          > <SendIcon/></IconButton>
           {/*disabled is used so that when you hit enter empty string dosen't pass on the array  */}
        </FormControl>
      </form>
      {/*  Message component is used so that it can be manipulated in all the ways and used again and prop is used to pass the message in that component*/}
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>


    </div >
  );
}

export default App;
