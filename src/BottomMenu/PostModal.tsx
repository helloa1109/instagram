import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

interface PostModalProps {
    onClose: () => void;
}

const PostModal = ({ onClose }: PostModalProps) => {

    const controls = useAnimation();

    const [photo, setPhoto] = useState('');

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    const slideDownAnimation = {
        hidden: { y: '100%' },
        visible: { y: 0 },
    };

    const handlePhotoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(e.target.value);
    }


    return (
        <PostContainer>
            <ModalContent
                initial="hidden"
                animate={controls}
                variants={slideDownAnimation}>
                <form>
                    <input type='file' name='file' value={photo} onChange={handlePhotoChange}></input>
                </form>
                <button onClick={onClose}>닫기</button>
            </ModalContent>
        </PostContainer>
    )
}

const PostContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 390px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: black;
  width: 100vw;
  height: 100vh;
`;

export default PostModal
