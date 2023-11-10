import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 10px;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 20px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #fd9bd5;
    transform: translateY(-4px);
  }
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

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgb(243 46 237 / 10%);
  transition: 0.3s;

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    padding: 5px 10px;
  }

  &:hover {
    background: #fd9bd5;
    box-shadow: 0 8px 15px rgb(243 46 237 / 10%);
    color: white;
    transform: translateY(-7px);
  }

  &.active {
    background: #fd9bd5;
    box-shadow: 0 8px 15px rgb(243 46 237 / 30%);
    color: white;
    transform: translateY(-7px);
  }
`;
