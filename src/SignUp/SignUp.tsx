import React from 'react'
import * as SignUi from "../SignUp/SignUpUi";
import logo from '../photo/instagram_logo.png';
import SignUpInputFiled from './SignUpInputFiled';
const SignUp = () => {

    return (
        <SignUi.SignupDiv>
            <SignUi.SignupLogo src={logo} />
            <SignUpInputFiled/>
        </SignUi.SignupDiv>
    )
}

export default SignUp
