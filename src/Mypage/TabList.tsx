import React from 'react';
import UserPost from './UserPost';
import UserReels from './UserReels';
import UserShare from './UserShare';
import { styled } from 'styled-components';

interface TabListProps {
  tab: number;
}

const TabList = ({ tab }: TabListProps) => {

  return (
    <Tab>
      {tab === 0 && <UserPost /> }
      {tab === 1 && <UserReels />}
      {tab === 2 && <UserShare />}
    </Tab>
  );
}

const Tab = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
`;

export default TabList;
