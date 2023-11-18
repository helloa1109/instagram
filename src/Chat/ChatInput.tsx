import React, { useRef } from 'react';

interface ChatInputType {
  onSubmit: (message: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      onSubmit(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
