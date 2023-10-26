import styled from 'styled-components';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import { AiFillInstagram } from 'react-icons/ai';

export const FooterConteiner = styled.div`
  margin-top: 140px;
  background-color: #f4f1ed;
`;

export const FooterBox = styled.div`
  padding: 40px 98px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1d1;
`;

export const Box = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;

export const FooterListLink = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterItemLink = styled.div`
  &:hover {
    color: red;
  }
`;

export const FooterListSoc = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UnderFooter = styled.div`
  background: #f4f1ed;
  padding: 22px 98px;
  align-items: center;
  display: fle;
  justify-content: space-between;
  color: #959595;
  font-weight: 600;
`;

export const Facebook = styled(FaFacebook)`
  &:hover {
    transform: scale(1.05) translate(-2px, -2px);
    color: blue;
  }
`;

export const Twitter = styled(FaTwitter)`
  &:hover {
    transform: scale(1.05) translate(-2px, -2px);
    color: blue;
  }
`;

export const Instagram = styled(AiFillInstagram)`
  &:hover {
    transform: scale(1.05) translate(-2px, -2px);
    color: red;
  }
`;
