import React, { useEffect, useState } from 'react'
import style from "./Mypage.module.css";
import MypageInfo from './MypageInfo';
import { UserChange, UserMessage, UserNick } from './MypageStyled';
import UserTab from './UserTab';
import Back from '../Login/Back';
import axios from 'axios';

const Mypage = () => {

  const [userInfo, setUserInfo] = useState<{ id: string | undefined } | null>(null);

  useEffect(() => {
    const userId = sessionStorage.getItem('id');

      axios.get(`/user/${userId}`)
        .then(res => setUserInfo(res.data))
        .catch(error => console.error('Error', error));
  }, []);


  return (
    <div className={style.wrapper}>
      <Back/>
      <MypageInfo />
      <UserChange>
        <UserNick>{userInfo?.id}</UserNick>
        <UserMessage>안녕하세요</UserMessage>
      </UserChange>
      <UserTab/>
    </div>
  )
}



export default Mypage
