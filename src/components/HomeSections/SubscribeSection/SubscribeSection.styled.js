import styled from 'styled-components';

export const SubMainBox = styled.div`
  display: flex;
  align-items: center;
  gap: 71px;
  margin-top: 140px;
  margin-bottom: 140px;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const SubList = styled.ul`
  display: flex;
  width: 700px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 233px;

    /* @media screen and (max-width: 767px) {
      width: calc(100% / 3);
    } */
  }
`;

export const BoxText = styled.div`
  width: 450px;
`;
