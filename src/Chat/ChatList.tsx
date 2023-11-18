// ChatList.tsx
import React from 'react';

interface ChatListType {
  messages: string[];
}

const ChatList = ({ messages }: ChatListType) => {
  return (
    <div id='messages'>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
};

export default ChatList;
