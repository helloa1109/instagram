import React, { useState } from 'react'
import { styled } from 'styled-components'
import logo from "../photo/instagram_logo.png";
import * as input from "../Login/LoginInput";
import AppStore from "../photo/AppStore.png";
import GooglePlay from "../photo/GooglePlay.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    
    const handleSignUp = () => {
        navigate("/signup");
    }
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const handleLogin = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://localhost:8080/login',
                data: { id, pw },
                headers: { 'Content-Type': 'application/json' }
            });
    
            if(res.status === 200) {
                alert("로그인 성공!"); 
                navigate("/");
                sessionStorage.setItem("id",id);
            } else {
                alert("로그인 실패!"); 
            }
        } catch (error) {
            alert("ㅇㄹ");
        }
    }
    

return (
    <LoginDiv>
        <div onClick={handleBack}>뒤로가기</div>
        <LoginLogo src={logo} />
            <input.LoginId placeholder='아이디' type='text' name='id' onChange={handleIdChange} value={id}></input.LoginId>
            <input.LoginPw placeholder='비밀번호' type='password' name='pw' onChange={handlePwChange} value={pw}></input.LoginPw>
            <input.LoginBtn type='button' onClick={handleLogin}>로그인</input.LoginBtn>

        <LoginToSignUp>
            계정이 없으신가요? <LoginToSignUpText onClick={handleSignUp}>가입하기</LoginToSignUpText>
        </LoginToSignUp>
        <LoginDownloadApp>
            앱을 다운로드하세요
        </LoginDownloadApp>
        <LoginDownloadDiv>
            <LoginAppStore src={AppStore} />
            <LoginGooglePlay src={GooglePlay} />
        </LoginDownloadDiv>
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

const LoginDownloadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LoginAppStore = styled.img`
    width: 140px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
`;

const LoginGooglePlay = styled.img`
    width: 140px;
    height: 180px;
    object-fit: cover;
    margin-left: 10px;
    cursor: pointer;
`;
export default Login
