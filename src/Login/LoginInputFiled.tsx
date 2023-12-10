import React, { useState } from 'react'
import * as input from "../Login/LoginInput";
import { handleLoginApi } from "../Apis/LoginApi";
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LoginState } from '../Recoil/LoginAtom';

const LoginInputFiled = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const setLoginState = useSetRecoilState(LoginState);

    const navigate = useNavigate();

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (!id || !pw) {
            alert("정보를 모두 입력해주세요");
            return;
        }

        try {
            await handleLoginApi(id, pw);
            setLoginState(true);
            navigate("/main");
        } catch (error) {
            console.error(error);
            alert("다시 입력해주세요");
        }
    }

    return (
        <LoginField>
            <input.LoginId placeholder='아이디' type='text' name='id' onChange={handleIdChange} value={id}></input.LoginId>
            <input.LoginPw placeholder='비밀번호' type='password' name='pw' onChange={handlePwChange} value={pw}></input.LoginPw>
            <input.LoginBtn type='button' onClick={handleLogin}>로그인</input.LoginBtn>
        </LoginField>
    )
}

const LoginField = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default LoginInputFiled
