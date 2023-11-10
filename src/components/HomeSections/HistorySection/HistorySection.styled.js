import styled from 'styled-components';
import backgroundImage from '../../../images/History.png';

export const BackPhoto = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 1400px;
  height: 433px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const HistoryBox = styled.div`
  height: 433px;
  margin-top: 140px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const TextBox = styled.div`
  font-size: 25px;
  width: 833px;
  position: absolute;
  top: 30%;
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 70%;
    top: 5%;
    left: 18%;
    align-items: normal;
  }

  button {
    width: 163px;
    height: 41px;
  }
`;
