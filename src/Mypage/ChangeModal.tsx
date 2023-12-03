// ChangeModal.jsx

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

interface ChangeModalProps {
  onClose: () => void;
}

const ChangeModal = ({ onClose }: ChangeModalProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const slideDownAnimation = {
    hidden: { y: '100%' },
    visible: { y: 0 },
  };

  return (
    <Container>
      <ModalContent
        initial="hidden"
        animate={controls}
        variants={slideDownAnimation}>

        <p>회원변경내용</p>
        <p>들어갈거에요</p>
        <p>감사감사!</p>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </Container>
  );
};

const ModalContent = styled(motion.div)`
  background: white;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  width: 390px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ChangeModal;
