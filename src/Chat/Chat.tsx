import React, { useEffect, useRef, useState, FormEvent } from 'react';
import io, { Socket } from 'socket.io-client';

const Chat = () => {
    const socket: Socket = io();
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
    const [messages, setMessages] = useState<string[]>([]);
    const userId = sessionStorage.getItem('id');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputRef.current?.value) {
            socket.emit('chat message', inputRef.current.value);
            inputRef.current.value = '';
        }
    };

    useEffect(() => {
        if (userId) {
            socket.on('chat message', (message: string) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });

            return () => {
                socket.disconnect();
            };
        } else {
            console.log('cc');
        }
    }, [socket, userId]);

    return (
        <div>
            <>
                <div id='messages'>
                    {messages.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>
                <form id="form" onSubmit={(e) => handleSubmit(e)}>
                    <input ref={inputRef} />
                    <button type="submit">Send</button>
                </form>
            </>
        </div>
    );
};

export default Chat;
