import React from 'react'
import style from "./Mypage.module.css";
import img from "../photo/p3.jpg";
const MypageInfo = () => {
    return (
        <div className={style.header}>
            <div className={style.profile}>
                <img src={img} className={style.img} alt='profile' />
            </div>

            <div className={style.follow}>
                <div className={style.followContainer}>
                    <span>41</span>
                    <span>게시물</span>
                </div>

                <div className={style.followContainer}>
                    <span>41</span>
                    <span>팔로워</span>
                </div>

                <div className={style.followContainer}>
                    <span>41</span>
                    <span>팔로잉</span>
                </div>
            </div>
        </div>
    )
}

export default MypageInfo
