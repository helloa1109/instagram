import React from 'react'
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import Story from '../Story/Story'
import "../App.css";
const Layout = () => {
  return (
    <div className='LayoutDiv'>
      <NavBar/>
      <Story/>
      <Content/>
    </div>
  )
}

export default Layout
