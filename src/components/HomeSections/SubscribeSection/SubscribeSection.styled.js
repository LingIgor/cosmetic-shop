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
    gap: 15px;
    justify-content: center;
  }

  img {
    width: 233px;

    @media screen and (max-width: 767px) {
      max-width: 150px;
    }
  }
`;

export const BoxText = styled.div`
  max-width: 450px;

  @media screen and (max-width: 767px) {
    padding: 0 55px;
  }
`;
