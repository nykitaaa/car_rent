import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`;

export const ContentWrapper = styled(motion.div)`
  border-radius: 24px;

  background: #fff;
`;
