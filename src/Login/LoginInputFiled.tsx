import React, { useState } from 'react'
import * as input from "../Login/LoginInput";
import { handleLoginApi } from "../Apis/LoginApi";
import { styled } from 'styled-components';
const LoginInputFiled = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await handleLoginApi(id, pw);
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
