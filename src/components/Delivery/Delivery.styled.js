import styled from 'styled-components';

export const DeliveryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 200px;
`;

export const DeliveryItem = styled.li`
  display: flex;
  width: 48%;
  margin-bottom: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  &:hover{
    border: 1px solid rgba(205 56 201 / 30%);
    transform: scale(1.1);
    box-shadow: 5px 5px 30px rgba(205 56 201 / 30%);
  }
`;

export const DeliveryBox = styled.div`
  width: 90%;
`;
