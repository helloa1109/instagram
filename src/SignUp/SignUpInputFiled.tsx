import React, { useState } from 'react'
import * as Input from "../SignUp/SignUpInput";
import * as SignUi from "../SignUp/SignUpUi";
import { handleSignUp } from '../Apis/SignUpApi';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const SignUpInputFiled = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

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
      
        if (!id || !pw || !name) {
          alert('정보를 모두 입력해주세요');
          return;
        }
      
        try {
          const response = await handleSignUp(id, pw, name);
      
          if (response && response.status === 200) {
            navigate('/login');
          }else{
            alert('회원가입 실패');
          }
      
        } catch (error: AxiosError | any) {
            if (error.response && error.response.status === 409) {
                alert('이미 가입된 회원입니다.');
            }

            if (error.response.status === 500){
                alert('회원가입에 실패하였습니다.');
            }
        }
      };
    

    return (
        <SignUi.SignupForm>
            <Input.IdInput placeholder='아이디를 입력해주세요' type='text' name='id' onChange={handleIdChange} value={id}></Input.IdInput>
            <Input.IdInput placeholder='비밀번호를 입력해주세요' type='password' name='pw' onChange={handlePwChange} value={pw}></Input.IdInput>
            <Input.NameInput placeholder='닉네임을 입력해주세요' type='text' name='name' onChange={handleNameChange} value={name}></Input.NameInput>
            <Input.SignUpBtn type='button' onClick={handleSignUpClick}>회원가입</Input.SignUpBtn>
        </SignUi.SignupForm>
    )
}

export default SignUpInputFiled
