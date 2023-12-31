import styled from 'styled-components';
import backgroundImage from '../../../images/reklama.png';

export const BackPhoto = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 1400px;
  height: 400px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Section = styled.div`
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15px;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const InformBox = styled.div`
  max-width: 350px;
  position: absolute;
  top: 30%;
  left: 70%;

  @media screen and (max-width: 767px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
