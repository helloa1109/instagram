import { styled } from "styled-components";

export const SignupDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const SignupLogo = styled.img`
    width: 200px;
    height: 100px;
`;

export const SignupForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    & input {
        margin-bottom: 20px;
        outline: none;
    }
`;