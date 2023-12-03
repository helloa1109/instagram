import React, { useState } from 'react'
import { styled } from 'styled-components'
import ChangeModal from './ChangeModal';

const UserTab = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <TabContainer>
            <TabChangeInfo className='Tab' onClick={openModal}>
                프로필 편집
            </TabChangeInfo>

            <TabShareInfo className='Tab'>
                프로필 공유
            </TabShareInfo>

            {isModalOpen && <ChangeModal onClose={closeModal} />}
        </TabContainer>
    )
}

const TabContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    text-align: center;

    & .Tab{
        background-color: rgba(118, 118, 128, 0.12);
        border-radius: 10px;
        width: 46%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 14px;
        cursor: pointer;
    }
`;

const TabChangeInfo = styled.div`

`;

const TabShareInfo = styled.div`

`;

export default UserTab
