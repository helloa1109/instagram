import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const LoginGoSignUp = () => {

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    }

    return (
        <LoginToSginUpContainer>
            <LoginToSignUp>
                계정이 없으신가요? <LoginToSignUpText onClick={handleSignUp}>가입하기</LoginToSignUpText>
            </LoginToSignUp>
            <LoginDownloadApp>
                앱을 다운로드하세요
            </LoginDownloadApp>
        </LoginToSginUpContainer>
    )
}
const LoginToSginUpContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LoginToSignUp = styled.div`
    width: 300px;
    height: 60px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`;

const LoginToSignUpText = styled.p`
    margin-left: 6px;
    color: blue;
    font-weight: 600;
    cursor: pointer;
`;

const LoginDownloadApp = styled.p`
    margin-top: 20px;
    font-size: 12px;
`;

export default LoginGoSignUp
