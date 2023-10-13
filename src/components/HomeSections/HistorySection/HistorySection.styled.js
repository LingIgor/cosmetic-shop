import styled from 'styled-components';
import backgroundImage from '../../../images/History.png';

export const BackPhoto = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 1400px;
  height: 433px;
`;

export const HistoryBox = styled.div`
  width: 100%;
  height: 433px;
  margin-top: 140px;
  position: relative;
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

  button {
    width: 163px;
    height: 41px;
  }
`;
