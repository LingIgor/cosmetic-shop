import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 70vw;
  height: 80vh;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: auto;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
`;

export const CartList = styled.ul`
  display: flex;
  width: 70%;
  flex-direction: column;
  gap: 15px;
`;

export const CartItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 100%;
  }
`;

export const CartCounter = styled.div`
  display: flex;
  height: 20px;
`;

export const CartOrder = styled.div`
  width: 200px;
  height: 150px;
  background: rgb(0 0 0 / 4%);
`;
