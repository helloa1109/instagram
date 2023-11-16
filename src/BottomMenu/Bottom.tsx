import { faHouse, faPlus, faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'

const Bottom = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

    const handleLogin = () => {
        if(sessionStorage.getItem("id")){
            navigate("/mypage");
        }else{
            navigate("/login");
        }
    }
    return (
        <BottomCenter>
            <BottomDiv>
                <BottomMenu>
                    <HomeIcon onClick={handleHome} icon={faHouse} className='BottomIcon' />
                    <CloseIcon icon={faSearch} className='BottomIcon' />
                    <CloseIcon icon={faPlus} className='BottomIcon' />
                    <CloseIcon icon={faVideo} className='BottomIcon' />
                    <CloseIcon onClick={handleLogin} icon={faUser} className='BottomIcon' />
                </BottomMenu>
            </BottomDiv>
        </BottomCenter>
    )
}

const BottomCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BottomDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 380px;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top: 1px solid #ccc;
`;

const BottomMenu = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;

    .BottomIcon {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: black;
`;

const HomeIcon = styled(FontAwesomeIcon)`

`;

export default Bottom;
