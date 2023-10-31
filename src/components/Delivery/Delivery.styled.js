import styled from 'styled-components';

export const DeliveryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 200px;

  @media (max-width: 767px) {
    padding: 20px 100px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 150px;
  }
`;

export const DeliveryItem = styled.li`
  display: flex;
  width: 48%;
  margin-bottom: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 50px;
  }

  &:hover {
    border: 1px solid rgba(205 56 201 / 30%);
    transform: scale(1.1);
    box-shadow: 5px 5px 30px rgba(205 56 201 / 30%);
  }
`;

export const DeliveryBox = styled.div`
  width: 90%;
`;
