import styled from 'styled-components';
import backgroundImage from '../../../images/reklama.png';

export const BackPhoto = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 1400px;
  height: 400px;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 165px;
`;

export const InformBox = styled.div`
  width: 300px;
  position: absolute;
  top: 30%;
  left: 70%;
`;


