import React, { useState } from 'react'
import * as Input from "../SignUp/SignUpInput";
import * as SignUi from "../SignUp/SignUpUi";
import { handleSignUp } from '../Apis/SignUp';
import logo from '../photo/instagram_logo.png';
const SignUp = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSignUpClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await handleSignUp(id, pw, name);
    };


    return (
        <SignUi.SignupDiv>
            <SignUi.SignupLogo src={logo} />
            <SignUi.SignupForm>
                <Input.IdInput placeholder='아이디를 입력해주세요' type='text' name='id' onChange={handleIdChange} value={id}></Input.IdInput>
                <Input.IdInput placeholder='비밀번호를 입력해주세요' type='pw' name='pw' onChange={handlePwChange} value={pw}></Input.IdInput>
                <Input.NameInput placeholder='닉네임을 입력해주세요' type='text' name='name' onChange={handleNameChange} value={name}></Input.NameInput>
                <Input.SignUpBtn type='button' onClick={handleSignUpClick}>회원가입</Input.SignUpBtn>
            </SignUi.SignupForm>
        </SignUi.SignupDiv>
    )
}

export default SignUp
