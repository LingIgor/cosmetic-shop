import { NavBar } from '../NavBar/NavBar';
import React from 'react';
import { HeaderConteiner, Logo } from './Header.styled';
import { Container } from 'components/HomeSections/AdvertisingSection/Advertising.styled';

export const Header = ({ openModal }) => {
  return (
    <Container>
    <HeaderConteiner>
      <Logo to={'/'}>COSMETING</Logo>
      <NavBar openModal={openModal} />
    </HeaderConteiner>
    </Container>
  );
};
