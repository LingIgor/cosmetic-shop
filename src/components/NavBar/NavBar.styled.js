import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-direction: column;

  nav {
    display: flex;
    gap: 20px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CartIconContainer = styled.div`
  position: relative;
`;

export const CartCounter = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  bottom: -5px;
  right: -3px;
`;

