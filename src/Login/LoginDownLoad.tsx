import React from 'react'
import { styled } from 'styled-components';
import AppStore from "../photo/AppStore.png";
import GooglePlay from "../photo/GooglePlay.png";

const LoginDownLoad = () => {
    return (
        <LoginDownloadDiv>
            <LoginAppStore src={AppStore} />
            <LoginGooglePlay src={GooglePlay} />
        </LoginDownloadDiv>
    )
}

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

export default LoginDownLoad
