import React from 'react'
import "../Style/NavBar.scss";
import styled from 'styled-components'
import logo from "../photo/instagram_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleChat = () => {
        navigate("/chat");
    }

    return (
        <NavBarCenter>
            <NavBarMain>
                <NavLogo>
                    <InstagramLogo src={logo} alt='logo' />
                </NavLogo>
                <NavMenu>
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#050505", }} className='icon' />
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#000000", }} className='icon'
                    onClick={handleChat} />
                </NavMenu>
            </NavBarMain>
        </NavBarCenter>
    )
}

const NavBarCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavBarMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 390px;
    height: 40px;
    padding-top: 14px;
`;

const NavLogo = styled.div`
    width: 50%;
`;

const NavMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    margin-right: 20px;
    
    & .icon{
        margin-left: 20px;
        cursor: pointer;
    }
`;

const InstagramLogo = styled.img`
    width: 100px;
    padding-left: 20px;
`;

export default NavBar
