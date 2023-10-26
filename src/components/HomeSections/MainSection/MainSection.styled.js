import styled from 'styled-components';
import backgroundImage from '../../../images/fon.png';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  button {
    width: 163px;
    height: 41px;
  }
`;

export const AppContainer = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 650px;
  top: 0;
  left: 0;
  border-radius: 0;
  z-index: -1;
`;

export const MainSectionImg = styled.img`
  width: 330px;
`;

export const MainSectionBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  width: 163px;
  height: 41px;
  border: none;
  border-radius: 10px;
  background: pink;
  color: white;
  font-size: 22px;
  font-family: 'Cormorant Infant';
  box-shadow: 3px 3px 10px 3px rgb(167 143 145 / 68%);


  &:hover {
    background-color: #ef69b5; 
    transform: scale(1.05); 
    box-shadow: 0 0 10px rgba(217, 83, 79, 0.8);


  }
`;
