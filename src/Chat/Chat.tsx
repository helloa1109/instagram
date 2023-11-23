// Chat.jsx
import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { styled } from 'styled-components';

const Chat = () => {

  const socket: Socket = io();
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message:string) => {
    socket.emit('chat message', message);
  };

  useEffect(() => {
    socket.on('chat message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <ChatDiv>
      <ChatList messages={messages} />
      <ChatInput onSubmit={handleSendMessage} />
    </ChatDiv>
  );
};

const ChatDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Chat;
