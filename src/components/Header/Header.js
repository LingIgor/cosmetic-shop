import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import React from 'react';
import { HeaderConteiner } from './Header.styled';

export const Header = ({ openModal }) => {
  return (
    <HeaderConteiner>
      <Link to={'/'}>COSMETING</Link>
      <NavBar openModal={openModal} />
    </HeaderConteiner>
  );
};
