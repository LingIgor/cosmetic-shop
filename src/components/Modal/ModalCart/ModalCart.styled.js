import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsTrash3 } from 'react-icons/bs';

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
  position: relative;
  background: #fff;
  width: 85vw;
  height: 80vh;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

export const CartList = styled.ul`
  display: flex;
  width: 70%;
  height: 70vh;
  overflow: auto;
  flex-direction: column;
  gap: 15px;
`;

export const CartItem = styled.li`
  width: 95%;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1d5d5;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  img {
    width: 15%;
    height: auto;
  }
`;

export const CartCounter = styled.div`
  display: flex;
  height: 20px;
  gap: 10px;
  align-items: center;
`;

export const CartOrder = styled.div`
  width: 25%;
  height: 150px;
  background: rgb(0 0 0 / 4%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Order = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 80%;
  height: 30px;
  background: black;
  color: white;
  text-align: center;
  padding: 5px;
  line-height: 2;

  &:hover {
    background-color: #433d3d;
    transform: scale(1.03);
  }
`;

export const BoxOrder = styled.div`
  font-size: larger;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
`;

export const TrashIcon = styled(BsTrash3)`
  cursor: pointer;

  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
