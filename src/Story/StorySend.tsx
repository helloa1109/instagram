import { faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { styled } from 'styled-components'

const StorySend = () => {
    return (
        <Send>
            <SendInput type='text' placeholder='메세지를 입력하세요'></SendInput>
            <FontAwesomeIcon icon={faHeart} style={{ color: 'white', }} className='SendIcon' />
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white", }} className='SendIcon' />
        </Send>
    )
}

const Send = styled.div`
    position: absolute;
    width: 100%;
    height: 5vh;
    bottom: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
`;

const SendInput = styled.input`
    width: 34vw;
    height: 3vh;
    border-radius: 30px;
    border: 1px solid white;
    background-color: black;
    outline: none;

    & ::placeholder{
        color: white;
        margin-left: 4px;
    }
`;

export default StorySend
