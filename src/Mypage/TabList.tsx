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
      {tab === 0 ? <UserPost /> : null}
      {tab === 1 ? <UserReels /> : null}
      {tab === 2 ? <UserShare /> : null}
    </Tab>
  );
}

const Tab = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
`;

export default TabList;
