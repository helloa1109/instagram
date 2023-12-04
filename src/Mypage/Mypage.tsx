import React, { useEffect, useState } from 'react'
import style from "./Mypage.module.css";
import MypageInfo from './MypageInfo';
import { UserChange, UserMessage, UserNick } from './MypageStyled';
import UserTab from './UserTab';
import Back from '../Login/Back';
import TabMenu from './TabMenu';
import TabList from './TabList';
import { getUserData } from '../Apis/MypageApi';

const Mypage = () => {

  const [userInfo, setUserInfo] = useState<{ id: string | undefined } | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={style.wrapper}>
      <Back />
      <MypageInfo />
      <UserChange>
        <UserNick>{userInfo?.id}</UserNick>
        <UserMessage>안녕하세요</UserMessage>
      </UserChange>
      <UserTab />
      <TabMenu setActiveTab={setActiveTab}/>
      <TabList tab={activeTab} /> 
    </div>
  )
}

export default Mypage
