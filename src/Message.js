import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';
let isUser;
const Message = forwardRef(({message, username}, ref) => {
    //const isUser = username === message.username;
    if(username == message.username){
        isUser=true;
    }else{
        isUser=false;
    }
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {message.username} : {message.message}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
});
export default Message;
