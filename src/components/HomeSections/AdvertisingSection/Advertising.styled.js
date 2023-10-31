import styled from 'styled-components';
import backgroundImage from '../../../images/reklama.png';

export const BackPhoto = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 1400px;
  height: 400px;
`;

export const Section = styled.div`
  position: relative;

  padding-top: 60px;
  padding-bottom: 60px;

@media screen and (min-width: 1200px) { 
    padding-top: 94px;
    padding-bottom: 94px;
  }
 
`;


export const Container = styled.div`
 margin: 0 auto;
  width: 100%;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }


`

export const InformBox = styled.div`
  width: 300px;
  position: absolute;
  top: 30%;
  left: 70%;
`;
