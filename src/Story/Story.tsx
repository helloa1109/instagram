import React, { useEffect, useState } from 'react';
import p1 from '../photo/pic.jpg';
import p2 from '../photo/p2.jpeg';
import p3 from "../photo/p3.jpg";
import styled from 'styled-components';
import StorySend from './StorySend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

interface StoryItemProps {
  userNickname: string;
  userStory: string;
}

interface SelectedProps {
  isClicked: boolean;
}


const Story = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data')
      .then((res) => {
        setData(res.data);
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log("data", data);

  const userNicknames = ['이상혁', '리더', '판다', '다람쥐', '징동', '페이커'];
  const userStories = [p3, p2, p1, p2, p2, p2, p2];

  return (

    <StoryContainer>
       {/* {data} */}
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
  overflow-y: hidden;
  margin-top: 10px;
`;

const StoryItemWrapper = styled.div<SelectedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  border: ${(props) => (props.isClicked ? 'none' : '2px solid transparent')};
`;

const StoryImage = styled.img<SelectedProps>`
  width: 80px;
  height: 80px;
  border: ${(props) => (props.isClicked ? 'none' : '2px solid transparent')};
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
  z-index: 2;
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const FullStoryInfo = styled.div`
  position: absolute;
  top: 16px;
  
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
  margin-right: 10px;
`;

const FullStoryText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const StoryLoading = styled.div<{ fillPercentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.fillPercentage}%;
  height: 4px;
  background: #ccc;
  transition: width 5s linear;  
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
`;

const StoryTime = styled.p`
  font-size: 12px;
  color: #ccc;
  margin-left: 10px;
`;

const StoryItem = ({ userNickname, userStory }: StoryItemProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0);

  const openModal = () => {
    setIsSelected(true);
    setIsClicked(true);
    setFillPercentage(0);
  };

  const closeModal = () => {
    setIsSelected(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let increment = 1;
    const interval = 100;

    const updateFillPercentage = () => {
      setFillPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + increment;
        return newPercentage <= 100 ? newPercentage : 100;
      });
    };

    if (isSelected) {
      timer = setInterval(() => {
        updateFillPercentage();
      }, interval);
    }

    return () => {
      clearInterval(timer);
      setTimeout(() => {
        closeModal();
      }, 15000);
    };
  }, [isSelected]);

  return (
    <>
      <StoryItemWrapper isClicked={isClicked} onClick={openModal}>
        <StoryImage src={userStory} alt='stroy' isClicked={isClicked} />
        <UserNick>{userNickname}</UserNick>
      </StoryItemWrapper>

      {isSelected && (
        <FullscreenOverlay>
          <StoryLoading fillPercentage={fillPercentage} />
          <FullStoryInfo>
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <FullStoryImg src={userStory} />
              <FullStoryText>{userNickname}</FullStoryText>
              <StoryTime>44분</StoryTime>
            </div>
            <CloseIcon icon={faXmark} onClick={closeModal} />
          </FullStoryInfo>
          <FullscreenImage src={userStory} alt='stroy' />
          <StorySend />
        </FullscreenOverlay>
      )}
    </>
  );
};


export default Story;
