import React from 'react';

import { CiUser } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {CartCounter, CartIconContainer, IconLink, IconContainer, NavBarContainer, StyleLink} from "./NavBar.styled"

export const NavBar = ({ openModal, closeModal }) => {
  const { favorite, cart } = useSelector((state) => state);

  return (
    <NavBarContainer>
      <nav>
        <StyleLink to="/">Домашня</StyleLink>
        <StyleLink to="/catalog">Каталог</StyleLink>
        <StyleLink to="/delivery">Доставка і оплата</StyleLink>
        <StyleLink to="/">Про нас</StyleLink>
        <StyleLink to="/">Контакти</StyleLink>
      </nav>
      <IconContainer>
        <IconLink>
          <CiUser size={25} onClick={() => openModal('CiUser')} />
        </IconLink>
        <IconLink>
          <CartIconContainer onClick={() => openModal('BsHandbag')}>
            <BsHandbag size={23} />
            {cart.length !== 0 && <CartCounter>{cart.length}</CartCounter>}
          </CartIconContainer>
        </IconLink>
        <IconLink>
          {favorite.length === 0 ? (
            <AiOutlineHeart size={25} />
          ) : (
            <AiFillHeart
              size={25}
              style={{ color: 'rgb(221 21 121)' }}
              onClick={() => openModal('AiFillHeart')}
            />
          )}
        </IconLink>
      </IconContainer>
    </NavBarContainer>
  );
};








