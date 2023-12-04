// TabList.js

import React from 'react';

interface TabListProps {
  tab: number;
}

const TabList = ({ tab }: TabListProps) => {
  return (
    <>
      {tab === 0 ? <div>게시물</div> : null}
      {tab === 1 ? <div>릴스</div> : null}
      {tab === 2 ? <div>공유</div> : null}
    </>
  );
}

export default TabList;
