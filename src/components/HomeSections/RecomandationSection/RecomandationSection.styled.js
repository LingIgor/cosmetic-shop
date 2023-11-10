import styled from 'styled-components';

export const Item = styled.li`
  width: 230px;
  height: 312px;
  position: relative;
`;

// export const TextBox = styled.div`
//   color: red;
//   position: absolute;
//   top: 70%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

export const RecomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 210px;
  padding: 0 28px;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecomList = styled.ul`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
