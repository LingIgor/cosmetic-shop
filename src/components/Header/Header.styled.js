import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderConteiner = styled.div`
  padding: 40px 98px 70px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Logo = styled(Link)`
  color: #fb02b1;
  font-size: 30px;
`;
