import { NavBar } from '../NavBar/NavBar';
import React from 'react';
import { HeaderConteiner, Logo } from './Header.styled';

export const Header = ({ openModal }) => {
  return (
    <HeaderConteiner>
      <Logo to={'/'}>COSMETING</Logo>
      <NavBar openModal={openModal} />
    </HeaderConteiner>
  );
};
