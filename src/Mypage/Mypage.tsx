import React from 'react'
import style from "./Mypage.module.css";
import MypageInfo from './MypageInfo';
import { UserChange, UserMessage, UserNick } from './MypageStyled';
import UserTab from './UserTab';
const Mypage = () => {
  return (
    <div className={style.wrapper}>
      <MypageInfo />

      <UserChange>
        <UserNick>상혁</UserNick>
        <UserMessage>안녕하세요</UserMessage>
      </UserChange>

      <UserTab/>
    </div>
  )
}



export default Mypage
