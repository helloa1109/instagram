import React from 'react';
import { styled } from 'styled-components';
import p1 from '../photo/pic.jpg';
import p2 from '../photo/p2.jpeg';
import p3 from '../photo/p3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComment, faEllipsis, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import test from "../photo/test.png";
const Content = () => {
  const userNicknames = ['이상혁', '리더', '판다', '다람쥐', '징동', '페이커'];
  const userStories = [p3, p2, p1, p2, p2, p2, p2];
  const userContnet = [test, test, test, test, test,test];
  return (
    <div>
      {userNicknames.map((nickname, index) => (
        <ContentDiv key={index}>
          <ContentUser>
            <ContentHeader>
              <UserProfileImage src={userStories[index]} alt={`${nickname}'s profile`} />
              <UserName>{nickname}</UserName>
            </ContentHeader>
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#000000", }} className='MoreIcon' />
          </ContentUser>

          <ContentBody><ContentImg src={userContnet[index]} alt='usercontent' /></ContentBody>

          <ContentButtom>
            <ContentLeft>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} className='MoreIcon' />
              <FontAwesomeIcon icon={faComment} style={{ color: "#000000" }} className='MoreIcon' />
              <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#000000" }} className='MoreIcon' />
            </ContentLeft>
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#000000" }} />
            <FontAwesomeIcon icon={faBook} style={{ color: "#000000" }} className='MoreBook' />
          </ContentButtom>

          <ContentLike>좋아요300개</ContentLike>
          {nickname}
          <span>여기는 설명 어쩌주</span>
        </ContentDiv>
      ))}
    </div>
  );
};

const ContentDiv = styled.div`
  width: 380px;
  height: 576px;
  margin-top: 20px;
  overflow-y: auto;
`;

const ContentUser = styled.div`
  width: 350px;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-left: 4px;
  .MoreIcon{
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  
`;

const UserProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserName = styled.p`
  font-size: 14px;
`;

const ContentBody = styled.div`
  padding: 8px;
`;

const ContentImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
`;

const ContentButtom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .MoreIcon{
    margin-left : 8px;
  }

  .MoreBook {
    margin-right: 10px;
  }
`;

const ContentLeft = styled.div`
  margin-right: 5px;
`;

const ContentLike = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 4px;
`;
export default Content;
