import React from 'react'
import { styled } from 'styled-components'
import logo from "../photo/instagram_logo.png";
import LoginBack from './LoginBack';
import LoginDownLoad from './LoginDownLoad';
import LoginGoSignUp from './LoginGoSignUp';
import LoginInputFiled from './LoginInputFiled';

const Login = () => {

    return (
        <LoginDiv>
            <LoginBack/>
            <LoginLogo src={logo} />
            <LoginInputFiled/>
            <LoginGoSignUp/>
            <LoginDownLoad/>
        </LoginDiv>
    )
}

const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const LoginLogo = styled.img`
    width: 160px;
    height: 60px;
    object-fit: cover;
    margin-top: 200px;
`;

export default Login
