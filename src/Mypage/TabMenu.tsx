import React from 'react'
import style from "./TabMenu.module.css";
import post from "../photo/Post.png";
import reels from "../photo/Video.png";
import tag from "../photo/Tag.png";

interface TabMenuProps {
    setActiveTab : React.Dispatch<React.SetStateAction<number>>;
}

const TabMenu = ({setActiveTab} : TabMenuProps) => {

    return (
        <div className={style.Tab}>
            <div className={style.Post} onClick={() => {setActiveTab(0)}}>
                <img src={post} alt='post'/>
            </div>
            <div className={style.Reels} onClick={() => {setActiveTab(1)}}>
                <img src={reels} alt='reels'/>
            </div>
            <div className={style.Tag} onClick={() => {setActiveTab(2)}}>
                <img src={tag} alt='tag'/>
            </div>
        </div>
    )
}

export default TabMenu
