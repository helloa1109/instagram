import React from 'react';
import img1 from "../photo/p2.jpeg";
import img2 from "../photo/p3.jpg";
import img3 from "../photo/pic.jpg";
import styled from 'styled-components';

const UserPost = () => {

    const imgList = [img1, img2, img3,img1];

    return (
        <UserPostLayout>
            {
                imgList.map((item, index) => (
                    <PostImg key={index} src={item} alt='dd' />
                ))
            }
        </UserPostLayout>
    );
}

const UserPostLayout = styled.div`
    width: 390px;
    margin: 0 auto;
`;

const PostImg = styled.img`
    width: 32%;
    height: 120px;
    float: left;
    object-fit: cover;
    margin: 2px;
    cursor: pointer;
`;

export default UserPost;
