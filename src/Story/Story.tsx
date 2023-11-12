import React, { useState } from 'react';
import p1 from '../photo/pic.jpg';
import p2 from '../photo/p2.jpeg';
import p3 from "../photo/p3.jpg";
import styled from 'styled-components';
import StorySend from './StorySend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface StoryItemProps {
  userNickname: string;
  userStory: string;
}

interface SelectedProps {
  isSelected: boolean;
}

const Story = () => {
  const userNicknames = ['이상혁', 'KDK', '판다', '다람쥐', '징동', '페이커'];
  const userStories = [p3, p2, p2, p2, p2, p2, p2];

  return (
    <StoryContainer>
      {userNicknames.map((nickname, index) => (
        <StoryItem key={index} userNickname={nickname} userStory={userStories[index]} />
      ))}
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  overflow-y: hidden;
`;

const StoryItemWrapper = styled.div<SelectedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 14px;
  cursor: pointer;
`;

const StoryImage = styled.img<SelectedProps>`
  width: 60px;
  height: 60px;
  border: ${(props) => (props.isSelected ? 'none' : '2px solid transparent')};
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const UserNick = styled.p`
  font-size: 12px;
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  max-width: 390px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: 100vh;
`;

const FullStoryInfo = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  width: calc(100% - 32px);
  z-index: 3;
  color: white;

  .StoryClose{
    cursor: pointer;
  }
`;


const FullStoryImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 8px; 
`;

const FullStoryText = styled.span`
  font-size: 16px;
`;

const StoryLoading = styled.div`
  position: absolute;
  top: 0;
  width: 99%;
  border: 2px solid #ccc;
`;

const StoryItem = ({ userNickname, userStory }: StoryItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
  };

  const handleClose = () => {
    setIsSelected(false);
  };

  return (
    <>
      <StoryItemWrapper isSelected={isSelected} onClick={handleClick}>
        <StoryImage src={userStory} alt={`${userNickname}'s story`} isSelected={isSelected} />
        <UserNick>{userNickname}</UserNick>
      </StoryItemWrapper>

      {isSelected && (
        <FullscreenOverlay>
          <StoryLoading />
          <FullStoryInfo>
            <FullStoryImg src={userStory} />
            <FullStoryText>{userNickname}</FullStoryText>
            <FontAwesomeIcon icon={faXmark} style={{color: "white"}} onClick={handleClose} className='StoryClose'/>
          </FullStoryInfo>
          <FullscreenImage src={userStory} alt={`${userNickname}'s story`} />
          <StorySend/>
        </FullscreenOverlay>
      )}
    </>
  );
};

export default Story;
