import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import back from "../photo/Back.png";
const LoginBack = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <LoginBackContainer onClick={handleBack}>
            <LoginBackImg src={back} />
        </LoginBackContainer>
    )
}

const LoginBackContainer = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    cursor: pointer;
    object-fit: cover;
    width: 74%;
`;

const LoginBackImg = styled.img`
    width: 10px;
    height: 18px;
`;

export default LoginBack
