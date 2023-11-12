import React from 'react'
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import Story from '../Story/Story'
import "../App.css";
import Bottom from '../BottomMenu/Bottom';
const Layout = () => {
  return (
    <div className='LayoutDiv'>
      <NavBar/>
      <Story/>
      <Content/>
      <Bottom/>
    </div>
  )
}

export default Layout
