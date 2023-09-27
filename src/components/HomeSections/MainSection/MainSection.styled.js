import styled from 'styled-components';
import backgroundImage from '../../../images/fon.png';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
`;
