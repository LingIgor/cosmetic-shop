import styled from 'styled-components';
import backgroundImage from '../../../images/CarePhoto.png';

export const BackPhoto = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 670px;
  height: 451px;
`;

export const CareSectionContainer = styled.div`
  display: flex;
  margin-top: 140px;
  align-items: center;
`;

export const ContentContainer = styled.div`
  padding: 92px 204px 100px 100px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  button {
    width: 163px;
    height: 41px;
  }
`;

export const BoxSection = styled.div`
  width: 700px;
  height: 583px;
  background-color: #f4f1ed;
  margin-left: -30px;
`;

export const ImageContainer = styled.div`
  width: 670px;
  height: 451px;
  position: relative;
  left: -150px;
`;
